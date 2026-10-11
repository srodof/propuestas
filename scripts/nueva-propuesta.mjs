// Crea una propuesta nueva a partir de plantilla-propuesta.md.
// Uso: npm run nueva -- "Nombre del cliente" [MM-YY] [--servicios desarrollo-web,branding]
// Genera src/content/propuestas/MM-YY/nombre-del-cliente-xxxx.md y la
// carpeta de imágenes public/propuestas/MM-YY/nombre-del-cliente-xxxx/.
import { mkdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { randomInt } from 'node:crypto';

const args = process.argv.slice(2);
const iServicios = args.indexOf('--servicios');
const pedidos = iServicios >= 0 ? (args.splice(iServicios, 2)[1] ?? '').split(',').filter(Boolean) : [];
const [cliente, mesArg] = args;
if (!cliente) {
  console.error('Uso: npm run nueva -- "Nombre del cliente" [MM-YY] [--servicios desarrollo-web,branding]');
  process.exit(1);
}

const hoy = new Date();
const mes = mesArg ?? `${String(hoy.getMonth() + 1).padStart(2, '0')}-${String(hoy.getFullYear()).slice(-2)}`;
if (!/^\d{2}-\d{2}$/.test(mes)) {
  console.error(`El mes debe tener el formato MM-YY (recibí "${mes}").`);
  process.exit(1);
}
const [mm, yy] = mes.split('-');

const nombre = cliente
  .toLowerCase()
  .normalize('NFD')
  .replace(/[̀-ͯ]/g, '')
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/(^-|-$)/g, '');
const letras = 'abcdefghjkmnpqrstuvwxyz23456789';
const codigo = Array.from({ length: 4 }, () => letras[randomInt(letras.length)]).join('');
const slug = `${nombre}-${codigo}`;

const archivo = `src/content/propuestas/${mes}/${slug}.md`;
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

let plantilla = readFileSync('plantilla-propuesta.md', 'utf8')
  .replace(/^cliente: .*$/m, `cliente: ${cliente}`)
  .replace(/^fecha: .*$/m, `fecha: 20${yy}-${mm}-01`);
if (pedidos.length > 0) {
  plantilla = plantilla.replace(/^  - servicio: .*$/m, pedidos.map((p) => `  - servicio: ${p}`).join('\n'));
}

mkdirSync(`src/content/propuestas/${mes}`, { recursive: true });
mkdirSync(`public/propuestas/${mes}/${slug}`, { recursive: true });
writeFileSync(archivo, plantilla);

console.log(`Propuesta creada: ${archivo}`);
console.log(`Imágenes en:      public/propuestas/${mes}/${slug}/`);
console.log(`URL:              https://propuestas.swiitchad.com/${mes}/${slug}/`);
