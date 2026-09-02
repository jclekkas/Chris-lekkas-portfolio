import type { Project } from '../schema'

export const esteroYMar: Project = {
  slug: 'estero-y-mar',
  name: 'Hotel Rancho Estero y Mar',

  status: 'concept',
  relationship: 'self-initiated',
  featured: false,
  order: 5,

  year: 2026,
  industry: { en: 'Hotel and resort', es: 'Hotel y resort' },
  location: {
    en: 'Playa El Pimental, San Luis Talpa, El Salvador',
    es: 'Playa El Pimental, San Luis Talpa, El Salvador',
  },
  audience: {
    en: 'Salvadoran families booking a day pass, and regional travellers pricing a weekend — nearly all of them on a phone, in Spanish.',
    es: 'Familias salvadoreñas que compran un day pass y viajeros de la región que cotizan un fin de semana; casi todos desde el teléfono y en español.',
  },
  role: {
    en: 'Self-initiated: strategy, design and build',
    es: 'Iniciativa propia: estrategia, diseño y construcción',
  },

  summary: {
    en: 'An uncommissioned concept redesign for a Salvadoran beach hotel: bilingual, phone-first, and able to price a stay or a day pass before the guest ever picks up the phone.',
    es: 'Un rediseño conceptual, hecho por iniciativa propia, para un hotel de playa salvadoreño: bilingüe, pensado para el teléfono y capaz de cotizar una estadía o un day pass antes de que el huésped levante el auricular.',
  },
  headline: {
    en: 'A beach hotel that can price its own product',
    es: 'Un hotel de playa capaz de cotizar su propio producto',
  },

  businessProblem: {
    en: [
      'Rancho Estero y Mar has a genuinely unusual property — an estuary on one side, the Pacific on the other, four pools and a restaurant — and a website that mainly informs. It does not quote a stay, it does not price the day pass with its restaurant credit, and it does not quote an event.',
      'So every enquiry starts from zero on the phone at reception, and the bookings that do not start there arrive through platforms that take a commission on each one.',
      'The interesting constraint is that a hotel this size does not want software to run. Whatever gets built has to work without a database, a server or a monthly platform fee.',
    ],
    es: [
      'Rancho Estero y Mar tiene una propiedad de verdad poco común —un estero de un lado, el Pacífico del otro, cuatro piscinas y un restaurante— y un sitio web que básicamente informa. No cotiza una estadía, no calcula el day pass con su consumo en el restaurante y no cotiza un evento.',
      'El resultado es que cada consulta empieza desde cero por teléfono en recepción, y las reservaciones que no empiezan ahí llegan por plataformas que se llevan una comisión en cada una.',
      'La restricción interesante es que un hotel de este tamaño no quiere administrar software. Lo que se construya tiene que funcionar sin base de datos, sin servidor y sin cuota mensual de plataforma.',
    ],
  },
  keyDecisions: {
    en: [
      'Price the stay in the browser, night by night — weekday and weekend rates, extra guests, extras — and show the total before anything is sent.',
      'Build a day pass calculator covering adults, children and the consumable restaurant credit, because the day pass is the property’s highest-volume product and the hardest thing to explain over the phone.',
      'Send enquiries into WhatsApp as a structured message with a reference number, because that is where the hotel’s guests already are and it needs no software to receive.',
      'Present room categories with rates, capacity and amenities instead of a gallery and a phone number.',
      'Put Spanish and English behind one control, with Spanish as the default rather than the translation.',
      'Ship it as static files so the running cost is the domain, and give the hotel a rates panel it can edit without calling anyone.',
    ],
    es: [
      'Cotizar la estadía en el navegador, noche por noche —tarifa entre semana y de fin de semana, huéspedes adicionales, extras— y mostrar el total antes de enviar nada.',
      'Construir una calculadora de day pass que contemple adultos, niños y el consumo incluido en el restaurante, porque el day pass es el producto de mayor volumen y el más difícil de explicar por teléfono.',
      'Enviar las consultas a WhatsApp como un mensaje estructurado con número de referencia, porque ahí ya están los huéspedes del hotel y no hace falta software para recibirlas.',
      'Presentar las categorías de habitación con tarifas, capacidad y amenidades, en vez de una galería y un número de teléfono.',
      'Poner español e inglés detrás de un solo control, con el español como opción por defecto y no como la traducción.',
      'Publicarlo como archivos estáticos, para que el costo de operación sea el dominio, y darle al hotel un panel de tarifas que pueda editar sin llamar a nadie.',
    ],
  },
  deliverables: {
    en: [
      'A booking flow that prices a stay night by night and shows the total before submission',
      'A day pass calculator for adults, children and the consumable restaurant credit',
      'An events enquiry that reaches sales with date, guest count and rooms already filled in',
      'Room categories with rates, capacity and amenities on one page',
      'Full Spanish and English behind a single control',
      'A rates panel the hotel can change itself',
      'A static build with no database, server or monthly platform fee',
    ],
    es: [
      'Un flujo de reservación que cotiza la estadía noche por noche y muestra el total antes de enviar',
      'Una calculadora de day pass para adultos, niños y el consumo incluido en el restaurante',
      'Una consulta de eventos que llega a ventas con fecha, número de invitados y habitaciones ya completados',
      'Categorías de habitación con tarifas, capacidad y amenidades en una sola página',
      'Español e inglés completos detrás de un solo control',
      'Un panel de tarifas que el propio hotel puede modificar',
      'Una construcción estática, sin base de datos, sin servidor y sin cuota mensual de plataforma',
    ],
  },

  evidence: {
    en: 'Built and tested as a working prototype rather than a mockup, and presented to the hotel. The hotel replied that it was already undergoing a redesign. Commercial adoption has not been measured and none is expected.',
    es: 'Construido y probado como prototipo funcional, no como maqueta, y presentado al hotel. El hotel respondió que ya estaba en proceso de rediseño. No se ha medido ninguna adopción comercial ni se espera ninguna.',
  },
  currentState: {
    en: 'An uncommissioned concept. It is not the hotel’s live website, no work was commissioned, and there are no discussions under way — the hotel told us it was already redesigning.',
    es: 'Un concepto no comisionado. No es el sitio web del hotel, no se contrató ningún trabajo y no hay conversaciones en curso: el hotel indicó que ya estaba rediseñando.',
  },

  images: {
    desktop: {
      src: '/projects/estero-y-mar/homepage-desktop.webp',
      width: 2160,
      height: 2700,
      alt: {
        en: 'The Hotel Rancho Estero y Mar concept home page on a desktop browser, with the booking bar under the hero.',
        es: 'La página principal del concepto para Hotel Rancho Estero y Mar en un navegador de escritorio, con la barra de reservación bajo la portada.',
      },
    },
    mobile: {
      src: '/projects/estero-y-mar/homepage-mobile.webp',
      width: 780,
      height: 3200,
      alt: {
        en: 'The same concept home page on a phone, scrolled through the property introduction.',
        es: 'La misma página principal del concepto en un teléfono, recorrida hasta la presentación de la propiedad.',
      },
    },
    gallery: [
      {
        src: '/projects/estero-y-mar/habitaciones.webp',
        width: 2160,
        height: 2250,
        alt: {
          en: 'The rooms page, showing four room categories with rates and capacity.',
          es: 'La página de habitaciones, con cuatro categorías, tarifas y capacidad.',
        },
        caption: {
          en: 'Four room categories, each with rates, capacity and amenities in one place.',
          es: 'Cuatro categorías de habitación, cada una con tarifas, capacidad y amenidades en un solo lugar.',
        },
      },
      {
        src: '/projects/estero-y-mar/reservar.webp',
        width: 2160,
        height: 2100,
        alt: {
          en: 'The booking page, with dates, guests and a running total.',
          es: 'La página de reservación, con fechas, huéspedes y un total que se actualiza.',
        },
        caption: {
          en: 'Dates, guests and extras priced night by night before anything is sent.',
          es: 'Fechas, huéspedes y extras cotizados noche por noche antes de enviar nada.',
        },
      },
      {
        src: '/projects/estero-y-mar/day-pass-mobile.webp',
        width: 780,
        height: 3000,
        alt: {
          en: 'The day pass calculator on a phone, with adults, children and restaurant credit.',
          es: 'La calculadora de day pass en un teléfono, con adultos, niños y consumo en el restaurante.',
        },
        caption: {
          en: 'The day pass calculator — the property’s highest-volume product.',
          es: 'La calculadora de day pass: el producto de mayor volumen de la propiedad.',
        },
      },
      {
        src: '/projects/estero-y-mar/restaurante.webp',
        width: 2160,
        height: 1950,
        alt: {
          en: 'The restaurant page with the menu laid out by section.',
          es: 'La página del restaurante con el menú organizado por secciones.',
        },
        caption: {
          en: 'The restaurant menu, laid out by section rather than as a PDF download.',
          es: 'El menú del restaurante, presentado por secciones en vez de como un PDF para descargar.',
        },
      },
      {
        src: '/projects/estero-y-mar/experiencias.webp',
        width: 2160,
        height: 2100,
        alt: {
          en: 'The experiences page, covering boat trips, pools, beach and wildlife.',
          es: 'La página de experiencias, con paseos en lancha, piscinas, playa y vida silvestre.',
        },
        caption: {
          en: 'Experiences, with the estuary and the beach given equal weight.',
          es: 'Las experiencias, con el estero y la playa tratados con el mismo peso.',
        },
      },
    ],
  },

  publicPermission: 'approved',
  lastVerified: '2026-09-02',
}
