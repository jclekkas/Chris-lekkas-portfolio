import type { Project } from '../schema'

export const enlaceMental: Project = {
  slug: 'enlace-mental',
  name: 'Enlace Mental',

  status: 'in-progress',
  relationship: 'collaboration',
  featured: true,
  order: 1,

  year: 2026,
  industry: {
    en: 'Media, knowledge and personal development',
    es: 'Medios, conocimiento y desarrollo personal',
  },
  location: { en: 'El Salvador', es: 'El Salvador' },
  audience: {
    en: 'Spanish-speaking adults who want to understand how they think and decide — an audience to build, not only patients to book.',
    es: 'Adultos hispanohablantes que quieren entender cómo piensan y cómo deciden: una audiencia por construir, no solo pacientes por agendar.',
  },
  role: {
    en: 'Product strategist, digital experience lead and platform builder',
    es: 'Estratega de producto, responsable de la experiencia digital y constructor de la plataforma',
  },

  summary: {
    en: 'A Spanish-first media, knowledge and personal-development platform built with psychologist Rolando López in El Salvador — organised around mental structure, internal dialogue and decision-making, with a podcast season as its first distribution vehicle.',
    es: 'Una plataforma en español de medios, conocimiento y desarrollo personal construida junto al psicólogo Rolando López en El Salvador, organizada alrededor de la estructura mental, el diálogo interno y la toma de decisiones, con una temporada de pódcast como primer vehículo de distribución.',
  },
  headline: {
    en: 'A platform for how people think, not a booking page for a practice',
    es: 'Una plataforma sobre cómo piensa la gente, no una página para agendar consultas',
  },

  businessProblem: {
    en: [
      'Rolando López has spent close to two decades working one person at a time. That work has a real advantage — it adapts to whoever is in the room — and an equally real ceiling: an hour helps one person. Behind it sits a body of thinking about mental structure, internal dialogue and decision-making that has never existed anywhere outside those conversations.',
      'The obvious build is a therapy-practice website with an appointment button. It would have answered a much smaller question than the one on the table, and it would have set the ceiling permanently at the size of one person’s calendar.',
      'The real problem is a platform and distribution problem: what is the digital home for a body of work that arrives first as a podcast season, and may later become courses, a method and a book — in Spanish, for an audience that has no single place to meet it?',
    ],
    es: [
      'Rolando López lleva cerca de dos décadas trabajando de persona en persona. Ese trabajo tiene una ventaja real —se ajusta a quien tiene enfrente— y un techo igual de real: una hora ayuda a una persona. Detrás hay un cuerpo de pensamiento sobre la estructura mental, el diálogo interno y la toma de decisiones que hasta ahora no existía fuera de esas conversaciones.',
      'Lo obvio era un sitio de consulta psicológica con un botón para agendar. Habría respondido una pregunta mucho más pequeña que la que estaba sobre la mesa, y habría dejado el techo fijado para siempre en el tamaño de la agenda de una persona.',
      'El problema real es de plataforma y de distribución: ¿cuál es la casa digital de un cuerpo de trabajo que sale primero como temporada de pódcast y que más adelante podría volverse cursos, un método y un libro, en español y para una audiencia que hoy no tiene un solo lugar donde encontrarlo?',
    ],
  },
  keyDecisions: {
    en: [
      'Build a platform, not a practice site. The measure of success is an audience that comes back and a body of work that accumulates — not an appointment form that converts. Nothing on the site sells a consultation.',
      'Scope it to the smallest product that can launch Season 1 and make the larger project credible. Courses, the method and the book are designed for as later phases, not built before anyone has committed to them.',
      'Organise the whole platform around the three ideas the work is actually about — understand, change, decide — rather than around clinical service categories. Every episode, strategy and tool hangs off one of them.',
      'Treat the podcast as a distribution vehicle and the site as the permanent home, so a conversation becomes analysis, a strategy and a tool that stay findable instead of scrolling away.',
      'Spanish is the product, not the translation. Spanish lives at the root and English sits under /en. The asymmetry is deliberate: the first audience is Spanish-speaking, and the Spanish URLs should not lose ground to make room for a second language.',
      'Give every piece of content a provenance flag — written for the prototype, confirmed by Rolando, or pending his approval — so the build could move fast without anyone later mistaking placeholder copy for his words.',
      'Invent nothing. Guests appear by their profile rather than by name because the profiles are confirmed and the people are not. No credentials, licences, course names, book title, prices, audience figures or testimonials were written that had not been verified.',
      'Choose minimal privacy by design over the usual analytics stack: no accounts, no payments, no cookies, no third-party scripts, no marketing tags. Sharing is user-initiated and video only loads if someone presses play.',
      'Build share links that already carry campaign parameters per guest and per channel, so when Season 1 goes out it is possible to see which guest and which channel brought the audience without instrumenting anything later.',
      'Prerender every route to static HTML with its own title, description, canonical and share image in both languages, so the platform can be launched, indexed and shared without a backend to run or pay for.',
    ],
    es: [
      'Construir una plataforma, no un sitio de consulta. La medida de éxito es una audiencia que vuelve y una obra que se acumula, no un formulario de cita que convierte. Nada en el sitio vende una consulta.',
      'Acotarlo al producto más pequeño capaz de lanzar la temporada 1 y hacer creíble el proyecto más grande. Los cursos, el método y el libro están previstos como fases posteriores, no construidos antes de que alguien se comprometa con ellos.',
      'Organizar toda la plataforma alrededor de las tres ideas de las que trata el trabajo —entender, cambiar, decidir— y no alrededor de categorías de servicio clínico. Cada episodio, estrategia y herramienta cuelga de una de ellas.',
      'Tratar el pódcast como vehículo de distribución y el sitio como casa permanente, para que una conversación se convierta en análisis, estrategia y herramienta, y siga siendo encontrable en vez de perderse al bajar por una lista.',
      'El español es el producto, no la traducción. El español vive en la raíz y el inglés va bajo /en. La asimetría es deliberada: la primera audiencia es hispanohablante y las URL en español no debían perder terreno para hacerle sitio a un segundo idioma.',
      'Marcar cada pieza de contenido con su origen —escrita para el prototipo, confirmada por Rolando o pendiente de su aprobación— para poder avanzar rápido sin que nadie confunda después un texto de relleno con sus palabras.',
      'No inventar nada. Los invitados aparecen por su perfil y no por su nombre, porque los perfiles están confirmados y las personas no. No se escribieron títulos, licencias, nombres de cursos, título del libro, precios, cifras de audiencia ni testimonios que no estuvieran verificados.',
      'Elegir privacidad mínima por diseño en lugar del arsenal habitual de analítica: sin cuentas, sin pagos, sin cookies, sin scripts de terceros y sin etiquetas de marketing. Compartir lo inicia el visitante, y el video solo carga si alguien le da reproducir.',
      'Construir los enlaces para compartir con parámetros de campaña por invitado y por canal, para que al salir la temporada 1 se pueda ver qué invitado y qué canal trajeron audiencia sin tener que instrumentar nada después.',
      'Prerenderizar cada ruta como HTML estático con su propio título, descripción, canónica e imagen para compartir en los dos idiomas, para poder lanzar, indexar y compartir la plataforma sin un backend que mantener ni que pagar.',
    ],
  },
  deliverables: {
    en: [
      'Product and platform strategy: what Enlace Mental is for, who it serves, what it deliberately is not, and the phases it grows through',
      'A content architecture built on three pillars, connecting episodes, strategies, tools and a searchable library',
      'The complete website in Spanish and English, every route prerendered as static HTML with its own metadata',
      'A brand and interface system — wordmark, editorial typography, colour and layout — carried across every page',
      'Distribution infrastructure for Season 1: share links carrying per-guest and per-channel campaign parameters, and a per-episode, per-language share image',
      'A content model with provenance flags, so unverified copy can never be mistaken for the founder’s own words',
      'Placeholder structures for the courses, the method and the book, designed but not built ahead of a decision',
      'A privacy and compliance posture documented as a written audit of every third party and every piece of stored data, for review by counsel',
      'An assistant concept built as an interface prototype with no AI connected, so the idea could be judged before anything was committed to',
    ],
    es: [
      'Estrategia de producto y de plataforma: para qué sirve Enlace Mental, a quién sirve, qué no es a propósito y por qué fases crece',
      'Una arquitectura de contenido sobre tres ejes, que conecta episodios, estrategias, herramientas y una biblioteca con buscador',
      'El sitio web completo en español e inglés, con cada ruta prerenderizada como HTML estático y con sus propios metadatos',
      'Un sistema de marca e interfaz —logotipo, tipografía editorial, color y retícula— aplicado en todas las páginas',
      'Infraestructura de distribución para la temporada 1: enlaces para compartir con parámetros de campaña por invitado y por canal, e imagen de compartir por episodio y por idioma',
      'Un modelo de contenido con marcas de origen, para que un texto sin verificar nunca pueda confundirse con las palabras del fundador',
      'Estructuras preparadas para los cursos, el método y el libro, diseñadas pero no construidas antes de que haya una decisión',
      'Una postura de privacidad y cumplimiento documentada como auditoría escrita de cada tercero y cada dato almacenado, para revisión legal',
      'Un concepto de asistente construido como prototipo de interfaz, sin inteligencia artificial conectada, para poder juzgar la idea antes de comprometerse con nada',
    ],
  },

  evidence: {
    en: 'The platform is built and running: every route prerendered in Spanish and English, with its own metadata and share image. It has not launched and Season 1 has not been published, so there are no audience, subscriber or engagement figures — and no revenue, because nothing is sold on it yet.',
    es: 'La plataforma está construida y funcionando: cada ruta prerenderizada en español e inglés, con sus propios metadatos e imagen para compartir. No se ha lanzado y la temporada 1 no se ha publicado, así que no hay cifras de audiencia, de suscriptores ni de interacción, ni ingresos, porque todavía no se vende nada en ella.',
  },
  currentState: {
    en: 'In progress. The platform is built and reviewable; Season 1 is in production and the public launch has not happened. How the collaboration is governed and how anyone is compensated has not been settled, so it is described here as a product collaboration and nothing more.',
    es: 'En proceso. La plataforma está construida y se puede revisar; la temporada 1 está en producción y el lanzamiento público todavía no ocurre. Cómo se gobierna la colaboración y cómo se compensa a cada quien no está definido, así que aquí se describe como una colaboración de producto y nada más.',
  },

  // No public URL. The platform has not launched, and the default host name in
  // the repository is a fallback rather than a confirmed address — so nothing
  // is linked until Chris says a preview link may be shown.

  images: {
    desktop: {
      src: '/projects/enlace-mental/homepage-desktop.webp',
      width: 1440,
      height: 1000,
      alt: {
        en: 'The Enlace Mental home page on a desktop browser: a dark editorial hero reading “Detrás de cada transformación hay una estrategia”.',
        es: 'La página principal de Enlace Mental en un navegador de escritorio: una portada editorial oscura que dice «Detrás de cada transformación hay una estrategia».',
      },
    },
    mobile: {
      src: '/projects/enlace-mental/homepage-mobile.webp',
      width: 780,
      height: 1800,
      alt: {
        en: 'The same Enlace Mental home page on a phone, with the hero and both calls to action.',
        es: 'La misma página principal de Enlace Mental en un teléfono, con la portada y las dos llamadas a la acción.',
      },
    },
    gallery: [
      {
        src: '/projects/enlace-mental/episodios.webp',
        width: 1440,
        height: 1000,
        alt: {
          en: 'The episode library, with the introductory episode pinned at the top.',
          es: 'La biblioteca de episodios, con el episodio introductorio fijado arriba.',
        },
        caption: {
          en: 'The episode library. Season 1 is the first distribution vehicle, and the library is where a conversation stops being ephemeral.',
          es: 'La biblioteca de episodios. La temporada 1 es el primer vehículo de distribución, y la biblioteca es donde una conversación deja de ser efímera.',
        },
      },
      {
        src: '/projects/enlace-mental/estrategias.webp',
        width: 1440,
        height: 1000,
        alt: {
          en: 'The strategies library, listing frameworks drawn out of the conversations.',
          es: 'La biblioteca de estrategias, con los marcos que salen de las conversaciones.',
        },
        caption: {
          en: 'Strategies are what an episode turns into: an idea, where it came from, a framework, questions and an action.',
          es: 'Las estrategias son en lo que se convierte un episodio: una idea, su origen, un marco, preguntas y una acción.',
        },
      },
      {
        src: '/projects/enlace-mental/metodo.webp',
        width: 1440,
        height: 1000,
        alt: {
          en: 'The method and book preview page, presented as a later phase of the platform.',
          es: 'La página de adelanto del método y el libro, presentada como una fase posterior de la plataforma.',
        },
        caption: {
          en: 'The method and the book are designed for as later phases — visible in the architecture, not built ahead of a decision.',
          es: 'El método y el libro están previstos como fases posteriores: visibles en la arquitectura, no construidos antes de que haya una decisión.',
        },
      },
      {
        src: '/projects/enlace-mental/english.webp',
        width: 1440,
        height: 1000,
        alt: {
          en: 'The same home page in English under the /en prefix.',
          es: 'La misma página principal en inglés, bajo el prefijo /en.',
        },
        caption: {
          en: 'The English tree under /en. Spanish keeps the root, because the first audience is Spanish-speaking and those URLs should not move.',
          es: 'El árbol en inglés bajo /en. El español conserva la raíz, porque la primera audiencia es hispanohablante y esas URL no debían moverse.',
        },
      },
    ],
  },

  publicPermission: 'approved',
  lastVerified: '2026-09-02',
}
