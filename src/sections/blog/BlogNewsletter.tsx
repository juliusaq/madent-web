'use client';

import React from 'react';

export default function BlogNewsletter() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Visual only, no backend subscription
  };

  return (
    <section className="py-24 bg-[#FAFAFA] relative border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Newsletter Box Container */}
        <div className="relative overflow-hidden rounded-[32px] bg-white border border-slate-200/80 p-10 sm:p-16 flex flex-col md:flex-row items-center justify-between gap-10 shadow-[0_20px_50px_rgba(15,23,42,0.03)] hover:border-slate-350 transition-all duration-300">
          
          {/* Decorative glows */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

          {/* Left Text */}
          <div className="flex-1 text-left relative z-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight mb-3">
              Recibe ideas para hacer crecer tu consultorio.
            </h2>
            <p className="text-text text-sm sm:text-base leading-relaxed max-w-md">
              Contenido práctico sobre gestión, tecnología y prevención dental para odontólogos independientes.
            </p>
          </div>

          {/* Right Form */}
          <form onSubmit={handleSubmit} className="w-full md:w-auto flex flex-col sm:flex-row items-center gap-3 relative z-10 shrink-0">
            <input 
              type="email" 
              placeholder="Correo electrónico" 
              className="w-full sm:w-64 p-3.5 rounded-xl border border-slate-200 text-sm text-primary placeholder-slate-450 bg-[#FAFAFA] focus:bg-white focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-all font-medium"
              required
            />
            <button 
              type="submit"
              className="w-full sm:w-auto py-3.5 px-6 rounded-xl bg-primary text-white font-semibold text-sm shadow-md shadow-primary/10 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer shrink-0"
            >
              Suscribirme
            </button>
          </form>

        </div>

      </div>
    </section>
  );
}
