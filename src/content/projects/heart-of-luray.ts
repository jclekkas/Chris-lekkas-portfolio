import type { Project } from '../schema'

export const heartOfLuray: Project = {
  slug: 'heart-of-luray',
  name: 'Heart of Luray',

  status: 'live',
  relationship: 'owned',
  featured: true,
  order: 1,

  year: 2026,
  industry: { en: 'Short-term rental', es: 'Alquiler vacacional' },
  location: {
    en: 'Luray, Virginia, United States',
    es: 'Luray, Virginia, Estados Unidos',
  },
  audience: {
    en: 'Families and couples planning a Shenandoah Valley weekend, most of them arriving from a phone.',
    es: 'Familias y parejas que planean un fin de semana en el valle de Shenandoah, casi siempre desde el teléfono.',
  },
  role: {
    en: 'Owner, product strategist, experience designer and operator',
    es: 'Dueño, estratega de producto, diseñador de la experiencia y operador',
  },

  summary: {
    en: 'A three-bedroom Shenandoah Valley rental I own and run, with a direct-booking site in front of it and written, largely automated operations behind it.',
    es: 'Una casa de tres habitaciones en el valle de Shenandoah que es mía y que yo mismo opero, con un sitio de reservación directa al frente y una operación escrita y en buena parte automatizada por detrás.',
  },
  headline: {
    en: 'The business I run on the systems I build',
    es: 'El negocio que opero con los sistemas que construyo',
  },

  businessProblem: {
    en: [
      'A short-term rental is two businesses wearing one name. There is the one guests see — photographs, what the house sleeps, how far it is to Luray Caverns, and whether they can book without making a phone call. Then there is the one nobody sees: the messages that have to go out on time, the door codes, the turnover between a check-out and the next check-in, and the hundred small procedures that live in the owner’s head until the day they are needed and cannot be found.',
      'Every booking that arrives through a listing platform also arrives with a commission attached and a guest the platform owns, not the property. Building a direct channel does not remove that overnight, but without one there is no alternative to build toward.',
    ],
    es: [
      'Un alquiler vacacional son dos negocios con un solo nombre. Está el que ve el huésped: las fotos, cuánta gente duerme en la casa, a qué distancia quedan las Cavernas de Luray y si puede reservar sin tener que llamar. Y está el que no ve nadie: los mensajes que deben salir a tiempo, los códigos de acceso, la limpieza entre una salida y la siguiente entrada, y los cien procedimientos pequeños que viven en la cabeza del dueño hasta el día en que hacen falta y no aparecen.',
      'Cada reservación que llega por una plataforma llega también con una comisión encima y con un huésped que le pertenece a la plataforma, no a la propiedad. Abrir un canal directo no cambia eso de un día para otro, pero sin ese canal no hay nada hacia dónde avanzar.',
    ],
  },
  keyDecisions: {
    en: [
      'Treat the website as one half of the product and the operating manual as the other. The site is what most people would have built; the written operations are what actually changed how the property runs.',
      'Build direct booking as a long-term channel rather than a switch to flip. The point is to own the guest relationship over years, not to claim an overnight change in where bookings come from.',
      'Answer the questions that otherwise arrive as messages at ten at night — rates by season, sleeping arrangements, distance to the Caverns and Skyline Drive — on the page, before anyone has to ask.',
      'Automate check-in and check-out end to end, so a guest gets what they need when they need it rather than when someone remembers to send it.',
      'Write the operations down in a form somebody else could follow, because a property that only one person can run is not a system.',
    ],
    es: [
      'Tratar el sitio web como una mitad del producto y el manual de operación como la otra. El sitio es lo que casi cualquiera habría construido; lo que de verdad cambió cómo funciona la propiedad fue poner la operación por escrito.',
      'Construir la reservación directa como un canal de largo plazo y no como un interruptor. La idea es ser dueño de la relación con el huésped a lo largo de los años, no presumir un cambio inmediato en el origen de las reservaciones.',
      'Responder en la página las preguntas que si no llegan como mensajes a las diez de la noche: tarifas por temporada, cómo se distribuyen las camas, y qué tan lejos quedan las Cavernas y Skyline Drive.',
      'Automatizar la entrada y la salida de punta a punta, para que el huésped reciba lo que necesita cuando lo necesita y no cuando alguien se acuerda de mandarlo.',
      'Dejar la operación escrita de forma que otra persona pueda seguirla, porque una propiedad que solo una persona sabe manejar no es un sistema.',
    ],
  },
  deliverables: {
    en: [
      'A direct-booking website with seasonal rates, availability and a booking path that does not require a phone call',
      'Property positioning and listing copy written for the Shenandoah Valley traveller',
      'Photography direction and listing optimisation across the channels the property sells on',
      'Automated guest messaging for booking, arrival, stay and departure',
      'A written operating manual covering turnover, access, supplies and recurring maintenance',
      'Pricing and channel management as an ongoing routine rather than a one-off setup',
    ],
    es: [
      'Un sitio web de reservación directa con tarifas por temporada, disponibilidad y un camino de reserva que no obliga a llamar',
      'Posicionamiento de la propiedad y textos escritos para quien viaja al valle de Shenandoah',
      'Dirección de fotografía y optimización de los anuncios en los canales donde se vende la propiedad',
      'Mensajería automática al huésped: reserva, llegada, estadía y salida',
      'Un manual de operación escrito que cubre limpieza entre estadías, accesos, insumos y mantenimiento recurrente',
      'Gestión de precios y canales como rutina permanente, no como una configuración de una sola vez',
    ],
  },

  evidence: {
    en: 'The property is live with direct-booking capability. It has not recorded a direct booking yet, so there is no conversion or commission result to report — the honest measure today is that the channel exists and the operations behind it are written down and repeatable.',
    es: 'La propiedad está en línea y con capacidad de reservación directa. Todavía no ha registrado una reservación directa, así que no hay resultado de conversión ni de comisiones que reportar: lo que sí se puede afirmar hoy es que el canal existe y que la operación que lo sostiene está escrita y es repetible.',
  },
  currentState: {
    en: 'Live, with a direct-booking channel designed to reduce long-term dependence on third-party platforms. Direct-booking performance is still being established.',
    es: 'En línea, con un canal de reservación directa pensado para reducir a largo plazo la dependencia de plataformas de terceros. El desempeño de la reservación directa todavía se está construyendo.',
  },

  liveUrl: {
    url: 'https://heartofluray.com',
    label: { en: 'Visit heartofluray.com', es: 'Visitar heartofluray.com' },
  },

  images: {
    desktop: {
      src: '/projects/heart-of-luray/homepage-desktop.webp',
      width: 2000,
      height: 1083,
      alt: {
        en: 'The Heart of Luray home page on a desktop browser, showing the house and the booking panel.',
        es: 'La página principal de Heart of Luray en un navegador de escritorio, con la casa y el panel de reservación.',
      },
    },
    gallery: [],
  },

  publicPermission: 'approved',
  lastVerified: '2026-09-02',
}
