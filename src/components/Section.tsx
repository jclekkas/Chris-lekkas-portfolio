import type { ReactNode } from 'react'
import { Container } from './Container'
import { Eyebrow } from './Eyebrow'

/**
 * One section primitive so spacing and heading levels stay consistent, and so
 * an eyebrow can never accidentally repeat the heading below it — they are
 * separate props and the pair is written once, in the copy file.
 */
export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className = '',
  width = 'default',
  headingLevel = 'h2',
}: {
  id?: string
  eyebrow?: string
  title?: string
  intro?: string
  children?: ReactNode
  className?: string
  width?: 'default' | 'narrow' | 'wide'
  headingLevel?: 'h2' | 'h3'
}) {
  const Heading = headingLevel

  return (
    <section id={id} className={`py-16 sm:py-24 ${className}`}>
      <Container width={width}>
        {eyebrow || title || intro ? (
          <div className="max-w-2xl">
            {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
            {title ? (
              <Heading className="mt-3 text-3xl leading-tight sm:text-4xl">{title}</Heading>
            ) : null}
            {intro ? <p className="mt-4 text-lg leading-relaxed text-ink-soft">{intro}</p> : null}
          </div>
        ) : null}
        {children ? (
          <div className={eyebrow || title ? 'mt-10 sm:mt-14' : ''}>{children}</div>
        ) : null}
      </Container>
    </section>
  )
}
