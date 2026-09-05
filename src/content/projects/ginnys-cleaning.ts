import type { Project } from '../schema'

export const ginnysCleaning: Project = {
  slug: 'ginnys-cleaning',
  name: "Ginny's Cleaning Services",

  status: 'in-progress',
  relationship: 'client',
  featured: true,
  order: 4,

  year: 2026,
  industry: {
    en: 'Cleaning and turnover services',
    es: 'Limpieza y preparación entre estadías',
  },
  location: {
    en: 'Luray, Virginia, United States',
    es: 'Luray, Virginia, Estados Unidos',
  },
  audience: {
    en: 'Homeowners and offices in Page County, plus vacation-rental owners who need a turnover between a check-out and the next check-in.',
    es: 'Dueños de casa y oficinas en el condado de Page, y dueños de alquileres vacacionales que necesitan dejar la casa lista entre una salida y la siguiente entrada.',
  },
  role: {
    en: 'Product strategist, designer and builder',
    es: 'Estratega de producto, diseñador y constructor',
  },

  summary: {
    en: 'A site for a Luray cleaning company that also turns over vacation rentals across the Shenandoah Valley, built to turn a visitor into a quote request.',
    es: 'Un sitio para una empresa de limpieza de Luray que además prepara alquileres vacacionales en el valle de Shenandoah, hecho para convertir a un visitante en una solicitud de cotización.',
  },
  headline: {
    en: 'A cleaning business built around the turnover clock',
    es: 'Un negocio de limpieza construido alrededor del reloj de la limpieza entre estadías',
  },

  businessProblem: {
    en: [
      'A locally owned cleaning company in Luray, Virginia serving Page County and the Shenandoah Valley — houses, offices, deep cleans, and the vacation-rental turnovers that have to happen between a check-out and a check-in the same afternoon.',
      'The work was arriving through word of mouth and a Facebook page. Both work, and both cap the business at the people who already know it exists. Someone searching for a cleaner in Page County had no way to find it and no way to ask for a price.',
    ],
    es: [
      'Una empresa de limpieza local en Luray, Virginia, que atiende el condado de Page y el valle de Shenandoah: casas, oficinas, limpiezas profundas y la preparación de alquileres vacacionales que tiene que ocurrir entre una salida y una entrada la misma tarde.',
      'El trabajo llegaba de boca en boca y por una página de Facebook. Las dos cosas funcionan, y las dos le ponen techo al negocio: llega solo hasta quienes ya saben que existe. Alguien que buscara limpieza en el condado de Page no tenía cómo encontrarla ni cómo pedir un precio.',
    ],
  },
  keyDecisions: {
    en: [
      'Give each service its own page — residential, deep clean, commercial and vacation-rental turnover — so each can be found on its own terms rather than as a bullet in a list.',
      'Treat vacation-rental turnover as its own offer rather than a footnote. It is a different buyer with a different clock and a different reason to care about reliability.',
      'Keep the quote request to what is genuinely needed to give a price. A long form on a phone in a driveway is a form nobody finishes.',
      'Put click-to-call everywhere, because most of this traffic arrives on a phone and calling is what people in this category actually do.',
      'Lay the local-search groundwork properly: service-area pages, structured data, and page titles written for what people in Page County actually type.',
      'Build it to load fast on a rural connection, which is the real network condition for much of the service area.',
    ],
    es: [
      'Darle a cada servicio su propia página —limpieza residencial, limpieza profunda, comercial y preparación de alquileres vacacionales— para que cada uno se encuentre por su cuenta y no como una viñeta dentro de una lista.',
      'Tratar la preparación de alquileres vacacionales como una oferta propia y no como una nota al pie. Es otro comprador, con otro reloj y otra razón para exigir confiabilidad.',
      'Limitar la solicitud de cotización a lo que de verdad hace falta para dar un precio. Un formulario largo, en el teléfono y en la entrada de una casa, es un formulario que nadie termina.',
      'Poner el botón de llamar en todas partes, porque casi todo el tráfico llega desde el teléfono y llamar es lo que la gente hace en esta categoría.',
      'Dejar bien puesta la base de búsqueda local: páginas por zona de servicio, datos estructurados y títulos escritos con las palabras que la gente del condado de Page realmente escribe.',
      'Construirlo para que cargue rápido en una conexión rural, que es la condición real de buena parte de la zona de servicio.',
    ],
  },
  deliverables: {
    en: [
      'A page for each service, findable and linkable on its own',
      'Vacation-rental turnover presented as a distinct offer with its own page',
      'A short quote-request form that asks only what a price needs',
      'Click-to-call throughout, sized for a thumb',
      'Service-area pages and structured data for local search',
      'A build tuned to load quickly on a slow rural connection',
    ],
    es: [
      'Una página por cada servicio, que se puede encontrar y enlazar por separado',
      'La preparación de alquileres vacacionales presentada como oferta propia, con su propia página',
      'Un formulario corto de cotización que pide solo lo que hace falta para dar un precio',
      'Botón de llamar en todo el sitio, con el tamaño adecuado para el pulgar',
      'Páginas por zona de servicio y datos estructurados para la búsqueda local',
      'Una construcción ajustada para cargar rápido en una conexión rural lenta',
    ],
  },

  evidence: {
    en: 'The original concept converted into a paid client engagement. That commercial change is the evidence available today; the site has not launched, so there are no traffic, lead or conversion figures to report.',
    es: 'El concepto original se convirtió en un trabajo remunerado con el cliente. Ese cambio comercial es la evidencia disponible hoy; el sitio aún no se ha lanzado, así que no hay cifras de tráfico, de contactos ni de conversión que reportar.',
  },
  currentState: {
    en: 'In progress. The original concept converted into a client engagement and is now being prepared for launch.',
    es: 'En proceso. El concepto original se convirtió en un trabajo con el cliente y ahora se está preparando para el lanzamiento.',
  },

  prototypeUrl: {
    url: 'https://clever-llama-c3ba2e.netlify.app',
    label: { en: 'View working prototype', es: 'Ver el prototipo funcional' },
  },

  images: {
    desktop: {
      src: '/projects/ginnys-cleaning/homepage-desktop.webp',
      width: 1324,
      height: 943,
      alt: {
        en: "The Ginny's Cleaning Services home page on a desktop browser, with the services and quote request in view.",
        es: 'La página principal de Ginny’s Cleaning Services en un navegador de escritorio, con los servicios y la solicitud de cotización a la vista.',
      },
    },
    gallery: [],
  },

  publicPermission: 'approved',
  lastVerified: '2026-09-02',
}
