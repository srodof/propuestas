# Reportes de datos

Patrón para reportes mensuales de marketing (Facebook, Instagram, TikTok, pauta, comunidad), en páginas apaisadas numeradas "05 / 10". Se construye con los componentes de la sección Reports y los tokens de reporte.

## Estructura de página

- Cabecera `ReportHeader` sobre `surface`: logo `swiitch-horizontal-rojo.png`, separador, antetítulo (`report-label`), título (`report-title`), subtítulo; a la derecha el periodo ("Septiembre 2026") con su comparación, otro separador y el número de página en `primary` con el total en `muted`.
- Cuerpo sobre `surface-alt`, en tarjetas `surface` de `radius-sm`, sin sombra ni borde, con 14–16px de padding y `space-gap-sm` (20px) entre ellas. Una fila de KPIs arriba, bloques de análisis debajo y, a la derecha o al pie, un `InsightPanel` de lectura.
- Títulos de bloque en `report-title` reducido a 13–14px/700 (`heading`); notas de bloque alineadas a la derecha en `report-body` con `muted`.

## Números y texto

- Español latinoamericano: punto de miles, coma decimal ("96.400", "$240,00", "2,58", "3,80%"). Moneda con símbolo delante.
- Cada KPI lleva etiqueta en MAYÚSCULAS (`report-label`), valor en `report-kpi` (`ink`) y hasta dos variaciones ("vs agosto", "vs sep 2025").
- Las variaciones usan `Delta`: flecha arriba/abajo, valor y `delta-good` si el cambio es favorable o `delta-bad` si no. Una subida de costo es mala y una bajada de costo es buena: el color sigue al resultado, la flecha a la dirección. Sin cambio: guion.
- El panel `Lectura` abre con la conclusión en negrita y la explicación en `report-body`. Si hay una cifra clave, va en `report-figure` con `primary-active`.

## Color en gráficas

- Una sola serie destacada en `primary` (el mes actual, el paso final del embudo, el primer anuncio); el resto en `chart-dark` y `chart-mid`. Nunca más de dos grises por gráfica.
- Barras apiladas por mes: `chart-dark` abajo (pauta), `chart-mid` arriba (orgánico) y el mes en curso con la pila entera en `primary` en la base. Cada barra lleva su valor encima; los ejes y rótulos en `muted`.
- Línea de tendencia (visualizaciones por día): trazo `primary` de 2px y relleno `primary` al 12–15% de opacidad hasta el eje; rotula el pico.
- Barras de progreso: `BarMeter` con pista `chart-track` y relleno `chart-mid`; el último paso (el que importa) en `primary`.
- Embudo: `FunnelStep` apilados y centrados, cada uno más angosto que el anterior, en `panel`, `chart-track` y el último en `primary`; entre pasos va la tasa de conversión en `muted`. Debajo, una escala con marcador `primary` para la frecuencia o la meta.
- Los datos van siempre rotulados con su número; el color nunca es la única forma de leer un valor.

## Tablas

`ReportTable`: encabezado en `report-label` con filtro inferior de 2px en `heading`, filas separadas por `hairline-soft`, primera columna en negrita, cifras alineadas a la derecha, la fila Total en negrita.

## Anuncios y piezas

`AdCard`: miniatura vertical 9:14 en `chart-track` mientras falte la imagen; medalla de ranking arriba a la izquierda (`primary-active` el número 1, `chart-dark` los demás); formato ("Video", "Carrusel", "Reel") en `Pill` blanca arriba a la derecha; título en 11px/700; métricas en dos columnas y una acción: "Escalar" (`Pill` primary), "Mantener" (neutral) o "Apagar" (outline).

## Accesibilidad

Texto en `muted` o `heading`, nunca en `chart-mid` ni `body` a 10–12px. Todo gráfico necesita su cifra en texto cercano. Las flechas de `Delta` van acompañadas de texto oculto con la dirección.
