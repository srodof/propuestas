// Crea una propuesta nueva a partir de plantilla-propuesta.md.
// Uso: npm run nueva -- "Nombre del cliente" [MM-YY]
// Genera src/content/propuestas/MM-YY/nombre-del-cliente-xxxx.md y la
// carpeta de imágenes public/propuestas/MM-YY/nombre-del-cliente-xxxx/.
import { mkdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { randomInt } from 'node:crypto';

const [cliente, mesArg] = process.argv.slice(2);
if (!cliente) {
  console.error('Uso: npm run nueva -- "Nombre del cliente" [MM-YY]');
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

const plantilla = readFileSync('plantilla-propuesta.md', 'utf8')
  .replace(/^cliente: .*$/m, `cliente: ${cliente}`)
  .replace(/^fecha: .*$/m, `fecha: 20${yy}-${mm}-01`);

mkdirSync(`src/content/propuestas/${mes}`, { recursive: true });
mkdirSync(`public/propuestas/${mes}/${slug}`, { recursive: true });
writeFileSync(archivo, plantilla);

console.log(`Propuesta creada: ${archivo}`);
console.log(`Imágenes en:      public/propuestas/${mes}/${slug}/`);
console.log(`URL:              https://propuestas.swiitchad.com/${mes}/${slug}/`);
