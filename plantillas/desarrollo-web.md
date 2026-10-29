---
# Plantilla de Desarrollo web. Crea una propuesta nueva con
#   npm run nueva -- desarrollo-web "Nombre del cliente"
# Eso la copia a src/content/propuestas/desarrollo-web/nombre-del-cliente-xxxx.md
# (xxxx es un código al azar) y crea su carpeta de imágenes en
# public/propuestas/desarrollo-web/nombre-del-cliente-xxxx/.
# La línea ya trae título, bajada, el módulo del servicio, los
# diferenciales, "Cómo trabajamos" y las notas de inversión
# (src/data/lineas.ts). Escribe solo lo que cambia para este cliente;
# los bloques opcionales que no uses no se muestran. Los montos son de
# ejemplo: reemplázalos siempre.
linea: desarrollo-web
cliente: Cliente de Ejemplo
fecha: 2026-10-01
vigenciaDias: 15
# titulo: si lo dejas vacío se usa "Diseño y desarrollo web".
# bajada: una frase corta que resuma lo que proponemos.
# logoCliente: /propuestas/desarrollo-web/cliente-xxxx/logo.png
# imagenHero: /propuestas/desarrollo-web/cliente-xxxx/hero.jpg
situacion:
  - Qué sitio tiene hoy (o si no tiene), qué le falta y qué tiene que lograr la web para el negocio.
requerimiento: Diseño y desarrollo de un sitio web que...
modulos:
  - servicio: desarrollo-web
    plazo: Entrega en 60 días
    alcance:
      - titulo: Página de inicio
        detalle: Qué muestra y para qué sirve.
      - titulo: Formulario de contacto
        detalle: Llega por correo y WhatsApp.
    # comparativa:
    #   titulo: Camino técnico
    #   columnas: [Criterio, WordPress, HTML a medida]
    #   filas:
    #     - [Edición, "El cliente edita textos e imágenes", Cambios a través de SWIITCH]
inversion:
  moneda: $us
  items:
    - servicio: Sitio web
      concepto: Diseño y desarrollo (pago único)
      monto: "2.500"
      destacado: true
      incluye: [Mapa de sitio y UX/UI, Desarrollo responsive, SEO y medición configurados]
    # - servicio: Mantenimiento
    #   concepto: Soporte y actualizaciones
    #   monto: "150"
    #   periodo: / mes
---
