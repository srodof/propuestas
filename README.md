# Propuestas SWIITCH (Astro)

Cada propuesta es un archivo en `src/content/propuestas/`. El nombre del archivo es la URL:
`acme.md` → https://propuestas.swiitchad.com/acme/

## Crear una propuesta
1. Copia `src/content/propuestas/ejemplo-cliente.md` con el nombre del cliente.
2. Cambia los datos del encabezado (cliente, servicios, cronograma, inversión...).
3. Debajo del encabezado puedes escribir texto libre en Markdown.

## Ver y publicar
- `npm install` (solo la primera vez)
- `npm run dev` para verla en http://localhost:4321/
- `npm run build` genera la carpeta `dist/`
- Sube el CONTENIDO de `dist/` a `public_html` del subdominio en Hostinger.

La portada no lista las propuestas y el sitio pide a Google no indexarlo.
