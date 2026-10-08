# Propuestas SWIITCH (Astro)

Cada propuesta es un archivo Markdown guardado por mes y año:

```
src/content/propuestas/MM-YY/nombre-del-cliente.md   →  propuestas.swiitchad.com/MM-YY/nombre-del-cliente/
public/propuestas/MM-YY/nombre-del-cliente/          →  sus imágenes (hero, logo, fotos de módulos)
```

Ejemplo: `src/content/propuestas/05-26/urubo-golf.md` → https://propuestas.swiitchad.com/05-26/urubo-golf/

## Crear una propuesta
1. Copia `plantilla-propuesta.md` a `src/content/propuestas/MM-YY/nombre-del-cliente.md`.
   El nombre va en minúsculas, sin tildes y con guiones.
2. Llena los datos del encabezado. `MM-YY` debe coincidir con la `fecha`; si no coincide, el build avisa con un error.
3. Sube sus imágenes a `public/propuestas/MM-YY/nombre-del-cliente/`.

Lo común de SWIITCH (nosotros, diferenciales, servicios, clientes, método y contacto) está en `src/data/agencia.ts` y aparece en todas las propuestas.

## Ver y publicar
- `npm install` (solo la primera vez)
- `npm run dev` para verla en http://localhost:4321/MM-YY/nombre-del-cliente/
- Al hacer merge a `main`, Hostinger publica el sitio.

La portada no lista las propuestas y el sitio pide a Google no indexarlo.
