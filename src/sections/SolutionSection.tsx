import React from 'react';

export default function SolutionSection() {
  const secondaryModules = [
    {
      title: "Odontograma",
      description: "Mapa dental interactivo para registrar diagnósticos y evolución de tratamientos pieza por pieza de forma gráfica e intuitiva.",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Presupuestos",
      description: "Crea propuestas de tratamiento claras para tus pacientes, gestiona planes de pago y lleva un registro detallado de abonos y saldos pendientes.",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Recetas",
      description: "Emisión de recetas digitales profesionales y personalizadas en segundos, listas para imprimir o enviar en formato PDF.",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "Portal del paciente",
      description: "Un espacio en línea seguro para tus pacientes donde pueden consultar sus citas agendadas, recetas e indicaciones de autocuidado.",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    },
    {
      title: "Cédulas profesionales",
      description: "Validación y firma legal de expedientes clínicos y recetas con el número de cédula del odontólogo responsable.",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Reportes",
      description: "Métricas claras sobre citas realizadas, ingresos del mes, presupuestos aceptados y tratamientos más frecuentes.",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ];

  return (
    <section id="solucion" className="py-32 sm:py-40 bg-[#FAFAFA] relative border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20 sm:mb-24">
          <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-4">
            Plataforma Integral
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary tracking-tight leading-[1.1]">
            Todo lo que necesitas para administrar tu consultorio en un solo lugar.
          </h2>
        </div>

        {/* Bento Grid Layout (Stripe style) */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 mb-8">
          
          {/* Bento Card 1: Agenda (Featured - col-span-3) */}
          <div className="md:col-span-3 p-8 rounded-[32px] bg-white border border-slate-100 shadow-[0_4px_30px_rgba(0,0,0,0.005)] flex flex-col justify-between transition-all duration-500 hover:shadow-[0_24px_50px_rgba(15,23,42,0.03)] hover:border-slate-200/80 group overflow-hidden relative">
            <div className="absolute top-0 right-0 w-48 h-48 bg-accent/5 rounded-full blur-2xl pointer-events-none" />
            
            <div className="relative z-10 flex-1 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-500">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-primary mb-3">
                  Agenda
                </h3>
                <p className="text-text text-base leading-relaxed max-w-sm mb-8">
                  Citas con estados (confirmada, en sala, atendido), arrastrar y soltar, sincronización inteligente y recordatorios automáticos por WhatsApp.
                </p>
              </div>

              {/* Agenda Miniature UI Mockup */}
              <div className="mt-2 p-4 rounded-2xl bg-[#FAFAFA] border border-slate-100 flex flex-col gap-2.5 shadow-inner">
                <div className="flex justify-between items-center bg-white p-3 rounded-xl border border-slate-50 shadow-[0_2px_8px_rgba(0,0,0,0.01)]">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-slate-400">09:00</span>
                    <div>
                      <h5 className="text-xs font-bold text-primary">Carlos Mendoza</h5>
                      <p className="text-[10px] text-text">Limpieza dental</p>
                    </div>
                  </div>
                  <span className="text-[9px] font-bold text-accent bg-accent/10 border border-accent/10 px-2 py-0.5 rounded-full">Confirmada</span>
                </div>
                <div className="flex justify-between items-center bg-white p-3 rounded-xl border border-slate-50 shadow-[0_2px_8px_rgba(0,0,0,0.01)]">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-slate-400">11:30</span>
                    <div>
                      <h5 className="text-xs font-bold text-primary">Sofía Ruiz</h5>
                      <p className="text-[10px] text-text">Resina compuesta</p>
                    </div>
                  </div>
                  <span className="text-[9px] font-bold text-amber-600 bg-amber-50 border border-amber-100 px-2 py-0.5 rounded-full">En sala</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bento Card 2: Expediente Clínico (Featured - col-span-3) */}
          <div className="md:col-span-3 p-8 rounded-[32px] bg-white border border-slate-100 shadow-[0_4px_30px_rgba(0,0,0,0.005)] flex flex-col justify-between transition-all duration-500 hover:shadow-[0_24px_50px_rgba(15,23,42,0.03)] hover:border-slate-200/80 group overflow-hidden relative">
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 flex-1 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-500">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-primary mb-3">
                  Expediente clínico
                </h3>
                <p className="text-text text-base leading-relaxed max-w-sm mb-8">
                  Fichas clínicas digitales y completas de cada paciente. Centraliza antecedentes, evolución de tratamientos, alergias y notas en un solo lugar seguro.
                </p>
              </div>

              {/* Patient Record Miniature UI Mockup */}
              <div className="mt-2 p-4 rounded-2xl bg-[#FAFAFA] border border-slate-100 flex flex-col gap-3 shadow-inner">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center font-bold text-white text-xs">
                    SR
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-primary">Sofía Ruiz</h5>
                    <p className="text-[10px] text-text">ID: #4019 — Paciente Activo</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[10px] pt-1">
                  <div className="bg-white p-2 rounded-lg border border-slate-100">
                    <span className="text-slate-400 block font-semibold text-[8px] uppercase tracking-wider">Alergias</span>
                    <span className="font-bold text-red-600">Penicilina</span>
                  </div>
                  <div className="bg-white p-2 rounded-lg border border-slate-100">
                    <span className="text-slate-400 block font-semibold text-[8px] uppercase tracking-wider">Tratamiento</span>
                    <span className="font-bold text-primary">Ortodoncia</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Secondary Bento Grid Row (col-span-2 each) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {secondaryModules.map((module, idx) => (
            <div 
              key={idx}
              className="p-8 rounded-[28px] bg-white border border-slate-100/80 shadow-[0_4px_25px_rgba(0,0,0,0.005)] flex flex-col justify-between transition-all duration-500 hover:shadow-[0_20px_50px_rgba(15,23,42,0.03)] hover:border-slate-200 hover:-translate-y-0.5 group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-500">
                  {module.icon}
                </div>
                <h3 className="text-base font-bold text-primary mb-2">
                  {module.title}
                </h3>
                <p className="text-text text-sm leading-relaxed">
                  {module.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
