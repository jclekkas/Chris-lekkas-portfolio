'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { Language } from '@/content/schema'
import { getCopy } from '@/content/copy'
import { Container } from './Container'
import { LanguageSwitch } from './LanguageSwitch'

export function Header({ lang }: { lang: Language }) {
  const copy = getCopy(lang)
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  const links = [
    { href: `/${lang}/work/`, label: copy.nav.work },
    { href: `/${lang}/about/`, label: copy.nav.about },
    { href: `/${lang}/contact/`, label: copy.nav.contact },
  ]

  // Close on navigation — including a browser Back — without an effect, which
  // would cause a second render pass. This is the documented pattern for
  // adjusting state when a prop changes.
  const [lastPathname, setLastPathname] = useState(pathname)
  if (pathname !== lastPathname) {
    setLastPathname(pathname)
    setOpen(false)
  }

  // Escape closes and returns focus to the control that opened it.
  useEffect(() => {
    if (!open) return
    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  const isCurrent = (href: string) => pathname?.startsWith(href.replace(/\/$/, ''))

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper/90 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4 sm:h-20">
          <Link href={`/${lang}/`} className="group flex flex-col leading-none">
            <span className="font-display text-xl text-ink sm:text-2xl">{copy.nav.brand}</span>
            <span className="u-meta mt-1 hidden text-ink-muted sm:block">
              {copy.nav.brandTagline}
            </span>
          </Link>

          <div className="flex items-center gap-2 sm:gap-5">
            <nav aria-label={copy.nav.brand} className="hidden md:block">
              <ul className="flex items-center gap-6">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={isCurrent(link.href) ? 'page' : undefined}
                      className={`text-sm transition-colors hover:text-accent-deep ${
                        isCurrent(link.href) ? 'text-ink' : 'text-ink-soft'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <LanguageSwitch lang={lang} />

            <Link
              href={`/${lang}/contact/`}
              className="hidden rounded-full bg-ink px-4 py-2 text-sm text-paper transition-colors hover:bg-accent-deep md:inline-block"
            >
              {copy.nav.cta}
            </Link>

            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="inline-flex items-center gap-2 rounded border border-rule px-3 py-2 text-sm text-ink md:hidden"
            >
              <span className="u-meta">{open ? copy.nav.closeMenu : copy.nav.openMenu}</span>
            </button>
          </div>
        </div>
      </Container>

      <div
        id="mobile-menu"
        ref={panelRef}
        hidden={!open}
        className="border-t border-rule bg-paper md:hidden"
      >
        <Container className="py-4">
          <nav aria-label={copy.nav.openMenu}>
            <ul className="flex flex-col">
              {links.map((link) => (
                <li key={link.href} className="border-b border-rule last:border-b-0">
                  <Link
                    href={link.href}
                    aria-current={isCurrent(link.href) ? 'page' : undefined}
                    className="block py-3 text-base text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-4">
            <Link
              href={`/${lang}/contact/`}
              className="inline-block rounded-full bg-ink px-4 py-2 text-sm text-paper"
            >
              {copy.nav.cta}
            </Link>
          </div>
        </Container>
      </div>
    </header>
  )
}
