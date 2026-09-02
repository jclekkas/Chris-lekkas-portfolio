'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import type { Language } from '@/content/schema'
import { getCopy } from '@/content/copy'
import { CONTACT_EMAIL, IS_STATIC_EXPORT } from '@/content/site'
import { buildMailto } from '@/lib/contact'

type Status = 'idle' | 'submitting' | 'sent' | 'error' | 'static'

interface Fields {
  name: string
  business: string
  email: string
  website: string
  message: string
}

const EMPTY: Fields = { name: '', business: '', email: '', website: '', message: '' }

/**
 * Two honest behaviours, decided at build time.
 *
 *  · Server build: posts to /api/contact, which validates and delivers.
 *  · Static export: there is no server, so the form does not pretend. It keeps
 *    everything the visitor typed on screen, explains what happened, and hands
 *    them a prefilled email. Nothing is lost and nothing is claimed.
 */
export function ContactForm({ lang }: { lang: Language }) {
  const copy = getCopy(lang)
  const [fields, setFields] = useState<Fields>(EMPTY)
  const [status, setStatus] = useState<Status>('idle')
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({})
  const mountedAt = useRef(0)
  const honeypot = useRef<HTMLInputElement>(null)
  const summaryRef = useRef<HTMLDivElement>(null)

  // Recorded after mount rather than during render, and used only to reject
  // submissions that arrived faster than a person can type.
  useEffect(() => {
    mountedAt.current = Date.now()
  }, [])

  const mailtoHref = useMemo(
    () =>
      buildMailto({
        to: CONTACT_EMAIL,
        name: fields.name,
        business: fields.business,
        email: fields.email,
        website: fields.website,
        message: fields.message,
        lang,
      }),
    [fields, lang],
  )

  function set(key: keyof Fields, value: string) {
    setFields((prev) => ({ ...prev, [key]: value }))
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }))
  }

  function validate(): boolean {
    const next: Partial<Record<keyof Fields, string>> = {}
    if (fields.name.trim().length === 0) next.name = copy.contact.validation.name
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim()))
      next.email = copy.contact.validation.email
    if (fields.message.trim().length < 10) next.message = copy.contact.validation.message
    setErrors(next)
    if (Object.keys(next).length > 0) {
      // Move focus to the error summary so a screen-reader user is told.
      window.requestAnimationFrame(() => summaryRef.current?.focus())
      return false
    }
    return true
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!validate()) return

    if (IS_STATIC_EXPORT) {
      setStatus('static')
      return
    }

    setStatus('submitting')
    try {
      // Trailing slash matches `trailingSlash: true`, so the POST is not answered
      // with a 308 that costs an extra round trip.
      const response = await fetch('/api/contact/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...fields,
          company: honeypot.current?.value ?? '',
          elapsedMs: mountedAt.current === 0 ? undefined : Date.now() - mountedAt.current,
          lang,
        }),
      })
      if (!response.ok) throw new Error(`Request failed: ${response.status}`)
      setStatus('sent')
      setFields(EMPTY)
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div role="status" className="rounded-lg border border-rule bg-paper-raised p-6 sm:p-8">
        <h2 className="font-display text-2xl text-ink">{copy.contact.successTitle}</h2>
        <p className="mt-3 text-ink-soft">{copy.contact.successBody}</p>
      </div>
    )
  }

  const errorEntries = (Object.keys(errors) as (keyof Fields)[]).filter((k) => errors[k])

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-6">
      <div
        ref={summaryRef}
        tabIndex={-1}
        role={errorEntries.length > 0 ? 'alert' : undefined}
        hidden={errorEntries.length === 0}
        className="rounded-lg border border-accent-deep bg-accent-soft/60 p-4 text-sm text-accent-deep"
      >
        <ul className="flex list-disc flex-col gap-1 pl-5">
          {errorEntries.map((key) => (
            <li key={key}>
              <a href={`#contact-${key}`} className="underline underline-offset-4">
                {errors[key]}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <Field
        id="contact-name"
        label={copy.contact.nameLabel}
        hint={copy.contact.required}
        value={fields.name}
        error={errors.name}
        autoComplete="name"
        onChange={(v) => set('name', v)}
        required
      />

      <Field
        id="contact-business"
        label={copy.contact.businessLabel}
        hint={copy.contact.optional}
        value={fields.business}
        autoComplete="organization"
        onChange={(v) => set('business', v)}
      />

      <Field
        id="contact-email"
        label={copy.contact.emailLabel}
        hint={copy.contact.required}
        type="email"
        inputMode="email"
        value={fields.email}
        error={errors.email}
        autoComplete="email"
        onChange={(v) => set('email', v)}
        required
      />

      <Field
        id="contact-website"
        label={copy.contact.websiteLabel}
        hint={copy.contact.optional}
        type="url"
        inputMode="url"
        placeholder="https://"
        value={fields.website}
        autoComplete="url"
        onChange={(v) => set('website', v)}
      />

      <div className="flex flex-col gap-2">
        <label htmlFor="contact-message" className="flex items-baseline justify-between gap-4">
          <span className="text-sm font-medium text-ink">{copy.contact.messageLabel}</span>
          <span className="u-meta text-ink-muted">{copy.contact.required}</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          required
          value={fields.message}
          placeholder={copy.contact.messagePlaceholder}
          aria-describedby={errors.message ? 'contact-message-error' : undefined}
          aria-invalid={errors.message ? true : undefined}
          onChange={(e) => set('message', e.target.value)}
          className="w-full rounded-lg border border-rule-strong bg-paper-raised px-4 py-3 text-base text-ink placeholder:text-ink-muted/70"
        />
        {errors.message ? (
          <p id="contact-message-error" className="text-sm text-accent-deep">
            {errors.message}
          </p>
        ) : null}
      </div>

      {/* Honeypot. Hidden from sight and from assistive technology alike. */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="contact-company">Company</label>
        <input
          ref={honeypot}
          id="contact-company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {status === 'static' ? (
        <div role="status" className="rounded-lg border border-rule bg-surface p-5">
          <h2 className="font-display text-xl text-ink">{copy.contact.staticTitle}</h2>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">{copy.contact.staticBody}</p>
          <a
            href={mailtoHref}
            className="mt-4 inline-block rounded-full bg-ink px-5 py-2.5 text-sm text-paper transition-colors hover:bg-accent-deep"
          >
            {copy.contact.staticCta}
          </a>
        </div>
      ) : null}

      {status === 'error' ? (
        <div role="alert" className="rounded-lg border border-accent-deep bg-accent-soft/60 p-5">
          <h2 className="font-display text-xl text-accent-deep">{copy.contact.errorTitle}</h2>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">
            {copy.contact.errorBody}{' '}
            <a href={mailtoHref} className="underline underline-offset-4">
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>
      ) : null}

      <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="rounded-full bg-ink px-6 py-3 text-sm text-paper transition-colors hover:bg-accent-deep disabled:opacity-60"
        >
          {status === 'submitting' ? copy.contact.submitting : copy.contact.submit}
        </button>
        <p className="text-sm text-ink-muted">
          {copy.contact.orEmail}{' '}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-accent-deep underline underline-offset-4"
          >
            {CONTACT_EMAIL}
          </a>
        </p>
      </div>
    </form>
  )
}

function Field({
  id,
  label,
  hint,
  value,
  error,
  onChange,
  type = 'text',
  inputMode,
  placeholder,
  autoComplete,
  required = false,
}: {
  id: string
  label: string
  hint: string
  value: string
  error?: string
  onChange: (value: string) => void
  type?: string
  inputMode?: 'email' | 'url' | 'text'
  placeholder?: string
  autoComplete?: string
  required?: boolean
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="flex items-baseline justify-between gap-4">
        <span className="text-sm font-medium text-ink">{label}</span>
        <span className="u-meta text-ink-muted">{hint}</span>
      </label>
      <input
        id={id}
        name={id.replace('contact-', '')}
        type={type}
        inputMode={inputMode}
        value={value}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-describedby={error ? `${id}-error` : undefined}
        aria-invalid={error ? true : undefined}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-rule-strong bg-paper-raised px-4 py-3 text-base text-ink placeholder:text-ink-muted/70"
      />
      {error ? (
        <p id={`${id}-error`} className="text-sm text-accent-deep">
          {error}
        </p>
      ) : null}
    </div>
  )
}
