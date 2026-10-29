---
# Plantilla de BTL y activaciones. Crea una propuesta nueva con
#   npm run nueva -- btl "Nombre del cliente"
# Eso la copia a src/content/propuestas/btl/nombre-del-cliente-xxxx.md
# (xxxx es un código al azar) y crea su carpeta de imágenes en
# public/propuestas/btl/nombre-del-cliente-xxxx/.
# La línea ya trae título, bajada, el módulo del servicio, los
# diferenciales, "Cómo trabajamos" y las notas de inversión
# (src/data/lineas.ts). Escribe solo lo que cambia para este cliente;
# los bloques opcionales que no uses no se muestran. Los montos son de
# ejemplo: reemplázalos siempre.
linea: btl
cliente: Cliente de Ejemplo
fecha: 2026-10-01
vigenciaDias: 15
# titulo: si lo dejas vacío se usa "BTL y activaciones de marca".
# bajada: una frase corta que resuma lo que proponemos.
# logoCliente: /propuestas/btl/cliente-xxxx/logo.png
# imagenHero: /propuestas/btl/cliente-xxxx/hero.jpg
situacion:
  - Qué producto o mensaje se quiere activar, en qué puntos y con qué objetivo (prueba, datos, ventas, notoriedad).
requerimiento: Activación BTL en...
modulos:
  - servicio: btl
    plazo: 4 fines de semana en noviembre
    bloques:
      - titulo: Mecánica
        texto: Cómo participa la gente y qué se lleva.
      - titulo: Puntos y fechas
        texto: Lugares, días y horarios de la activación.
inversion:
  moneda: Bs.
  items:
    - servicio: Fee SWIITCH
      concepto: Concepto, coordinación y supervisión
      monto: "6.000"
      destacado: true
      incluye: [Concepto y mecánica, Coordinación de puntos y permisos, Supervisión en campo, Informe final]
    # - servicio: Producción
    #   concepto: Stand, materiales y promotores (estimado)
    #   monto: "12.000"
---
