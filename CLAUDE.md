# Instrucciones de Desarrollo — MADENT Web

Este documento contiene las directrices técnicas, de diseño y operativas para el desarrollo de la plataforma MADENT Web, destinadas a asistentes de IA y desarrolladores.

---

## 🎯 Objetivo General
Generar solicitudes de demostración de la plataforma para odontólogos independientes.

---

## 🛠️ Tecnologías y Estructuras
- **Base:** Next.js 15 + TypeScript + App Router.
- **Estilos:** Tailwind CSS v4 + variables de tema en `src/app/globals.css`.
- **Estructura:** Código fuente centralizado en `src/`, modularizado en `sections/` (secciones principales del Home) y `components/` (componentes comunes).

---

## 🎨 Filosofía Visual y de Diseño

### Inspiración
- Apple, Stripe, Notion, Linear.

### Reglas Estéticas
- **Espacio en blanco:** Diseños con aire, márgenes amplios y respiro visual.
- **Bordes:** Esquinas redondeadas y suaves (`rounded-2xl` / `rounded-3xl`).
- **Sombras:** Sombras sutiles (`shadow-sm`, `shadow-md` con opacidades controladas).
- **Responsive:** Enfoque **mobile-first** para todas las vistas.
- **Animaciones:** Transiciones y micro-animaciones discretas (duraciones cortas, efectos hover refinados).

### Paleta de Colores Oficial
- **Primary:** `#0F172A` (slate-900)
- **Accent:** `#14B8A6` (teal-500)
- **Background:** `#FAFAFA`
- **Text:** `#64748B` (slate-500)

---

## 📝 Copy Principal de la Marca
- **Título:** *"El software que acompaña al odontólogo independiente en cada etapa de su crecimiento."*
- **Lema:** *"Menos administración. Más odontología."*
- **Enfoque de Negocio:** Diseñado especialmente para **odontólogos independientes** (1 a 3 sillones). **No** para grandes cadenas.

---

## ⚙️ Principios de Desarrollo
1. **Código limpio:** Tipado estricto con TypeScript, legibilidad y modularidad.
2. **Evitar dependencias innecesarias:** Crear componentes de UI con puro CSS/Tailwind y React nativo siempre que sea posible.
3. **Terminología correcta:** Usar **siempre** "Expedientes clínicos" y evitar el término "Historias Clínicas".
4. **Performance & SEO:** Código semántico en HTML5, layouts optimizados y metadatos descriptivos en las rutas.

---

## 📦 Comandos de Validación
Antes de dar por concluido un cambio o commit, se debe ejecutar y asegurar el correcto funcionamiento de:
- `npm run build` — Compilación exitosa de producción.
- `npm run lint` — Cero advertencias o errores del linter.
