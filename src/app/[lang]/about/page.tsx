import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { LANGUAGES, type Language } from '@/content/schema'
import { getCopy } from '@/content/copy'
import { isLanguage } from '@/lib/routing'
import { pageMetadata } from '@/lib/metadata'
import { breadcrumbSchema } from '@/lib/structured-data'
import { Container } from '@/components/Container'
import { Eyebrow } from '@/components/Eyebrow'
import { Section } from '@/components/Section'
import { JsonLd } from '@/components/JsonLd'

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
    path: '/about',
    title: copy.about.eyebrow,
    description: copy.about.lead,
  })
}

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: raw } = await params
  if (!isLanguage(raw)) notFound()
  const lang = raw as Language
  const copy = getCopy(lang)

  return (
    <>
      <JsonLd
        data={breadcrumbSchema(lang, [
          { name: copy.nav.brand, path: `/${lang}/` },
          { name: copy.about.eyebrow, path: `/${lang}/about/` },
        ])}
      />

      <Container className="pt-14 sm:pt-20">
        <div className="grid gap-12 lg:grid-cols-[3fr_2fr] lg:gap-14">
          <div>
            <Eyebrow>{copy.about.eyebrow}</Eyebrow>
            <h1 className="mt-4 text-[2.5rem] leading-[1.05] sm:text-6xl">{copy.about.title}</h1>
            <p className="mt-7 text-xl leading-relaxed text-ink">{copy.about.lead}</p>
          </div>
          <div>
            {/* 400×400 is the only portrait available today. It is displayed at
                a size it can actually carry; a higher-resolution original is on
                the missing-assets list in README.md. */}
            <Image
              src="/chris/portrait.webp"
              alt="Chris Lekkas"
              width={400}
              height={400}
              sizes="(min-width: 1024px) 22rem, 60vw"
              className="w-44 rounded-lg sm:w-56 lg:w-full lg:max-w-[22rem]"
            />
          </div>
        </div>

        <div className="mt-14 flex max-w-2xl flex-col gap-5">
          {copy.about.body.map((paragraph) => (
            <p key={paragraph.slice(0, 48)} className="text-lg leading-relaxed text-ink-soft">
              {paragraph}
            </p>
          ))}
        </div>
      </Container>

      <Section title={copy.about.capabilitiesTitle} className="mt-8 bg-surface/50">
        <ul className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {copy.about.capabilities.map((capability) => (
            <li key={capability.title} className="border-t border-rule-strong pt-5">
              <h3 className="text-xl">{capability.title}</h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-soft">
                {capability.body}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section title={copy.about.principlesTitle}>
        <ul className="flex max-w-2xl flex-col">
          {copy.about.principles.map((principle) => (
            <li
              key={principle}
              className="border-t border-rule py-4 text-lg leading-snug text-ink-soft"
            >
              {principle}
            </li>
          ))}
        </ul>
        <p className="mt-10 flex flex-wrap gap-3">
          <Link
            href={`/${lang}/work/`}
            className="rounded-full bg-ink px-6 py-3 text-sm text-paper transition-colors hover:bg-accent-deep"
          >
            {copy.about.workCta}
          </Link>
          <Link
            href={`/${lang}/contact/`}
            className="rounded-full border border-rule-strong px-6 py-3 text-sm text-ink transition-colors hover:border-ink"
          >
            {copy.home.heroSecondaryCta}
          </Link>
        </p>
      </Section>
    </>
  )
}
