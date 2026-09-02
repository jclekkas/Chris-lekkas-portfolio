import { z } from 'zod'

/**
 * The content model.
 *
 * Two rules are enforced here rather than trusted to reviewers:
 *
 *  1. Every visitor-facing string exists in both languages. `localizedText`
 *     requires `en` and `es`; a missing translation fails the build, not the
 *     page.
 *  2. Localized values are never renderable on their own. Components read them
 *     through `pick()` (see ./localized.ts), which returns `string`. There is
 *     no code path that puts a `{ en, es }` object into JSX, which is how the
 *     previous build printed `[object Object]` in seven pages.
 */

export const LANGUAGES = ['en', 'es'] as const
export type Language = (typeof LANGUAGES)[number]

export const languageSchema = z.enum(LANGUAGES)

const nonEmpty = z.string().trim().min(1)

/** A single string in both languages. */
export const localizedText = z.object({ en: nonEmpty, es: nonEmpty })
export type LocalizedText = z.infer<typeof localizedText>

/** A list of strings in both languages, kept the same length so the two
 *  versions of a page say the same number of things. Spanish is written as
 *  Spanish, not translated item-for-item — but it covers the same ground. */
export const localizedList = z
  .object({ en: z.array(nonEmpty).min(1), es: z.array(nonEmpty).min(1) })
  .refine((v) => v.en.length === v.es.length, {
    message: 'English and Spanish lists must have the same number of items',
  })
export type LocalizedList = z.infer<typeof localizedList>

/**
 * Status answers "what state is this work in?".
 * Relationship answers "how did Chris come to build it?".
 * They are independent: an owned venture can be live, a client project can be
 * in progress, and a self-initiated concept is never a client engagement.
 */
export const PROJECT_STATUSES = ['live', 'in-progress', 'delivered', 'concept'] as const
export const PROJECT_RELATIONSHIPS = ['client', 'owned', 'collaboration', 'self-initiated'] as const

export type ProjectStatus = (typeof PROJECT_STATUSES)[number]
export type ProjectRelationship = (typeof PROJECT_RELATIONSHIPS)[number]

export const projectStatus = z.enum(PROJECT_STATUSES)
export const projectRelationship = z.enum(PROJECT_RELATIONSHIPS)

/** An image we actually have. Width and height are required so every image
 *  reserves its box and nothing shifts while it loads. */
export const projectImage = z.object({
  src: z.string().startsWith('/'),
  width: z.number().int().positive(),
  height: z.number().int().positive(),
  alt: localizedText,
  /** Optional caption shown under the image in a gallery. */
  caption: localizedText.optional(),
})
export type ProjectImage = z.infer<typeof projectImage>

/** An outbound link. `label` is what the visitor reads; we never surface a
 *  generated hosting hostname as the visible label. */
export const projectLink = z.object({
  url: z.string().url(),
  label: localizedText,
})

export const project = z
  .object({
    slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'slug must be lowercase and hyphenated'),
    /** Proper noun. Identical in both languages by design. */
    name: nonEmpty,

    status: projectStatus,
    relationship: projectRelationship,
    featured: z.boolean(),
    /** Order within its group on the work index. Lower comes first. */
    order: z.number().int(),

    year: z.number().int().min(2000).max(2100),
    industry: localizedText,
    location: localizedText,
    audience: localizedText,
    role: localizedText,

    /** One sentence. Used on cards, in metadata and in search results. */
    summary: localizedText,
    /** The case-study title. A claim about the work, not the client's name. */
    headline: localizedText,

    /** 1–3 paragraphs. What was actually wrong before. */
    businessProblem: localizedList,
    /** The judgement calls. Rendered as numbered notes in the decision margin. */
    keyDecisions: localizedList,
    /** What exists as a result. */
    deliverables: localizedList,

    /**
     * What can be honestly claimed. `null` means nothing has been measured —
     * the case study then says so in as many words rather than going quiet.
     */
    evidence: localizedText.nullable(),
    /** Where the work stands today, in plain language. */
    currentState: localizedText,

    liveUrl: projectLink.optional(),
    prototypeUrl: projectLink.optional(),

    images: z.object({
      desktop: projectImage.optional(),
      mobile: projectImage.optional(),
      gallery: z.array(projectImage).default([]),
    }),

    /**
     * Publication gate. `pending` keeps the project out of production until
     * Chris confirms the business is happy to be named. Nothing is blocked in
     * development; the flag is read by scripts/audit-content.mjs and listed in
     * the README so it cannot quietly rot.
     */
    publicPermission: z.enum(['approved', 'pending']),
    /** Why permission is still pending, for whoever picks this up next. */
    permissionNote: z.string().optional(),
    /** ISO date. When a human last checked these facts were still true. */
    lastVerified: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  })
  .refine((p) => !(p.featured && !p.images.desktop), {
    message: 'A featured project needs a desktop image',
    path: ['featured'],
  })
  .refine((p) => !(p.relationship === 'self-initiated' && p.status !== 'concept'), {
    message: 'Self-initiated work is a concept until someone commissions it',
    path: ['status'],
  })

export type Project = z.infer<typeof project>
