import React from 'react';
import Link from 'next/link';

export default function HelpPopular() {
  const popular = [
    {
      category: "Primeros pasos",
      title: "Cómo registrar un paciente",
      slug: "registrar-paciente",
      time: "3 min de lectura"
    },
    {
      category: "Primeros pasos",
      title: "Cómo crear una cita",
      slug: "crear-cita",
      time: "2 min de lectura"
    },
    {
      category: "Presupuestos",
      title: "Cómo crear un presupuesto",
      slug: "crear-presupuesto",
      time: "4 min de lectura"
    },
    {
      category: "Recetas y documentos",
      title: "Cómo generar una receta",
      slug: "generar-receta",
      time: "3 min de lectura"
    }
  ];

  return (
    <section className="py-20 bg-[#FAFAFA] relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-3">
            Destacados
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight leading-tight">
            Artículos populares
          </h2>
        </div>

        {/* Popular Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {popular.map((item, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-[24px] bg-white border border-slate-150 shadow-[0_4px_25px_rgba(0,0,0,0.003)] flex flex-col justify-between transition-all duration-500 hover:shadow-[0_20px_50px_rgba(15,23,42,0.02)] hover:border-slate-300 hover:-translate-y-0.5 group"
            >
              <div>
                <span className="text-[10px] font-bold text-accent uppercase tracking-widest block mb-4">
                  {item.category}
                </span>
                <h3 className="text-base font-extrabold text-primary mb-3 leading-snug group-hover:text-accent transition-colors duration-300">
                  <Link href={`/ayuda/${item.slug}`}>
                    {item.title}
                  </Link>
                </h3>
              </div>

              <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-4 text-xs font-semibold">
                <span className="text-slate-400 font-medium">{item.time}</span>
                <Link 
                  href={`/ayuda/${item.slug}`}
                  className="text-primary hover:text-accent transition-colors flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                >
                  Leer guía
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
