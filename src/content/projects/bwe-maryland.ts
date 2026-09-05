import type { Project } from '../schema'

export const bweMaryland: Project = {
  slug: 'bwe-maryland',
  name: 'BWE Construction & Engineering',

  status: 'live',
  relationship: 'client',
  // The domain was restored and the site launched, which is what had been
  // holding this off the homepage.
  featured: true,
  order: 3,

  year: 2026,
  industry: { en: 'Civil construction', es: 'Construcción civil' },
  location: {
    en: 'Gaithersburg, Maryland, United States',
    es: 'Gaithersburg, Maryland, Estados Unidos',
  },
  audience: {
    en: 'County project managers, prime contractors and estimators deciding who gets invited to bid.',
    es: 'Gerentes de proyecto del condado, contratistas generales y estimadores que deciden a quién invitan a licitar.',
  },
  role: {
    en: 'Product strategist, content architect, designer and builder',
    es: 'Estratega de producto, arquitecto de contenido, diseñador y constructor',
  },

  summary: {
    en: 'A website revamp for a Maryland civil construction and engineering firm, built for the people who decide who gets invited to bid.',
    es: 'Renovación del sitio web de una empresa de construcción civil e ingeniería en Maryland, hecha para quienes deciden a quién invitan a licitar.',
  },
  headline: {
    en: 'A civil contractor that reads like it belongs on the bid list',
    es: 'Un contratista civil que se lee como parte de la lista de licitación',
  },

  businessProblem: {
    en: [
      'Civil construction does not sell the way a consumer business sells. The reader is a county project manager or a prime contractor’s estimator, and what they need is narrow, specific and boring in the best way: what this firm self-performs, where it works, what certifications it holds, and whether there is a capability statement they can attach to a file.',
      'A site written for a general audience makes that reader dig for all four. Digging is the point at which a qualified buyer moves on to the next firm on the list.',
    ],
    es: [
      'La construcción civil no se vende como se vende al consumidor final. Quien lee es un gerente de proyecto del condado o el estimador de un contratista general, y lo que necesita es concreto, específico y afortunadamente aburrido: qué ejecuta la empresa con personal propio, en qué zona trabaja, qué certificaciones tiene y si existe un capability statement que pueda adjuntar a un expediente.',
      'Un sitio escrito para el público general obliga a ese lector a buscar las cuatro cosas. Y ese es justamente el momento en que un comprador calificado pasa a la siguiente empresa de la lista.',
    ],
  },
  keyDecisions: {
    en: [
      'Write the homepage for the estimator, not for a homeowner. It states the work plainly — roads, sidewalks, storm lines and treatment plants — and names the counties served.',
      'Surface certifications and registration numbers in the header rather than burying them on an About page, because for this buyer those are the qualification.',
      'Treat the capability statement as a primary call to action, not a PDF link in the footer. It is the artefact the buyer actually needs to walk away with.',
      'Separate capabilities from past work, so a reader can answer "can they do this" and "have they done this" independently instead of inferring one from the other.',
      'Use technical drawing as the visual language instead of stock construction photography, which every competitor in the category already uses.',
    ],
    es: [
      'Escribir la página principal para el estimador, no para un dueño de casa. Dice el trabajo sin rodeos —calles, aceras, drenaje pluvial y plantas de tratamiento— y nombra los condados donde se trabaja.',
      'Poner las certificaciones y los números de registro en el encabezado en vez de esconderlos en una página de "Nosotros", porque para este comprador eso es la calificación.',
      'Tratar el capability statement como llamada a la acción principal y no como un enlace a PDF en el pie de página. Es el documento que el comprador necesita llevarse.',
      'Separar las capacidades del trabajo realizado, para que el lector pueda responder "¿pueden hacer esto?" y "¿ya lo han hecho?" por separado, sin tener que deducir una cosa de la otra.',
      'Usar dibujo técnico como lenguaje visual en lugar de fotografía de archivo de construcción, que ya usan todos los competidores de la categoría.',
    ],
  },
  deliverables: {
    en: [
      'A homepage that states self-performed capabilities and service area above the fold',
      'Certifications and registrations presented as persistent, checkable credentials',
      'A capability-statement path treated as a first-class call to action',
      'Capabilities and past work as separate, independently browsable sections',
      'A visual system built on technical drawing rather than stock photography',
      'Responsive layouts for the phone, since site visits and bid reviews both happen away from a desk',
    ],
    es: [
      'Una página principal que expone, sin necesidad de bajar, las capacidades propias y la zona de servicio',
      'Certificaciones y registros presentados como credenciales visibles y verificables',
      'Un camino claro hacia el capability statement, tratado como llamada a la acción principal',
      'Capacidades y trabajo realizado como secciones separadas y navegables por separado',
      'Un sistema visual construido sobre dibujo técnico y no sobre fotografía de archivo',
      'Diseño adaptado al teléfono, porque tanto las visitas de obra como las revisiones de licitación ocurren lejos del escritorio',
    ],
  },

  evidence: {
    en: 'The site is live at the firm’s own domain. It launched recently and nothing has been measured yet, so there is no traffic, bid-invitation or enquiry figure to report.',
    es: 'El sitio está en línea en el dominio de la propia empresa. Se lanzó hace poco y todavía no se ha medido nada, así que no hay cifras de tráfico, de invitaciones a licitar ni de consultas que reportar.',
  },
  currentState: {
    en: 'Live at bwe-maryland.com. The domain is back under the firm’s control and the revamped site is the one serving there.',
    es: 'En línea en bwe-maryland.com. El dominio volvió al control de la empresa y el sitio renovado es el que está publicado ahí.',
  },

  // The Netlify prototype is now a stale duplicate of a site that has a real
  // address, so it is gone rather than sitting alongside it.
  liveUrl: {
    url: 'https://bwe-maryland.com',
    label: { en: 'Visit bwe-maryland.com', es: 'Visitar bwe-maryland.com' },
  },

  images: {
    // This capture predates launch. The design is the one that shipped, but it
    // should be recaptured from the live domain — see the asset notes in
    // README.md.
    desktop: {
      src: '/projects/bwe-maryland/homepage-desktop.webp',
      width: 1389,
      height: 900,
      alt: {
        en: 'The BWE Construction & Engineering home page on a desktop browser, with capabilities and certifications in view.',
        es: 'La página principal de BWE Construction & Engineering en un navegador de escritorio, con las capacidades y las certificaciones a la vista.',
      },
    },
    gallery: [],
  },

  // The site being live at the firm's own domain is not the firm agreeing to
  // appear in someone else's portfolio. Those are separate permissions.
  publicPermission: 'pending',
  permissionNote:
    'Confirm with the firm that it is happy to be named publicly, and that the capabilities described here are the ones it wants stated, before this goes to production.',
  lastVerified: '2026-09-05',
}
