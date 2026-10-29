# Propuestas SWIITCH (Astro)

Cada propuesta es un archivo Markdown guardado en la carpeta de su línea de negocio, con un código al azar al final para que la URL no se pueda adivinar:

```
src/content/propuestas/<linea>/cliente-xxxx.md   →  propuestas.swiitchad.com/<linea>/cliente-xxxx/
public/propuestas/<linea>/cliente-xxxx/          →  sus imágenes (hero, logo, fotos de módulos)
```

Ejemplo: `src/content/propuestas/eventos/urubo-downtown-gwja.md` → https://propuestas.swiitchad.com/eventos/urubo-downtown-gwja/

## Líneas de negocio
Cada línea tiene una personalización base en `src/data/lineas.ts` (título y bajada por defecto, el módulo del servicio, los tres diferenciales bajo el hero, "Cómo trabajamos" y las notas de inversión) y una plantilla en `plantillas/<linea>.md` con la estructura de inversión típica del segmento.

| Línea | Id |
| --- | --- |
| Social Media Marketing | `social-media` |
| Desarrollo web | `desarrollo-web` |
| Branding | `branding` |
| Relaciones públicas | `relaciones-publicas` |
| Marketing de influencers | `influencers` |
| BTL y activaciones | `btl` |
| Eventos | `eventos` |
| Producción audiovisual | `produccion-audiovisual` |

Una línea nueva se agrega en `src/data/lineas.ts`, con su servicio en `src/data/servicios.ts` y su plantilla en `plantillas/`.

## Crear una propuesta
La forma más simple es completar `brief-propuesta.md` y enviárselo a Claude en el proyecto con las fotos y el logo.

Para hacerlo a mano:
1. `npm run nueva -- eventos "Nombre del cliente"` crea el archivo desde la plantilla de esa línea y la carpeta de imágenes con un código nuevo.
   Para sumar otros servicios como módulos: `npm run nueva -- branding "Nombre del cliente" --servicios social-media`.
2. Llena los datos del encabezado. La carpeta debe coincidir con `linea`; si no, el build da error.
3. Sube sus imágenes a la carpeta que te indicó el comando.

El build también da error si el nombre del archivo no termina en un código de 4 caracteres.

Lo común de SWIITCH (nosotros, cifras, servicios, clientes y contacto) está en `src/data/agencia.ts` y aparece en todas las propuestas.

El contenido por defecto de cada servicio está en `src/data/servicios.ts`. Un módulo con `servicio: desarrollo-web` lo trae completo y la propuesta solo escribe lo que cambia. Ejemplo de propuesta de un solo servicio: `src/content/propuestas/desarrollo-web/omoda-jaecoo-uxsd.md`.

## Links anteriores
Hasta octubre de 2026 las URLs eran `/MM-YY/cliente-xxxx/`. Las propuestas enviadas con ese formato lo guardan en `urlsAnteriores`, y ese link redirige a la URL nueva.

## Propuestas en inglés
Con `idioma: en` en el encabezado, la plantilla, el contenido de SWIITCH (`agenciaEn` en `src/data/agencia.ts`), la línea (`lineasEn` en `src/data/lineas.ts`) y los servicios (`src/data/servicios.en.ts`) salen en inglés, y el pie muestra la oficina de Miami. Hoy solo Social Media tiene versión en inglés. Ejemplo: `src/content/propuestas/social-media/mccuskey-t7nn.md`.

## Ver y publicar
- `npm install` (solo la primera vez)
- `npm run dev` para verla en http://localhost:4321/<linea>/cliente-xxxx/
- Al hacer merge a `main`, Hostinger publica el sitio.

La portada no lista las propuestas y el sitio pide a Google no indexarlo.
