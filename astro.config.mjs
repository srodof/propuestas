// @ts-check
import { defineConfig } from 'astro/config';

// Sitio 100% estático: `npm run build` genera la carpeta dist/,
// que se sube tal cual a public_html en Hostinger.
export default defineConfig({
  site: 'https://propuestas.swiitchad.com',
  output: 'static',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
