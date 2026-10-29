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
Línea de negocio:               social media, desarrollo web, branding, relaciones públicas,
                                influencers, BTL, eventos, producción audiovisual u otra
Otros servicios (opcional):     si la propuesta suma más de una línea
Situación actual:               2 o 3 frases sobre el cliente y su momento
Frase destacada (opcional):
Requerimiento:                  qué pidió el cliente, en una o dos frases
Plazo de entrega (opcional):    (ej. 60 días)
Lo propio de este cliente:      funcionalidades, alcance, opciones a comparar, número de posts, etc.
Inversión:                      moneda, monto por servicio, mensual o pago único
Algo que no quieras mostrar:    (ej. clientes, cifras, cómo trabajamos)
```

## Qué trae cada línea por defecto

Cada línea tiene título, bajada, diferenciales, "Cómo trabajamos", el
módulo del servicio (estrategia, enfoque, qué incluye y kick off) y notas
de inversión ya redactados en `src/data/lineas.ts` y
`src/data/servicios.ts`. En el brief solo hace falta lo que cambia para
este cliente.

| Línea | Id | Conviene contar en el brief |
| --- | --- | --- |
| Social Media Marketing | `social-media` | Redes, publicaciones al mes, si incluye pauta |
| Desarrollo web | `desarrollo-web` | Páginas y funcionalidades, plazo, WordPress o a medida |
| Branding | `branding` | Marca nueva o rebranding, si incluye manual |
| Relaciones públicas | `relaciones-publicas` | Qué hay para contar, voceros, mensual o por campaña |
| Marketing de influencers | `influencers` | Tipo de creadores, cantidad, entregables por creador |
| BTL y activaciones | `btl` | Mecánica, puntos, fechas, cantidad de promotores |
| Eventos | `eventos` | Tipo de evento, invitados, fecha, presupuesto de ejecución |
| Producción audiovisual | `produccion-audiovisual` | Qué se registra, fotos y videos, fecha de la sesión |

Una línea nueva se agrega una sola vez y queda disponible para todas las
propuestas.
