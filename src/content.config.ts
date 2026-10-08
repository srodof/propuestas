import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Cada archivo .md en src/content/propuestas/ es una propuesta.
// El nombre del archivo define la URL: acme.md -> /acme/
// Lo común de SWIITCH (nosotros, servicios, clientes, método, contacto)
// vive en src/data/agencia.ts; aquí va solo lo propio de cada cliente.

const paso = z.object({ titulo: z.string(), detalle: z.string().optional() });

const modulo = z.object({
  titulo: z.string(), // "Branding"
  subtitulo: z.string().optional(), // "Identidad que conecta"
  imagen: z.string().optional(),
  estrategia: z.string().optional(),
  enfoque: z.string().optional(),
  // Lista de lo que incluye el servicio (entregables)
  incluye: z.array(z.string()).default([]),
  // Bloques opcionales que se muestran solo si tienen contenido
  proceso: z
    .object({ titulo: z.string(), texto: z.string().optional(), pasos: z.array(z.string()) })
    .optional(),
  checklist: z
    .object({ titulo: z.string(), texto: z.string().optional(), items: z.array(z.string()) })
    .optional(),
  casos: z
    .object({ titulo: z.string(), texto: z.string().optional(), logos: z.array(z.string()) })
    .optional(),
});

const propuestas = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/propuestas' }),
  schema: z.object({
    cliente: z.string(),
    titulo: z.string(), // "Branding & Social Media Marketing"
    fecha: z.coerce.date(),
    vigenciaDias: z.number().default(15),
    logoCliente: z.string().optional(),
    imagenHero: z.string().optional(),
    bajada: z.string().optional(), // frase corta bajo el título del hero

    situacion: z.array(z.string()).min(1), // párrafos
    requerimiento: z.string(),
    imagenRequerimiento: z.string().optional(),

    modulos: z.array(modulo).default([]),
    kickoff: z.array(paso).default([]),

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
  }),
});

export const collections = { propuestas };
