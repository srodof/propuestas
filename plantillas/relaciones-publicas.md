---
# Plantilla de Relaciones públicas. Crea una propuesta nueva con
#   npm run nueva -- relaciones-publicas "Nombre del cliente"
# Eso la copia a src/content/propuestas/relaciones-publicas/nombre-del-cliente-xxxx.md
# (xxxx es un código al azar) y crea su carpeta de imágenes en
# public/propuestas/relaciones-publicas/nombre-del-cliente-xxxx/.
# La línea ya trae título, bajada, el módulo del servicio, los
# diferenciales, "Cómo trabajamos" y las notas de inversión
# (src/data/lineas.ts). Escribe solo lo que cambia para este cliente;
# los bloques opcionales que no uses no se muestran. Los montos son de
# ejemplo: reemplázalos siempre.
linea: relaciones-publicas
cliente: Cliente de Ejemplo
fecha: 2026-10-01
vigenciaDias: 15
# titulo: si lo dejas vacío se usa "Relaciones públicas".
# bajada: una frase corta que resuma lo que proponemos.
# logoCliente: /propuestas/relaciones-publicas/cliente-xxxx/logo.png
# imagenHero: /propuestas/relaciones-publicas/cliente-xxxx/hero.jpg
situacion:
  - Cómo aparece hoy la marca en los medios, qué tiene para contar (lanzamientos, logros, voceros) y qué quiere lograr.
requerimiento: Gestión de prensa y relaciones públicas para...
modulos:
  - servicio: relaciones-publicas
    # bloques:
    #   - titulo: Mensajes clave
    #     texto: Los temas que queremos instalar...
    #   - titulo: Voceros
    #     texto: Quiénes hablan por la marca...
inversion:
  moneda: Bs.
  items:
    - servicio: Relaciones públicas
      concepto: Fee mensual
      monto: "5.000"
      periodo: / mes
      destacado: true
      incluye: [Plan de prensa, Notas y gestión de entrevistas, Monitoreo de medios, Reporte mensual]
    # - servicio: Relaciones públicas
    #   concepto: Campaña de lanzamiento (pago único)
    #   monto: "8.000"
---
