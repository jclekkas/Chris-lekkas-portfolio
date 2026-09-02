import type { ProjectRelationship, ProjectStatus } from '@/content/schema'

const STATUS_STYLE: Record<ProjectStatus, string> = {
  live: 'text-accent-deep before:bg-accent',
  'in-progress': 'text-ink-soft before:bg-ink-soft',
  delivered: 'text-ink-soft before:bg-rule-strong',
  concept: 'text-ink-muted before:bg-rule-strong',
}

/** Status: a small dot and a word. No pill, no colour-coded soup. */
export function StatusTag({ status, label }: { status: ProjectStatus; label: string }) {
  return (
    <span
      className={`u-meta inline-flex items-center gap-2 before:h-1.5 before:w-1.5 before:rounded-full before:content-[''] ${STATUS_STYLE[status]}`}
    >
      {label}
    </span>
  )
}

/** Relationship: quieter still. It qualifies the status, it does not compete. */
export function RelationshipTag({
  relationship,
  label,
}: {
  relationship: ProjectRelationship
  label: string
}) {
  return (
    <span className="u-meta text-ink-muted" data-relationship={relationship}>
      {label}
    </span>
  )
}
