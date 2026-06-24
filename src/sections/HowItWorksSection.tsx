import React from 'react';

export default function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Registra a tus pacientes",
      description: "Ingresa sus datos básicos o invítalos a completar su pre-registro digital antes de su primera consulta."
    },
    {
      number: "02",
      title: "Organiza tu agenda",
      description: "Define tus horarios disponibles, asigna citas y deja que MADENT envíe recordatorios automáticos de confirmación."
    },
    {
      number: "03",
      title: "Documenta cada caso",
      description: "Usa el odontograma interactivo, agrega notas clínicas en su expediente y genera recetas digitales en segundos."
    },
    {
      number: "04",
      title: "Da seguimiento",
      description: "Registra cobros, emite presupuestos estructurados y programa visitas de control preventivo con facilidad."
    },
    {
      number: "05",
      title: "Haz crecer tu consultorio",
      description: "Analiza reportes mensuales de productividad y finanzas para tomar decisiones inteligentes para tu negocio."
    }
  ];

  return (
    <section id="como-funciona" className="py-24 sm:py-32 bg-[#FAFAFA] relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-3">
            Paso a Paso
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight leading-tight">
            Cinco pasos para tener un consultorio más organizado.
          </h2>
        </div>

        {/* Steps Flow (Grid/Line representation) */}
        <div className="relative">
          {/* Connecting Line (Only visible on large screens) */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 -translate-y-1/2 hidden lg:block z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:scale-[1.01]"
              >
                <div>
                  {/* Step Number Badge */}
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm mb-6">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-3">
                    {step.title}
                  </h3>
                  <p className="text-text text-sm leading-relaxed">
                    {step.description}
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
