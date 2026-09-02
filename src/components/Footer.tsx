import Link from 'next/link'
import type { Language } from '@/content/schema'
import { getCopy } from '@/content/copy'
import { CONTACT_EMAIL } from '@/content/site'
import { Container } from './Container'

export function Footer({ lang }: { lang: Language }) {
  const copy = getCopy(lang)
  const year = 2026

  return (
    <footer className="mt-24 border-t border-rule bg-surface/50">
      <Container className="py-12 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="font-display text-2xl text-ink">{copy.nav.brand}</p>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-ink-muted">
              {copy.footer.tagline}
            </p>
          </div>

          <nav aria-label={copy.footer.siteHeading}>
            <h2 className="u-meta text-ink-muted">{copy.footer.siteHeading}</h2>
            <ul className="mt-4 flex flex-col gap-2 text-sm">
              <li>
                <Link href={`/${lang}/`} className="text-ink-soft hover:text-accent-deep">
                  {copy.footer.home}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/work/`} className="text-ink-soft hover:text-accent-deep">
                  {copy.nav.work}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/about/`} className="text-ink-soft hover:text-accent-deep">
                  {copy.nav.about}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/contact/`} className="text-ink-soft hover:text-accent-deep">
                  {copy.nav.contact}
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="u-meta text-ink-muted">{copy.footer.contactHeading}</h2>
            <ul className="mt-4 flex flex-col gap-2 text-sm">
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-ink-soft hover:text-accent-deep"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li className="text-ink-muted">{copy.footer.languages}</li>
            </ul>
          </div>
        </div>

        <p className="u-rule mt-12 pt-6 text-xs text-ink-muted">
          © {year} {copy.footer.rights}
        </p>
      </Container>
    </footer>
  )
}
