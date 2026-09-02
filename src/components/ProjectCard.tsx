import Link from 'next/link'
import Image from 'next/image'
import type { Language, Project } from '@/content/projects'
import { getCopy } from '@/content/copy'
import { RelationshipTag, StatusTag } from './Tag'

/**
 * The editorial index row: a number, the name in the display serif, the
 * metadata as small caps, and the screenshot to the right.
 *
 * The whole row is one link, stretched from the project name. A screen reader
 * hears "Heart of Luray, link" once rather than the same destination three
 * times, and a mouse user can click anywhere on the row.
 *
 * A project with no current image gets a typographic panel rather than a broken
 * frame, an empty device or a borrowed picture of something else.
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
    <article className="group relative border-t border-rule py-8 first:border-t-0 first:pt-0 sm:py-10">
      <div className="grid gap-6 lg:grid-cols-[5fr_7fr] lg:gap-10">
        <div className="lg:pt-1">
          <div className="flex items-baseline gap-4">
            <span className="u-meta tabular-nums text-rule-strong">
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
              className="transition-colors duration-200 after:absolute after:inset-0 after:content-[''] group-hover:text-accent-deep"
            >
              {project.name}
            </Link>
          </h3>

          <p className="mt-2 text-[0.8125rem] leading-snug text-ink-muted">
            {project.industry[lang]} · {project.location[lang]} · {project.year}
          </p>

          <p className="mt-4 max-w-prose text-[0.9375rem] leading-relaxed text-ink-soft">
            {project.summary[lang]}
          </p>

          {/* Affordance only — the row is already a single link. */}
          <p
            aria-hidden="true"
            className="u-meta mt-5 inline-flex items-center gap-2 text-accent-deep underline decoration-rule-strong underline-offset-4 group-hover:decoration-accent-deep"
          >
            {copy.work.viewProject}
            <span>→</span>
          </p>
        </div>

        <div>
          {image ? (
            <div className="overflow-hidden rounded-lg bg-surface ring-1 ring-rule">
              <Image
                src={image.src}
                alt={image.alt[lang]}
                width={image.width}
                height={image.height}
                sizes="(min-width: 1024px) 55vw, 100vw"
                priority={priority}
                className="ease-out-soft h-auto max-h-[26rem] w-full object-cover object-top transition-transform duration-500 motion-safe:group-hover:scale-[1.015]"
              />
            </div>
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
