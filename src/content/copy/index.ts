import type { Language } from '../schema'
import { en } from './en'
import { es } from './es'
import type { SiteCopy } from './types'

const COPY: Record<Language, SiteCopy> = { en, es }

export function getCopy(lang: Language): SiteCopy {
  return COPY[lang]
}

export type { SiteCopy }
