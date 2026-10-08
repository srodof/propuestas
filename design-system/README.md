SWIITCH es una agencia de marketing y comunicación con sede en Santa Cruz de la Sierra (Bolivia) y oficina en Miami, con más de 15 años de experiencia. Cuatro líneas de servicio: Marketing Digital, Comunicación, Publicidad y Transformación Digital. El sistema es plano y editorial: un solo rojo, fotografía real de personas trabajando, tres superficies lisas y un interruptor como motivo de marca.

## Fundamentos de contenido

- Escribe en español de Bolivia/Latinoamérica, tono conversacional-profesional. Mezcla "nosotros" para capacidades ("Somos SWIITCH", "Contamos con…") y tú/vos para el lector ("tu marca", "¿Buscás una agencia…?"). Nunca tercera persona distante.
- Titular = antetítulo + frase de beneficio: "Redes Sociales / Escuchamos, cautivamos y conectamos". El antetítulo usa el estilo `eyebrow`; la frase, `display-md`.
- Los resultados van primero y con cifras cuando existen: "15+ años de experiencia", "acciones 100% medibles", "medimos KPIs". Conecta ideas con "Sin embargo…", "Pero lo más importante es que…".
- Verbos cortos y cálidos en CTAs: "Conócenos", "Ver más", "Conversemos", "Cuéntanos, ¿cómo podemos ayudarte?". Nunca "Enviar formulario" ni "Learn more".
- Capitalización de oración, también en botones; nunca versalitas a mano. El nombre SWIITCH siempre en mayúsculas. Titulares en Heavitas salen en mayúsculas porque la fuente solo tiene mayúsculas.
- Sin emoji. Puntuación española completa (¿ ¡).
- Palabras de la marca: impulsar, estrategia, resultados reales, acompañamiento real, conectar.

## Fundamentos visuales

**Color.** El único acento es `primary` (#FF3050). Úsalo en todo elemento interactivo; hover = `primary-hover`, pulsado = `primary-active`, siempre el mismo rojo oscurecido. No introduzcas un segundo tono de marca. Todos los logos y submarcas en rojo usan exactamente `primary`; no los recolorees ni mezcles versiones de otro rojo. La profundidad sale de alternar `surface`, `surface-alt` y `surface-footer` (nunca negro puro; `ink` es solo tinta de etiquetas pequeñas).

**Tipografía.** Dos familias con roles estrictos. Heavitas (`--font-display`, archivo en `fonts/Heavitas.ttf`) solo en `hero-slider` y `display-lg`, siempre en su único peso 400. Montserrat (`--font-sans`) en todo lo demás, solo pesos 400 (cuerpo) y 700 (títulos, botones, etiquetas). Sin 500 ni 600. Letter-spacing `normal`, salvo `button-slider` (1px). Justifica los párrafos largos con `body`: es una decisión editorial de la marca.

**Fondos e imagen.** Fotografía editorial real de personas y oficinas: recortada rectangular en tiles, a sangre con `overlay-dark` detrás de texto blanco, o en círculo (`radius-circle`) para retratos. Sin ilustración, texturas ni degradados decorativos. Mientras falte la foto, usa el marcador plano `photo-placeholder`.

**Formas.** Radios mínimos y por rol: `radius-none` en fotos de tiles, `radius-xs` (3px) en campos y CTA del hero, `radius-sm` (5px) en el botón primario, `radius-circle` en retratos, `radius-full` en el botón flotante. Sin sombras: `box-shadow: none` en botones, tarjetas y campos. Sin bordes salvo `hairline` (1px) en los campos.

**Motivo de marca: el interruptor.** El favicon es un interruptor (píldora con perilla) y el nombre juega con "switch". Para patrones y portadas usa píldoras de `radius-full` con perilla circular, en `primary`, `surface` o `surface-footer`, nunca como decoración suelta sobre fotografía.

**Estados.** Hover y pulsado oscurecen el rojo; no hay elevación, escala ni sombra. Enlaces del footer: subrayado al hover (oscurecer el rojo sobre `surface-footer` empeora el contraste). Foco: anillo sólido de 3px en `focus-ring` (blanco sobre `surface-footer`).

**Movimiento.** Sobrio, solo opacidad y desplazamiento corto de entrada; sin rebotes ni resortes. Ver `web-reference.md` para la referencia de animaciones del nuevo sitio.

**Layout.** Padding de sección en porcentaje (`space-section-pad-tight` 1%, `space-section-pad-wide` 5%); bandas y héroes en vh (30/40/50vh). Rejillas con `space-gap-sm/md/lg`. Cortes en `breakpoint-mobile` (767px) y `breakpoint-tablet` (1024px).

**Botón: detalle firma.** El chevron va siempre después de la etiqueta (`flex-direction: row-reverse`). El único estilo de botón es rojo plano; `variant="slider-cta"` solo en héroes.

## Logos

Los archivos están en `assets/Logos/`. Copia los archivos reales; nunca redibujes ni recompongas el logotipo.

- `swiitch-horizontal-rojo.png`: logo horizontal rojo sobre fondo claro (navegación sólida, documentos).
- `swiitch-horizontal-blanco.png`: logo horizontal blanco sobre fotografía con `overlay-dark` o sobre `surface-footer`. Es blanco sobre transparente: no usarlo sobre fondos claros.
- `swiitch-wordmark-rojo.png`: wordmark solo en `primary` sobre transparente, para fondos claros cuando no hace falta el formato horizontal. Nunca uses el wordmark en negro: el logo de tinta oscura no existe en el sistema.
- `swiitch-footer-rojo.png`: versión roja transparente para el footer oscuro.
- `swiitch-mobile-rojo.png`: versión compacta para cabecera móvil.
- `swiitch-cuadrado-rojo.png` y `swiitch-rojo-transparente.png`: wordmark rojo cuadrado (avatares, redes) con y sin fondo blanco.
- `swiitch-cuadrado-blanco-sobre-rojo.png` y `swiitch-credencial-blanco.png`: versión sobre rojo y wordmark blanco transparente para credenciales y piezas sobre `primary`.
- `favicon-swiitch.png`: el interruptor, para favicon e icono de app.

Submarcas en `assets/Submarcas/`: SWIITCH Place, Legal e Impuestos. No las mezcles con el logo principal en la misma pieza.

## Reportes de datos

Los reportes mensuales (páginas de KPIs, tablas, embudos y gráficas) siguen `reportes.md`. En resumen: página sobre `surface-alt`, tarjetas blancas de `radius-sm` sin sombra, paneles de lectura en `panel`, y el rojo `primary` reservado para lo que importa (el dato destacado, la serie del mes actual, el primer anuncio). Las series de gráficas son `chart-dark` y `chart-mid`; las variaciones usan `delta-good` / `delta-bad` siempre con flecha y texto.

## Iconografía

- Glifos de línea de 24×24 con trazo 2 (1.5 en los iconos de metodología de 80px), en `Icon`: chevron-right, check, x, menu, mail, phone, map-pin, message-circle, search, users, target, bar-chart, trending-up, arrow-up-right. Color `primary` sobre claro; `currentColor` heredado en botones.
- Marcas sociales (Facebook, Instagram, LinkedIn, TikTok, WhatsApp) con `SocialIcon`, que lleva las marcas reales en SVG en línea; no las dibujes a mano.
- El chevron de botón y los bloques de metodología son los únicos iconos grandes. Sin emoji ni símbolos Unicode como iconos.

## Componentes

Todos en el espacio `Swiitch` (`window.Swiitch.Button`, etc.) y estilizados con `components/bundle.css` + tokens.

- Acciones: `Button`, `WhatsAppButton`.
- Navegación: `NavBar` (transparente sobre foto / sólida), `Footer`.
- Tarjetas: `ServiceTile`, `MethodologyIconBlock`, `PortraitImage`.
- Secciones: `SectionSurfaceLight` (superficie `surface-alt`), `SectionCTAPhoto` (banda con foto y `overlay-dark`).
- Formularios: `FormInput`, `FormSubmitButton`.
- Iconos: `Icon`, `SocialIcon`.
- Reportes: `ReportHeader`, `KpiCard`, `Delta`, `InsightPanel`, `Pill`, `BarMeter`, `FunnelStep`, `AdCard`, `ReportTable`.

Pasa los logos a `NavBar` y `Footer` por las props `logo`/`logoOnPhoto`; sin logo muestran el nombre en Heavitas como marcador. Las fotos van por la prop `image`.

## Accesibilidad

El rojo de marca contra blanco da 3.63:1: sirve para texto grande o en negrita de 19px+, iconos y relleno de botones; en texto pequeño usa `heading`. Los pares de la fuente que no llegan a 4.5:1 (`body` sobre blanco, `link-on-dark`, etiquetas de 16px sobre `primary`, borde `hairline`) se conservan tal cual y quedan señalados en las notas de cada token. Todo control interactivo lleva foco visible con `focus-ring`. Los iconos decorativos van con `aria-hidden`; los que significan algo llevan `title`.
