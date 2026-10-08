# Nueva web — referencia de estructura y animación

La plantilla "Aguvic" (kit de Elementor de Jegtheme, carpeta "Nueva web" del repositorio) se usa únicamente como referencia de estructura de páginas y de movimiento para el nuevo sitio de SWIITCH. No aporta marca.

## Qué NO se adopta de la plantilla

- Su paleta (azul marino #0A1B65 y naranja #FD7E14), su tipografía (Inter, Heebo, Nunito Sans) ni sus botones totalmente redondeados (radio 50px), sombras y tarjetas elevadas. En SWIITCH el acento es `primary`, las fuentes son Heavitas y Montserrat, el botón usa `radius-sm` y todo es plano.
- Sus textos, fotografías y logotipos de ejemplo.

## Qué sí sirve como referencia

- **Páginas del kit:** Home, About Us, Services, Projects, Project Details, Pricing, Team, FAQ, Blog, Single Blog, Contact, formularios (cita y contacto), Header, Footer y 404. Úsalas como mapa de las plantillas que necesitará el sitio de SWIITCH, rehechas con los componentes de este sistema.
- **Orden de la home:** hero con titular y CTA, tres tarjetas de valor, bloque "quiénes somos", franja de cifras, rejilla de servicios, razones para elegirnos, proyectos, planes, testimonios, blog y footer. SWIITCH ya tiene su propio orden (hero, intro, servicios, metodología, clientes, CTA, footer); toma del kit solo secciones que falten.
- **Movimiento de entrada:** el kit anima con desvanecimiento y desplazamiento corto (fadeInUp, fadeInLeft, fadeInRight, fadeInDown) con duración "slow" de Elementor, y en hover usa "float" y "shrink" en tarjetas. En SWIITCH, adapta la idea con la librería `motion` (ya declarada en el repositorio): entrada por opacidad y desplazamiento corto al hacer scroll, sin rebotes. Define duraciones concretas antes de implementarlas; este sistema aún no fija tokens de movimiento.

Los archivos JSON de plantilla y las capturas siguen en el repositorio de origen; no se copian aquí.
