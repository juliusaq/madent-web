import React from 'react';

export default function FeaturesCTA() {
  return (
    <section id="contacto" className="py-32 sm:py-40 bg-white relative border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Bordered Card Container */}
        <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-b from-[#FAFAFA] to-[#F1F5F9] border border-slate-100 p-12 sm:p-20 text-center flex flex-col items-center shadow-[0_24px_60px_-15px_rgba(15,23,42,0.05)]">
          {/* Decorative glows */}
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

          {/* Title */}
          <h2 className="text-4xl sm:text-5xl font-extrabold text-primary tracking-tight mb-6 leading-[1.1] max-w-2xl">
            Conoce cómo MADENT puede ayudarte a organizar tu consultorio.
          </h2>

          {/* Text */}
          <p className="text-lg sm:text-xl text-text font-normal leading-relaxed max-w-xl mb-12">
            Agenda una demostración y descubre cómo trabajar con más orden, claridad y tranquilidad.
          </p>

          {/* Button */}
          <button className="group relative w-full sm:w-auto px-10 py-5 rounded-xl bg-primary text-white font-semibold text-base shadow-xl shadow-primary/15 hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300 transform hover:-translate-y-0.5 overflow-hidden">
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 flex items-center justify-center gap-2">
              Solicitar demostración
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </span>
          </button>
        </div>

      </div>
    </section>
  );
}
