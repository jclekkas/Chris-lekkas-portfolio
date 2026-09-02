import type { Metadata } from 'next'
import { HTML_LANG, LOCALE_TAG, SITE_URL } from '@/content/site'
import { LANGUAGES, type Language } from '@/content/schema'

interface PageMetaInput {
  lang: Language
  /** Path after the language prefix, e.g. '/work' or '' for the home page. */
  path?: string
  title: string
  description: string
  /** Set on the home page only, where the title is already complete. */
  absoluteTitle?: boolean
}

/**
 * One place that builds canonical URLs, hreflang alternates and the social
 * cards, so a new page cannot ship without them.
 */
export function pageMetadata({
  lang,
  path = '',
  title,
  description,
  absoluteTitle = false,
}: PageMetaInput): Metadata {
  const canonical = `${SITE_URL}/${lang}${path}/`
  const languages = Object.fromEntries(
    LANGUAGES.map((code) => [HTML_LANG[code], `${SITE_URL}/${code}${path}/`]),
  )

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical,
      languages: { ...languages, 'x-default': `${SITE_URL}/en${path}/` },
    },
    openGraph: {
      type: 'website',
      url: canonical,
      title,
      description,
      siteName: 'Chris Lekkas',
      locale: LOCALE_TAG[lang],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}
