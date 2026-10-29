---
# Plantilla de Eventos. Crea una propuesta nueva con
#   npm run nueva -- eventos "Nombre del cliente"
# Eso la copia a src/content/propuestas/eventos/nombre-del-cliente-xxxx.md
# (xxxx es un código al azar) y crea su carpeta de imágenes en
# public/propuestas/eventos/nombre-del-cliente-xxxx/.
# La línea ya trae título, bajada, el módulo del servicio, los
# diferenciales, "Cómo trabajamos" y las notas de inversión
# (src/data/lineas.ts). Escribe solo lo que cambia para este cliente;
# los bloques opcionales que no uses no se muestran. Los montos son de
# ejemplo: reemplázalos siempre.
linea: eventos
cliente: Cliente de Ejemplo
fecha: 2026-10-01
vigenciaDias: 15
# titulo: si lo dejas vacío se usa "Organización de eventos".
# bajada: una frase corta que resuma lo que proponemos.
# logoCliente: /propuestas/eventos/cliente-xxxx/logo.png
# imagenHero: /propuestas/eventos/cliente-xxxx/hero.jpg
situacion:
  - Qué se celebra o presenta, para quién y qué tiene que sentir el invitado.
requerimiento: Conceptualización, organización y ejecución del evento... para alrededor de 100 invitados. Fecha tentativa...
modulos:
  - servicio: eventos
    plazo: Fecha tentativa
    bloques:
      - titulo: Objetivo
        texto: Qué tiene que lograr el evento.
      - titulo: Perfil del evento
        texto: Cantidad y tipo de invitados, formato y tono.
# Regla de fee de SWIITCH para eventos: Bs. 15.000 fijos hasta Bs. 125.000
# de ejecución, y 12% del total del evento por encima. Proveedores aparte.
inversion:
  moneda: Bs.
  items:
    - servicio: Fee SWIITCH
      concepto: Eventos de hasta Bs. 125.000
      monto: "15.000"
      destacado: true
      incluye: [Idea y concepto creativo del evento, Cotización y negociación de proveedores, Ejecución logística de punta a punta]
    - servicio: Fee SWIITCH
      concepto: Eventos de más de Bs. 125.000
      monto: "12%"
      periodo: del total del evento
      incluye: [El mismo alcance completo, Se calcula sobre la ejecución total del evento]
---
