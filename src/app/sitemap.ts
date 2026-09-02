import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/content/site'
import { LANGUAGES } from '@/content/schema'
import { PROJECTS } from '@/content/projects'

export const dynamic = 'force-static'

/**
 * Built from the project list, so a removed project cannot linger in the
 * sitemap and a new one cannot be forgotten.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const pages: { path: string; priority: number; changeFrequency: 'monthly' | 'yearly' }[] = [
    { path: '', priority: 1, changeFrequency: 'monthly' },
    { path: '/work', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/about', priority: 0.7, changeFrequency: 'yearly' },
    { path: '/contact', priority: 0.8, changeFrequency: 'yearly' },
    ...PROJECTS.map((project) => ({
      path: `/work/${project.slug}`,
      priority: 0.8,
      changeFrequency: 'yearly' as const,
    })),
  ]

  return LANGUAGES.flatMap((lang) =>
    pages.map((page) => ({
      url: `${SITE_URL}/${lang}${page.path}/`,
      lastModified: new Date('2026-09-02'),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: {
        languages: Object.fromEntries(
          LANGUAGES.map((code) => [code, `${SITE_URL}/${code}${page.path}/`]),
        ),
      },
    })),
  )
}
