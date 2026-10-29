---
# Plantilla de Branding. Crea una propuesta nueva con
#   npm run nueva -- branding "Nombre del cliente"
# Eso la copia a src/content/propuestas/branding/nombre-del-cliente-xxxx.md
# (xxxx es un código al azar) y crea su carpeta de imágenes en
# public/propuestas/branding/nombre-del-cliente-xxxx/.
# La línea ya trae título, bajada, el módulo del servicio, los
# diferenciales, "Cómo trabajamos" y las notas de inversión
# (src/data/lineas.ts). Escribe solo lo que cambia para este cliente;
# los bloques opcionales que no uses no se muestran. Los montos son de
# ejemplo: reemplázalos siempre.
linea: branding
cliente: Cliente de Ejemplo
fecha: 2026-10-01
vigenciaDias: 15
# titulo: si lo dejas vacío se usa "Branding e identidad corporativa".
# bajada: una frase corta que resuma lo que proponemos.
# logoCliente: /propuestas/branding/cliente-xxxx/logo.png
# imagenHero: /propuestas/branding/cliente-xxxx/hero.jpg
situacion:
  - En qué momento está la marca (nueva, en crecimiento, en rebranding) y por qué necesita una identidad nueva.
requerimiento: Creación de logotipo y manual de marca para...
modulos:
  - servicio: branding
    # El servicio ya trae el proceso del logotipo y el checklist del manual.
    # imagen: /propuestas/branding/cliente-xxxx/branding.jpg
inversion:
  moneda: Bs.
  items:
    - servicio: Branding
      concepto: Fee logo
      monto: "5.000"
      incluye: [Investigación y conceptualización, Exploración y diseño, Iteración y refinamiento, Entrega y aplicación]
    - servicio: Branding
      concepto: Fee manual de marca
      monto: "7.000"
      destacado: true
      incluye: [Usos del logotipo, Paleta y tipografía, Aplicaciones corporativas, Adaptaciones digitales]
---
