import Image from 'next/image'
import type { Language } from '@/content/schema'
import type { ProjectImage as ProjectImageData } from '@/content/schema'

/**
 * Rules this component exists to enforce:
 *  · width and height always come from the record, so the box is reserved and
 *    nothing shifts as the image loads;
 *  · alt text is required and localized;
 *  · a desktop screenshot is never dressed up as a phone screenshot, and an
 *    empty device frame is never drawn to fill a gap. If there is no mobile
 *    asset, the desktop asset is simply presented well on its own.
 */
export function ProjectImage({
  image,
  lang,
  priority = false,
  sizes = '(min-width: 1024px) 60vw, 100vw',
  className = '',
  frame = 'browser',
}: {
  image: ProjectImageData
  lang: Language
  priority?: boolean
  sizes?: string
  className?: string
  frame?: 'browser' | 'plain' | 'phone'
}) {
  const isPhone = frame === 'phone'

  return (
    <figure
      className={`overflow-hidden bg-surface ring-1 ring-rule ${
        isPhone ? 'rounded-2xl' : 'rounded-lg'
      } ${className}`}
    >
      {frame === 'browser' ? (
        <div className="flex items-center gap-1.5 border-b border-rule bg-paper-raised px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-rule-strong" />
          <span className="h-2 w-2 rounded-full bg-rule-strong" />
          <span className="h-2 w-2 rounded-full bg-rule-strong" />
        </div>
      ) : null}
      <Image
        src={image.src}
        alt={image.alt[lang]}
        width={image.width}
        height={image.height}
        sizes={sizes}
        priority={priority}
        loading={priority ? undefined : 'lazy'}
        className="h-auto w-full"
      />
      {image.caption ? (
        <figcaption className="border-t border-rule bg-paper-raised px-4 py-3 text-sm text-ink-muted">
          {image.caption[lang]}
        </figcaption>
      ) : null}
    </figure>
  )
}
