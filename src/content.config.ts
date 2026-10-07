import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Cada archivo .md en src/content/propuestas/ es una propuesta.
// El nombre del archivo define la URL: acme.md -> /acme/
const propuestas = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/propuestas' }),
  schema: z.object({
    cliente: z.string(),
    titulo: z.string(),
    fecha: z.coerce.date(),
    vigenciaDias: z.number().default(15),
    resumen: z.string(),
    objetivos: z.array(z.string()).default([]),
    servicios: z
      .array(z.object({ nombre: z.string(), descripcion: z.string(), precio: z.string().optional() }))
      .default([]),
    cronograma: z
      .array(z.object({ fase: z.string(), duracion: z.string(), detalle: z.string() }))
      .default([]),
    inversion: z.object({
      total: z.string(),
      moneda: z.string().default('USD'),
      notas: z.array(z.string()).default([]),
    }),
    contacto: z.object({
      nombre: z.string(),
      email: z.string(),
      whatsapp: z.string().optional(),
    }),
  }),
});

export const collections = { propuestas };
