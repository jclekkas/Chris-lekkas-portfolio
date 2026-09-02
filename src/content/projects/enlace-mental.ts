import type { Project } from '../schema'

export const enlaceMental: Project = {
  slug: 'enlace-mental',
  name: 'Enlace Mental',

  status: 'in-progress',
  relationship: 'collaboration',
  // Unfeatured on purpose: there is no current image of the platform, and an
  // older unrelated prototype must not stand in for it. Feature it once real
  // visuals and approved copy exist. See docs/PORTFOLIO_AND_PROOF_SYSTEM.md.
  featured: false,
  order: 4,

  year: 2026,
  industry: {
    en: 'Media, education and personal development',
    es: 'Medios, educación y desarrollo personal',
  },
  location: { en: 'El Salvador', es: 'El Salvador' },
  audience: {
    en: 'Spanish-speaking adults who want to understand how they think and decide — an audience to build, not only patients to book.',
    es: 'Adultos hispanohablantes que quieren entender cómo piensan y cómo deciden: una audiencia por construir, no solo pacientes por agendar.',
  },
  role: {
    en: 'Product strategist and digital builder, working alongside the founder',
    es: 'Estratega de producto y constructor digital, trabajando junto al fundador',
  },

  summary: {
    en: 'A Spanish-first media, knowledge and personal-development platform created by psychologist Rolando López in El Salvador, built around mental structure, internal dialogue and decision-making.',
    es: 'Una plataforma en español de medios, conocimiento y desarrollo personal creada por el psicólogo Rolando López en El Salvador, construida alrededor de la estructura mental, el diálogo interno y la toma de decisiones.',
  },
  headline: {
    en: 'A platform for how people think, not a booking page for a practice',
    es: 'Una plataforma sobre cómo piensa la gente, no una página para agendar consultas',
  },

  businessProblem: {
    en: [
      'Rolando López has a body of thinking about mental structure, internal dialogue and decision-making, and an audience in Spanish that has no single place to meet it. The obvious build — a therapy-practice website with an appointment button — would answer a much smaller question than the one being asked.',
      'The real problem is a distribution and platform problem: what is the digital home for a body of work that will arrive as a podcast first, and may later extend into courses, a method and a book?',
    ],
    es: [
      'Rolando López tiene un cuerpo de pensamiento sobre la estructura mental, el diálogo interno y la toma de decisiones, y una audiencia en español que no tiene un solo lugar donde encontrarlo. Lo obvio —un sitio de consulta psicológica con un botón para agendar— respondería una pregunta mucho más pequeña que la que está sobre la mesa.',
      'El problema real es de distribución y de plataforma: ¿cuál es la casa digital de un cuerpo de trabajo que sale primero como pódcast y que más adelante podría extenderse a cursos, a un método y a un libro?',
    ],
  },
  keyDecisions: {
    en: [
      'Build a platform, not a practice site. The measure of success is an audience that returns, not an appointment form that converts.',
      'Treat Season 1 of the podcast as the first distribution vehicle and the website as the platform’s permanent home, so episodes accumulate into a body of work instead of scrolling away.',
      'Organise everything around the three ideas the work is actually about — mental structure, internal dialogue, decision-making — rather than around clinical service categories.',
      'Design Spanish-first, in the register the founder writes in. This is not an English product with a translation attached.',
      'Leave room for courses, a method and a book as later extensions without designing those pages before anyone has committed to building them.',
    ],
    es: [
      'Construir una plataforma, no un sitio de consulta. La medida de éxito es una audiencia que vuelve, no un formulario de cita que convierte.',
      'Tratar la primera temporada del pódcast como el primer vehículo de distribución y el sitio web como la casa permanente de la plataforma, para que los episodios se acumulen como obra y no se pierdan al bajar por una lista.',
      'Organizarlo todo alrededor de las tres ideas de las que trata el trabajo —estructura mental, diálogo interno y toma de decisiones— y no alrededor de categorías de servicio clínico.',
      'Diseñar primero en español, en el registro en que escribe el fundador. Esto no es un producto en inglés con una traducción encima.',
      'Dejar espacio para cursos, un método y un libro como extensiones futuras, sin diseñar esas páginas antes de que alguien se comprometa a construirlas.',
    ],
  },
  deliverables: {
    en: [
      'Product direction for the platform: what it is for, who it serves and what it is not',
      'An information architecture organised around the ideas rather than around services',
      'The website designed as the platform’s digital home, with the podcast as its first vehicle',
      'A Spanish-first content and interface language, written rather than translated',
      'A staged plan that keeps courses, method and book as options rather than commitments',
    ],
    es: [
      'Dirección de producto para la plataforma: para qué es, a quién sirve y qué no es',
      'Una arquitectura de información organizada alrededor de las ideas y no de los servicios',
      'El sitio web diseñado como la casa digital de la plataforma, con el pódcast como primer vehículo',
      'Un lenguaje de contenido e interfaz pensado en español, escrito y no traducido',
      'Un plan por etapas que mantiene los cursos, el método y el libro como opciones y no como compromisos',
    ],
  },

  evidence: null,
  currentState: {
    en: 'In progress and not launched. Product direction and the platform’s shape are being worked out with the founder. The nature of the collaboration — how it is governed and how anyone is compensated — has not been settled, so it is described here as a collaboration and nothing more.',
    es: 'En proceso y sin lanzar. La dirección de producto y la forma de la plataforma se están definiendo junto al fundador. La naturaleza de la colaboración —cómo se gobierna y cómo se compensa a cada quien— todavía no está definida, así que aquí se describe como una colaboración y nada más.',
  },

  images: {
    // No current image of the Enlace Mental platform exists. The older
    // clinical-practice prototype is a different product and is not shown here.
    gallery: [],
  },

  publicPermission: 'pending',
  permissionNote:
    'Rolando López must approve the public description and the relationship label before this goes to production. Current platform visuals are also outstanding — see the missing-assets list in README.md.',
  lastVerified: '2026-09-02',
}
