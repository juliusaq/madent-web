# Registro de Decisiones de Arquitectura (ADR) — MADENT

Este documento contiene un registro cronológico de las decisiones importantes tomadas sobre la arquitectura técnica, el diseño visual y el modelo de negocio del proyecto.

---

## 2026-06-23

### 📌 Decisión: Separación de Aplicación y Sitio Web
- **Estado:** Aprobado
- **Repositorios involucrados:**
  - `madent-app` (El producto de software/SaaS de gestión clínica).
  - `madent-web` (El sitio web de marketing, landing page y captación de leads).
- **Motivo:** Separar las responsabilidades de desarrollo. El sitio web de marketing requiere iteraciones rápidas de SEO, blogs y experimentos de conversión que no deben interferir con el ciclo de despliegue estable del software SaaS.

---

## 2026-06-23

### 📌 Decisión: Definición de Cliente Ideal (ICP)
- **Estado:** Aprobado
- **Definición:** Odontólogos independientes que operan de 1 a 3 sillones dentales.
- **Motivo:** El sistema está optimizado para flujos ágiles y sencillos. Decidimos **no** competir en el sector de grandes cadenas corporativas que requieren roles de administración complejos, auditorías de permisos corporativos y flujos burocráticos.

---

## 2026-06-23

### 📌 Decisión: Inspiración Visual y UX
- **Estado:** Aprobado
- **Referencias:** Apple + Stripe + Notion + Linear.
- **Detalle:** La interfaz debe ser limpia, priorizar el espacio en blanco, bordes muy suaves (`rounded-2xl` / `rounded-3xl`) y tipografía Inter. Se evitan elementos saturados o paletas corporativas frías tradicionales.

---

## 2026-06-23

### 📌 Decisión: Definición de Stack Tecnológico
- **Estado:** Aprobado
- **Tecnologías:**
  - Next.js 15 (con App Router).
  - TypeScript.
  - Tailwind CSS v4.
  - Vercel (para hosting y CI/CD).
- **Motivo:** Estándar moderno de desarrollo web con rendimiento nativo excelente, pre-renderizado de páginas para SEO óptimo y soporte nativo para los últimos estándares de CSS de Tailwind v4.
