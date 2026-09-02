import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { LANGUAGES, type Language } from '@/content/schema'
import { getCopy } from '@/content/copy'
import { ACTIVE_PROJECTS, CONCEPT_PROJECTS } from '@/content/projects'
import { isLanguage } from '@/lib/routing'
import { pageMetadata } from '@/lib/metadata'
import { Container } from '@/components/Container'
import { Eyebrow } from '@/components/Eyebrow'
import { ProjectCard } from '@/components/ProjectCard'
import { JsonLd } from '@/components/JsonLd'
import { breadcrumbSchema } from '@/lib/structured-data'

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
    path: '/work',
    title: copy.work.title,
    description: copy.work.intro,
  })
}

export default async function WorkPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: raw } = await params
  if (!isLanguage(raw)) notFound()
  const lang = raw as Language
  const copy = getCopy(lang)

  return (
    <>
      <JsonLd
        data={breadcrumbSchema(lang, [
          { name: copy.nav.brand, path: `/${lang}/` },
          { name: copy.work.title, path: `/${lang}/work/` },
        ])}
      />

      <Container className="pt-14 pb-10 sm:pt-20">
        <Eyebrow>{copy.work.eyebrow}</Eyebrow>
        <h1 className="mt-4 max-w-3xl text-[2.5rem] leading-[1.05] sm:text-6xl">
          {copy.work.title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">{copy.work.intro}</p>
      </Container>

      {/* The legend is short and factual — it explains the labels without
          apologising for them or dominating the page. */}
      <Container className="pb-14">
        <details className="rounded-lg border border-rule bg-surface/50">
          <summary className="u-meta cursor-pointer px-5 py-4 text-ink-muted">
            {copy.work.legendTitle}
          </summary>
          <div className="grid gap-8 border-t border-rule px-5 py-6 sm:grid-cols-2">
            <div>
              <h2 className="u-meta text-ink-muted">{copy.work.statusLegendTitle}</h2>
              <dl className="mt-3 flex flex-col gap-2 text-sm">
                {(['live', 'in-progress', 'delivered', 'concept'] as const).map((key) => (
                  <div key={key} className="flex flex-wrap gap-x-2">
                    <dt className="font-medium text-ink">{copy.status[key].label}</dt>
                    <dd className="text-ink-muted">{copy.status[key].description}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div>
              <h2 className="u-meta text-ink-muted">{copy.work.relationshipLegendTitle}</h2>
              <dl className="mt-3 flex flex-col gap-2 text-sm">
                {(['client', 'owned', 'collaboration', 'self-initiated'] as const).map((key) => (
                  <div key={key} className="flex flex-wrap gap-x-2">
                    <dt className="font-medium text-ink">{copy.relationship[key].label}</dt>
                    <dd className="text-ink-muted">{copy.relationship[key].description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </details>
      </Container>

      <section className="pb-16 sm:pb-20">
        <Container>
          <div className="border-t border-ink pt-6">
            <h2 className="text-2xl sm:text-3xl">{copy.work.activeTitle}</h2>
            <p className="mt-3 max-w-2xl text-[0.9375rem] leading-relaxed text-ink-muted">
              {copy.work.activeIntro}
            </p>
          </div>
          <div className="mt-10 flex flex-col">
            {ACTIVE_PROJECTS.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                lang={lang}
                index={index + 1}
                priority={index === 0}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-rule bg-surface/50 py-16 sm:py-20">
        <Container>
          <div className="border-t border-ink pt-6">
            <h2 className="text-2xl sm:text-3xl">{copy.work.conceptsTitle}</h2>
            <p className="mt-3 max-w-2xl text-[0.9375rem] leading-relaxed text-ink-muted">
              {copy.work.conceptsIntro}
            </p>
          </div>
          <div className="mt-10 flex flex-col">
            {CONCEPT_PROJECTS.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                lang={lang}
                index={ACTIVE_PROJECTS.length + index + 1}
              />
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
