// Biblioteca de servicios de SWIITCH.
// Cada propuesta puede pedir un servicio con `servicio: desarrollo-web` en un
// módulo y recibe todo este contenido por defecto. Lo que se escriba en el
// .md de la propuesta reemplaza el campo correspondiente (las listas se
// reemplazan completas, no se suman).

export interface Paso {
  titulo: string;
  detalle?: string;
}

export interface Servicio {
  titulo: string;
  subtitulo?: string;
  estrategia?: string;
  enfoque?: string;
  incluye?: string[];
  proceso?: { titulo: string; texto?: string; pasos: string[] };
  checklist?: { titulo: string; texto?: string; items: string[] };
  // Pasos de kick off que se usan si la propuesta no define los suyos
  kickoff: Paso[];
}

const kickoffBase: Paso[] = [
  { titulo: 'Envío del brief inicial', detalle: 'Para recopilar información clave sobre la marca y sus objetivos.' },
  { titulo: 'Reunión de alineación', detalle: 'Para aclarar detalles y definir expectativas.' },
];

export const servicios = {
  'social-media': {
    titulo: 'Social Media Marketing',
    subtitulo: 'Conectando con tu audiencia',
    estrategia:
      'Desarrollaremos una estructura de contenido alineada a autoridad, educación y conversión. No se publicará por presencia, sino bajo una estrategia clara de posicionamiento y captación, con embudos específicos según tipo de servicio y público.',
    enfoque: 'Proyectaremos una imagen moderna, profesional y accesible, manteniendo siempre autoridad y claridad.',
    incluye: [
      'Creación, optimización y administración de la página de Facebook e Instagram.',
      'Generación de contenido mensual: 16 publicaciones en Facebook e Instagram.',
      'Community management en horario de oficina, de lunes a viernes.',
      'Creación y diseño de campañas publicitarias.',
      'Planificación de la inversión en los canales digitales de Meta.',
      'Administración y monitoreo de anuncios y KPIs en Meta Business, Metricool y Google Analytics.',
      'Creación de públicos y audiencias especiales (bases de datos, públicos objetivos, remarketing).',
      'Reportes mensuales de rendimiento y benchmarking con la competencia.',
    ],
    kickoff: [
      ...kickoffBase,
      { titulo: 'Estrategia de comunicación y marketing', detalle: 'Desarrollo de la estrategia, aproximadamente 2 semanas.' },
      { titulo: 'Creación de key visuals', detalle: 'Adaptados a la identidad y estilo de la marca.' },
      { titulo: 'Credenciales y accesos', detalle: 'Para la administración de las cuentas en todas las plataformas.' },
      { titulo: 'Configuración de Business Managers', detalle: 'Configuración u optimización para el correcto manejo de los activos digitales.' },
      { titulo: 'Audiencias y bases de datos', detalle: 'Para segmentar y optimizar las campañas desde el inicio.' },
      { titulo: 'Presentación de la estrategia', detalle: 'Plan de contenidos con la propuesta final para ejecución inmediata.' },
    ],
  },

  branding: {
    titulo: 'Branding',
    subtitulo: 'Identidad que conecta',
    estrategia:
      'El branding no es solo un logo, es el alma del proyecto. Creamos marcas desde su esencia, con propósito, visión y estética, construyendo una base sólida sobre la cual crecerá toda la comunicación y el posicionamiento de la marca.',
    incluye: [
      'Diseño de logo: creación de una identidad visual moderna y profesional.',
      'Manual de marca: definición de colores, tipografías, tono de comunicación y aplicaciones gráficas.',
    ],
    proceso: {
      titulo: 'Logotipo, diseño de identidad visual',
      texto:
        'Un logotipo sólido y bien diseñado es la piedra angular de una marca memorable. Nuestro proceso garantiza que la identidad visual comunique su propuesta de valor con claridad.',
      pasos: ['Investigación y conceptualización', 'Exploración y diseño', 'Iteración y refinamiento', 'Entrega y aplicación'],
    },
    checklist: {
      titulo: 'Manual de marca',
      texto:
        'El manual de marca garantizará consistencia visual y comunicativa, definiendo cómo debe aplicarse la identidad en todos los puntos de contacto.',
      items: [
        'Composición y significado del logotipo',
        'Paleta de colores y psicología del color',
        'Tipografía oficial y alternativas',
        'Guía de usos correctos e incorrectos',
        'Tamaños mínimos y espaciado del logo',
        'Aplicaciones en material corporativo (tarjetas, papelería, uniformes, señalética, etc.)',
        'Adaptaciones para digital y publicidad',
      ],
    },
    kickoff: [
      ...kickoffBase,
      { titulo: 'Investigación de marca y competencia', detalle: 'Entrevistas, referentes y análisis del mercado.' },
      { titulo: 'Presentación de conceptos', detalle: 'Primeras rutas creativas para elegir una dirección.' },
      { titulo: 'Rondas de ajuste', detalle: 'Refinamos la propuesta elegida hasta su versión final.' },
      { titulo: 'Entrega del manual de marca', detalle: 'Archivos finales y guía de aplicación.' },
    ],
  },

  'desarrollo-web': {
    titulo: 'Desarrollo web',
    subtitulo: 'Diseño que convierte',
    estrategia:
      'Diseñamos y desarrollamos sitios pensados para convertir visitas en contactos: navegación clara, contenido jerarquizado según lo que decide la compra y un flujo corto entre explorar y dejar los datos.',
    enfoque: 'Diseño mobile-first, carga rápida y medición configurada desde el primer día.',
    incluye: [
      'Definición del mapa de sitio y la estructura del sitio web.',
      'Definición de UX/UI para la web.',
      'Uso y licencias de imágenes de stock.',
      'Desarrollo del sitio web.',
      'Integración de sistemas de medición, control y remarketing (Google Analytics, Google Search Console, herramientas de Meta).',
      'Optimización del diseño responsive para dispositivos móviles.',
      'Análisis final del sitio antes de su publicación.',
    ],
    kickoff: [
      ...kickoffBase,
      { titulo: 'Accesos a dominio y hosting', detalle: 'O la contratación de ambos si todavía no existen.' },
      { titulo: 'Mapa de sitio', detalle: 'Estructura de páginas y contenidos aprobada.' },
      { titulo: 'Diseño UX/UI', detalle: 'Diseño de las pantallas principales para aprobación.' },
      { titulo: 'Desarrollo', detalle: 'Construcción del sitio sobre el diseño aprobado.' },
      { titulo: 'Pruebas y lanzamiento', detalle: 'Revisión en dispositivos, medición configurada y publicación.' },
    ],
  },

  eventos: {
    titulo: 'Organización de eventos',
    subtitulo: 'Experiencias que se recuerdan',
    estrategia:
      'Diseñamos cada evento como una pieza de comunicación de la marca: definimos el objetivo, la experiencia que queremos que viva cada invitado y cómo se va a contar antes, durante y después.',
    enfoque: 'Una producción cuidada en cada detalle, con un solo equipo responsable de punta a punta.',
    incluye: [
      'Concepto creativo y línea gráfica del evento.',
      'Planificación general, cronograma y presupuesto.',
      'Búsqueda y coordinación de locación, proveedores y talentos.',
      'Producción y montaje: escenografía, ambientación, sonido e iluminación.',
      'Gestión de invitados y protocolo.',
      'Coordinación general el día del evento.',
      'Cobertura en redes sociales y registro fotográfico.',
      'Informe final de resultados.',
    ],
    kickoff: [
      ...kickoffBase,
      { titulo: 'Concepto y presupuesto', detalle: 'Propuesta creativa y presupuesto detallado para aprobación.' },
      { titulo: 'Confirmación de proveedores', detalle: 'Locación, catering, técnica y talentos.' },
      { titulo: 'Plan de comunicación', detalle: 'Invitaciones y difusión antes del evento.' },
      { titulo: 'Ensayo general y montaje', detalle: 'Revisión de cada detalle antes de abrir puertas.' },
    ],
  },

  'relaciones-publicas': {
    titulo: 'Relaciones públicas',
    subtitulo: 'Tu marca en la conversación',
    estrategia:
      'Construimos la presencia de la marca en los medios a partir de historias con valor noticioso: lanzamientos, logros, datos y voceros que tienen algo que decir. El objetivo es que la marca aparezca en los espacios correctos, con el mensaje correcto y de forma sostenida.',
    enfoque: 'Cobertura ganada y relación de largo plazo con los medios, no apariciones aisladas.',
    incluye: [
      'Diagnóstico de la presencia actual de la marca en los medios.',
      'Definición de mensajes clave, temas y voceros.',
      'Mapa de medios y periodistas relevantes para la marca.',
      'Redacción y distribución de notas de prensa.',
      'Gestión de entrevistas y apariciones en prensa, radio, televisión y medios digitales.',
      'Preparación de voceros (media training).',
      'Monitoreo de medios y reporte mensual de apariciones.',
    ],
    kickoff: [
      ...kickoffBase,
      { titulo: 'Diagnóstico de medios', detalle: 'Cómo aparece hoy la marca y qué se dice de ella.' },
      { titulo: 'Mensajes y voceros', detalle: 'Temas a instalar y personas que hablarán por la marca.' },
      { titulo: 'Plan de prensa', detalle: 'Calendario de notas, entrevistas y acciones con medios.' },
    ],
  },

  influencers: {
    titulo: 'Marketing de influencers',
    subtitulo: 'Voces que generan confianza',
    estrategia:
      'Elegimos creadores de contenido cuya audiencia coincide con el público de la marca y cuya forma de comunicar es coherente con sus valores. Cada colaboración tiene un objetivo claro, un brief que respeta la voz del creador y una medición que muestra qué funcionó.',
    enfoque: 'Pocos perfiles bien elegidos antes que muchos sin afinidad con la marca.',
    incluye: [
      'Búsqueda, evaluación y selección de perfiles según audiencia, afinidad y calidad de contenido.',
      'Negociación de entregables, fechas, derechos de uso y honorarios.',
      'Brief creativo para cada creador.',
      'Revisión y aprobación del contenido antes de su publicación.',
      'Coordinación de envíos de producto, visitas o asistencia a eventos.',
      'Seguimiento de publicaciones y reporte de resultados por creador.',
    ],
    kickoff: [
      ...kickoffBase,
      { titulo: 'Shortlist de perfiles', detalle: 'Creadores propuestos con su audiencia y métricas para aprobación.' },
      { titulo: 'Negociación y contratos', detalle: 'Entregables, fechas y honorarios acordados con cada creador.' },
      { titulo: 'Brief y contenidos', detalle: 'Briefs enviados y contenidos revisados antes de publicar.' },
    ],
  },

  btl: {
    titulo: 'BTL y activaciones',
    subtitulo: 'La marca en el punto de contacto',
    estrategia:
      'Diseñamos activaciones que acercan la marca a las personas en el lugar donde toman la decisión: punto de venta, eventos, centros comerciales o la calle. Cada activación parte de un objetivo concreto (prueba de producto, captación de datos, ventas o notoriedad) y de una mecánica simple que invita a participar.',
    enfoque: 'Experiencias cuidadas en cada detalle, con un equipo en campo que representa bien a la marca.',
    incluye: [
      'Concepto creativo y mecánica de la activación.',
      'Diseño de stand, materiales gráficos y merchandising.',
      'Selección y capacitación de promotores.',
      'Coordinación de puntos, fechas, permisos y logística.',
      'Supervisión en campo durante cada jornada.',
      'Registro fotográfico y contenido para redes.',
      'Informe final con contactos, participación y resultados.',
    ],
    kickoff: [
      ...kickoffBase,
      { titulo: 'Concepto y mecánica', detalle: 'Idea creativa y dinámica con el público para aprobación.' },
      { titulo: 'Puntos y calendario', detalle: 'Lugares, fechas, horarios y permisos confirmados.' },
      { titulo: 'Producción de materiales', detalle: 'Stand, gráficas y merchandising listos para la activación.' },
      { titulo: 'Capacitación de promotores', detalle: 'Mensajes, mecánica y protocolo antes de salir a campo.' },
    ],
  },

  'produccion-audiovisual': {
    titulo: 'Producción fotográfica y audiovisual',
    subtitulo: 'Una biblioteca visual propia',
    estrategia:
      'Para reemplazar el uso de imágenes genéricas y construir una identidad visual auténtica, proponemos sesiones de fotografía y video con personas reales, en contextos propios de la marca.',
    incluye: [
      'Reforzar la humanización de la marca.',
      'Construir una biblioteca visual propia y coherente.',
      'Aumentar el impacto visual y la diferenciación en redes sociales.',
    ],
    kickoff: [
      ...kickoffBase,
      { titulo: 'Guion y plan de rodaje', detalle: 'Locaciones, tomas y fechas aprobadas.' },
      { titulo: 'Sesión de producción' },
      { titulo: 'Edición y entrega' },
    ],
  },
} satisfies Record<string, Servicio>;

export type IdServicio = keyof typeof servicios;
export const idsServicios = Object.keys(servicios) as [IdServicio, ...IdServicio[]];
