// Contenido fijo de SWIITCH: aparece igual en todas las propuestas.
// Se edita una sola vez aquí y cada propuesta puede ocultar secciones
// con `ocultar` en su frontmatter.

export const agencia = {
  nosotros: {
    titulo: 'Impulsamos empresas hacia la transformación digital',
    quienesSomos:
      'Somos una agencia especializada en estrategias de marketing, comunicación, branding y transformación digital, con un equipo multidisciplinario de profesionales cuyos directores ejecutivos cuentan con más de 15 años de experiencia. En SWIITCH nos une la misma pasión: entregar soluciones a medida para desafíos empresariales específicos.',
    queHacemos:
      'Desarrollamos y ejecutamos estrategias digitales y tradicionales: desde diseño web y marketing en redes sociales hasta manejo de influencers, relaciones públicas, eventos corporativos, BTL y activaciones en puntos de venta.',
    mision:
      'Nuestra misión es clara: alcanzar y superar los objetivos de nuestros clientes, ya sean de marca, ventas o cualquier otro objetivo crucial para su éxito.',
    imagen: '/marca/equipo.jpg',
  },

  // Tres diferenciales que se muestran justo debajo del hero
  diferenciales: [
    {
      icono: 'trending-up',
      titulo: 'Agencia boutique enfocada en resultados',
      texto: 'Trato cercano y socios directores con más de 15 años de experiencia involucrados en cada definición, con la mirada puesta en los resultados de tu negocio.',
    },
    {
      icono: 'target',
      titulo: 'Estrategias a medida',
      texto: 'No vendemos paquetes genéricos: diseñamos cada solución para el desafío específico de tu empresa y te acompañamos en la ejecución.',
    },
    {
      icono: 'users',
      titulo: 'Equipo multidisciplinario',
      texto: 'Expertos en cada área de la empresa para entregarte los mejores resultados.',
    },
  ],

  cifras: [
    { valor: 15, sufijo: '+', etiqueta: 'Años de experiencia' },
    { valor: 30, sufijo: '+', etiqueta: 'Marcas que confían en nosotros' },
    { valor: 2, sufijo: '', etiqueta: 'Oficinas: Santa Cruz y Miami' },
    { valor: 100, sufijo: '%', etiqueta: 'Acciones medibles' },
  ],

  servicios: [
    {
      area: 'Marketing',
      icono: 'target',
      items: ['Social Media Marketing', 'Marketing de Influencers', 'Diseño Web', 'Asesoría de Marketing'],
    },
    {
      area: 'Comunicación',
      icono: 'users',
      items: ['Comunicación Corporativa', 'Relaciones Públicas', 'Organización de Eventos'],
    },
    {
      area: 'Publicidad',
      icono: 'trending-up',
      items: ['Creatividad Publicitaria', 'Branding e Identidad Corporativa', 'BTL y Activaciones', 'Planificación y Compra de Medios'],
    },
  ],

  clientes: [
    'bmw', 'jeep', 'bacardi', 'johnsons', 'neutrogena', 'listerine', 'sundown', 'mitsubishi',
    'chery', 'jmc', 'embol', 'yango', 'telio', 'essen', 'aico', 'belen', 'green-tower',
    'ballerina', 'femenina', 'yogen-fruz', 'cenace', 'astara', 'ayvanna-rever', 'across',
    'colorshop', 'cuarta-dimension', 'helados-cayara', 'iu', 'memorial-park', 'rafcar', 'sirius',
    'tl-attorneys',
  ],

  metodo: [
    {
      titulo: 'Análisis',
      icono: 'search',
      texto: 'Partimos de una investigación interna y externa de la empresa, identificando oportunidades de negocio en sintonía emocional con tu mercado.',
    },
    {
      titulo: 'Estrategia',
      icono: 'target',
      texto: 'Ideamos soluciones que generan valor, innovación y experiencias centradas en el usuario para posicionar tu marca en la mente y el corazón de tus consumidores.',
    },
    {
      titulo: 'Ejecución',
      icono: 'trending-up',
      texto: 'Implementamos los procesos y te acompañamos en las actividades necesarias para atraer nuevos clientes, fidelizar los actuales y diferenciar tu negocio.',
    },
    {
      titulo: 'Medición',
      icono: 'bar-chart',
      texto: 'Lo que no se mide no se puede mejorar. Medimos el retorno de tu inversión y evaluamos resultados para alcanzar tus objetivos.',
    },
  ],

  // Notas de inversión que se usan si la propuesta no escribe las suyas
  notasInversion: [
    'Los montos se estimaron según las horas de trabajo de los integrantes del equipo. El perfil de nuestra agencia establece una dedicación relevante de los socios directores, que aportan su experiencia en las definiciones.',
    'El fee de agencia no incluye la inversión publicitaria. Todos los gastos en medios pagados serán aprobados y financiados directamente por el cliente.',
    'Cualquier producción audiovisual necesaria (videos, fotografía profesional, modelos e influencers, alquiler de espacios y escenografías) no está incluida en el fee de agencia y requerirá un presupuesto y aprobación por separado.',
  ],

  contacto: {
    direccion: ['Av. San Martín, Calle J', 'Edificio Manzana 40, Torre 2, Piso 9', 'Santa Cruz de la Sierra, Bolivia'],
    telefono: '(591) 779 44824',
    whatsapp: '59177944824',
    email: 'info@swiitchad.com',
    web: 'https://www.swiitchad.com',
    oficinas: ['Santa Cruz de la Sierra', 'Miami'],
  },
};

// Nombres para el texto alternativo de los logos de clientes.
export const nombresClientes: Record<string, string> = {
  bmw: 'BMW', jeep: 'Jeep', bacardi: 'Bacardí', johnsons: "Johnson's", neutrogena: 'Neutrogena',
  listerine: 'Listerine', sundown: 'Sundown', mitsubishi: 'Mitsubishi Motors', chery: 'Chery', jmc: 'JMC',
  embol: 'Embol', yango: 'Yango', telio: 'Telio', 'telio-amarillo': 'Telio', essen: 'Essen',
  aico: 'AICO Financial', belen: 'Belén', 'green-tower': 'Green Tower', ballerina: 'Ballerina',
  femenina: 'Femenina', 'yogen-fruz': 'Yogen Früz', cenace: 'CENACE UPSA', astara: 'Astara Ovando',
  'ayvanna-rever': 'Ayvanna Rêver', across: 'Across Rent a Car', roho: 'ROHO Homecenter',
  'pedro-del-brete': 'Pedro del Brete', simpleclaims: 'Simple Claims', 'signature-trust': 'Signature Trust',
  'santa-cruz-watch': 'Santa Cruz Watch Co.', colorshop: 'Colorshop', 'cuarta-dimension': 'Cuarta Dimensión',
  'helados-cayara': 'Helados Cayara', iu: 'iU', 'memorial-park': 'Memorial Park', rafcar: 'Rafcar Motors',
  sirius: 'Sirius', 'tl-attorneys': 'TL Attorneys PA',
};

// Versión en inglés, para propuestas con `idioma: en`. Lo que no cambia con
// el idioma (imagen, clientes, WhatsApp) se toma de la versión en español.
export const agenciaEn: typeof agencia = {
  ...agencia,
  nosotros: {
    titulo: 'Driving companies toward digital transformation',
    quienesSomos:
      'We are an agency specialized in marketing strategy, communications, branding and digital transformation, with a multidisciplinary team led by executive directors with more than 15 years of experience. At SWIITCH we share one passion: delivering tailored solutions to specific business challenges.',
    queHacemos:
      'We design and run digital and traditional strategies, from web design and social media marketing to influencer management, public relations, corporate events, BTL and point-of-sale activations.',
    mision:
      "Our mission is simple: to meet and exceed our clients' goals, whether they are about brand, sales or any other objective that matters to their success.",
    imagen: agencia.nosotros.imagen,
  },
  diferenciales: [
    {
      icono: 'trending-up',
      titulo: 'A boutique agency focused on results',
      texto: 'Close collaboration, with managing partners who bring more than 15 years of experience to every decision and keep their eyes on your business results.',
    },
    {
      icono: 'target',
      titulo: 'Tailored strategies',
      texto: 'We do not sell generic packages: we design every solution for the specific challenge in front of us and stay with you through execution.',
    },
    {
      icono: 'users',
      titulo: 'Multidisciplinary team',
      texto: 'Specialists in every area of the business, working together to deliver the best results.',
    },
  ],
  cifras: [
    { valor: 15, sufijo: '+', etiqueta: 'Years of experience' },
    { valor: 30, sufijo: '+', etiqueta: 'Brands that trust us' },
    { valor: 2, sufijo: '', etiqueta: 'Offices: Santa Cruz and Miami' },
    { valor: 100, sufijo: '%', etiqueta: 'Measurable actions' },
  ],
  servicios: [
    { area: 'Marketing', icono: 'target', items: ['Social Media Marketing', 'Influencer Marketing', 'Web Design', 'Marketing Advisory'] },
    { area: 'Communications', icono: 'users', items: ['Corporate Communications', 'Public Relations', 'Event Management'] },
    { area: 'Advertising', icono: 'trending-up', items: ['Creative Advertising', 'Branding and Corporate Identity', 'BTL and Activations', 'Media Planning and Buying'] },
  ],
  metodo: [
    { titulo: 'Analysis', icono: 'search', texto: 'We start with internal and external research on the company, finding business opportunities that connect emotionally with your market.' },
    { titulo: 'Strategy', icono: 'target', texto: 'We create solutions that build value, innovation and user-centered experiences to place your brand in the minds and hearts of your customers.' },
    { titulo: 'Execution', icono: 'trending-up', texto: 'We put the processes in place and stay with you through the activities needed to win new customers, keep current ones and set your business apart.' },
    { titulo: 'Measurement', icono: 'bar-chart', texto: 'What is not measured cannot be improved. We measure the return on your investment and evaluate results to reach your goals.' },
  ],
  notasInversion: [
    'Fees were estimated based on the working hours of the team members involved. Our agency model includes significant involvement from the managing partners, who bring their experience to every key decision.',
    'Agency fees do not include advertising spend. All paid media costs are approved and paid directly by the client.',
    'Any audiovisual production required (video, professional photography, models and influencers, venue and set rental) is not included in the agency fee and will be quoted and approved separately.',
  ],
  contacto: {
    ...agencia.contacto,
    direccion: ['1900 N Bayshore Dr', 'Miami, FL 33132', 'United States'],
    telefono: '+1 (305) 458-1532',
    web: 'https://miami.swiitchad.com',
  },
};

export const agencias = { es: agencia, en: agenciaEn };
