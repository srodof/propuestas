// Líneas de negocio de SWIITCH. Cada propuesta pertenece a una línea
// (`linea: eventos` en su frontmatter, y el archivo va en
// src/content/propuestas/eventos/). La línea le da a la propuesta su
// personalización base: el título y la bajada por defecto, los servicios que
// arma como módulos, los tres diferenciales bajo el hero, los pasos de
// "Cómo trabajamos" y las notas de inversión. Todo lo que la propuesta
// escriba reemplaza lo de la línea.
//
// Una línea nueva se agrega aquí (y su plantilla en plantillas/<id>.md); si
// usa un servicio que no existe, ese servicio va en src/data/servicios.ts.
import type { IdServicio } from './servicios';

export interface Diferencial {
  icono: string;
  titulo: string;
  texto: string;
}

export interface Linea {
  nombre: string; // se muestra junto a la fecha en el hero
  titulo: string; // título por defecto de la propuesta
  bajada: string; // frase por defecto bajo el título
  servicios: IdServicio[]; // módulos que arma si la propuesta no escribe los suyos
  diferenciales: Diferencial[]; // tres tarjetas bajo el hero
  metodo: Diferencial[]; // cuatro pasos de "Cómo trabajamos"
  notasInversion: string[];
}

const notaHoras =
  'Los montos se estimaron según las horas de trabajo de los integrantes del equipo. El perfil de nuestra agencia establece una dedicación relevante de los socios directores, que aportan su experiencia en las definiciones.';
const notaPauta =
  'El fee de agencia no incluye la inversión publicitaria. Todos los gastos en medios pagados serán aprobados y financiados directamente por el cliente.';
const notaProduccion =
  'Cualquier producción audiovisual necesaria (videos, fotografía profesional, modelos e influencers, alquiler de espacios y escenografías) no está incluida en el fee de agencia y requerirá un presupuesto y aprobación por separado.';

const medicion: Diferencial = {
  titulo: 'Medición',
  icono: 'bar-chart',
  texto: 'Lo que no se mide no se puede mejorar. Medimos el retorno de tu inversión y evaluamos resultados para alcanzar tus objetivos.',
};

export const lineas = {
  'social-media': {
    nombre: 'Social Media Marketing',
    titulo: 'Social Media Marketing',
    bajada: 'Una estrategia de contenidos y pauta para que tus redes trabajen para tu negocio.',
    servicios: ['social-media'],
    diferenciales: [
      { icono: 'target', titulo: 'Contenido con objetivo', texto: 'No publicamos por presencia: cada pieza responde a una estrategia de posicionamiento, educación o conversión.' },
      { icono: 'trending-up', titulo: 'Pauta que se optimiza', texto: 'Campañas en Meta con audiencias propias y ajustes constantes según lo que muestran los datos.' },
      { icono: 'bar-chart', titulo: 'Resultados a la vista', texto: 'Reportes mensuales de rendimiento y benchmarking con la competencia, explicados en reunión.' },
    ],
    metodo: [
      { titulo: 'Análisis', icono: 'search', texto: 'Auditamos tus cuentas, tu competencia y tu audiencia para encontrar dónde están las oportunidades.' },
      { titulo: 'Estrategia', icono: 'target', texto: 'Definimos pilares de contenido, tono, embudos y plan de pauta alineados a tus objetivos de negocio.' },
      { titulo: 'Ejecución', icono: 'calendar', texto: 'Producimos, publicamos y gestionamos la comunidad cada mes según una grilla aprobada.' },
      { ...medicion, texto: 'Medimos alcance, interacción y conversiones, y ajustamos la estrategia con lo que aprendemos.' },
    ],
    notasInversion: [notaHoras, notaPauta, notaProduccion],
  },

  'desarrollo-web': {
    nombre: 'Desarrollo web',
    titulo: 'Diseño y desarrollo web',
    bajada: 'Un sitio rápido, claro y pensado para convertir visitas en contactos.',
    servicios: ['desarrollo-web'],
    diferenciales: [
      { icono: 'monitor', titulo: 'Diseño que convierte', texto: 'Navegación clara y contenido ordenado según lo que decide la compra, con un camino corto hasta el contacto.' },
      { icono: 'smartphone', titulo: 'Mobile first', texto: 'La mayoría de tus visitas llega desde el celular: diseñamos primero para esa pantalla.' },
      { icono: 'bar-chart', titulo: 'Medición desde el día uno', texto: 'Google Analytics, Search Console y las herramientas de Meta configuradas antes del lanzamiento.' },
    ],
    metodo: [
      { titulo: 'Descubrimiento', icono: 'search', texto: 'Entendemos tu negocio, tus usuarios y tus objetivos para definir el mapa del sitio.' },
      { titulo: 'Diseño UX/UI', icono: 'pen-tool', texto: 'Diseñamos las pantallas principales y las validamos contigo antes de escribir una línea de código.' },
      { titulo: 'Desarrollo', icono: 'code', texto: 'Construimos el sitio sobre el diseño aprobado, rápido, seguro y fácil de administrar.' },
      { ...medicion, titulo: 'Lanzamiento y medición', texto: 'Probamos en todos los dispositivos, publicamos y medimos cómo se comportan las visitas.' },
    ],
    notasInversion: [
      notaHoras,
      'El dominio, el hosting y las licencias de pago (plantillas, plugins o servicios externos) no están incluidos en el fee y se cotizan por separado si hacen falta.',
      'Los textos y fotografías del sitio los provee el cliente, salvo que la propuesta indique lo contrario.',
    ],
  },

  branding: {
    nombre: 'Branding',
    titulo: 'Branding e identidad corporativa',
    bajada: 'Una identidad clara y memorable, lista para crecer en cada punto de contacto.',
    servicios: ['branding'],
    diferenciales: [
      { icono: 'layers', titulo: 'Marca con fundamento', texto: 'Partimos de la esencia, el propósito y el mercado de la marca, no de una preferencia estética.' },
      { icono: 'pen-tool', titulo: 'Diseño con criterio', texto: 'Exploramos rutas creativas distintas y las refinamos contigo hasta llegar a la identidad final.' },
      { icono: 'shield', titulo: 'Consistencia en todo', texto: 'Un manual de marca que asegura que la identidad se aplique igual en digital, impreso y espacios físicos.' },
    ],
    metodo: [
      { titulo: 'Investigación', icono: 'search', texto: 'Entrevistas, referentes y análisis de la competencia para entender dónde debe pararse la marca.' },
      { titulo: 'Concepto', icono: 'target', texto: 'Definimos la idea que sostiene la marca: personalidad, valores y tono de comunicación.' },
      { titulo: 'Diseño', icono: 'pen-tool', texto: 'Exploramos, iteramos y refinamos el logotipo y el sistema visual completo.' },
      { titulo: 'Aplicación', icono: 'layers', texto: 'Entregamos el manual de marca y las aplicaciones clave para que la identidad viva desde el primer día.' },
    ],
    notasInversion: [
      notaHoras,
      'La impresión de materiales, la señalética y la producción física de las aplicaciones no están incluidas en el fee y se cotizan por separado.',
    ],
  },

  'relaciones-publicas': {
    nombre: 'Relaciones públicas',
    titulo: 'Relaciones públicas',
    bajada: 'Una estrategia de prensa y vocería para que tu marca ocupe el lugar que merece en los medios.',
    servicios: ['relaciones-publicas'],
    diferenciales: [
      { icono: 'newspaper', titulo: 'Relación con medios', texto: 'Trabajamos de cerca con periodistas y editores de prensa, radio, televisión y medios digitales.' },
      { icono: 'message-circle', titulo: 'Mensajes que se publican', texto: 'Convertimos la información de tu empresa en historias con valor noticioso, no en avisos.' },
      { icono: 'shield', titulo: 'Reputación cuidada', texto: 'Preparamos a los voceros y acompañamos a la marca también en los momentos delicados.' },
    ],
    metodo: [
      { titulo: 'Diagnóstico', icono: 'search', texto: 'Revisamos cómo aparece hoy la marca en los medios y qué se dice de ella.' },
      { titulo: 'Mensajes clave', icono: 'message-circle', texto: 'Definimos los temas, los voceros y los mensajes que queremos instalar.' },
      { titulo: 'Gestión de prensa', icono: 'newspaper', texto: 'Redactamos, distribuimos y damos seguimiento a notas, entrevistas y apariciones.' },
      { ...medicion, titulo: 'Monitoreo', texto: 'Medimos apariciones, alcance y tono de la cobertura, y reportamos cada mes.' },
    ],
    notasInversion: [
      notaHoras,
      'Las relaciones públicas generan cobertura ganada: gestionamos y presentamos la información a los medios, pero la decisión final de publicar depende de cada medio.',
      'Los espacios pagados en medios (publirreportajes, avisos o menciones pagadas) no están incluidos en el fee y se aprueban por separado.',
    ],
  },

  influencers: {
    nombre: 'Marketing de influencers',
    titulo: 'Marketing de influencers',
    bajada: 'Las voces correctas para llevar tu marca a nuevas audiencias con credibilidad.',
    servicios: ['influencers'],
    diferenciales: [
      { icono: 'users', titulo: 'Perfiles bien elegidos', texto: 'Seleccionamos creadores por afinidad con la marca y calidad de audiencia, no solo por número de seguidores.' },
      { icono: 'star', titulo: 'Contenido que se siente propio', texto: 'Briefs claros que respetan la voz de cada creador para que el mensaje llegue con naturalidad.' },
      { icono: 'bar-chart', titulo: 'Resultados medibles', texto: 'Seguimiento de alcance, interacción y conversiones de cada colaboración.' },
    ],
    metodo: [
      { titulo: 'Selección', icono: 'search', texto: 'Buscamos y evaluamos perfiles según audiencia, valores, calidad de contenido y antecedentes.' },
      { titulo: 'Negociación', icono: 'message-circle', texto: 'Acordamos entregables, fechas, derechos de uso y honorarios con cada creador.' },
      { titulo: 'Activación', icono: 'zap', texto: 'Coordinamos el brief, revisamos el contenido y acompañamos cada publicación.' },
      { ...medicion, texto: 'Medimos el desempeño de cada creador y te mostramos qué colaboraciones conviene repetir.' },
    ],
    notasInversion: [
      notaHoras,
      'Los honorarios de los influencers no están incluidos en el fee de agencia, salvo que la propuesta indique lo contrario. Se presentan para aprobación antes de cerrar cada colaboración.',
      'La pauta para amplificar el contenido de los creadores se aprueba y financia por separado.',
    ],
  },

  btl: {
    nombre: 'BTL y activaciones',
    titulo: 'BTL y activaciones de marca',
    bajada: 'Experiencias en el punto de contacto que hacen que la gente pruebe, recuerde y elija tu marca.',
    servicios: ['btl'],
    diferenciales: [
      { icono: 'map-pin', titulo: 'Donde está tu cliente', texto: 'Llevamos la marca al punto de venta, la calle o el evento donde se toma la decisión.' },
      { icono: 'zap', titulo: 'Mecánicas que enganchan', texto: 'Diseñamos dinámicas simples y atractivas que invitan a participar y a compartir.' },
      { icono: 'users', titulo: 'Equipo en campo', texto: 'Promotores capacitados y supervisión en cada jornada para cuidar la imagen de la marca.' },
    ],
    metodo: [
      { titulo: 'Concepto', icono: 'target', texto: 'Definimos el objetivo de la activación, la idea creativa y la mecánica con el público.' },
      { titulo: 'Producción', icono: 'layers', texto: 'Diseñamos y producimos el stand, los materiales, el merchandising y la logística.' },
      { titulo: 'Activación', icono: 'zap', texto: 'Ejecutamos en campo con promotores capacitados y supervisión de SWIITCH.' },
      { ...medicion, texto: 'Medimos contactos, participación y ventas o datos captados, y entregamos un informe final.' },
    ],
    notasInversion: [
      notaHoras,
      'La producción de materiales, stands y merchandising, los promotores, los permisos y la logística no están incluidos en el fee y se presupuestan por separado para aprobación del cliente.',
    ],
  },

  eventos: {
    nombre: 'Eventos',
    titulo: 'Organización de eventos',
    bajada: 'Un evento pensado como una pieza de comunicación de la marca, de la invitación al cierre.',
    servicios: ['eventos'],
    diferenciales: [
      { icono: 'star', titulo: 'Concepto antes que producción', texto: 'Definimos primero la idea y la experiencia del invitado; después, cada proveedor se elige para sostenerla.' },
      { icono: 'calendar', titulo: 'Un solo equipo responsable', texto: 'Coordinamos locación, proveedores, invitados y protocolo de punta a punta.' },
      { icono: 'megaphone', titulo: 'Repercusión más allá de la sala', texto: 'Prensa, redes y registro audiovisual para que el evento llegue a quienes no estuvieron.' },
    ],
    metodo: [
      { titulo: 'Concepto', icono: 'target', texto: 'Definimos el objetivo, el concepto creativo y la experiencia que vivirá cada invitado.' },
      { titulo: 'Producción', icono: 'layers', texto: 'Cotizamos, negociamos y coordinamos locación, proveedores y talentos.' },
      { titulo: 'Ejecución', icono: 'calendar', texto: 'Montaje, ensayo y coordinación general el día del evento, con un run of show detallado.' },
      { ...medicion, titulo: 'Repercusión', icono: 'megaphone', texto: 'Difusión posterior, registro fotográfico y un informe final de resultados.' },
    ],
    notasInversion: [
      notaHoras,
      'Los costos de producción y proveedores (locación, gastronomía, sonido, pantallas, iluminación, mobiliario, talentos y cobertura audiovisual) no están incluidos en el fee. Se presentan con opciones por rubro para aprobación del cliente.',
    ],
  },

  'produccion-audiovisual': {
    nombre: 'Producción audiovisual',
    titulo: 'Producción fotográfica y audiovisual',
    bajada: 'Fotografía y video propios para contar tu marca con imágenes reales.',
    servicios: ['produccion-audiovisual'],
    diferenciales: [
      { icono: 'camera', titulo: 'Imágenes propias', texto: 'Personas, espacios y productos reales en lugar de fotos de stock genéricas.' },
      { icono: 'target', titulo: 'Pensado para cada canal', texto: 'Planificamos tomas y formatos para redes, web y publicidad desde el guion.' },
      { icono: 'users', titulo: 'Equipo completo', texto: 'Dirección, fotografía, video, drone y edición coordinados por SWIITCH.' },
    ],
    metodo: [
      { titulo: 'Preproducción', icono: 'search', texto: 'Guion, plan de rodaje, locaciones y talentos aprobados antes de grabar.' },
      { titulo: 'Producción', icono: 'camera', texto: 'Sesiones de foto y video dirigidas por nuestro equipo.' },
      { titulo: 'Postproducción', icono: 'pen-tool', texto: 'Edición, color y adaptación a cada formato y canal.' },
      { titulo: 'Entrega', icono: 'layers', texto: 'Una biblioteca visual ordenada y lista para usar en todos tus canales.' },
    ],
    notasInversion: [
      notaHoras,
      'Los talentos y modelos, el alquiler de locaciones y los traslados fuera de la ciudad no están incluidos en el fee, salvo que la propuesta indique lo contrario.',
    ],
  },
} satisfies Record<string, Linea>;

export type IdLinea = keyof typeof lineas;
export const idsLineas = Object.keys(lineas) as [IdLinea, ...IdLinea[]];

// Versión en inglés, para propuestas con `idioma: en`. Una línea que falte
// aquí hace fallar el build con un mensaje claro.
export const lineasEn: Partial<Record<IdLinea, Linea>> = {
  'social-media': {
    nombre: 'Social Media Marketing',
    titulo: 'Social Media Marketing',
    bajada: 'A content and paid media strategy that puts your social channels to work for your business.',
    servicios: ['social-media'],
    diferenciales: [
      { icono: 'target', titulo: 'Content with a purpose', texto: 'Nothing is posted just to be present: every piece serves a positioning, education or conversion goal.' },
      { icono: 'trending-up', titulo: 'Ads that keep improving', texto: 'Meta campaigns built on custom audiences and adjusted constantly based on the data.' },
      { icono: 'bar-chart', titulo: 'Results you can see', texto: 'Monthly performance reports and competitor benchmarking, walked through in a meeting.' },
    ],
    metodo: [
      { titulo: 'Analysis', icono: 'search', texto: 'We audit your accounts, your competitors and your audience to find where the opportunities are.' },
      { titulo: 'Strategy', icono: 'target', texto: 'We define content pillars, tone, funnels and a paid media plan tied to your business goals.' },
      { titulo: 'Execution', icono: 'calendar', texto: 'We produce, publish and manage the community every month from an approved content calendar.' },
      { titulo: 'Measurement', icono: 'bar-chart', texto: 'We track reach, engagement and conversions, and adjust the strategy with what we learn.' },
    ],
    notasInversion: [
      'Fees were estimated based on the working hours of the team members involved. Our agency model includes significant involvement from the managing partners, who bring their experience to every key decision.',
      'Agency fees do not include advertising spend. All paid media costs are approved and paid directly by the client.',
      'Any audiovisual production required (video, professional photography, models and influencers, venue and set rental) is not included in the agency fee and will be quoted and approved separately.',
    ],
  },
};
