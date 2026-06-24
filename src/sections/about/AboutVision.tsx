import React from 'react';

export default function AboutVision() {
  const steps = [
    {
      title: "MADENT",
      subtitle: "Hoy",
      desc: "La base tecnológica para digitalizar, estructurar y simplificar el día a día del odontólogo independiente."
    },
    {
      title: "Educación y Comunidad",
      subtitle: "Próximamente",
      desc: "Conectar a profesionales de la salud dental para compartir conocimiento, guías y mejores prácticas, fortaleciendo la práctica odontológica."
    },
    {
      title: "Prevención Continua",
      subtitle: "Más adelante",
      desc: "Herramientas de comunicación y seguimiento preventivo continuo para empoderar a los pacientes en el cuidado bucodental diario."
    },
    {
      title: "Salud Integral",
      subtitle: "Nuestra visión a largo plazo",
      desc: "Vincular la salud dental con el cuidado sistémico general, entendiendo la boca como la ventana principal al bienestar integral del cuerpo."
    }
  ];

  return (
    <section id="vision-about" className="py-24 sm:py-32 bg-white relative border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10 text-center flex flex-col items-center">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20 text-center">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-3">
            Nuestra Visión
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight leading-tight mb-6">
            El futuro de la odontología será más organizado, preventivo y humano.
          </h2>
          <p className="text-text text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            MADENT es el primer paso de un ecosistema más amplio que conecta tecnología, prevención, educación y mejores experiencias para pacientes y profesionales de la salud.
          </p>
        </div>

        {/* Ecosystem Flowchart - Clean Vertical Connectors */}
        <div className="relative w-full max-w-2xl flex flex-col items-center">
          
          {/* Vertical Connecting Line */}
          <div className="absolute top-10 bottom-10 w-0.5 bg-gradient-to-b from-primary/10 via-accent/30 to-accent/5 pointer-events-none" />

          {steps.map((step, idx) => {
            return (
              <div key={idx} className="relative w-full flex flex-col items-center mb-16 last:mb-0">
                {/* Node Dot */}
                <div className="w-8 h-8 rounded-full bg-white border-2 border-accent flex items-center justify-center z-10 shadow-sm mb-4">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                </div>

                {/* Node Card */}
                <div className="w-full max-w-lg p-6 rounded-2xl bg-[#FAFAFA] border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.003)] text-center transition-all duration-300 hover:border-slate-200">
                  <h3 className="text-lg font-bold text-primary mb-1">
                    {step.title}
                  </h3>
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider block mb-3">
                    {step.subtitle}
                  </span>
                  <p className="text-text text-sm leading-relaxed max-w-md mx-auto">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Vision disclaimer caption */}
        <p className="text-xs text-slate-400 italic mt-16 max-w-md selection:bg-accent selection:text-white">
          * Esta hoja de ruta representa nuestra visión estratégica a largo plazo para transformar el cuidado bucodental, enfocada en la prevención activa y la salud sistémica.
        </p>

      </div>
    </section>
  );
}
