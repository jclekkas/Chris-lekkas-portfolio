'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LANGUAGES, type Language } from '@/content/schema'
import { getCopy } from '@/content/copy'
import { swapLanguage } from '@/lib/routing'

/**
 * Switching language keeps the visitor on the same page — including the same
 * case study — because both language trees publish the same path shape.
 */
export function LanguageSwitch({ lang, className = '' }: { lang: Language; className?: string }) {
  const pathname = usePathname() ?? `/${lang}/`
  const copy = getCopy(lang)
  const names: Record<Language, string> = { en: copy.nav.english, es: copy.nav.spanish }

  return (
    <nav aria-label={copy.nav.language} className={className}>
      <ul className="flex items-center gap-1">
        {LANGUAGES.map((code) => {
          const current = code === lang
          return (
            <li key={code}>
              <Link
                href={swapLanguage(pathname, code)}
                hrefLang={code}
                lang={code}
                aria-current={current ? 'true' : undefined}
                className={`u-meta rounded px-2 py-1.5 transition-colors ${
                  current
                    ? 'bg-surface-deep text-ink'
                    : 'text-ink-muted hover:bg-surface hover:text-ink'
                }`}
              >
                <span aria-hidden="true">{code.toUpperCase()}</span>
                <span className="sr-only">{names[code]}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
