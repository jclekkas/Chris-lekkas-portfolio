import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { LANGUAGES, type Language } from '@/content/schema'
import { getCopy } from '@/content/copy'
import { CONTACT_EMAIL } from '@/content/site'
import { isLanguage } from '@/lib/routing'
import { pageMetadata } from '@/lib/metadata'
import { breadcrumbSchema } from '@/lib/structured-data'
import { Container } from '@/components/Container'
import { Eyebrow } from '@/components/Eyebrow'
import { JsonLd } from '@/components/JsonLd'
import { ContactForm } from '@/components/ContactForm'

export function generateStaticParams() {
  return LANGUAGES.map((lang) => ({ lang }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang: raw } = await params
  if (!isLanguage(raw)) return {}
  const lang = raw as Language
  const copy = getCopy(lang)
  return pageMetadata({
    lang,
    path: '/contact',
    title: copy.contact.eyebrow,
    description: copy.contact.lead,
  })
}

export default async function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: raw } = await params
  if (!isLanguage(raw)) notFound()
  const lang = raw as Language
  const copy = getCopy(lang)

  return (
    <>
      <JsonLd
        data={breadcrumbSchema(lang, [
          { name: copy.nav.brand, path: `/${lang}/` },
          { name: copy.contact.eyebrow, path: `/${lang}/contact/` },
        ])}
      />

      <Container className="pt-14 pb-24 sm:pt-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Eyebrow>{copy.contact.eyebrow}</Eyebrow>
            <h1 className="mt-4 text-[2.5rem] leading-[1.05] sm:text-5xl">{copy.contact.title}</h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">{copy.contact.lead}</p>

            <div className="mt-10 border-t border-rule pt-6">
              <p className="text-sm leading-relaxed text-ink-muted">{copy.contact.reassurance}</p>
              <p className="mt-4 text-sm">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-accent-deep underline underline-offset-4"
                >
                  {CONTACT_EMAIL}
                </a>
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ContactForm lang={lang} />
          </div>
        </div>
      </Container>
    </>
  )
}
