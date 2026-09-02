import type { Language } from './schema'

/**
 * Where this build thinks it lives.
 *
 * Resolution order:
 *   1. NEXT_PUBLIC_SITE_URL, if someone set it explicitly.
 *   2. On a Vercel preview or development deployment, that deployment's own
 *      URL — so a preview's canonicals, hreflang, sitemap and social cards
 *      describe the preview instead of claiming to be production. This is why
 *      a first preview needs no environment variables at all.
 *   3. Production.
 *
 * Only NEXT_PUBLIC_* variables are read here, because this module reaches the
 * client bundle: a server-only variable would resolve differently in the two
 * places and cause a hydration mismatch.
 */
const VERCEL_ENV = process.env.NEXT_PUBLIC_VERCEL_ENV
const VERCEL_URL = process.env.NEXT_PUBLIC_VERCEL_URL

/** True on any Vercel deployment that is not production. */
export const IS_PREVIEW = VERCEL_ENV === 'preview' || VERCEL_ENV === 'development'

function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL
  if (explicit) return explicit.replace(/\/$/, '')
  if (IS_PREVIEW && VERCEL_URL) return `https://${VERCEL_URL}`
  return 'https://chrislekkas.com'
}

export const SITE_URL = resolveSiteUrl()

export const CONTACT_EMAIL = 'jclekkas@gmail.com'

export const IS_STATIC_EXPORT = process.env.NEXT_PUBLIC_STATIC_EXPORT === '1'

export const LOCALE_TAG: Record<Language, string> = { en: 'en_US', es: 'es_419' }
export const HTML_LANG: Record<Language, string> = { en: 'en', es: 'es' }

/** Every route exists in both languages at the same path shape. */
export const ROUTES = ['', '/work', '/about', '/contact'] as const
export type Route = (typeof ROUTES)[number]

export function href(lang: Language, path: string = ''): string {
  const clean = path === '/' ? '' : path
  return `/${lang}${clean}` || `/${lang}`
}

export function absolute(path: string): string {
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}
