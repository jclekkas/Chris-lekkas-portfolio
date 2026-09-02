/**
 * A section label. It never repeats the heading beneath it — the previous
 * build shipped "What working together looks like" as both eyebrow and h2,
 * which reads as a mistake because it is one.
 */
export function Eyebrow({ children }: { children: string }) {
  return <p className="u-meta text-ink-muted">{children}</p>
}
