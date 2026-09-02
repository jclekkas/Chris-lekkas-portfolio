/**
 * The shape of every interface string on the site.
 *
 * Both `en.ts` and `es.ts` are typed against this, so a missing Spanish string
 * is a compile error rather than an English fragment leaking onto a Spanish
 * page. There are no lookup keys in the components and therefore no way to
 * render a raw key.
 */

import type { ProjectRelationship, ProjectStatus } from '../schema'

export interface LabelledTerm {
  label: string
  description: string
}

export interface TitledBody {
  title: string
  body: string
}

export interface SiteCopy {
  meta: {
    title: string
    titleTemplate: string
    description: string
    jobTitle: string
    serviceName: string
  }

  nav: {
    brand: string
    brandTagline: string
    skipToContent: string
    work: string
    about: string
    contact: string
    cta: string
    openMenu: string
    closeMenu: string
    language: string
    english: string
    spanish: string
  }

  status: Record<ProjectStatus, LabelledTerm>
  relationship: Record<ProjectRelationship, LabelledTerm>

  home: {
    heroEyebrow: string
    heroHeadline: string
    heroBody: string
    heroPrimaryCta: string
    heroSecondaryCta: string
    creditsTitle: string
    credits: readonly string[]
    workEyebrow: string
    workTitle: string
    workBody: string
    workCta: string
    processEyebrow: string
    processTitle: string
    processBody: string
    process: readonly TitledBody[]
    aboutEyebrow: string
    aboutTitle: string
    aboutBody: string
    aboutCta: string
    conceptsEyebrow: string
    conceptsTitle: string
    conceptsBody: string
    pricingEyebrow: string
    pricingTitle: string
    pricingBody: string
    pricingCta: string
    contactTitle: string
    contactBody: string
    contactCta: string
  }

  work: {
    eyebrow: string
    title: string
    intro: string
    activeTitle: string
    activeIntro: string
    conceptsTitle: string
    conceptsIntro: string
    viewProject: string
    legendTitle: string
    statusLegendTitle: string
    relationshipLegendTitle: string
  }

  project: {
    backToWork: string
    overview: string
    business: string
    location: string
    industry: string
    year: string
    audience: string
    role: string
    status: string
    relationship: string
    problem: string
    decisions: string
    decisionsNote: string
    built: string
    evidence: string
    noEvidence: string
    currentState: string
    closerLook: string
    related: string
    lastVerified: string
    pendingApproval: string
  }

  about: {
    eyebrow: string
    title: string
    lead: string
    body: readonly string[]
    capabilitiesTitle: string
    capabilities: readonly TitledBody[]
    principlesTitle: string
    principles: readonly string[]
    workCta: string
  }

  contact: {
    eyebrow: string
    title: string
    lead: string
    nameLabel: string
    businessLabel: string
    emailLabel: string
    websiteLabel: string
    messageLabel: string
    optional: string
    required: string
    messagePlaceholder: string
    submit: string
    submitting: string
    orEmail: string
    successTitle: string
    successBody: string
    errorTitle: string
    errorBody: string
    staticTitle: string
    staticBody: string
    staticCta: string
    validation: { name: string; email: string; message: string }
    reassurance: string
  }

  notFound: {
    title: string
    body: string
    workCta: string
    homeCta: string
  }

  footer: {
    tagline: string
    siteHeading: string
    contactHeading: string
    home: string
    languages: string
    rights: string
  }
}
