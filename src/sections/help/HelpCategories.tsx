import React from 'react';
import Link from 'next/link';

export default function HelpCategories() {
  const categories = [
    {
      title: "Primeros pasos",
      description: "Comienza a utilizar MADENT y organiza tu consultorio desde el primer día.",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      articles: [
        { title: "Cómo registrar un paciente", slug: "registrar-paciente" },
        { title: "Cómo crear una cita", slug: "crear-cita" },
        { title: "Cómo organizar tu agenda", slug: "organizar-agenda" }
      ]
    },
    {
      title: "Expedientes clínicos",
      description: "Centraliza la información de tus pacientes, antecedentes y evolución clínica de forma digital.",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      articles: [
        { title: "Crear expediente clínico", slug: "crear-expediente" },
        { title: "Agregar fotografías", slug: "agregar-fotografias" },
        { title: "Consultar historial", slug: "consultar-historial" }
      ]
    },
    {
      title: "Odontograma",
      description: "Registra tratamientos y diagnósticos visuales sobre el mapa dental interactivo.",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      articles: [
        { title: "Registrar tratamientos", slug: "registrar-tratamientos" },
        { title: "Documentar diagnósticos", slug: "documentar-diagnosticos" },
        { title: "Seguimiento visual", slug: "seguimiento-visual" }
      ]
    },
    {
      title: "Presupuestos",
      description: "Crea presupuestos claros y lleva el control financiero y abonos de tus pacientes.",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      articles: [
        { title: "Crear un presupuesto", slug: "crear-presupuesto" },
        { title: "Compartir con pacientes", slug: "compartir-presupuesto" },
        { title: "Seguimiento de aceptación", slug: "seguimiento-aceptacion" }
      ]
    },
    {
      title: "Recetas y documentos",
      description: "Genera recetas médicas membretadas y administra consentimientos informados en PDF.",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      articles: [
        { title: "Generar recetas", slug: "generar-receta" },
        { title: "Descargar PDF", slug: "descargar-pdf" },
        { title: "Administrar documentos", slug: "administrar-documentos" }
      ]
    },
    {
      title: "Reportes",
      description: "Analiza los ingresos de tu práctica, productividad general e indicadores clave de rendimiento.",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      articles: [
        { title: "Consultar ingresos", slug: "consultar-ingresos" },
        { title: "Ver indicadores", slug: "ver-indicadores" },
        { title: "Analizar actividad", slug: "analizar-actividad" }
      ]
    }
  ];

  return (
    <section id="categorias-ayuda" className="py-24 sm:py-32 bg-white relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-3">
            Explora por módulos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight leading-[1.1]">
            Todo lo que necesitas saber, organizado por temas
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <div 
              key={idx}
              className="p-8 rounded-[28px] bg-[#FAFAFA]/70 border border-slate-100 shadow-[0_4px_25px_rgba(0,0,0,0.003)] flex flex-col justify-between transition-all duration-500 hover:shadow-[0_20px_50px_rgba(15,23,42,0.02)] hover:border-slate-200 hover:bg-white group"
            >
              <div>
                {/* Category Icon and Title */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    {cat.icon}
                  </div>
                  <h3 className="text-lg font-extrabold text-primary">
                    {cat.title}
                  </h3>
                </div>

                {/* Category Description */}
                <p className="text-text text-sm leading-relaxed mb-6">
                  {cat.description}
                </p>

                {/* Articles Bullet List */}
                <ul className="flex flex-col gap-3 pt-4 border-t border-slate-100/85">
                  {cat.articles.map((art, aIdx) => (
                    <li key={aIdx} className="text-xs sm:text-sm font-semibold text-primary hover:text-accent transition-colors duration-200 flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/60 shrink-0" />
                      <Link href={`/ayuda/${art.slug}`} className="hover:underline">
                        {art.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
