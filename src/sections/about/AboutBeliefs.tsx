import React from 'react';

export default function AboutBeliefs() {
  const beliefs = [
    {
      num: "01",
      title: "Simplicidad",
      description: "Menos clics, interfaces limpias y adopción rápida para que no pierdas tiempo aprendiendo a usar un sistema complejo."
    },
    {
      num: "02",
      title: "Confianza",
      description: "Seguridad robusta para resguardar la información clínica de tus pacientes con los más altos estándares de privacidad."
    },
    {
      num: "03",
      title: "Cercanía",
      description: "Acompañamiento humano y soporte real en cada paso. No somos solo un software, somos tu equipo de soporte."
    },
    {
      num: "04",
      title: "Evolución",
      description: "Actualizaciones continuas e innovaciones basadas en la retroalimentación real de los odontólogos independientes."
    },
    {
      num: "05",
      title: "Prevención",
      description: "Tecnología pensada para promover un cuidado bucal proactivo y ayudar a tus pacientes a mantener su salud dental."
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-white relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-3">
            Nuestros Valores
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight leading-[1.1]">
            Creemos que la tecnología debe acompañar, no complicar.
          </h2>
        </div>

        {/* Values grid / list */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 border-t border-slate-100 pt-12">
          {beliefs.map((belief, index) => (
            <div key={index} className="flex flex-col text-left">
              <span className="text-xs font-bold text-accent mb-4 block tracking-widest font-mono">
                {belief.num}
              </span>
              <h3 className="text-lg font-bold text-primary mb-3">
                {belief.title}
              </h3>
              <p className="text-text text-sm leading-relaxed">
                {belief.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
