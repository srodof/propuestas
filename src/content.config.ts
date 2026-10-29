import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { servicios, idsServicios, type Paso, type Servicio } from './data/servicios';
import { serviciosEn } from './data/servicios.en';
import { lineas, lineasEn, idsLineas, type Linea } from './data/lineas';

// Cada archivo .md en src/content/propuestas/<linea>/ es una propuesta.
// Lo común de SWIITCH (nosotros, servicios, clientes, contacto) vive en
// src/data/agencia.ts, la personalización de cada línea de negocio en
// src/data/lineas.ts y el contenido por defecto de cada servicio en
// src/data/servicios.ts; aquí va solo lo propio de cada cliente.

const paso = z.object({ titulo: z.string(), detalle: z.string().optional() });
const tarjeta = z.object({ icono: z.string(), titulo: z.string(), texto: z.string() });

const modulo = z.object({
  // Servicio de la biblioteca (src/data/servicios.ts) que da el contenido por defecto
  servicio: z.enum(idsServicios).optional(),
  titulo: z.string().optional(), // "Branding"
  subtitulo: z.string().nullish(), // "Identidad que conecta"
  plazo: z.string().optional(), // "Entrega en 60 días"
  imagen: z.string().optional(),
  estrategia: z.string().nullish(),
  enfoque: z.string().nullish(),
  // Bloques de texto con título libre ("Qué se construye", "Diseño UX/UI")
  bloques: z.array(z.object({ titulo: z.string(), texto: z.string() })).optional(),
  // Lista de lo que incluye el servicio (entregables)
  incluye: z.array(z.string()).optional(),
  // Alcance: funcionalidades con un título corto y su explicación
  alcance: z.array(paso).optional(),
  // Bloques opcionales que se muestran solo si tienen contenido
  proceso: z
    .object({ titulo: z.string(), texto: z.string().optional(), pasos: z.array(z.string()) })
    .nullish(),
  checklist: z
    .object({ titulo: z.string(), texto: z.string().optional(), items: z.array(z.string()) })
    .nullish(),
  // Tabla para comparar opciones (por ejemplo, WordPress o HTML)
  comparativa: z
    .object({
      titulo: z.string(),
      texto: z.string().optional(),
      columnas: z.array(z.string()).min(2),
      filas: z.array(z.array(z.string()).min(2)),
    })
    .optional(),
  casos: z
    .object({ titulo: z.string(), texto: z.string().optional(), logos: z.array(z.string()) })
    .optional(),
  // Fotos de trabajos anteriores (portafolio del equipo o proveedor)
  galeria: z
    .object({ titulo: z.string(), texto: z.string().optional(), fotos: z.array(z.string()).min(1) })
    .optional(),
});

type Modulo = z.infer<typeof modulo>;
const biblioteca = { es: servicios as Partial<Record<string, Servicio>>, en: serviciosEn };
const bibliotecaLineas = { es: lineas as Partial<Record<string, Linea>>, en: lineasEn };

// Junta el contenido por defecto del servicio (en el idioma de la propuesta)
// con lo que escribió la propuesta.
function armarModulo({ servicio, ...propio }: Modulo, idioma: keyof typeof biblioteca, ctx: z.RefinementCtx) {
  const def = servicio ? biblioteca[idioma][servicio] : undefined;
  if (servicio && !def) {
    ctx.addIssue({ code: 'custom', message: `El servicio "${servicio}" todavía no tiene versión en ${idioma}; agrégalo en src/data/servicios.${idioma}.ts.` });
    return z.NEVER;
  }
  const { kickoff, ...base } = def ?? { kickoff: [] as Paso[] };
  const definido = Object.fromEntries(Object.entries(propio).filter(([, v]) => v !== undefined));
  // `null` en la propuesta quita un campo que trae el servicio (ej. `enfoque: null`)
  const m = Object.fromEntries(
    Object.entries({ ...base, ...definido }).filter(([, v]) => v !== null),
  ) as { [K in keyof typeof propio]: Exclude<(typeof propio)[K], null> };
  if (!m.titulo) {
    ctx.addIssue({ code: 'custom', message: 'Cada módulo necesita `titulo` o `servicio`.' });
    return z.NEVER;
  }
  return { ...m, titulo: m.titulo, incluye: m.incluye ?? [], kickoffServicio: kickoff };
}

const propuestas = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/propuestas' }),
  schema: z
    .object({
      idioma: z.enum(['es', 'en']).default('es'),
      // Línea de negocio (src/data/lineas.ts): da título, bajada, módulos,
      // diferenciales, método y notas por defecto, y la primera parte de la URL
      linea: z.enum(idsLineas),
      cliente: z.string(),
      titulo: z.string().optional(), // "Branding & Social Media Marketing"; por defecto, el de la línea
      fecha: z.coerce.date(),
      vigenciaDias: z.number().default(15),
      logoCliente: z.string().optional(),
      imagenHero: z.string().optional(),
      bajada: z.string().nullish(), // frase corta bajo el título del hero; `null` la quita
      // Links con los que se envió la propuesta antes de cambiar de URL: redirigen a la nueva
      urlsAnteriores: z.array(z.string().regex(/^\/[a-z0-9/-]+\/$/, 'Escribe la URL como /10-26/cliente-xxxx/')).default([]),

      situacion: z.array(z.string()).min(1), // párrafos; **texto** va en negrita
      cita: z.string().optional(), // frase destacada al final de la situación
      requerimiento: z.string(),
      imagenRequerimiento: z.string().optional(),

      modulos: z.array(modulo).optional(), // por defecto, un módulo por cada servicio de la línea
      kickoff: z.array(paso).default([]),
      // Reemplazan las tarjetas bajo el hero y los pasos de "Cómo trabajamos" de la línea
      diferenciales: z.array(tarjeta).optional(),
      metodo: z.array(tarjeta).optional(),

      inversion: z.object({
        moneda: z.string().default('Bs.'),
        items: z.array(
          z.object({
            servicio: z.string(),
            concepto: z.string(), // "Fee mensual Meta"
            monto: z.string(), // "10.000"
            periodo: z.string().optional(), // "/ mes"
            incluye: z.array(z.string()).default([]),
            destacado: z.boolean().default(false),
          }),
        ),
        notas: z.array(z.string()).default([]),
      }),

      // Secciones fijas de SWIITCH que esta propuesta no quiere mostrar
      ocultar: z
        .array(z.enum(['nosotros', 'cifras', 'servicios', 'clientes', 'metodo']))
        .default([]),
    })
    .transform(({ modulos: crudos, kickoff, inversion, titulo, bajada, diferenciales, metodo, ...resto }, ctx) => {
      const linea = bibliotecaLineas[resto.idioma][resto.linea];
      if (!linea) {
        ctx.addIssue({ code: 'custom', message: `La línea "${resto.linea}" todavía no tiene versión en ${resto.idioma}; agrégala en lineasEn de src/data/lineas.ts.` });
        return z.NEVER;
      }
      const modulos = (crudos ?? linea.servicios.map((servicio) => ({ servicio }))).map((m) => armarModulo(m, resto.idioma, ctx));
      // Sin kick off propio, se juntan los de cada servicio sin repetir pasos
      const pasos = kickoff.length > 0 ? kickoff : modulos.flatMap((m) => m.kickoffServicio);
      const vistos = new Set<string>();
      return {
        ...resto,
        nombreLinea: linea.nombre,
        titulo: titulo ?? linea.titulo,
        bajada: bajada === undefined ? linea.bajada : bajada ?? undefined,
        diferenciales: diferenciales ?? linea.diferenciales,
        metodo: metodo ?? linea.metodo,
        modulos: modulos.map(({ kickoffServicio, ...m }) => m),
        kickoff: pasos.filter((p) => !vistos.has(p.titulo) && vistos.add(p.titulo)),
        inversion: { ...inversion, notas: inversion.notas.length > 0 ? inversion.notas : linea.notasInversion },
      };
    }),
});

export const collections = { propuestas };
