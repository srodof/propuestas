# Propuestas SWIITCH

Cómo armar una propuesta nueva a partir de un pedido de Sebas:

1. Elige la línea de negocio según lo que pide el cliente (ver la tabla en README.md). Si el pedido combina varias, la línea es el servicio principal (el que lleva la mayor parte de la inversión o el que dio origen al pedido) y los demás van como módulos extra con `--servicios`.
2. Crea la propuesta con `npm run nueva -- <linea> "Cliente"` y completa la plantilla con el brief. La línea ya trae título, bajada, módulo, diferenciales, "Cómo trabajamos" y notas de inversión: escribe solo lo propio del cliente.
3. Los montos de las plantillas son de ejemplo, salvo la regla de fee de eventos (Bs. 15.000 hasta Bs. 125.000 de ejecución, 12% por encima). Nunca publiques un monto que Sebas no dio.
4. Si ninguna línea encaja, propón agregar una nueva en `src/data/lineas.ts` antes de forzar una existente.
