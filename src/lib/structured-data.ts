import { CONTACT_EMAIL, SITE_URL, absolute } from '@/content/site'
import { getCopy } from '@/content/copy'
import type { Language, Project } from '@/content/projects'
import { HTML_LANG } from '@/content/site'

const PERSON_ID = `${SITE_URL}/#chris`

/**
 * Only claims we can stand behind. No aggregate ratings, no reviews, no
 * organisation credentials that do not exist.
 */
export function personSchema(lang: Language) {
  const copy = getCopy(lang)
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': PERSON_ID,
    name: 'Chris Lekkas',
    url: SITE_URL,
    email: `mailto:${CONTACT_EMAIL}`,
    jobTitle: copy.meta.jobTitle,
    description: copy.meta.description,
    knowsLanguage: ['en', 'es'],
    image: absolute('/chris/portrait.webp'),
  }
}

export function websiteSchema(lang: Language) {
  const copy = getCopy(lang)
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website-${lang}`,
    url: `${SITE_URL}/${lang}/`,
    name: copy.meta.title,
    description: copy.meta.description,
    inLanguage: HTML_LANG[lang],
    publisher: { '@id': PERSON_ID },
  }
}

export function professionalServiceSchema(lang: Language) {
  const copy = getCopy(lang)
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/#service`,
    name: copy.meta.serviceName,
    url: `${SITE_URL}/${lang}/`,
    email: `mailto:${CONTACT_EMAIL}`,
    description: copy.meta.description,
    availableLanguage: ['English', 'Spanish'],
    provider: { '@id': PERSON_ID },
  }
}

/**
 * A case study is a CreativeWork about the project, authored by Chris. We do
 * not claim it is the business's own site, and we never attach an outcome we
 * have not measured.
 */
export function caseStudySchema(project: Project, lang: Language) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    '@id': `${SITE_URL}/${lang}/work/${project.slug}/#case-study`,
    name: project.name,
    headline: project.headline[lang],
    abstract: project.summary[lang],
    url: `${SITE_URL}/${lang}/work/${project.slug}/`,
    inLanguage: HTML_LANG[lang],
    dateCreated: String(project.year),
    author: { '@id': PERSON_ID },
    ...(project.images.desktop ? { image: absolute(project.images.desktop.src) } : {}),
  }
}

export function breadcrumbSchema(
  _lang: Language,
  trail: readonly { name: string; path: string }[],
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  }
}
