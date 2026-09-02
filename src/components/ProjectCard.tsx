import Link from 'next/link'
import Image from 'next/image'
import type { Language, Project } from '@/content/projects'
import { getCopy } from '@/content/copy'
import { RelationshipTag, StatusTag } from './Tag'

/**
 * The editorial index row: a number, the name in the display serif, the
 * metadata as small caps, and the screenshot to the right. A project with no
 * current image gets a typographic panel rather than a broken frame or a
 * borrowed picture of something else.
 */
export function ProjectCard({
  project,
  lang,
  index,
  priority = false,
}: {
  project: Project
  lang: Language
  index: number
  priority?: boolean
}) {
  const copy = getCopy(lang)
  const image = project.images.desktop
  const href = `/${lang}/work/${project.slug}/`

  return (
    <article className="group border-t border-rule py-8 first:border-t-0 first:pt-0 sm:py-10">
      <div className="grid gap-6 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5 lg:pt-1">
          <div className="flex items-baseline gap-4">
            <span className="u-meta text-rule-strong tabular-nums">
              {String(index).padStart(2, '0')}
            </span>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
              <StatusTag status={project.status} label={copy.status[project.status].label} />
              <RelationshipTag
                relationship={project.relationship}
                label={copy.relationship[project.relationship].label}
              />
            </div>
          </div>

          <h3 className="mt-4 text-2xl leading-tight sm:text-3xl">
            <Link
              href={href}
              className="transition-colors duration-200 group-hover:text-accent-deep"
            >
              <span className="absolute inset-0 z-0 hidden" aria-hidden="true" />
              {project.name}
            </Link>
          </h3>

          <p className="u-meta mt-2 text-ink-muted normal-case tracking-normal text-[0.8125rem]">
            {project.industry[lang]} · {project.location[lang]} · {project.year}
          </p>

          <p className="mt-4 max-w-prose text-[0.9375rem] leading-relaxed text-ink-soft">
            {project.summary[lang]}
          </p>

          <p className="mt-5">
            <Link
              href={href}
              className="u-meta inline-flex items-center gap-2 text-accent-deep underline decoration-rule-strong underline-offset-4 transition-colors hover:decoration-accent-deep"
            >
              {copy.work.viewProject}
              <span aria-hidden="true">→</span>
              <span className="sr-only"> — {project.name}</span>
            </Link>
          </p>
        </div>

        <div className="lg:col-span-7">
          {image ? (
            <Link href={href} tabIndex={-1} aria-hidden="true" className="block">
              <div className="overflow-hidden rounded-lg bg-surface ring-1 ring-rule">
                <Image
                  src={image.src}
                  alt=""
                  width={image.width}
                  height={image.height}
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  priority={priority}
                  className="h-auto w-full max-h-[26rem] object-cover object-top transition-transform duration-500 ease-out-soft motion-safe:group-hover:scale-[1.015]"
                />
              </div>
            </Link>
          ) : (
            <div className="flex h-full min-h-40 items-center rounded-lg border border-dashed border-rule-strong bg-surface/60 p-6">
              <p className="font-display text-lg leading-snug text-ink-muted">
                {project.headline[lang]}
              </p>
            </div>
          )}
        </div>
      </div>
    </article>
  )
}
