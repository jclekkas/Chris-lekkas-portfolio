import type { Project } from '../schema'

export const handyDanny: Project = {
  slug: 'handy-danny',
  name: 'Handy Danny',

  status: 'concept',
  relationship: 'self-initiated',
  featured: false,
  order: 6,

  year: 2026,
  industry: { en: 'Home services', es: 'Servicios para el hogar' },
  location: {
    en: 'Montgomery County, Maryland and Northern Virginia',
    es: 'Condado de Montgomery, Maryland y el norte de Virginia',
  },
  audience: {
    en: 'Homeowners with something broken who want to know, quickly, whether this person does that work and what it will cost.',
    es: 'Dueños de casa con algo descompuesto que quieren saber, rápido, si esta persona hace ese trabajo y cuánto va a costar.',
  },
  role: {
    en: 'Self-initiated: strategy, design and build',
    es: 'Iniciativa propia: estrategia, diseño y construcción',
  },

  summary: {
    en: 'An uncommissioned concept for a bilingual handyman working Montgomery County and Northern Virginia, built around the way people actually hire one: send a photo, get a price.',
    es: 'Un concepto hecho por iniciativa propia para un handyman bilingüe que trabaja en el condado de Montgomery y el norte de Virginia, construido alrededor de cómo se contrata a uno de verdad: mandar una foto y recibir un precio.',
  },
  headline: {
    en: 'One person, one number, one price agreed up front',
    es: 'Una persona, un número, un precio acordado desde el principio',
  },

  businessProblem: {
    en: [
      'Hiring a handyman is a small act of trust made under mild annoyance. Something is broken, the homeowner does not want to call four different trades, and what they want to know is whether this person does that kind of work, whether the price will be a surprise, and how fast they can get an answer.',
      'Most sites in this trade answer none of those three in the first screen. They open with a stock photo of a toolbelt and a form.',
    ],
    es: [
      'Contratar a un handyman es un pequeño acto de confianza hecho con algo de fastidio. Algo se descompuso, el dueño de casa no quiere llamar a cuatro oficios distintos, y lo que quiere saber es si esta persona hace ese tipo de trabajo, si el precio le va a dar una sorpresa y qué tan rápido puede tener respuesta.',
      'Casi ningún sitio del rubro responde esas tres cosas en la primera pantalla. Abren con una foto de archivo de un cinturón de herramientas y un formulario.',
    ],
  },
  keyDecisions: {
    en: [
      'Name the person in the headline, because a one-person trade business is the person.',
      'Build the quoting path around texting a photo of the problem, which is what people already do with a friend before they do it with a tradesperson.',
      'State the flat price agreed before work starts as a promise on the page, not a clause buried in terms.',
      'Present the full range — plumbing, carpentry, drywall, tile, doors, paint — as "you only have to call one person", which is the actual offer.',
      'Make the service area explicit, because half the wasted calls in this trade are outside it.',
      'Treat English and Spanish as a first-class toggle rather than an afterthought; in this market it decides who feels comfortable calling at all.',
      'Use illustration rather than stock photography, so the site does not look like every other contractor template.',
    ],
    es: [
      'Poner el nombre de la persona en el titular, porque un negocio de oficio de una sola persona es esa persona.',
      'Construir el camino de cotización alrededor de mandar una foto del problema, que es lo que la gente ya hace con un amigo antes de hacerlo con un profesional.',
      'Poner el precio cerrado, acordado antes de empezar, como una promesa en la página y no como una cláusula escondida en los términos.',
      'Presentar todo el rango de trabajo —plomería, carpintería, tablayeso, azulejo, puertas, pintura— como "solo tiene que llamar a una persona", que es la oferta real.',
      'Dejar explícita la zona de servicio, porque la mitad de las llamadas perdidas en este oficio vienen de fuera de ella.',
      'Tratar el inglés y el español como un cambio de idioma de primera clase y no como un añadido; en este mercado eso decide quién se anima a llamar.',
      'Usar ilustración en vez de fotografía de archivo, para que el sitio no se vea como cualquier otra plantilla de contratista.',
    ],
  },
  deliverables: {
    en: [
      'A homepage that names the person and the work in the first screen',
      'A photo-first quote request built for a phone camera',
      'Flat pricing stated up front as a plain promise',
      'The full trade range presented as a single point of contact',
      'An explicit service area for Montgomery County and Northern Virginia',
      'English and Spanish as an equal, first-class toggle',
      'An illustrated visual system instead of stock photography',
    ],
    es: [
      'Una página principal que nombra a la persona y el trabajo en la primera pantalla',
      'Una solicitud de cotización que empieza por la foto, pensada para la cámara del teléfono',
      'Precio cerrado, dicho por adelantado y en términos claros',
      'Todo el rango de oficios presentado como un solo punto de contacto',
      'Una zona de servicio explícita para el condado de Montgomery y el norte de Virginia',
      'Inglés y español como cambio de idioma equivalente y de primera clase',
      'Un sistema visual ilustrado en lugar de fotografía de archivo',
    ],
  },

  evidence: {
    en: 'Built and tested as a working prototype; commercial adoption has not been measured.',
    es: 'Construido y probado como prototipo funcional; no se ha medido ninguna adopción comercial.',
  },
  currentState: {
    en: 'An uncommissioned concept. No work has been commissioned and there are no discussions under way.',
    es: 'Un concepto no comisionado. No se ha contratado ningún trabajo y no hay conversaciones en curso.',
  },

  prototypeUrl: {
    url: 'https://loquacious-alpaca-53c292.netlify.app',
    label: { en: 'View working prototype', es: 'Ver el prototipo funcional' },
  },

  images: {
    desktop: {
      src: '/projects/handy-danny/homepage-desktop.webp',
      width: 1423,
      height: 946,
      alt: {
        en: 'The Handy Danny concept home page on a desktop browser, with the photo-first quote request in view.',
        es: 'La página principal del concepto Handy Danny en un navegador de escritorio, con la solicitud de cotización por foto a la vista.',
      },
    },
    gallery: [],
  },

  publicPermission: 'approved',
  lastVerified: '2026-09-02',
}
