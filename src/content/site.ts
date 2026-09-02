import type { Language } from './schema'

/**
 * Canonical origin. Override in the deployment environment so preview builds
 * emit their own absolute URLs instead of claiming to be production.
 */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://chrislekkas.com').replace(
  /\/$/,
  '',
)

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
