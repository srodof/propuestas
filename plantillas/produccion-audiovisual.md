---
# Plantilla de Producción audiovisual. Crea una propuesta nueva con
#   npm run nueva -- produccion-audiovisual "Nombre del cliente"
# Eso la copia a src/content/propuestas/produccion-audiovisual/nombre-del-cliente-xxxx.md
# (xxxx es un código al azar) y crea su carpeta de imágenes en
# public/propuestas/produccion-audiovisual/nombre-del-cliente-xxxx/.
# La línea ya trae título, bajada, el módulo del servicio, los
# diferenciales, "Cómo trabajamos" y las notas de inversión
# (src/data/lineas.ts). Escribe solo lo que cambia para este cliente;
# los bloques opcionales que no uses no se muestran. Los montos son de
# ejemplo: reemplázalos siempre.
linea: produccion-audiovisual
cliente: Cliente de Ejemplo
fecha: 2026-10-01
vigenciaDias: 15
# titulo: si lo dejas vacío se usa "Producción fotográfica y audiovisual".
# bajada: una frase corta que resuma lo que proponemos.
# logoCliente: /propuestas/produccion-audiovisual/cliente-xxxx/logo.png
# imagenHero: /propuestas/produccion-audiovisual/cliente-xxxx/hero.jpg
situacion:
  - Qué se necesita registrar (marca, producto, evento) y dónde se van a usar las fotos y videos.
requerimiento: Producción de fotografía y video para...
modulos:
  - servicio: produccion-audiovisual
    plazo: Fecha de la sesión
    # galeria:
    #   titulo: Trabajos anteriores
    #   fotos: [/propuestas/produccion-audiovisual/cliente-xxxx/foto-1.jpg]
inversion:
  moneda: Bs.
  items:
    - servicio: Producción audiovisual
      concepto: Fee por sesión
      monto: "3.500"
      destacado: true
      incluye: [10 fotografías editadas, 4 videos cortos (60 a 90 segundos)]
---
