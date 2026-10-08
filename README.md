# Propuestas SWIITCH (Astro)

Cada propuesta es un archivo Markdown guardado por mes y año, con un código al azar al final para que la URL no se pueda adivinar:

```
src/content/propuestas/MM-YY/cliente-xxxx.md   →  propuestas.swiitchad.com/MM-YY/cliente-xxxx/
public/propuestas/MM-YY/cliente-xxxx/          →  sus imágenes (hero, logo, fotos de módulos)
```

Ejemplo: `src/content/propuestas/05-26/urubo-golf-s64q.md` → https://propuestas.swiitchad.com/05-26/urubo-golf-s64q/

## Crear una propuesta
1. `npm run nueva -- "Nombre del cliente"` crea el archivo y la carpeta de imágenes con el mes actual y un código nuevo.
   Para otro mes: `npm run nueva -- "Nombre del cliente" 06-26`.
2. Llena los datos del encabezado. `MM-YY` debe coincidir con la `fecha`; si no, el build da error.
3. Sube sus imágenes a la carpeta que te indicó el comando.

El build también da error si el nombre del archivo no termina en un código de 4 caracteres.

Lo común de SWIITCH (nosotros, diferenciales, servicios, clientes, método y contacto) está en `src/data/agencia.ts` y aparece en todas las propuestas.

## Ver y publicar
- `npm install` (solo la primera vez)
- `npm run dev` para verla en http://localhost:4321/MM-YY/cliente-xxxx/
- Al hacer merge a `main`, Hostinger publica el sitio.

La portada no lista las propuestas y el sitio pide a Google no indexarlo.
