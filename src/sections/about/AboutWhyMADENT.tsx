import React from 'react';

export default function AboutWhyMADENT() {
  return (
    <section className="py-24 sm:py-32 bg-white relative border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Large, high-impact typography for manifesto feel */}
        <div className="flex flex-col text-left">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-6">
            Por qué existimos
          </span>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight leading-[1.1] mb-8 max-w-3xl selection:bg-accent selection:text-white">
            Abrir un consultorio ya es suficientemente difícil.
          </h2>

          <div className="flex flex-col gap-6 text-text text-base sm:text-lg leading-relaxed max-w-3xl selection:bg-accent selection:text-white">
            <p>
              Un odontólogo debería dedicar su tiempo a atender pacientes, no a buscar expedientes, administrar hojas de cálculo o recordar seguimientos de memoria.
            </p>
            <p className="font-semibold text-primary">
              Por eso creamos MADENT: una plataforma simple, moderna y humana para ayudarte a organizar tu práctica desde un solo lugar.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
