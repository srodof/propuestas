---
# Plantilla de Social Media Marketing. Crea una propuesta nueva con
#   npm run nueva -- social-media "Nombre del cliente"
# Eso la copia a src/content/propuestas/social-media/nombre-del-cliente-xxxx.md
# (xxxx es un código al azar) y crea su carpeta de imágenes en
# public/propuestas/social-media/nombre-del-cliente-xxxx/.
# La línea ya trae título, bajada, el módulo del servicio, los
# diferenciales, "Cómo trabajamos" y las notas de inversión
# (src/data/lineas.ts). Escribe solo lo que cambia para este cliente;
# los bloques opcionales que no uses no se muestran. Los montos son de
# ejemplo: reemplázalos siempre.
linea: social-media
cliente: Cliente de Ejemplo
fecha: 2026-10-01
vigenciaDias: 15
# titulo: si lo dejas vacío se usa "Social Media Marketing".
# bajada: una frase corta que resuma lo que proponemos.
# logoCliente: /propuestas/social-media/cliente-xxxx/logo.png
# imagenHero: /propuestas/social-media/cliente-xxxx/hero.jpg
situacion:
  - Cómo están hoy sus redes (seguidores, frecuencia, qué funciona y qué no) y qué busca lograr. Usa **dobles asteriscos** para negritas.
requerimiento: Gestión de redes sociales y pauta en Meta para...
modulos:
  - servicio: social-media
    # Ajusta la cantidad de publicaciones y las redes en `incluye` si cambian.
    # bloques:
    #   - titulo: Pilares de contenido
    #     texto: Autoridad, educación y conversión...
    #   - titulo: Redes
    #     texto: Instagram, Facebook y TikTok...
    # imagen: /propuestas/social-media/cliente-xxxx/redes.jpg
inversion:
  moneda: Bs.
  items:
    - servicio: Social Media
      concepto: Fee mensual Meta (Facebook e Instagram)
      monto: "6.000"
      periodo: / mes
      destacado: true
      incluye: [16 publicaciones al mes, Community management, Campañas y pauta en Meta, Reporte mensual]
    # - servicio: Producción audiovisual
    #   concepto: Fee por visita
    #   monto: "3.500"
    #   incluye: [10 fotografías, 4 videos cortos]
---
