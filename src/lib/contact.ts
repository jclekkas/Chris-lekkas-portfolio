import { z } from 'zod'

/**
 * One schema, used by the browser before submitting and by the server route
 * before doing anything with the payload. The client cannot loosen it.
 */
export const contactSchema = z.object({
  name: z.string().trim().min(1).max(120),
  business: z.string().trim().max(160).optional().or(z.literal('')),
  email: z.string().trim().email().max(200),
  website: z.string().trim().max(300).optional().or(z.literal('')),
  message: z.string().trim().min(10).max(4000),
  /**
   * Honeypot. Real people never see this field and never fill it; bots fill
   * everything. It costs the visitor nothing — no puzzle, no third-party
   * script, no tracking.
   */
  company: z.string().max(0).optional().or(z.literal('')),
  /** Milliseconds between the form rendering and being submitted. */
  elapsedMs: z.number().int().nonnegative().optional(),
  lang: z.enum(['en', 'es']),
})

export type ContactInput = z.infer<typeof contactSchema>

/** A form completed in under three seconds was not completed by a person. */
export const MIN_ELAPSED_MS = 3000

/** Control characters, including the CR/LF used for mail header injection. */
const CONTROL_CHARS = /[\u0000-\u001f\u007f]/g
/** Same, but leaving newlines and tabs alone for the message body. */
const CONTROL_CHARS_KEEP_BREAKS = /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g

export function sanitize(value: string): string {
  return value.replace(CONTROL_CHARS, ' ').replace(/\s+/g, ' ').trim()
}

export function sanitizeMultiline(value: string): string {
  return value
    .replace(/\r\n/g, '\n')
    .replace(CONTROL_CHARS_KEEP_BREAKS, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

interface MailtoInput {
  to: string
  name: string
  business?: string
  email: string
  website?: string
  message: string
  lang: 'en' | 'es'
}

/**
 * The static-export fallback. Nothing is claimed to have been sent; instead the
 * visitor is handed an email with everything they typed already in it.
 */
export function buildMailto({
  to,
  name,
  business,
  email,
  website,
  message,
  lang,
}: MailtoInput): string {
  const labels =
    lang === 'es'
      ? {
          subject: 'Consulta desde el sitio',
          name: 'Nombre',
          business: 'Negocio',
          email: 'Correo',
          website: 'Sitio web actual',
          message: 'Qué le gustaría mejorar',
        }
      : {
          subject: 'Enquiry from the website',
          name: 'Name',
          business: 'Business',
          email: 'Email',
          website: 'Existing website',
          message: 'What they are hoping to improve',
        }

  const lines = [
    `${labels.name}: ${sanitize(name)}`,
    business ? `${labels.business}: ${sanitize(business)}` : null,
    `${labels.email}: ${sanitize(email)}`,
    website ? `${labels.website}: ${sanitize(website)}` : null,
    '',
    `${labels.message}:`,
    sanitizeMultiline(message),
  ].filter((line): line is string => line !== null)

  const subject = `${labels.subject}${business ? ` — ${sanitize(business)}` : ''}`
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
    lines.join('\n'),
  )}`
}
