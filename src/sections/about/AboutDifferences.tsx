import React from 'react';

export default function AboutDifferences() {
  const points = [
    {
      title: "Diseñado para el flujo real de un consultorio dental",
      description: "Menos clics innecesarios y más enfoque en lo que pasa durante la consulta."
    },
    {
      title: "Enfocado en odontólogos independientes",
      description: "Adaptado para resolver los retos de quienes gestionan su propio negocio clínico."
    },
    {
      title: "Interfaz moderna y clara",
      description: "Visualmente intuitiva, inspirada en las mejores herramientas SaaS del mercado."
    },
    {
      title: "Pensado para crecer contigo",
      description: "Se adapta sin complicaciones desde tus primeros pacientes hasta tu clínica establecida."
    },
    {
      title: "Visión de odontología preventiva",
      description: "Integra herramientas pensadas para fidelizar pacientes bajo un enfoque preventivo."
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#FAFAFA] relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Large text */}
          <div className="lg:col-span-5 flex flex-col text-left">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-4">
              Nuestra Diferencia
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight leading-tight max-w-md">
              No queremos ser el software dental más complejo. Queremos ser el más fácil de adoptar.
            </h2>
          </div>

          {/* Right Column - Differentiator Points list */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {points.map((point, index) => (
              <div 
                key={index} 
                className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-100 shadow-[0_2px_15px_rgba(0,0,0,0.002)]"
              >
                <span className="w-6 h-6 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-primary mb-1">
                    {point.title}
                  </h3>
                  <p className="text-text text-xs sm:text-sm leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
