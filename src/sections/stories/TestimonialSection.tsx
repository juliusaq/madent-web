import React from 'react';

export default function TestimonialSection() {
  const placeholders = Array(3).fill(null);

  return (
    <section className="py-24 bg-[#FAFAFA] relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-3">
            Testimonios
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight leading-tight">
            Qué opinan otros profesionales
          </h2>
        </div>

        {/* Placeholders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {placeholders.map((_, idx) => (
            <div 
              key={idx}
              className="p-8 rounded-[28px] bg-white border border-slate-200/60 shadow-[0_4px_25px_rgba(0,0,0,0.002)] flex flex-col justify-between items-center text-center min-h-[250px] relative overflow-hidden transition-all duration-300 hover:border-slate-300"
            >
              {/* Card background glows */}
              <div className="absolute -top-12 -left-12 w-24 h-24 bg-slate-100 rounded-full blur-xl opacity-50 pointer-events-none" />
              <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-accent/5 rounded-full blur-xl opacity-50 pointer-events-none" />

              {/* Icon / Design Detail */}
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center mb-6 text-slate-300">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>

              {/* Text */}
              <div className="flex-1 flex flex-col justify-center mb-6">
                <p className="text-slate-400 text-sm font-semibold italic max-w-[200px]">
                  Próximamente compartiremos testimonios de más odontólogos independientes.
                </p>
              </div>

              {/* Badge */}
              <span className="px-3 py-1 rounded-full bg-slate-100 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                Próximamente
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
