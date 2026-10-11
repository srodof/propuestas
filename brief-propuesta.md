# Brief para una propuesta nueva

Copia este bloque, complétalo y envíalo en el proyecto (o en un hilo) junto
con las fotos y el logo del cliente. Si ya tienes una propuesta en PDF o
Word, adjúntala y escribe solo lo que cambia. Lo que no sepas, déjalo en
blanco: Claude usa el texto por defecto del servicio.

```
Cliente:
Idioma:                         español o inglés
Mes de la propuesta:            (ej. julio 2026)
Título:                         (ej. Diseño y desarrollo web)
Servicios:                      social media, branding, desarrollo web, eventos, producción audiovisual u otro
Situación actual:               2 o 3 frases sobre el cliente y su momento
Frase destacada (opcional):
Requerimiento:                  qué pidió el cliente, en una o dos frases
Plazo de entrega (opcional):    (ej. 60 días)
Lo propio de este cliente:      funcionalidades, alcance, opciones a comparar, número de posts, etc.
Inversión:                      moneda, monto por servicio, mensual o pago único
Algo que no quieras mostrar:    (ej. clientes, cifras, cómo trabajamos)
```

## Qué trae cada servicio por defecto

Cada servicio tiene estrategia, enfoque, "qué incluye" y kick off ya
redactados en `src/data/servicios.ts`. En el brief solo hace falta lo que
cambia para este cliente.

| Servicio | Id |
| --- | --- |
| Social Media Marketing | `social-media` |
| Branding | `branding` |
| Desarrollo web | `desarrollo-web` |
| Organización de eventos | `eventos` |
| Producción fotográfica y audiovisual | `produccion-audiovisual` |

Un servicio nuevo se agrega una sola vez en ese archivo y queda disponible
para todas las propuestas. Para usarlo en inglés, también va en
`src/data/servicios.en.ts` (hoy solo tiene Social Media).
