import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { LANGUAGES, type Language } from '@/content/schema'
import { getCopy } from '@/content/copy'
import { FEATURED_PROJECTS, UNFEATURED_CONCEPT_PROJECTS } from '@/content/projects'
import { isLanguage } from '@/lib/routing'
import { pageMetadata } from '@/lib/metadata'
import { Container } from '@/components/Container'
import { Eyebrow } from '@/components/Eyebrow'
import { Section } from '@/components/Section'
import { ProjectCard } from '@/components/ProjectCard'
import { StatusTag, RelationshipTag } from '@/components/Tag'

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
  const copy = getCopy(raw as Language)
  return pageMetadata({
    lang: raw as Language,
    title: copy.meta.title,
    description: copy.meta.description,
    absoluteTitle: true,
  })
}

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: raw } = await params
  if (!isLanguage(raw)) notFound()
  const lang = raw as Language
  const copy = getCopy(lang)
  const lead = FEATURED_PROJECTS[0]
  // The hero presents the lead project itself, so the list below starts after it.
  const rest = FEATURED_PROJECTS.slice(1)

  return (
    <>
      {/* 1 — Hero */}
      <section className="pt-14 pb-4 sm:pt-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-14">
            <div className="lg:pt-6">
              <Eyebrow>{copy.home.heroEyebrow}</Eyebrow>
              <h1 className="mt-5 text-[2.5rem] leading-[1.05] sm:text-6xl lg:text-[4.25rem]">
                {copy.home.heroHeadline}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
                {copy.home.heroBody}
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link
                  href={`/${lang}/work/`}
                  className="rounded-full bg-ink px-6 py-3 text-sm text-paper transition-colors hover:bg-accent-deep"
                >
                  {copy.home.heroPrimaryCta}
                </Link>
                <Link
                  href={`/${lang}/contact/`}
                  className="rounded-full border border-rule-strong px-6 py-3 text-sm text-ink transition-colors hover:border-ink"
                >
                  {copy.home.heroSecondaryCta}
                </Link>
              </div>
            </div>

            {lead?.images.desktop ? (
              <div>
                <div className="overflow-hidden rounded-lg bg-surface ring-1 ring-rule">
                  <Image
                    src={lead.images.desktop.src}
                    alt={lead.images.desktop.alt[lang]}
                    width={lead.images.desktop.width}
                    height={lead.images.desktop.height}
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    priority
                    className="h-auto w-full"
                  />
                </div>
                <div className="mt-4 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                  <p className="flex flex-wrap items-center gap-x-4 gap-y-1">
                    <span className="u-meta tabular-nums text-index">01</span>
                    <span className="font-display text-lg text-ink">{lead.name}</span>
                    <StatusTag status={lead.status} label={copy.status[lead.status].label} />
                    <RelationshipTag
                      relationship={lead.relationship}
                      label={copy.relationship[lead.relationship].label}
                    />
                  </p>
                  <Link
                    href={`/${lang}/work/${lead.slug}/`}
                    className="u-meta inline-flex items-center gap-2 text-accent-deep underline decoration-rule-strong underline-offset-4 hover:decoration-accent-deep"
                  >
                    {copy.work.viewProject}
                    <span aria-hidden="true">→</span>
                    <span className="sr-only"> — {lead.name}</span>
                  </Link>
                </div>
              </div>
            ) : null}
          </div>
        </Container>
      </section>

      {/* 2 — Compact credibility strip */}
      <section className="py-10 sm:py-12">
        <Container>
          <h2 className="sr-only">{copy.home.creditsTitle}</h2>
          <ul className="grid gap-x-8 gap-y-4 border-y border-rule py-6 sm:grid-cols-2 lg:grid-cols-4">
            {copy.home.credits.map((credit) => (
              <li key={credit} className="text-sm leading-snug text-ink-soft">
                {credit}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 3 — Featured work */}
      <Section
        id="work"
        eyebrow={copy.home.workEyebrow}
        title={copy.home.workTitle}
        intro={copy.home.workBody}
      >
        <div className="flex flex-col">
          {rest.map((project, index) => (
            <ProjectCard key={project.slug} project={project} lang={lang} index={index + 2} />
          ))}
        </div>
        <p className="mt-10">
          <Link
            href={`/${lang}/work/`}
            className="u-meta inline-flex items-center gap-2 text-accent-deep underline decoration-rule-strong underline-offset-4 hover:decoration-accent-deep"
          >
            {copy.home.workCta}
            <span aria-hidden="true">→</span>
          </Link>
        </p>
      </Section>

      {/* 4 — How Chris works */}
      <Section
        eyebrow={copy.home.processEyebrow}
        title={copy.home.processTitle}
        intro={copy.home.processBody}
        className="bg-surface/50"
      >
        <ol className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {copy.home.process.map((step, index) => (
            <li key={step.title} className="border-t border-rule-strong pt-5">
              <p className="u-meta text-ink-muted tabular-nums">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-2 text-2xl">{step.title}</h3>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-soft">{step.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* 5 — About and credibility */}
      <Section>
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_2fr]">
          <div>
            <Image
              src="/chris/portrait.webp"
              alt="Chris Lekkas"
              width={400}
              height={400}
              sizes="(min-width: 1024px) 30vw, 60vw"
              className="w-40 rounded-lg sm:w-52 lg:w-full"
            />
          </div>
          <div>
            <Eyebrow>{copy.home.aboutEyebrow}</Eyebrow>
            <h2 className="mt-3 text-3xl leading-tight sm:text-4xl">{copy.home.aboutTitle}</h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
              {copy.home.aboutBody}
            </p>
            <p className="mt-7">
              <Link
                href={`/${lang}/about/`}
                className="u-meta inline-flex items-center gap-2 text-accent-deep underline decoration-rule-strong underline-offset-4 hover:decoration-accent-deep"
              >
                {copy.home.aboutCta}
                <span aria-hidden="true">→</span>
              </Link>
            </p>
          </div>
        </div>
      </Section>

      {/* 6 — Selected concepts, clearly labelled as uncommissioned */}
      <Section
        eyebrow={copy.home.conceptsEyebrow}
        title={copy.home.conceptsTitle}
        intro={copy.home.conceptsBody}
        className="bg-surface/50"
      >
        <div className="flex flex-col">
          {UNFEATURED_CONCEPT_PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              lang={lang}
              index={FEATURED_PROJECTS.length + index + 1}
            />
          ))}
        </div>
      </Section>

      {/* 7 — Engagement guidance */}
      <Section eyebrow={copy.home.pricingEyebrow} title={copy.home.pricingTitle}>
        <p className="max-w-2xl text-lg leading-relaxed text-ink-soft">{copy.home.pricingBody}</p>
        <p className="mt-7">
          <Link
            href={`/${lang}/contact/`}
            className="rounded-full bg-ink px-6 py-3 text-sm text-paper transition-colors hover:bg-accent-deep"
          >
            {copy.home.pricingCta}
          </Link>
        </p>
      </Section>

      {/* 8 — Contact */}
      <Section className="border-t border-rule bg-surface/50">
        <div className="max-w-2xl">
          <h2 className="text-3xl leading-tight sm:text-4xl">{copy.home.contactTitle}</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">{copy.home.contactBody}</p>
          <p className="mt-7">
            <Link
              href={`/${lang}/contact/`}
              className="rounded-full bg-ink px-6 py-3 text-sm text-paper transition-colors hover:bg-accent-deep"
            >
              {copy.home.contactCta}
            </Link>
          </p>
        </div>
      </Section>
    </>
  )
}
