import React from 'react';

export default function EmotionalSection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32 bg-primary text-white">
      {/* Decorative Blur Blob */}
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.03] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10 text-center flex flex-col items-center">
        
        {/* Support Quote Icon */}
        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-8 backdrop-blur-sm border border-white/10">
          <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9.983 3v8h5.136c-.224 1.765-1.047 3.242-2.472 4.43l1.4 1.4c2.014-1.82 3.208-4.482 3.064-7.83V3h-7.128zm-7 0v8h5.136c-.224 1.765-1.047 3.242-2.472 4.43l1.4 1.4c2.014-1.82 3.208-4.482 3.064-7.83V3h-7.128z" />
          </svg>
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-8 leading-tight max-w-2xl">
          Abrir un consultorio ya es suficientemente difícil.
        </h2>

        {/* Text Paragraph */}
        <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
          Sabemos lo que significa emprender en odontología. Por eso creamos una plataforma pensada para quienes están construyendo algo propio.
        </p>

      </div>
    </section>
  );
}
