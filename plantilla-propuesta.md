---
# Plantilla: crea una propuesta nueva con
#   npm run nueva -- "Nombre del cliente" [MM-YY] [--servicios desarrollo-web,branding]
# Eso la copia a src/content/propuestas/MM-YY/nombre-del-cliente-xxxx.md
# (xxxx es un código al azar) y crea la carpeta de imágenes
# public/propuestas/MM-YY/nombre-del-cliente-xxxx/.
# Los bloques opcionales que no uses no se muestran.
# idioma: en   (para una propuesta en inglés; por defecto es español)
cliente: Cliente de Ejemplo
titulo: Estrategia de marketing digital
bajada: Una frase corta que resuma lo que proponemos.
fecha: 2026-10-07
vigenciaDias: 15
situacion:
  - Contexto del cliente, su momento actual y por qué busca una agencia. Usa **dobles asteriscos** para negritas.
# cita: Una frase destacada sobre el desafío.
requerimiento: Lo que el cliente necesita, en una o dos frases.
modulos:
  # Con `servicio`, el módulo trae estrategia, enfoque, qué incluye y kick off
  # desde src/data/servicios.ts. Escribe solo lo que cambia para este cliente;
  # `campo: null` quita un bloque que trae el servicio.
  - servicio: social-media
    # plazo: Entrega en 60 días
    # imagen: /propuestas/MM-YY/cliente-xxxx/redes.jpg
    # bloques:
    #   - titulo: Qué se construye
    #     texto: ...
    # alcance:
    #   - titulo: Funcionalidad
    #     detalle: Para qué sirve.
    # comparativa:
    #   titulo: Camino técnico
    #   columnas: [Criterio, Opción A, Opción B]
    #   filas:
    #     - [Edición, "Texto con, comas entre comillas", Otro texto]
# kickoff: si lo dejas vacío se arma con los pasos de cada servicio.
inversion:
  moneda: Bs.
  items:
    - servicio: Redes sociales
      concepto: Fee mensual
      monto: "6.000"
      periodo: / mes
      destacado: true
  # notas: si las dejas vacías se usan las notas estándar de src/data/agencia.ts.
---
