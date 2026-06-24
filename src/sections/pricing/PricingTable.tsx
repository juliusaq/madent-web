import React from 'react';

export default function PricingTable() {
  const comparison = [
    { name: "Agenda inteligente", esencial: true, crecimiento: true, clinica: true },
    { name: "Expedientes clínicos", esencial: true, crecimiento: true, clinica: true },
    { name: "Odontograma", esencial: true, crecimiento: true, clinica: true },
    { name: "Presupuestos", esencial: true, crecimiento: true, clinica: true },
    { name: "Recetas y documentos", esencial: true, crecimiento: true, clinica: true },
    { name: "Cédulas profesionales", esencial: true, crecimiento: true, clinica: true },
    { name: "Reportes", esencial: true, crecimiento: true, clinica: true },
    { name: "Multiusuario", esencial: false, crecimiento: true, clinica: true },
    { name: "Roles y permisos", esencial: false, crecimiento: true, clinica: true },
    { name: "Soporte prioritario", esencial: false, crecimiento: true, clinica: true },
    { name: "Implementación acompañada", esencial: false, crecimiento: false, clinica: true }
  ];

  const checkIcon = (
    <svg className="w-5 h-5 text-accent mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );

  const crossIcon = (
    <svg className="w-4.5 h-4.5 text-slate-200 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
    </svg>
  );

  return (
    <section id="comparar-planes" className="py-24 sm:py-32 bg-[#FAFAFA] relative border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-3">
            Comparativa detallada
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight leading-tight">
            Compara todas las características de nuestros planes
          </h2>
        </div>

        {/* 1. Desktop View - Table Style (hidden on mobile) */}
        <div className="hidden md:block overflow-hidden rounded-3xl border border-slate-200/70 bg-white shadow-[0_4px_25px_rgba(0,0,0,0.002)]">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-100 bg-[#FAFAFA]/50">
                <th className="p-6 text-sm font-bold text-primary w-2/5">Función</th>
                <th className="p-6 text-sm font-bold text-primary text-center">Esencial</th>
                <th className="p-6 text-sm font-bold text-primary text-center">Crecimiento</th>
                <th className="p-6 text-sm font-bold text-primary text-center">Clínica</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {comparison.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 transition-colors duration-150">
                  <td className="p-6 text-sm font-medium text-primary">{item.name}</td>
                  <td className="p-6 text-center">{item.esencial ? checkIcon : crossIcon}</td>
                  <td className="p-6 text-center">{item.crecimiento ? checkIcon : crossIcon}</td>
                  <td className="p-6 text-center">{item.clinica ? checkIcon : crossIcon}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 2. Mobile View - Plan Cards (hidden on desktop) */}
        <div className="block md:hidden flex flex-col gap-8">
          
          {/* Esencial Mobile Card */}
          <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
            <h3 className="text-base font-bold text-primary mb-4 border-b pb-3">Plan Esencial</h3>
            <ul className="flex flex-col gap-4 text-xs font-medium">
              {comparison.map((item, idx) => (
                <li key={idx} className="flex justify-between items-center gap-4">
                  <span className={item.esencial ? 'text-primary' : 'text-slate-400 font-normal line-through'}>
                    {item.name}
                  </span>
                  <span>{item.esencial ? checkIcon : crossIcon}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Crecimiento Mobile Card */}
          <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
            <h3 className="text-base font-bold text-primary mb-4 border-b pb-3">Plan Crecimiento</h3>
            <ul className="flex flex-col gap-4 text-xs font-medium">
              {comparison.map((item, idx) => (
                <li key={idx} className="flex justify-between items-center gap-4">
                  <span className={item.crecimiento ? 'text-primary' : 'text-slate-400 font-normal line-through'}>
                    {item.name}
                  </span>
                  <span>{item.crecimiento ? checkIcon : crossIcon}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Clinica Mobile Card */}
          <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
            <h3 className="text-base font-bold text-primary mb-4 border-b pb-3">Plan Clínica</h3>
            <ul className="flex flex-col gap-4 text-xs font-medium">
              {comparison.map((item, idx) => (
                <li key={idx} className="flex justify-between items-center gap-4">
                  <span className={item.clinica ? 'text-primary' : 'text-slate-400 font-normal line-through'}>
                    {item.name}
                  </span>
                  <span>{item.clinica ? checkIcon : crossIcon}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
