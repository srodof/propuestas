---
# Plantilla de Marketing de influencers. Crea una propuesta nueva con
#   npm run nueva -- influencers "Nombre del cliente"
# Eso la copia a src/content/propuestas/influencers/nombre-del-cliente-xxxx.md
# (xxxx es un código al azar) y crea su carpeta de imágenes en
# public/propuestas/influencers/nombre-del-cliente-xxxx/.
# La línea ya trae título, bajada, el módulo del servicio, los
# diferenciales, "Cómo trabajamos" y las notas de inversión
# (src/data/lineas.ts). Escribe solo lo que cambia para este cliente;
# los bloques opcionales que no uses no se muestran. Los montos son de
# ejemplo: reemplázalos siempre.
linea: influencers
cliente: Cliente de Ejemplo
fecha: 2026-10-01
vigenciaDias: 15
# titulo: si lo dejas vacío se usa "Marketing de influencers".
# bajada: una frase corta que resuma lo que proponemos.
# logoCliente: /propuestas/influencers/cliente-xxxx/logo.png
# imagenHero: /propuestas/influencers/cliente-xxxx/hero.jpg
situacion:
  - Qué quiere lograr la marca con creadores de contenido (notoriedad, ventas, lanzamiento) y si ya trabajó con alguno.
requerimiento: Campaña con influencers para...
modulos:
  - servicio: influencers
    # bloques:
    #   - titulo: Perfil de creadores
    #     texto: Tipo de audiencia, tamaño de cuenta y estilo...
    #   - titulo: Entregables por creador
    #     texto: Ej. 1 reel y 3 historias...
    # comparativa:
    #   titulo: Perfiles propuestos
    #   columnas: [Creador, Audiencia, Entregables]
    #   filas:
    #     - [usuario, 45K en Instagram, 1 reel + 3 historias]
inversion:
  moneda: Bs.
  items:
    - servicio: Influencers
      concepto: Fee de gestión de la campaña
      monto: "4.000"
      destacado: true
      incluye: [Selección de perfiles, Negociación y briefs, Revisión de contenidos, Reporte de resultados]
    # - servicio: Influencers
    #   concepto: Honorarios estimados de creadores
    #   monto: "6.000"
---
