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
    imagen: '/propuestas/urubo-golf/equipo.jpg',
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
  'santa-cruz-watch': 'Santa Cruz Watch Co.',
};
