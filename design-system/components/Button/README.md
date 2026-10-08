Botón rojo plano con el chevron después de la etiqueta; es el único estilo de botón del sistema.

Úsalo para toda acción principal y CTA ("Conócenos", "Ver más", "Conversemos"). El consumidor aporta la etiqueta (`children`), y `href` si es un enlace.

- `variant="primary"`: 16px/700, radio 5px, padding 10×35. Por defecto en todo el sitio.
- `variant="slider-cta"`: 18px/700 con 1px de tracking, radio 3px; solo en héroes y sliders.
- `showIcon={false}` quita el chevron.
- Con `href` renderiza un enlace; sin él, un botón.

Haz: etiquetas cortas y cálidas en sentencia. No hagas: segundo color de botón, sombras, mayúsculas, chevron antes del texto. El texto blanco sobre `primary` da 3.63:1 (válido a partir de 19px en negrita; en 16px queda bajo 4.5:1, valor de marca que se conserva).
