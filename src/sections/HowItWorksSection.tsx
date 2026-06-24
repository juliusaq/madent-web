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
    <section id="como-funciona" className="py-32 sm:py-40 bg-[#FAFAFA] relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-24">
          <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-4">
            Paso a Paso
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary tracking-tight leading-[1.1]">
            Cinco pasos para tener un consultorio más organizado.
          </h2>
        </div>

        {/* Timeline Sequence Layout (Notion / Apple style) - Open space, no heavy borders */}
        <div className="relative pl-6 lg:pl-0">
          
          {/* Horizontal Connector Line (Desktop Only) */}
          <div className="absolute top-[28px] left-[4%] right-[4%] h-[1px] bg-slate-200 hidden lg:block z-0 pointer-events-none" />

          {/* Vertical Connector Line (Mobile/Tablet Only) */}
          <div className="absolute left-[8px] lg:left-0 top-[28px] bottom-[28px] w-[1px] bg-slate-200 lg:hidden pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-10 relative z-10">
            {steps.map((step, idx) => (
              <div 
                key={idx}
                className="flex flex-row lg:flex-col items-start gap-6 lg:gap-8 group"
              >
                {/* Step Number Emblem */}
                <div className="w-6 h-6 rounded-full bg-slate-200 text-primary font-bold text-xs flex items-center justify-center shrink-0 border border-slate-300 relative z-10 bg-[#FAFAFA] group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all duration-300">
                  {step.number}
                </div>
                
                {/* Text Content */}
                <div>
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
