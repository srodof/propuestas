// Crea una propuesta nueva a partir de la plantilla de su línea de negocio
// (plantillas/<linea>.md).
// Uso: npm run nueva -- <linea> "Nombre del cliente" [--servicios desarrollo-web,branding]
// Genera src/content/propuestas/<linea>/nombre-del-cliente-xxxx.md y la
// carpeta de imágenes public/propuestas/<linea>/nombre-del-cliente-xxxx/.
import { mkdirSync, readFileSync, writeFileSync, existsSync, readdirSync } from 'node:fs';
import { randomInt } from 'node:crypto';

const uso = 'Uso: npm run nueva -- <linea> "Nombre del cliente" [--servicios desarrollo-web,branding]';
const args = process.argv.slice(2);
const iServicios = args.indexOf('--servicios');
const pedidos = iServicios >= 0 ? (args.splice(iServicios, 2)[1] ?? '').split(',').filter(Boolean) : [];
const [linea, cliente] = args;
const lineas = readdirSync('plantillas').filter((f) => f.endsWith('.md')).map((f) => f.slice(0, -3));
if (!linea || !cliente) {
  console.error(`${uso}\nLíneas: ${lineas.join(', ')}.`);
  process.exit(1);
}
if (!lineas.includes(linea)) {
  console.error(`Línea desconocida: ${linea}. Disponibles: ${lineas.join(', ')}.`);
  process.exit(1);
}

const nombre = cliente
  .toLowerCase()
  .normalize('NFD')
  .replace(/[̀-ͯ]/g, '')
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/(^-|-$)/g, '');
const letras = 'abcdefghjkmnpqrstuvwxyz23456789';
const codigo = Array.from({ length: 4 }, () => letras[randomInt(letras.length)]).join('');
const slug = `${nombre}-${codigo}`;

const archivo = `src/content/propuestas/${linea}/${slug}.md`;
if (existsSync(archivo)) {
  console.error(`Ya existe ${archivo}, vuelve a intentarlo.`);
  process.exit(1);
}

// Los ids válidos son las claves de src/data/servicios.ts
const ids = [...readFileSync('src/data/servicios.ts', 'utf8').matchAll(/^  '?([a-z-]+)'?: \{$/gm)].map((m) => m[1]);
const malos = pedidos.filter((p) => !ids.includes(p));
if (malos.length > 0) {
  console.error(`Servicio desconocido: ${malos.join(', ')}. Disponibles: ${ids.join(', ')}.`);
  process.exit(1);
}

const hoy = new Date().toISOString().slice(0, 10);
let plantilla = readFileSync(`plantillas/${linea}.md`, 'utf8')
  .replace(/^cliente: .*$/m, `cliente: ${cliente}`)
  .replace(/^fecha: .*$/m, `fecha: ${hoy}`)
  .replaceAll('cliente-xxxx', slug);
// Servicios extra: se agregan como módulos después del de la línea
if (pedidos.length > 0) {
  plantilla = plantilla.replace(/^inversion:$/m, `${pedidos.map((p) => `  - servicio: ${p}`).join('\n')}\ninversion:`);
}

mkdirSync(`src/content/propuestas/${linea}`, { recursive: true });
mkdirSync(`public/propuestas/${linea}/${slug}`, { recursive: true });
writeFileSync(archivo, plantilla);

console.log(`Propuesta creada: ${archivo}`);
console.log(`Imágenes en:      public/propuestas/${linea}/${slug}/`);
console.log(`URL:              https://propuestas.swiitchad.com/${linea}/${slug}/`);
