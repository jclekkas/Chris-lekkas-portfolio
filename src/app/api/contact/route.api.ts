import { NextResponse } from 'next/server'
import { CONTACT_EMAIL } from '@/content/site'
import { MIN_ELAPSED_MS, contactSchema, sanitize, sanitizeMultiline } from '@/lib/contact'

/**
 * The server-backed contact path. Present on the Vercel/Node build; absent from
 * the static export, where the form falls back to a prefilled email instead of
 * pretending a message was delivered.
 *
 * Environment variables — see .env.example and README.md:
 *   RESEND_API_KEY   optional. When set, the enquiry is emailed via Resend.
 *   CONTACT_TO_EMAIL optional. Overrides the destination address.
 *
 * With no key configured the route still validates and accepts the submission
 * and writes it to the server log, so a misconfigured deploy fails loudly in
 * one place rather than silently swallowing enquiries.
 */

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  let payload: unknown
  try {
    payload = await request.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 })
  }

  const parsed = contactSchema.safeParse(payload)
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: 'invalid_input' }, { status: 400 })
  }

  const data = parsed.data

  // Spam checks that cost a real visitor nothing: a hidden field a person never
  // sees, and a form that was filled faster than a person can type. Both answer
  // 202 rather than an error, so a bot learns nothing about why it failed.
  if (data.company && data.company.length > 0) {
    return NextResponse.json({ ok: true }, { status: 202 })
  }
  if (typeof data.elapsedMs === 'number' && data.elapsedMs < MIN_ELAPSED_MS) {
    return NextResponse.json({ ok: true }, { status: 202 })
  }

  const enquiry = {
    name: sanitize(data.name),
    business: data.business ? sanitize(data.business) : '',
    email: sanitize(data.email),
    website: data.website ? sanitize(data.website) : '',
    message: sanitizeMultiline(data.message),
    lang: data.lang,
    receivedAt: new Date().toISOString(),
  }

  const to = process.env.CONTACT_TO_EMAIL ?? CONTACT_EMAIL
  const apiKey = process.env.RESEND_API_KEY

  if (!apiKey) {
    console.warn(
      '[contact] RESEND_API_KEY is not set — enquiry accepted and logged but not emailed.',
      enquiry,
    )
    return NextResponse.json({ ok: true, delivered: false })
  }

  const body = [
    `Name: ${enquiry.name}`,
    enquiry.business ? `Business: ${enquiry.business}` : null,
    `Email: ${enquiry.email}`,
    enquiry.website ? `Existing website: ${enquiry.website}` : null,
    `Language: ${enquiry.lang}`,
    '',
    enquiry.message,
  ]
    .filter((line): line is string => line !== null)
    .join('\n')

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL ?? 'Website <onboarding@resend.dev>',
        to: [to],
        reply_to: enquiry.email,
        subject: `Website enquiry — ${enquiry.business || enquiry.name}`,
        text: body,
      }),
    })

    if (!response.ok) {
      console.error('[contact] delivery failed', response.status, await response.text())
      return NextResponse.json({ ok: false, error: 'delivery_failed' }, { status: 502 })
    }
  } catch (error) {
    console.error('[contact] delivery threw', error)
    return NextResponse.json({ ok: false, error: 'delivery_failed' }, { status: 502 })
  }

  return NextResponse.json({ ok: true, delivered: true })
}
