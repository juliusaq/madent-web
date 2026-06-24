import React from 'react';

export default function PhilosophySection() {
  return (
    <section className="py-24 sm:py-32 bg-white relative border-t border-slate-100">
      {/* Decorative blurs */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[110px] -translate-y-1/2 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10 text-center flex flex-col items-center">
        {/* Quote icon */}
        <span className="text-accent text-6xl font-serif leading-none mb-6">“</span>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight leading-tight mb-8 max-w-2xl">
          Creemos que los mejores consultorios se construyen con orden
        </h2>

        {/* Philosophy Text */}
        <p className="text-lg sm:text-xl font-medium text-text leading-relaxed max-w-3xl mb-6">
          MADENT nace para acompañar a odontólogos que quieren hacer las cosas mejor, crecer con tranquilidad y brindar mejores experiencias a sus pacientes.
        </p>

        <span className="text-accent text-6xl font-serif leading-none mt-2">”</span>
      </div>
    </section>
  );
}
