import React from 'react';
import Link from 'next/link';

export default function HelpSupport() {
  return (
    <section className="py-24 bg-white relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-3">
            Atención personalizada
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight leading-tight">
            ¿Necesitas ayuda?
          </h2>
        </div>

        {/* Support Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: WhatsApp */}
          <div className="p-8 rounded-[28px] bg-[#FAFAFA]/70 border border-slate-100 shadow-[0_4px_25px_rgba(0,0,0,0.003)] flex flex-col justify-between transition-all duration-500 hover:shadow-[0_20px_50px_rgba(15,23,42,0.02)] hover:border-slate-200 hover:bg-white group">
            <div>
              <div className="w-10 h-10 rounded-xl bg-slate-900/5 text-slate-400 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-primary mb-3">
                Hablar por WhatsApp
              </h3>
              <p className="text-text text-sm sm:text-base leading-relaxed mb-8">
                Escríbenos directamente para resolver dudas inmediatas o recibir asistencia técnica rápida.
              </p>
            </div>
            
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block text-center">
                Próximamente
              </span>
              <button 
                disabled 
                className="w-full py-3.5 px-4 rounded-xl bg-slate-100 border border-slate-200 text-slate-400 font-semibold text-xs cursor-not-allowed transition-colors"
              >
                Enviar mensaje
              </button>
            </div>
          </div>

          {/* Card 2: Correo */}
          <div className="p-8 rounded-[28px] bg-[#FAFAFA]/70 border border-slate-100 shadow-[0_4px_25px_rgba(0,0,0,0.003)] flex flex-col justify-between transition-all duration-500 hover:shadow-[0_20px_50px_rgba(15,23,42,0.02)] hover:border-slate-200 hover:bg-white group">
            <div>
              <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-primary mb-3">
                Soporte por Correo
              </h3>
              <p className="text-text text-sm sm:text-base leading-relaxed mb-8">
                ¿Tienes una consulta más detallada? Envíanos un correo y te responderemos a la brevedad.
              </p>
            </div>
            
            <a 
              href="mailto:contacto@madent.com.mx"
              className="w-full py-3.5 px-4 rounded-xl bg-white border border-slate-200 text-primary font-semibold text-xs text-center hover:bg-slate-50 hover:border-slate-350 transition-colors shadow-sm block"
            >
              contacto@madent.com.mx
            </a>
          </div>

          {/* Card 3: Solicitar demo */}
          <div className="p-8 rounded-[28px] bg-white border border-slate-200/80 shadow-[0_15px_40px_rgba(15,23,42,0.02)] flex flex-col justify-between transition-all duration-500 hover:shadow-[0_25px_65px_rgba(15,23,42,0.05)] hover:border-slate-300 group">
            <div>
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-primary mb-3">
                Agenda una sesión
              </h3>
              <p className="text-text text-sm sm:text-base leading-relaxed mb-8">
                Agenda una demostración guiada para conocer de cerca cómo MADENT se adapta a tu consultorio.
              </p>
            </div>
            
            <Link 
              href="/demo"
              className="w-full py-3.5 px-4 rounded-xl bg-primary text-white font-semibold text-xs text-center hover:bg-accent transition-colors shadow-md shadow-primary/10 block"
            >
              Solicitar demostración
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
