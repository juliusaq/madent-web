import React from 'react';
import Link from 'next/link';

export default function FeaturesHero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-28 sm:pt-32 sm:pb-36 bg-[#FAFAFA]">
      {/* Decorative blurs */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] translate-y-1/3 pointer-events-none" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_80%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 text-center flex flex-col items-center">
        
        {/* Tagline */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-xs font-semibold text-accent mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          Características del Sistema
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-primary leading-[1.1] mb-6 max-w-4xl selection:bg-accent selection:text-white">
          Todo lo que necesitas para administrar tu consultorio en un solo lugar.
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl font-normal text-text leading-relaxed max-w-2xl mb-10 selection:bg-accent selection:text-white">
          Desde la agenda hasta el seguimiento de tus pacientes, MADENT reúne las herramientas que necesitas para trabajar con más orden y tranquilidad.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-20 w-full sm:w-auto">
          <Link
            href="/demo"
            className="group relative w-full sm:w-auto px-8 py-4 rounded-xl bg-primary text-white font-semibold text-base text-center shadow-md shadow-primary/10 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-0.5 overflow-hidden"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10">Solicitar demostración</span>
          </Link>
          <a
            href="#lista-funciones"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white border border-slate-200 text-primary font-semibold text-base text-center hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm"
          >
            Ver funciones
          </a>
        </div>

        {/* Real App Dashboard Visual Mockup Frame - Wide Layout */}
        <div className="w-full max-w-4xl aspect-[16/9] bg-[#0F172A] border border-[#1E293B] rounded-[24px] sm:rounded-[32px] p-4 sm:p-6 shadow-[0_40px_80px_-15px_rgba(15,23,42,0.15)] overflow-hidden flex flex-row">
          
          {/* Mockup Left Sidebar */}
          <div className="w-14 bg-[#030712] border-r border-[#1E293B] flex flex-col items-center py-4 justify-between shrink-0 hidden sm:flex">
            <div className="flex flex-col items-center gap-6 w-full">
              <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-white font-black text-xs">
                M
              </div>
              <div className="flex flex-col items-center gap-4 w-full">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white cursor-pointer">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <div className="w-8 h-8 rounded-lg hover:bg-white/5 flex items-center justify-center text-slate-500 cursor-pointer">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="w-8 h-8 rounded-lg hover:bg-white/5 flex items-center justify-center text-slate-500 cursor-pointer">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-8 h-8 rounded-lg hover:bg-white/5 flex items-center justify-center text-slate-600">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              </svg>
            </div>
          </div>

          {/* Mockup Main Panel */}
          <div className="flex-1 flex flex-col bg-[#0b0f19] p-4 sm:p-5 text-left">
            <div className="flex items-center justify-between border-b border-[#1E293B] pb-3 mb-4 text-xs font-semibold text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                <span className="ml-2 hidden sm:inline text-slate-500">Agenda Semanal / Consultorio Centro</span>
              </div>
              <span className="text-[10px] text-accent bg-accent/10 px-2 py-0.5 rounded border border-accent/20">Modo Administrador</span>
            </div>

            {/* Dashboard Mockup Grid content */}
            <div className="grid grid-cols-3 gap-4 flex-1">
              
              {/* Daily Appointments Panel */}
              <div className="col-span-3 lg:col-span-2 p-4 rounded-xl bg-[#0F172A] border border-[#1E293B]/60 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[9px] font-bold text-accent uppercase tracking-wider">Hoy — Citas</span>
                    <span className="text-[9px] font-semibold text-slate-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5 rounded">2 Citas</span>
                  </div>
                  <div className="flex flex-col gap-2.5">
                    <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800/80 flex justify-between items-center">
                      <div>
                        <h6 className="text-xs font-bold text-white">Carlos Mendoza</h6>
                        <p className="text-[9px] text-slate-500">10:00 AM — Limpieza</p>
                      </div>
                      <span className="text-[8px] font-bold text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded">Confirmado</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800/80 flex justify-between items-center">
                      <div>
                        <h6 className="text-xs font-bold text-white">Sofía Ruiz</h6>
                        <p className="text-[9px] text-slate-500">11:30 AM — Resina</p>
                      </div>
                      <span className="text-[8px] font-bold text-amber-500 bg-amber-500/10 px-1.5 py-0.5 rounded">En espera</span>
                    </div>
                  </div>
                </div>
                <div className="text-[9px] text-slate-500 text-center pt-2">
                  Ver agenda semanal completa →
                </div>
              </div>

              {/* Patient Profile Quickview (Desktop only) */}
              <div className="hidden lg:flex lg:col-span-1 p-4 rounded-xl bg-[#0F172A] border border-[#1E293B]/60 flex-col justify-between">
                <div>
                  <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider block mb-3">Expediente Clínico</span>
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center font-bold text-accent text-xs">SR</div>
                    <div>
                      <h6 className="text-xs font-bold text-white">Sofía Ruiz</h6>
                      <p className="text-[8px] text-slate-500">ID #4019</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5 text-[9px] text-slate-400">
                    <div className="flex justify-between border-b border-[#1E293B]/30 pb-1">
                      <span>Alergias</span>
                      <span className="font-semibold text-red-500">Penicilina</span>
                    </div>
                    <div className="flex justify-between border-b border-[#1E293B]/30 pb-1">
                      <span>Cédula Resp.</span>
                      <span className="font-semibold text-white">#123456-D</span>
                    </div>
                  </div>
                </div>
                <span className="text-[9px] text-accent font-semibold">Odontograma actualizado ✓</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
