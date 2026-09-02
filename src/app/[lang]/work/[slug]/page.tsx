import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { LANGUAGES, type Language } from '@/content/schema'
import { getCopy } from '@/content/copy'
import { PROJECTS, getProject, relatedProjects } from '@/content/projects'
import { isLanguage } from '@/lib/routing'
import { pageMetadata } from '@/lib/metadata'
import { breadcrumbSchema, caseStudySchema } from '@/lib/structured-data'
import { Container } from '@/components/Container'
import { JsonLd } from '@/components/JsonLd'
import { ProjectImage } from '@/components/ProjectImage'
import { ProjectCard } from '@/components/ProjectCard'
import { RelationshipTag, StatusTag } from '@/components/Tag'

export function generateStaticParams() {
  return LANGUAGES.flatMap((lang) => PROJECTS.map((project) => ({ lang, slug: project.slug })))
}

export const dynamicParams = false

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>
}): Promise<Metadata> {
  const { lang: raw, slug } = await params
  if (!isLanguage(raw)) return {}
  const lang = raw as Language
  const project = getProject(slug)
  if (!project) return {}

  return pageMetadata({
    lang,
    path: `/work/${project.slug}`,
    title: `${project.name} — ${project.headline[lang]}`,
    description: project.summary[lang],
  })
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>
}) {
  const { lang: raw, slug } = await params
  if (!isLanguage(raw)) notFound()
  const lang = raw as Language
  const project = getProject(slug)
  if (!project) notFound()

  const copy = getCopy(lang)
  const related = relatedProjects(project.slug)
  const link = project.liveUrl ?? project.prototypeUrl

  return (
    <>
      <JsonLd data={caseStudySchema(project, lang)} />
      <JsonLd
        data={breadcrumbSchema(lang, [
          { name: copy.nav.brand, path: `/${lang}/` },
          { name: copy.work.title, path: `/${lang}/work/` },
          { name: project.name, path: `/${lang}/work/${project.slug}/` },
        ])}
      />

      {/* 1 & 2 — Overview, status and relationship */}
      <Container className="pt-10 sm:pt-14">
        <p>
          <Link
            href={`/${lang}/work/`}
            className="u-meta inline-flex items-center gap-2 text-ink-muted hover:text-accent-deep"
          >
            <span aria-hidden="true">←</span>
            {copy.project.backToWork}
          </Link>
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2">
          <StatusTag status={project.status} label={copy.status[project.status].label} />
          <RelationshipTag
            relationship={project.relationship}
            label={copy.relationship[project.relationship].label}
          />
          <span className="u-meta text-ink-muted">{project.industry[lang]}</span>
        </div>

        <h1 className="mt-5 max-w-4xl text-[2.25rem] leading-[1.08] sm:text-5xl lg:text-6xl">
          {project.headline[lang]}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
          {project.summary[lang]}
        </p>

        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-ink-muted">
          {copy.status[project.status].description}{' '}
          {copy.relationship[project.relationship].description}
        </p>

        {link ? (
          <p className="mt-7">
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm text-paper transition-colors hover:bg-accent-deep"
            >
              {link.label[lang]}
              <span aria-hidden="true">↗</span>
            </a>
          </p>
        ) : null}
      </Container>

      {project.images.desktop ? (
        <Container className="mt-12">
          <ProjectImage
            image={project.images.desktop}
            lang={lang}
            priority
            sizes="(min-width: 1280px) 72rem, 100vw"
          />
        </Container>
      ) : null}

      {/* Fact panel */}
      <Container className="mt-14">
        <dl className="grid gap-x-8 gap-y-6 border-y border-rule py-8 sm:grid-cols-2 lg:grid-cols-4">
          <Fact label={copy.project.business} value={project.name} />
          <Fact label={copy.project.location} value={project.location[lang]} />
          <Fact label={copy.project.year} value={String(project.year)} />
          <Fact label={copy.project.role} value={project.role[lang]} />
          <Fact
            label={copy.project.audience}
            value={project.audience[lang]}
            className="sm:col-span-2 lg:col-span-4"
          />
        </dl>
      </Container>

      {/* 3 — Business problem */}
      <Container width="narrow" className="mt-16">
        <h2 className="text-2xl sm:text-3xl">{copy.project.problem}</h2>
        <div className="mt-6 flex flex-col gap-5">
          {project.businessProblem[lang].map((paragraph) => (
            <p key={paragraph.slice(0, 48)} className="text-lg leading-relaxed text-ink-soft">
              {paragraph}
            </p>
          ))}
        </div>
      </Container>

      {/*
        The decision margin — the one visual idea that belongs specifically to
        this positioning. The judgement calls sit in a numbered margin beside
        the narrative, the way notes sit beside a manuscript. On a phone the
        margin stacks above its note instead of squeezing.
      */}
      <Container className="mt-20">
        <h2 className="text-2xl sm:text-3xl">{copy.project.decisions}</h2>
        <ol className="mt-8">
          {project.keyDecisions[lang].map((decision, index) => (
            <li key={decision.slice(0, 48)} className="decision-note">
              <p className="u-meta text-ink-muted tabular-nums md:text-right">
                <span className="sr-only">{copy.project.decisionsNote} </span>
                {String(index + 1).padStart(2, '0')}
              </p>
              <p className="max-w-2xl text-lg leading-relaxed text-ink">{decision}</p>
            </li>
          ))}
        </ol>
      </Container>

      {/* 7 — What was built */}
      <section className="mt-20 border-y border-rule bg-surface/50 py-16">
        <Container width="narrow">
          <h2 className="text-2xl sm:text-3xl">{copy.project.built}</h2>
          <ul className="mt-7 flex flex-col gap-4">
            {project.deliverables[lang].map((item) => (
              <li
                key={item.slice(0, 48)}
                className="border-t border-rule pt-4 text-[1.0625rem] leading-relaxed text-ink-soft first:border-t-0 first:pt-0"
              >
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Gallery — only where genuine assets exist */}
      {project.images.gallery.length > 0 || project.images.mobile ? (
        <Container className="mt-20">
          <h2 className="text-2xl sm:text-3xl">{copy.project.closerLook}</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {project.images.mobile ? (
              <ProjectImage
                image={project.images.mobile}
                lang={lang}
                frame="phone"
                sizes="(min-width: 640px) 45vw, 100vw"
                className="sm:max-w-xs"
              />
            ) : null}
            {project.images.gallery.map((image) => (
              <ProjectImage
                key={image.src}
                image={image}
                lang={lang}
                frame="plain"
                sizes="(min-width: 640px) 45vw, 100vw"
              />
            ))}
          </div>
        </Container>
      ) : null}

      {/* 8 & 9 — Evidence and current state, always stated */}
      <Container width="narrow" className="mt-20">
        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <h2 className="u-meta text-ink-muted">{copy.project.evidence}</h2>
            <p className="mt-4 text-[1.0625rem] leading-relaxed text-ink-soft">
              {project.evidence ? project.evidence[lang] : copy.project.noEvidence}
            </p>
          </div>
          <div>
            <h2 className="u-meta text-ink-muted">{copy.project.currentState}</h2>
            <p className="mt-4 text-[1.0625rem] leading-relaxed text-ink-soft">
              {project.currentState[lang]}
            </p>
          </div>
        </div>

        {link ? (
          <p className="mt-10">
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-rule-strong px-5 py-2.5 text-sm text-ink transition-colors hover:border-ink"
            >
              {link.label[lang]}
              <span aria-hidden="true">↗</span>
            </a>
          </p>
        ) : null}

        <p className="u-meta mt-10 text-ink-muted">
          {copy.project.lastVerified}: {project.lastVerified}
        </p>
      </Container>

      {/* 11 — Related work */}
      <section className="mt-20 border-t border-rule py-16">
        <Container>
          <h2 className="text-2xl sm:text-3xl">{copy.project.related}</h2>
          <div className="mt-8 flex flex-col">
            {related.map((other, index) => (
              <ProjectCard key={other.slug} project={other} lang={lang} index={index + 1} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-rule bg-surface/50 py-16">
        <Container>
          <h2 className="max-w-2xl text-3xl leading-tight sm:text-4xl">{copy.home.contactTitle}</h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">
            {copy.home.contactBody}
          </p>
          <p className="mt-7">
            <Link
              href={`/${lang}/contact/`}
              className="rounded-full bg-ink px-6 py-3 text-sm text-paper transition-colors hover:bg-accent-deep"
            >
              {copy.home.contactCta}
            </Link>
          </p>
        </Container>
      </section>
    </>
  )
}

function Fact({
  label,
  value,
  className = '',
}: {
  label: string
  value: string
  className?: string
}) {
  return (
    <div className={className}>
      <dt className="u-meta text-ink-muted">{label}</dt>
      <dd className="mt-2 text-[0.9375rem] leading-relaxed text-ink-soft">{value}</dd>
    </div>
  )
}
