import React from 'react';

export default function ProblemSection() {
  const problems = [
    {
      title: "Agenda en WhatsApp",
      description: "Mensajes que se pierden en el chat, citas duplicadas por accidente y la constante necesidad de confirmar de forma manual.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    },
    {
      title: "Expedientes dispersos",
      description: "Notas clínicas en carpetas de papel, fotos de tratamientos en tu celular personal y datos de contacto en una hoja suelta.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "Seguimientos de memoria",
      description: "Confiar en tu memoria para recordar quién tiene pagos pendientes, quién necesita cita de control o a quién debes enviar una receta.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0x" />
        </svg>
      )
    },
    {
      title: "Demasiado tiempo administrando",
      description: "Pasar horas conciliando cuentas, haciendo presupuestos a mano y redactando mensajes en lugar de enfocarte en lo que mejor haces: la odontología.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section id="problema" className="py-24 sm:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-3">
            La realidad del día a día
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight leading-tight">
            Tu consultorio merece algo mejor que hojas, Excel y mensajes perdidos.
          </h2>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {problems.map((problem, idx) => (
            <div 
              key={idx}
              className="p-8 rounded-2xl bg-[#FAFAFA] border border-slate-100 flex flex-col justify-between transition-all duration-300 hover:shadow-sm hover:border-slate-200/80 group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-900/5 text-primary flex items-center justify-center mb-6 group-hover:scale-105 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {problem.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {problem.title}
                </h3>
                <p className="text-text text-base leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
