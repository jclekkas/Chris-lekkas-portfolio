import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_URL } from '@/content/site'

/**
 * The root is a language chooser, not a page.
 *
 * A static export has no server and therefore no server-side redirect, so this
 * does the same job in a way that works identically on Vercel and on a plain
 * file host: a meta refresh for browsers without JavaScript, a script that
 * honours the visitor's own language preference, and a real link for anyone the
 * first two miss. It is excluded from indexing and points its canonical at the
 * English home page.
 */
export const metadata: Metadata = {
  title: { absolute: 'Chris Lekkas' },
  robots: { index: false, follow: true },
  alternates: { canonical: `${SITE_URL}/en/` },
}

const CHOOSE_LANGUAGE = `(function(){try{var l=(navigator.language||'en').toLowerCase();var t=l.indexOf('es')===0?'/es/':'/en/';location.replace(t+location.search+location.hash)}catch(e){location.replace('/en/')}})()`

export default function RootPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col items-center justify-center gap-4 px-6 text-center">
      {/* React hoists this into <head>. It is the no-JavaScript path; the
          script below is the one that honours the visitor's own language. */}
      <meta httpEquiv="refresh" content="0; url=/en/" />
      <script dangerouslySetInnerHTML={{ __html: CHOOSE_LANGUAGE }} />
      <p className="font-display text-2xl">Chris Lekkas</p>
      <p className="text-sm text-ink-muted">
        <Link href="/en/" className="text-accent-deep underline underline-offset-4">
          Continue in English
        </Link>
        {' · '}
        <Link href="/es/" className="text-accent-deep underline underline-offset-4">
          Continuar en español
        </Link>
      </p>
    </main>
  )
}
