import type { Language, LocalizedList, LocalizedText } from './schema'

/**
 * The only way to read localized content.
 *
 * Both helpers return primitives, so a component physically cannot hand a
 * `{ en, es }` object to JSX. That is the fix for the `[object Object]` strings
 * the previous build shipped — it is a type-level guarantee, not a review note.
 */
export function pick(value: LocalizedText, lang: Language): string {
  return value[lang]
}

export function pickList(value: LocalizedList, lang: Language): readonly string[] {
  return value[lang]
}

/** Same as `pick`, but tolerant of an absent value. */
export function pickOptional(
  value: LocalizedText | null | undefined,
  lang: Language,
): string | undefined {
  return value ? value[lang] : undefined
}

export const OTHER_LANGUAGE: Record<Language, Language> = { en: 'es', es: 'en' }
