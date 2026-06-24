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
        <div className="max-w-3xl mb-20 sm:mb-24">
          <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-4">
            Paso a Paso
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary tracking-tight leading-[1.1]">
            Cinco pasos para tener un consultorio más organizado.
          </h2>
        </div>

        {/* Steps Flow (Connected Timeline Grid) */}
        <div className="relative">
          
          {/* Horizontal Connecting Line (Desktop Only) */}
          <div className="absolute top-[40px] left-[5%] right-[5%] h-0.5 bg-slate-200/70 hidden lg:block z-0 pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-6 relative z-10">
            {steps.map((step, idx) => (
              <div 
                key={idx}
                className="relative p-6 sm:p-8 rounded-[28px] bg-white border border-slate-100 shadow-[0_4px_25px_rgba(0,0,0,0.005)] flex flex-col justify-between transition-all duration-500 hover:shadow-[0_20px_50px_rgba(15,23,42,0.03)] hover:-translate-y-0.5 group"
              >
                {/* Vertical Connector Line (Mobile/Tablet Only, drawn between cards) */}
                {idx < steps.length - 1 && (
                  <div className="absolute left-[38px] top-[72px] bottom-[-32px] w-0.5 bg-slate-200/70 lg:hidden pointer-events-none" />
                )}

                <div>
                  {/* Step Number Badge */}
                  <div className="w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm mb-6 relative z-10 shadow-sm border-4 border-white group-hover:scale-105 group-hover:bg-accent transition-all duration-500">
                    {step.number}
                  </div>
                  
                  {/* Step Title */}
                  <h3 className="text-lg font-bold text-primary mb-3">
                    {step.title}
                  </h3>
                  
                  {/* Step Description */}
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
