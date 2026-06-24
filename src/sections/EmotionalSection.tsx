import React from 'react';

export default function EmotionalSection() {
  return (
    <section className="relative overflow-hidden py-32 sm:py-40 bg-[#030712] text-white border-y border-slate-900/50">
      
      {/* Apple-like Radial Glow Light Effect */}
      <div className="absolute top-1/2 left-1/2 w-[700px] sm:w-[900px] h-[500px] bg-accent/15 rounded-full blur-[140px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      {/* Very subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] opacity-[0.02] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 relative z-10 text-center flex flex-col items-center">
        
        {/* Support Quote Icon / Accent Badge */}
        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-10 backdrop-blur-md border border-white/10 shadow-sm animate-float-slow">
          <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9.983 3v8h5.136c-.224 1.765-1.047 3.242-2.472 4.43l1.4 1.4c2.014-1.82 3.208-4.482 3.064-7.83V3h-7.128zm-7 0v8h5.136c-.224 1.765-1.047 3.242-2.472 4.43l1.4 1.4c2.014-1.82 3.208-4.482 3.064-7.83V3h-7.128z" />
          </svg>
        </div>

        {/* Title - Large Apple-style */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-8 leading-[1.1] max-w-3xl selection:bg-accent selection:text-white">
          Abrir un consultorio ya es suficientemente difícil.
        </h2>

        {/* Text Paragraph - Large & refined slate-300 */}
        <p className="text-lg sm:text-xl md:text-2xl text-slate-400 font-normal leading-relaxed max-w-3xl selection:bg-accent selection:text-white">
          Sabemos lo que significa emprender en odontología. Por eso creamos una plataforma pensada para quienes están construyendo algo propio.
        </p>

      </div>
    </section>
  );
}
