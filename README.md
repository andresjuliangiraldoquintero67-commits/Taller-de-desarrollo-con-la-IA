Documentación de Ingeniería de Prompts - EcoMarket
Este documento detalla las estrategias, técnicas y prompts aplicados mediante inteligencia artificial para guiar el diseño, desarrollo, validación y control de la plataforma web de EcoMarket.

1. Diseño y Maquetación de la Landing Page
Técnica aplicada: Priming (preparación del contexto inicial) y Chain of Thought (razonamiento estructurado paso a paso).

Prompt utilizado:

Actúa como un desarrollador frontend senior especializado en comercio electrónico, marketplaces y diseño UX/UI. Vas a participar en el desarrollo de EcoMarket, una startup que conecta productores locales de alimentos orgánicos y productos sostenibles con consumidores. Tu responsabilidad es ayudarme a diseñar y construir una landing page accesible, responsive y visualmente coherente. Antes de comenzar, confirma que comprendes tu rol y el contexto. Luego pregúntame qué información adicional necesitas para realizar el trabajo de la mejor manera posible. No generes código todavía.

Ajustes y refinamientos: Se estructuró la jerarquía visual priorizando un estilo limpio, natural y cercano (tonos verdes y acentos tierra) enfocado en la conversión y la experiencia de usuario en dispositivos móviles y de escritorio.

2. Estructuración del Panel de Administración (Dashboard)
Técnica aplicada: Role Prompting (asignación de rol experto en diseño de interfaces y paneles de control).

Prompt utilizado:

Eres un diseñador UX/UI con experiencia en dashboards administrativos de comercio electrónico. Diseña la estructura visual de un panel de administración para EcoMarket que incluya un sidebar a la izquierda con logotipo y navegación, área principal con KPIs y acciones rápidas, diseño responsive con menú hamburguesa y un estilo visual coherente con la landing page. Primero describe la distribución, jerarquía, colores, tipografía e iconografía. No generes código todavía.

Ajustes y refinamientos: Se establecieron las bases visuales para las tarjetas de indicadores clave (KPIs), la tabla de inventario y la barra lateral colapsable mediante JavaScript vanilla.

3. Generación del Dataset de Productos
Técnica aplicada: Few-Shot Prompting (generación basada en patrones con restricciones estrictas de negocio).

Prompt utilizado:

Actúa como especialista en generación de datos de prueba. Genera 30 objetos adicionales para el catálogo de EcoMarket, respetando exactamente la estructura de los cinco ejemplos que te proporcionaré. Reglas: IDs únicos del 6 al 35, categorías exclusivas de la lista válida (Frutas y verduras, Despensa, Cuidado personal, Hogar sostenible), precios enteros positivos en pesos colombianos, stock mayor o igual a cero, ciudades permitidas, tipos booleanos reales para orgánico y activo, y fechas dentro del rango establecido. Devuelve únicamente un arreglo JSON válido, sin explicaciones ni bloques Markdown.

Ajustes y refinamientos: Se verificó que el resultado cumpliera estrictamente con un formato JSON válido y sin comas finales para evitar errores al momento de ser procesado por la aplicación mediante JSON.parse() y fetch().

4. Validación Programática, Lógica CRUD y Persistencia
Técnica aplicada: Auditoría de código, validación algorítmica y gestión de estado en el lado del cliente.

Ajustes realizados:

Se implementó una función de validación programática en JavaScript para revisar la integridad de los registros del dataset (tipos de datos, rangos numéricos y unicidad de identificadores).

Se desarrolló la lógica de negocio para las operaciones CRUD (Crear, Leer, Actualizar y Eliminar) conectada de manera dinámica con el almacenamiento local (localStorage) para garantizar la persistencia de los cambios al recargar la página.

<img width="610" height="612" alt="image" src="https://github.com/user-attachments/assets/eff147f7-51ea-48ba-9d62-bb012f1659c8" />
<img width="1366" height="623" alt="image" src="https://github.com/user-attachments/assets/e8de2e62-9a6a-484b-9561-999e74bc60e1" />

