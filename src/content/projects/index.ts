import { project, type Language, type Project } from '../schema'
import { bweMaryland } from './bwe-maryland'
import { enlaceMental } from './enlace-mental'
import { esteroYMar } from './estero-y-mar'
import { ginnysCleaning } from './ginnys-cleaning'
import { handyDanny } from './handy-danny'
import { heartOfLuray } from './heart-of-luray'

/**
 * The lineup. Adding a project means adding a file here and nothing else —
 * see ADDING_A_PROJECT.md.
 *
 * Every record is validated at module load. A malformed or half-translated
 * project fails the build with a path to the offending field rather than
 * rendering something wrong on a public page.
 */
const RAW: readonly Project[] = [
  enlaceMental,
  heartOfLuray,
  ginnysCleaning,
  esteroYMar,
  bweMaryland,
  handyDanny,
]

function validate(records: readonly Project[]): readonly Project[] {
  const seen = new Set<string>()
  return records.map((record) => {
    const parsed = project.safeParse(record)
    if (!parsed.success) {
      const issues = parsed.error.issues
        .map((i) => `  · ${i.path.join('.') || '(root)'}: ${i.message}`)
        .join('\n')
      throw new Error(`Invalid project "${record.slug}":\n${issues}`)
    }
    if (seen.has(parsed.data.slug)) {
      throw new Error(`Duplicate project slug "${parsed.data.slug}"`)
    }
    seen.add(parsed.data.slug)
    return parsed.data
  })
}

export const PROJECTS = validate(RAW)

/** Active client work, owned ventures and live collaborations. */
export const ACTIVE_PROJECTS = PROJECTS.filter((p) => p.relationship !== 'self-initiated').sort(
  (a, b) => a.order - b.order,
)

/** Work Chris started himself to show what is possible. Nobody paid for these. */
export const CONCEPT_PROJECTS = PROJECTS.filter((p) => p.relationship === 'self-initiated').sort(
  (a, b) => a.order - b.order,
)

export const FEATURED_PROJECTS = PROJECTS.filter((p) => p.featured).sort(
  (a, b) => a.order - b.order,
)

/**
 * Concepts the homepage has not already featured. A featured concept is still
 * labelled as a concept wherever it appears — this list exists so the homepage
 * does not print the same project twice.
 */
export const UNFEATURED_CONCEPT_PROJECTS = CONCEPT_PROJECTS.filter((p) => !p.featured)

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug)
}

/** Two other projects to show at the foot of a case study. */
export function relatedProjects(slug: string, count = 2): readonly Project[] {
  const current = getProject(slug)
  const rest = PROJECTS.filter((p) => p.slug !== slug)
  const sameRelationship = rest.filter((p) => p.relationship === current?.relationship)
  const others = rest.filter((p) => p.relationship !== current?.relationship)
  return [...sameRelationship, ...others].slice(0, count)
}

export type { Language, Project }
