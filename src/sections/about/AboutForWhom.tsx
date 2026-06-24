import React from 'react';

export default function AboutForWhom() {
  const cards = [
    {
      title: "Odontólogos independientes",
      description: "Optimiza tu tiempo de consulta, simplifica tu administración individual y asegura la continuidad y respaldo seguro de tus expedientes.",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      title: "Consultorios pequeños",
      description: "Establece procesos de trabajo ágiles para tu agenda, control financiero de presupuestos y portal de comunicación con el paciente.",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "Equipos en crecimiento",
      description: "Coordina de manera colaborativa a tus asistentes y doctores asociados con permisos personalizados y control de citas unificado.",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Clínicas que buscan orden",
      description: "Consolida en un solo lugar tus reportes de cobranza, productividad general, e historiales clínicos sin perder el control de la operación.",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#FAFAFA] relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-3">
            Para quién está hecho
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight leading-[1.1] mb-6">
            Diseñado para odontólogos independientes.
          </h2>
          <p className="text-text text-base sm:text-lg leading-relaxed max-w-2xl">
            MADENT está pensado para quienes tienen uno o varios sillones, están emprendiendo o quieren hacer crecer su consultorio sin perder el control de su operación.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <div 
              key={index}
              className="p-8 rounded-[28px] bg-white border border-slate-100 shadow-[0_4px_25px_rgba(0,0,0,0.003)] flex flex-col justify-between transition-all duration-500 hover:shadow-[0_20px_50px_rgba(15,23,42,0.02)] hover:border-slate-200 group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold text-primary mb-3">
                  {card.title}
                </h3>
                <p className="text-text text-sm sm:text-base leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
