import { notFound } from 'next/navigation'
import { LANGUAGES, type Language } from '@/content/schema'
import { getCopy } from '@/content/copy'
import { HTML_LANG } from '@/content/site'
import { isLanguage } from '@/lib/routing'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { JsonLd } from '@/components/JsonLd'
import { personSchema, professionalServiceSchema, websiteSchema } from '@/lib/structured-data'

export function generateStaticParams() {
  return LANGUAGES.map((lang) => ({ lang }))
}

export default async function LanguageLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang: raw } = await params
  if (!isLanguage(raw)) notFound()
  const lang = raw as Language
  const copy = getCopy(lang)

  return (
    <div lang={HTML_LANG[lang]} className="flex min-h-screen flex-col">
      <JsonLd data={personSchema(lang)} />
      <JsonLd data={websiteSchema(lang)} />
      <JsonLd data={professionalServiceSchema(lang)} />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
      >
        {copy.nav.skipToContent}
      </a>

      <Header lang={lang} />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer lang={lang} />
    </div>
  )
}
