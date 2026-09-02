import Link from 'next/link'
import type { Metadata } from 'next'
import { getCopy } from '@/content/copy'

export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false, follow: true },
}

/**
 * A single 404 for both languages. It cannot know which tree the visitor came
 * from — a static host serves one file for every miss — so it offers both, and
 * says the same thing in each rather than guessing.
 */
export default function NotFound() {
  const en = getCopy('en')
  const es = getCopy('es')

  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col justify-center gap-12 px-5 py-20 sm:px-8">
      <div>
        <p className="u-meta text-ink-muted">404</p>
        <h1 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
          {en.notFound.title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-ink-soft">{en.notFound.body}</p>
        <p className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/en/work/"
            className="rounded-full bg-ink px-5 py-2.5 text-sm text-paper transition-colors hover:bg-accent-deep"
          >
            {en.notFound.workCta}
          </Link>
          <Link
            href="/en/"
            className="rounded-full border border-rule-strong px-5 py-2.5 text-sm text-ink transition-colors hover:border-ink"
          >
            {en.notFound.homeCta}
          </Link>
        </p>
      </div>

      <div lang="es" className="border-t border-rule pt-10">
        <h2 className="font-display text-3xl leading-tight">{es.notFound.title}</h2>
        <p className="mt-4 text-lg leading-relaxed text-ink-soft">{es.notFound.body}</p>
        <p className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/es/work/"
            className="rounded-full bg-ink px-5 py-2.5 text-sm text-paper transition-colors hover:bg-accent-deep"
          >
            {es.notFound.workCta}
          </Link>
          <Link
            href="/es/"
            className="rounded-full border border-rule-strong px-5 py-2.5 text-sm text-ink transition-colors hover:border-ink"
          >
            {es.notFound.homeCta}
          </Link>
        </p>
      </div>
    </main>
  )
}
