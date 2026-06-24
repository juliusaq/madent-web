# MADENT Web

Sitio web oficial de **MADENT**, una plataforma SaaS diseñada para odontólogos independientes y consultorios dentales pequeños.

## 🚀 Filosofía
> **Menos administración. Más odontología.**

Nuestra visión es ayudar a los odontólogos independientes a construir consultorios más organizados, humanos y sostenibles, liberándolos de la carga administrativa para que se enfoquen en la salud de sus pacientes.

---

## 🛠️ Stack Tecnológico
- **Framework:** Next.js 15 (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS v4
- **Despliegue:** Vercel

---

## 📂 Estructura del Proyecto

```text
madent-web/
├── public/                  # Archivos públicos estáticos
│   ├── icons/               # Iconos SVG y del sitio
│   ├── images/              # Imágenes generales
│   └── screenshots/         # Capturas de pantalla
├── src/
│   ├── app/                 # Configuración del App Router (Layouts y Rutas principales)
│   │   ├── globals.css      # Estilos globales y variables de Tailwind CSS v4
│   │   ├── layout.tsx       # Layout principal de la aplicación con tipografía Inter
│   │   └── page.tsx         # Página principal ensamblada con componentes de sección
│   ├── components/          # Componentes de interfaz de usuario reutilizables (UI)
│   ├── sections/            # Secciones modulares de la landing page
│   │   ├── Header.tsx       # Navegación con efecto Glassmorphism
│   │   ├── Hero.tsx         # Portada con mockup interactivo en CSS
│   │   ├── ProblemSection.tsx
│   │   ├── SolutionSection.tsx
│   │   ├── BenefitsSection.tsx
│   │   ├── HowItWorksSection.tsx
│   │   ├── EmotionalSection.tsx
│   │   ├── FinalCTASection.tsx
│   │   └── Footer.tsx
│   ├── lib/                 # Utilidades comunes y librerías externas
│   └── styles/              # Estilos personalizados o globales
```

---

## 💻 Desarrollo Local

### Instalar dependencias
```bash
npm install
```

### Iniciar servidor de desarrollo
```bash
npm run dev
```
Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

### Validaciones y Compilación
Para validar tipos, linter y realizar una compilación estática de prueba de producción:
```bash
npm run build
npm run lint
```

---

## 🌐 Producción
Sitio oficial de producción: [https://madent.com.mx](https://madent.com.mx)
