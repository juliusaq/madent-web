import React from 'react';

export default function DemoHero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-20 sm:pt-32 sm:pb-24 bg-[#FAFAFA]">
      {/* Background blurs */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] translate-y-1/3 pointer-events-none" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_80%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10 text-center flex flex-col items-center">
        {/* Tagline */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-xs font-semibold text-accent mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          Demostración Personalizada
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-primary leading-[1.1] mb-6 max-w-3xl selection:bg-accent selection:text-white">
          Descubre cómo MADENT puede ayudarte a organizar tu consultorio.
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl font-normal text-text leading-relaxed max-w-2xl mb-10 selection:bg-accent selection:text-white">
          Agenda una demostración y conoce cómo trabajar con más orden, claridad y tranquilidad.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href="#contacto-demo"
            className="group relative w-full sm:w-auto px-8 py-4 rounded-xl bg-primary text-white font-semibold text-base text-center shadow-md shadow-primary/10 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-0.5 overflow-hidden"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10">Solicitar demostración</span>
          </a>
          <a
            href="#que-veras"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white border border-slate-200 text-primary font-semibold text-base text-center hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm"
          >
            Ver qué incluye
          </a>
        </div>
      </div>
    </section>
  );
}
