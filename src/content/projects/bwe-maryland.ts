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
    en: 'Counties, cities and municipalities in the greater Washington, D.C. area, plus commercial and private customers deciding whether this is a firm to call.',
    es: 'Condados, ciudades y municipios del área metropolitana de Washington, D.C., además de clientes comerciales y privados que evalúan si esta es una empresa a la que llamar.',
  },
  role: {
    en: 'Product strategist, content architect, designer and builder',
    es: 'Estratega de producto, arquitecto de contenido, diseñador y constructor',
  },

  summary: {
    en: 'A website revamp for a Maryland civil and construction engineering firm, where the hard part was not the design — it was working out which claims the business could actually stand behind.',
    es: 'La renovación del sitio web de una empresa de ingeniería civil y de construcción en Maryland, donde lo difícil no fue el diseño sino definir qué afirmaciones podía sostener el negocio de verdad.',
  },
  headline: {
    en: 'A website that only says what the business can prove',
    es: 'Un sitio web que solo dice lo que el negocio puede demostrar',
  },

  businessProblem: {
    en: [
      'The old site was out of date and the firm had lost control of its own domain. Rebuilding the pages was the visible job. The real job turned out to be evidence.',
      'Most of what anyone could tell me about the company came from old emails: a 2021 list of services, projects mentioned in passing, phone numbers and an office address from stale signatures. None of it was written by the company. Publishing it would have meant a civil engineering firm making capability claims to public-sector buyers that nobody at the firm had confirmed — which is a real problem when the reader is deciding whether to invite you to bid.',
      'So the question stopped being "what should the site say" and became "what can this business actually stand behind, and who signed off on it".',
    ],
    es: [
      'El sitio anterior estaba desactualizado y la empresa había perdido el control de su propio dominio. Reconstruir las páginas era el trabajo visible. El trabajo real resultó ser la evidencia.',
      'Casi todo lo que alguien podía contarme de la empresa venía de correos viejos: una lista de servicios de 2021, proyectos mencionados de pasada, teléfonos y una dirección de oficina sacados de firmas desactualizadas. Nada de eso lo había escrito la empresa. Publicarlo habría significado que una firma de ingeniería civil hiciera, ante compradores del sector público, afirmaciones de capacidad que nadie en la empresa había confirmado, y eso pesa cuando quien lee está decidiendo a quién invita a licitar.',
      'Así que la pregunta dejó de ser «qué debería decir el sitio» y pasó a ser «qué puede sostener este negocio de verdad, y quién lo aprobó».',
    ],
  },
  keyDecisions: {
    en: [
      'Give every factual statement on the site a row in a claim register: the exact wording, a status, a source, a source date, who owns the decision, and whether it publishes. Nothing reaches a page without one.',
      'Remove rather than soften. Thirteen specific service claims traced back to a 2021 email that had been written for the company rather than by it. With the company unavailable to confirm them before launch, they came out of the build entirely and went to a backlog — rather than being hedged into vagueness, which is the usual move and is just a quieter way of saying something unverified.',
      'Publish only the two disciplines the recovered company text actually names — civil and construction engineering — and nothing narrower. A services page that says less, but is true, beats a longer one nobody can vouch for.',
      'Keep certifications off the site. "Minority-owned" is published as a description because the company wrote it; formal MBE or DBE certification and certification numbers are not, because no evidence for them exists. Those two things look similar on a page and are completely different to a procurement officer.',
      'Cut the specific projects that appeared only as email mentions, and cut the stale office address and an old phone number. A wrong phone number on a contractor site is worse than no phone number.',
      'Use technical drawing as the visual language instead of stock construction photography — and label the drawing "illustrative only, not a project drawing", so an image cannot imply work the register does not support.',
      'Build the discipline into the tooling. A claim sweep runs on every package build and fails it if any removed or rejected wording reappears, so the register cannot quietly rot as pages get edited later.',
      'Ship a static site with no cookies, no analytics, no third-party scripts and no embeds, and hand the contact form off to the visitor’s own mail app rather than claim a submission the site cannot actually deliver yet.',
      'Treat the one piece of hard evidence properly: a recognition from the Islamic Center of Maryland, transcribed from the physical plaque, presented as Selected Experience rather than padded out with projects that could not be verified.',
    ],
    es: [
      'Darle a cada afirmación del sitio una fila en un registro de claims: el texto exacto, un estado, una fuente, la fecha de esa fuente, quién es dueño de la decisión y si se publica o no. Nada llega a una página sin eso.',
      'Eliminar en vez de suavizar. Trece afirmaciones concretas de servicios venían de un correo de 2021 escrito para la empresa, no por ella. Como la empresa no estuvo disponible para confirmarlas antes del lanzamiento, salieron por completo del build y quedaron en una lista pendiente, en lugar de diluirse en generalidades, que es lo habitual y no deja de ser una forma más discreta de afirmar algo sin verificar.',
      'Publicar solamente las dos disciplinas que el texto recuperado de la empresa sí nombra —ingeniería civil y de construcción— y nada más específico. Una página de servicios que dice menos, pero es cierta, vale más que una más larga que nadie puede respaldar.',
      'Dejar las certificaciones fuera del sitio. «Empresa de propiedad minoritaria» se publica como descripción porque lo escribió la propia empresa; una certificación formal MBE o DBE y sus números no, porque no existe evidencia de ellas. En una página esas dos cosas se parecen, y para quien maneja compras públicas son completamente distintas.',
      'Quitar los proyectos concretos que solo aparecían mencionados en correos, y quitar también la dirección de oficina desactualizada y un teléfono viejo. Un teléfono equivocado en el sitio de un contratista es peor que no poner teléfono.',
      'Usar dibujo técnico como lenguaje visual en lugar de fotografía de archivo de construcción, y rotular el dibujo como «solo ilustrativo, no es un plano de proyecto», para que ninguna imagen insinúe trabajos que el registro no respalda.',
      'Meter la disciplina en las herramientas. Una revisión automática de claims corre en cada build empaquetado y lo hace fallar si reaparece algún texto eliminado o rechazado, para que el registro no se pudra en silencio cuando alguien edite las páginas más adelante.',
      'Publicar un sitio estático sin cookies, sin analítica, sin scripts de terceros y sin incrustaciones, y pasar el formulario de contacto a la aplicación de correo del visitante en vez de afirmar un envío que el sitio todavía no puede cumplir.',
      'Tratar como corresponde la única evidencia sólida: un reconocimiento del Islamic Center of Maryland, transcrito de la placa física, presentado como experiencia seleccionada y no inflado con proyectos imposibles de verificar.',
    ],
  },
  deliverables: {
    en: [
      'A five-page static site — home, about, services, contact and privacy — plus a branded 404, hand-written and generated by a small build script, with no framework and nothing to run on the server',
      'A claim register covering every factual statement on the site, with status, source, source date, owner and publication decision',
      'An automated claim sweep that fails the build if removed or rejected wording reappears',
      'A visual system built on technical drawing, explicitly labelled as illustrative rather than as project work',
      'Selected Experience limited to the one recognition backed by a physical plaque, transcribed from the original',
      'A contact path that hands off to the visitor’s own mail app, and says so, rather than implying a submission it cannot deliver',
      'A privacy position with no cookies, no analytics and no third-party requests, stated on the page and verified by the build checks',
      'Accessibility and markup checks run at three widths on every build, plus sitemap, robots and social metadata',
      'A deployment record and rollback values written down, so the domain move could be undone without touching the company’s mail',
    ],
    es: [
      'Un sitio estático de cinco páginas —inicio, nosotros, servicios, contacto y privacidad— más un 404 con la marca, escrito a mano y generado por un script de build pequeño, sin framework y sin nada que ejecutar en el servidor',
      'Un registro de claims que cubre cada afirmación del sitio, con estado, fuente, fecha de la fuente, responsable y decisión de publicación',
      'Una revisión automática de claims que hace fallar el build si reaparece texto eliminado o rechazado',
      'Un sistema visual construido sobre dibujo técnico, rotulado explícitamente como ilustrativo y no como trabajo de proyecto',
      'Una sección de experiencia seleccionada limitada al único reconocimiento respaldado por una placa física, transcrita del original',
      'Un camino de contacto que pasa el mensaje a la aplicación de correo del visitante, y lo dice, en lugar de insinuar un envío que no puede cumplir',
      'Una postura de privacidad sin cookies, sin analítica y sin peticiones a terceros, declarada en la página y verificada por las comprobaciones del build',
      'Comprobaciones de accesibilidad y de marcado en tres anchos en cada build, además de sitemap, robots y metadatos para compartir',
      'Un registro de despliegue y valores de reversión por escrito, para poder deshacer el cambio de dominio sin tocar el correo de la empresa',
    ],
  },

  evidence: {
    en: 'The site went live at the firm’s own domain on 5 September 2026 on version 0.2.1, after the owner reviewed it on a phone and a laptop and gave written approval. Of the claims considered, thirty-four publish with a recorded source and twenty-two were removed or held; the launch gate requires zero unsupported claims in the rendered output. Nothing about traffic, bid invitations or enquiries has been measured, so none is reported.',
    es: 'El sitio salió en línea en el dominio de la propia empresa el 5 de septiembre de 2026, en la versión 0.2.1, después de que el dueño lo revisara en teléfono y computadora y diera su aprobación por escrito. De las afirmaciones evaluadas, treinta y cuatro se publican con una fuente registrada y veintidós se eliminaron o quedaron en espera; la compuerta de lanzamiento exige cero afirmaciones sin respaldo en el resultado publicado. No se ha medido nada sobre tráfico, invitaciones a licitar ni consultas, así que no se reporta ninguna cifra.',
  },
  currentState: {
    en: 'Live at bwe-maryland.com. The domain is back under the firm’s control and the revamped site is the one serving there. The service claims that were pulled before launch sit in a backlog, waiting on the company to confirm them.',
    es: 'En línea en bwe-maryland.com. El dominio volvió al control de la empresa y el sitio renovado es el que está publicado ahí. Las afirmaciones de servicios que se retiraron antes del lanzamiento están en una lista pendiente, a la espera de que la empresa las confirme.',
  },

  // The Netlify prototype is now a stale duplicate of a site that has a real
  // address, so it is gone rather than sitting alongside it.
  liveUrl: {
    url: 'https://bwe-maryland.com',
    label: { en: 'Visit bwe-maryland.com', es: 'Visitar bwe-maryland.com' },
  },

  images: {
    desktop: {
      src: '/projects/bwe-maryland/homepage-desktop.webp',
      width: 1440,
      height: 1000,
      alt: {
        en: 'The BWE Maryland home page on a desktop browser: a technical section drawing beside the headline “Civil and construction engineers for the greater Washington, D.C. region.”',
        es: 'La página principal de BWE Maryland en un navegador de escritorio: un dibujo técnico de sección junto al titular «Civil and construction engineers for the greater Washington, D.C. region».',
      },
    },
    mobile: {
      src: '/projects/bwe-maryland/homepage-mobile.webp',
      width: 780,
      height: 1800,
      alt: {
        en: 'The same BWE Maryland home page on a phone, with the headline and both calls to action.',
        es: 'La misma página principal de BWE Maryland en un teléfono, con el titular y las dos llamadas a la acción.',
      },
    },
    gallery: [
      {
        src: '/projects/bwe-maryland/services.webp',
        width: 1440,
        height: 1000,
        alt: {
          en: 'The services page, naming civil engineering and construction engineering and nothing narrower.',
          es: 'La página de servicios, que nombra ingeniería civil e ingeniería de construcción y nada más específico.',
        },
        caption: {
          en: 'Services says less than the old draft did, and every word of it has a source. The thirteen removed claims are in a backlog, not on the page.',
          es: 'La página de servicios dice menos que el borrador anterior, y cada palabra tiene una fuente. Las trece afirmaciones retiradas están en una lista pendiente, no en la página.',
        },
      },
      {
        src: '/projects/bwe-maryland/about.webp',
        width: 1440,
        height: 1000,
        alt: {
          en: 'The about page, with the company description and the Islamic Center of Maryland recognition.',
          es: 'La página de nosotros, con la descripción de la empresa y el reconocimiento del Islamic Center of Maryland.',
        },
        caption: {
          en: 'The one recognition with hard evidence behind it, transcribed from the physical plaque rather than paraphrased.',
          es: 'El único reconocimiento con evidencia sólida detrás, transcrito de la placa física en lugar de parafraseado.',
        },
      },
    ],
  },

  // The site being live at the firm's own domain is not the firm agreeing to
  // appear in someone else's portfolio. Those are separate permissions.
  publicPermission: 'pending',
  permissionNote:
    'Confirm with the firm that it is happy to be named publicly, and that this description of the work is one it is comfortable with, before this goes to production.',
  lastVerified: '2026-09-05',
}
