import React from 'react';
import Link from 'next/link';

export default function FeaturedStory() {
  return (
    <section className="py-24 bg-white relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-3">
            Caso Destacado
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight leading-[1.1]">
            Primeras experiencias con la plataforma
          </h2>
        </div>

        {/* Featured Story Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center p-8 sm:p-12 lg:p-16 rounded-[40px] bg-[#FAFAFA]/70 border border-slate-150 shadow-[0_4px_30px_rgba(0,0,0,0.002)] hover:shadow-[0_30px_70px_rgba(15,23,42,0.03)] hover:border-slate-250 transition-all duration-500 group">
          
          {/* Left Column: Story details */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Metadata Tags */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <span className="px-3 py-1 rounded-full bg-slate-200/50 text-xs font-semibold text-primary">
                Smile Health Studio
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-100 text-xs font-medium text-text">
                Querétaro, México
              </span>
              <span className="px-3 py-1 rounded-full bg-accent/10 border border-accent/15 text-xs font-medium text-accent">
                Odontología Integral
              </span>
            </div>

            {/* Quote/Story Text */}
            <blockquote className="text-xl sm:text-2xl font-semibold text-primary leading-relaxed tracking-tight mb-8">
              &ldquo;Smile Health Studio es uno de los primeros consultorios que están construyendo una operación más organizada y una experiencia más profesional para sus pacientes.&rdquo;
            </blockquote>

            <p className="text-text text-sm sm:text-base leading-relaxed mb-8">
              La búsqueda constante por mejorar procesos, seguimiento y prevención representa la visión que inspira a MADENT. Este consultorio forma parte de las primeras experiencias de la plataforma, encontrándose actualmente en proceso de adopción de herramientas digitales.
            </p>

            {/* Qualitative Checklist Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 border-t border-slate-200/60 pt-8">
              <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-primary">
                <svg className="w-5 h-5 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Expedientes digitales
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-primary">
                <svg className="w-5 h-5 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Seguimiento organizado
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-primary">
                <svg className="w-5 h-5 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Mayor experiencia para pacientes
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-primary">
                <svg className="w-5 h-5 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Visión preventiva
              </div>
            </div>

            {/* Primary CTA Link */}
            <div>
              <Link 
                href="/experiencias/smile-health-studio"
                className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-accent transition-colors group/link"
              >
                Conocer más sobre esta experiencia
                <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

          </div>

          {/* Right Column: Premium CSS Dashboard Mockup */}
          <div className="lg:col-span-5 w-full flex items-center justify-center">
            <div className="w-full max-w-sm rounded-3xl bg-white border border-slate-200 shadow-xl shadow-slate-100/50 p-6 relative overflow-hidden">
              {/* Header inside mockup */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center font-bold text-xs text-accent">SH</div>
                  <div>
                    <h4 className="text-xs font-bold text-primary">Smile Health</h4>
                    <p className="text-[10px] text-slate-400">Adopción temprana</p>
                  </div>
                </div>
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>

              {/* Patient info simulated list */}
              <div className="flex flex-col gap-3">
                <div className="p-3.5 rounded-xl bg-[#FAFAFA] border border-slate-100">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-bold text-primary">Expediente Clínico</span>
                    <span className="text-[9px] font-semibold text-accent bg-accent/10 px-2 py-0.5 rounded-full">Digitalizado</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-200/60 rounded-full overflow-hidden">
                    <div className="h-full w-4/5 bg-accent rounded-full" />
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#FAFAFA] border border-slate-100">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-bold text-primary">Prevención y Control</span>
                    <span className="text-[9px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">Activo</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-200/60 rounded-full overflow-hidden">
                    <div className="h-full w-2/3 bg-slate-900 rounded-full" />
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#FAFAFA] border border-slate-100">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-primary">Última Actualización</span>
                    <span className="text-[9px] font-medium text-slate-400">Hoy, 10:24 AM</span>
                  </div>
                </div>
              </div>

              {/* Decorative dots background */}
              <div className="absolute top-1/2 right-4 w-20 h-20 bg-accent/5 rounded-full blur-xl pointer-events-none" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
