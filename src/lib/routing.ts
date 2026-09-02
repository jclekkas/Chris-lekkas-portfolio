import { LANGUAGES, type Language } from '@/content/schema'
import { PROJECTS } from '@/content/projects'

export const DEFAULT_LANGUAGE: Language = 'en'

export function isLanguage(value: string): value is Language {
  return (LANGUAGES as readonly string[]).includes(value)
}

/**
 * Every route exists in both languages under the same path shape, so switching
 * language is a prefix swap and the visitor stays on the page they were reading.
 * Project slugs are shared deliberately: a slug is a proper noun, and keeping it
 * stable means an /es link and an /en link point at the same case study.
 */
export function swapLanguage(pathname: string, to: Language): string {
  const segments = pathname.split('/').filter(Boolean)
  if (segments.length > 0 && isLanguage(segments[0] as string)) {
    segments[0] = to
    return `/${segments.join('/')}/`
  }
  return `/${to}/`
}

/** Every path the site publishes, per language, without a trailing slash. */
export function allPaths(lang: Language): string[] {
  return [
    `/${lang}`,
    `/${lang}/work`,
    `/${lang}/about`,
    `/${lang}/contact`,
    ...PROJECTS.map((p) => `/${lang}/work/${p.slug}`),
  ]
}
