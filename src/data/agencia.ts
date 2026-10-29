// Contenido fijo de SWIITCH: aparece igual en todas las propuestas.
// Se edita una sola vez aquí y cada propuesta puede ocultar secciones
// con `ocultar` en su frontmatter. Los diferenciales, los pasos de "Cómo
// trabajamos" y las notas de inversión cambian según la línea de negocio
// y están en src/data/lineas.ts.

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
    'bmw', 'johnsons', 'neutrogena', 'listerine', 'sundown', 'chery', 'embol', 'essen', 'aico',
    'grupo-doria-medina', 'green-tower', 'ballerina', 'yogen-fruz', 'cenace', 'ayvanna-rever',
    'colorshop', 'cuarta-dimension', 'helados-cayara', 'iu', 'memorial-park', 'rafcar', 'tl-attorneys',
  ],



  contacto: {
    direccion: ['Av. San Martín, Calle J', 'Edificio Manzana 40, Torre 2, Piso 9', 'Santa Cruz de la Sierra, Bolivia'],
    telefono: '(591) 755 30006',
    whatsapp: '59175530006',
    email: 'info@swiitchad.com',
    web: 'https://www.swiitchad.com',
    oficinas: ['Santa Cruz de la Sierra', 'Miami'],
  },
};

// Nombres para el texto alternativo de los logos de clientes.
export const nombresClientes: Record<string, string> = {
  bmw: 'BMW', johnsons: "Johnson's", neutrogena: 'Neutrogena', listerine: 'Listerine', sundown: 'Sundown',
  chery: 'Chery', embol: 'Embol', essen: 'Essen', aico: 'AICO Financial', 'grupo-doria-medina': 'Grupo Doria Medina',
  'green-tower': 'Green Tower', ballerina: 'Ballerina', 'yogen-fruz': 'Yogen Früz', cenace: 'CENACE UPSA',
  'ayvanna-rever': 'Ayvanna Rêver', colorshop: 'Colorshop', 'cuarta-dimension': 'Cuarta Dimensión',
  'helados-cayara': 'Helados Cayara', iu: 'iU', 'memorial-park': 'Memorial Park', rafcar: 'Rafcar Motors',
  'tl-attorneys': 'TL Attorneys PA',
  // Logos de casos de éxito (no salen en la franja de clientes)
  roho: 'ROHO Homecenter', 'pedro-del-brete': 'Pedro del Brete', simpleclaims: 'Simple Claims',
  'signature-trust': 'Signature Trust', 'telio-amarillo': 'Telio', 'santa-cruz-watch': 'Santa Cruz Watch Co.',
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
  contacto: {
    ...agencia.contacto,
    direccion: ['1900 N Bayshore Dr', 'Miami, FL 33132', 'United States'],
    telefono: '+1 (305) 458-1532',
    web: 'https://miami.swiitchad.com',
  },
};

export const agencias = { es: agencia, en: agenciaEn };
