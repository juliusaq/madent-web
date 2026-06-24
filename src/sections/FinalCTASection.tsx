import React from 'react';

export default function FinalCTASection() {
  return (
    <section id="contacto" className="py-24 sm:py-32 bg-white relative">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Bordered Premium Card Container */}
        <div className="relative overflow-hidden rounded-3xl bg-[#FAFAFA] border border-slate-100 p-12 sm:p-16 text-center flex flex-col items-center">
          {/* Decorative gradients */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-accent/5 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-primary/5 rounded-full blur-2xl pointer-events-none" />

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight mb-6 leading-tight max-w-xl">
            Tu consultorio merece crecer con orden.
          </h2>

          {/* Subtext */}
          <p className="text-lg text-text font-normal leading-relaxed max-w-xl mb-10">
            Descubre cómo MADENT puede ayudarte a administrar tu práctica y brindar una mejor experiencia a tus pacientes.
          </p>

          {/* CTA Button */}
          <button className="group relative px-8 py-4 rounded-xl bg-primary text-white font-semibold text-base shadow-lg shadow-primary/10 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-0.5 overflow-hidden">
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10">Solicitar demostración</span>
          </button>
        </div>

      </div>
    </section>
  );
}
