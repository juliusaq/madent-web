# Guía para Capturas de Pantalla de Producto (MADENT)

Este documento detalla las especificaciones, nombres de archivos, formatos y recomendaciones de diseño para generar y reemplazar las capturas de pantalla reales del sistema MADENT en la sección de características (`/funciones`).

La arquitectura está preparada para que al cambiar `hasRealScreenshots = true` en `FeatureList.tsx` se muestren estas imágenes en lugar de los mockups en código CSS.

---

## 1. Nombres y Relación de Archivos

Cada captura de pantalla debe guardarse en la carpeta `public/screenshots/` con el nombre exacto de archivo listado a continuación:

| Nombre del Archivo | Módulo de Características | Descripción Visual Recomendada |
| :--- | :--- | :--- |
| `agenda.webp` | 01. Agenda Inteligente | Vista diaria/semanal con citas confirmadas y en espera. |
| `expedientes.webp` | 02. Expedientes Clínicos | Ficha única de paciente con alertas de antecedentes médicos. |
| `odontograma.webp` | 03. Odontograma Digital | Gráfico interactivo con dientes coloreados según diagnóstico. |
| `presupuestos.webp` | 04. Presupuestos | Tabla de conceptos (ej: profilaxis, resina) con pagos y abonos. |
| `portal-paciente.webp`| 05. Portal del Paciente | Vista móvil o de pre-registro clínico enfocada en el paciente. |
| `recetas.webp` | 06. Recetas y Documentos | Receta médica membretada con firma digital. |
| `cedulas.webp` | 07. Cédulas Profesionales| Sección de perfiles clínicos verificados de odontólogos. |
| `reportes.webp` | 08. Reportes / Métricas | Gráficas e indicadores clave de crecimiento y rentabilidad. |

> [!NOTE]
> Los archivos WebP de 1x1 píxeles presentes en el repositorio son **marcadores de posición temporales** (placeholders). Deben sobrescribirse con las imágenes reales cuando estén listas.

---

## 2. Especificaciones Técnicas Recomendadas

Para mantener el rendimiento premium del sitio web de MADENT, las capturas de pantalla deben cumplir las siguientes normas:

*   **Formato:** `.webp` (obligatorio para optimizar peso y compatibilidad).
*   **Proporción de Aspecto:** `4:3` (por ejemplo, `1200 x 900` píxeles). La maquetación del sitio web encierra la imagen en esta relación de aspecto.
*   **Resolución Recomendada:** `1600 x 1200` píxeles (para pantallas de alta densidad o Retina) o `1200 x 900` píxeles (estándar).
*   **Peso del Archivo:** Menor a **150 KB** por imagen (idealmente entre 50 KB y 100 KB).
*   **Esquinas del Archivo:** Dejar las esquinas de la captura rectas (cuadradas). El componente wrapper `<ProductScreenshot />` aplica automáticamente bordes redondeados premium (`rounded-2xl` y `rounded-3xl`) junto con el marco y la sombra, recortando la imagen de forma limpia.

---

## 3. Consejos para Capturar el Software

Para lograr capturas que se sientan premium, realistas y consistentes con la estética de Stripe, Linear y Notion, sigue estos pasos:

1.  **Limpiar la Interfaz:**
    *   Oculta datos de pacientes reales por motivos de privacidad (utiliza nombres y teléfonos ficticios).
    *   Limpia la barra de marcadores, extensiones e historial del navegador. Es preferible tomar la captura utilizando el **Modo de Inspección (DevTools)** simulando un tamaño exacto de ventana (ej: `1200 x 900`).
2.  **Consistencia de Tema:**
    *   Exporta todas las capturas con el mismo modo de color (claro u oscuro) para no generar disparidad visual al hacer scroll.
    *   Se recomienda un fondo de software limpio (blanco o gris ultra claro `#FAFAFA`) para coincidir con la paleta de colores del sitio.
3.  **Foco en el Detalle:**
    *   Haz un zoom del navegador al 110% o 120% si el texto se ve demasiado pequeño en la captura de pantalla de resolución estándar. Esto ayuda a que los textos importantes sean legibles a primera vista.

---

## 4. Flujo de Exportación y Compresión

1.  Captura la pantalla del módulo en el navegador.
2.  Importa la imagen en tu editor de diseño preferido (Figma, Photoshop) y recórtala a proporción `4:3` (ej: `1200 x 900`).
3.  Exporta como archivo `.png` o `.jpg`.
4.  Comprime y convierte la imagen a `.webp` usando herramientas de optimización:
    *   **CLI:** `cwebp -q 80 screenshot.png -o screenshot.webp`
    *   **Web:** [Squoosh.app](https://squoosh.app/) o [TinyPNG](https://tinypng.com/).
5.  Sobrescribe el archivo correspondiente dentro de `public/screenshots/`.
