import React from 'react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-32 sm:pt-36 sm:pb-48 bg-[#FAFAFA]">
      {/* Background radial blurs */}
      <div className="absolute top-0 right-1/12 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[140px] -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[700px] h-[700px] bg-primary/5 rounded-full blur-[120px] translate-y-1/3 pointer-events-none" />

      {/* Grid Pattern with fade overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_80%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          
          {/* Left Text Column - Takes 5 cols for better visual weight balance with the larger mockup */}
          <div className="lg:col-span-5 flex flex-col text-left">
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-xs font-semibold text-accent mb-8 transition-all duration-300">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Diseñado para consultorios independientes
            </div>

            {/* Title - Large, tight & bold */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-primary leading-[1.05] mb-8 selection:bg-accent selection:text-white">
              El software que acompaña al odontólogo independiente en cada etapa de su crecimiento.
            </h1>

            {/* Subtitle - Reduced max-w for phrasing rhythm */}
            <p className="text-lg sm:text-xl font-normal text-text leading-relaxed max-w-md mb-12">
              Agenda citas, administra expedientes, documenta tratamientos y da seguimiento a tus pacientes desde una sola plataforma. Menos administración. Más odontología.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link
                href="/demo"
                className="group relative w-full sm:w-auto px-8 py-4 rounded-xl bg-primary text-white font-semibold text-base text-center shadow-md shadow-primary/10 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-0.5 overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10">Solicitar demostración</span>
              </Link>
              <a
                href="#solucion"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white border border-slate-200 text-primary font-semibold text-base text-center hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm"
              >
                Ver funciones
              </a>
            </div>
          </div>

          {/* Right Visual Column (Mockup) - Takes 7 cols to give it 20-30% larger size */}
          <div className="lg:col-span-7 flex items-center justify-center w-full">
            <div className="relative w-full max-w-2xl aspect-[4/3] flex items-center justify-center p-2">
              
              {/* Soft visual glow backdrop */}
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-primary/10 rounded-full blur-[90px] opacity-60 scale-95 pointer-events-none" />

              {/* Main Dashboard Frame - SaaS Application Shell */}
              <div className="relative w-full h-full bg-[#0F172A] border border-[#1E293B] rounded-[32px] shadow-[0_50px_100px_-20px_rgba(15,23,42,0.12),0_30px_60px_-30px_rgba(0,0,0,0.15)] overflow-hidden flex flex-row">
                
                {/* Left Mini Sidebar (Real App Mockup Detail) */}
                <div className="w-16 bg-[#030712] border-r border-[#1E293B] flex flex-col items-center py-6 justify-between shrink-0 hidden sm:flex">
                  <div className="flex flex-col items-center gap-8 w-full">
                    {/* App Logo Emblem */}
                    <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-white font-black text-sm">
                      M
                    </div>
                    {/* Navigation Icons */}
                    <div className="flex flex-col items-center gap-5 w-full">
                      <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white cursor-pointer transition-colors">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                      </div>
                      <div className="w-9 h-9 rounded-lg hover:bg-white/5 flex items-center justify-center text-slate-400 cursor-pointer transition-colors">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="w-9 h-9 rounded-lg hover:bg-white/5 flex items-center justify-center text-slate-400 cursor-pointer transition-colors">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </div>
                      <div className="w-9 h-9 rounded-lg hover:bg-white/5 flex items-center justify-center text-slate-400 cursor-pointer transition-colors">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  {/* Settings Icon */}
                  <div className="w-9 h-9 rounded-lg hover:bg-white/5 flex items-center justify-center text-slate-500 cursor-pointer transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>

                {/* Main Content Area of Mockup */}
                <div className="flex-1 flex flex-col bg-[#0b0f19] p-4 sm:p-6 overflow-hidden">
                  
                  {/* Header bar */}
                  <div className="flex items-center justify-between border-b border-[#1E293B] pb-4 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                    </div>
                    <div className="text-[10px] sm:text-xs font-semibold text-slate-400 px-3 py-1 rounded bg-[#0F172A] border border-[#1E293B] hidden sm:block">
                      madent.app/consultorio
                    </div>
                    <div className="text-[10px] font-semibold text-[#14B8A6] bg-[#14B8A6]/10 px-2 py-0.5 rounded border border-[#14B8A6]/20">
                      En línea
                    </div>
                  </div>

                  {/* App Dashboard Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
                    
                    {/* Card 1: Próxima Cita - float-slow */}
                    <div className="p-4 sm:p-5 rounded-2xl bg-[#0F172A] border border-[#1E293B]/60 flex flex-col justify-between transition-all duration-500 hover:scale-[1.02] hover:border-slate-700 hover:shadow-lg animate-float-slow">
                      <div>
                        <div className="flex justify-between items-start mb-3">
                          <span className="text-[9px] font-extrabold text-accent uppercase tracking-widest">Próxima cita</span>
                          <span className="text-[10px] font-bold text-white px-2 py-0.5 rounded bg-slate-800 border border-slate-700">10:00 AM</span>
                        </div>
                        <h4 className="text-sm font-extrabold text-white mb-0.5">Carlos Mendoza</h4>
                        <p className="text-[11px] text-slate-400">Limpieza dental integral</p>
                      </div>
                      <div className="mt-4 pt-2 border-t border-[#1E293B]/40 flex items-center gap-1.5 text-[10px] text-slate-400 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Confirmada por WhatsApp
                      </div>
                    </div>

                    {/* Card 2: Paciente Nuevo - float-delayed */}
                    <div className="p-4 sm:p-5 rounded-2xl bg-[#0F172A] border border-[#1E293B]/60 flex flex-col justify-between transition-all duration-500 hover:scale-[1.02] hover:border-slate-700 hover:shadow-lg animate-float-delayed">
                      <div>
                        <div className="flex justify-between items-start mb-3">
                          <span className="text-[9px] font-extrabold text-white/50 uppercase tracking-widest">Paciente nuevo</span>
                          <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
                        </div>
                        <div className="flex items-center gap-3 mb-1">
                          <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center font-bold text-accent text-xs border border-accent/20">
                            SR
                          </div>
                          <div>
                            <h4 className="text-sm font-extrabold text-white">Sofía Ruiz</h4>
                            <p className="text-[9px] text-slate-500">Registrada hace 5 min</p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 text-[10px] font-semibold text-accent">
                        Ficha de registro completada
                      </div>
                    </div>

                    {/* Card 3: Presupuesto Aprobado - float-delayed */}
                    <div className="p-4 sm:p-5 rounded-2xl bg-[#0F172A] border border-[#1E293B]/60 flex flex-col justify-between transition-all duration-500 hover:scale-[1.02] hover:border-slate-700 hover:shadow-lg animate-float-delayed">
                      <div>
                        <div className="flex justify-between items-start mb-3">
                          <span className="text-[9px] font-extrabold text-white/50 uppercase tracking-widest">Finanzas</span>
                          <span className="text-[10px] font-semibold text-emerald-400 px-2 py-0.5 rounded bg-emerald-950/40 border border-emerald-900/60">Aprobado</span>
                        </div>
                        <h4 className="text-sm font-extrabold text-white mb-0.5">Presupuesto #2049</h4>
                        <p className="text-xs font-semibold text-slate-300">$4,200 MXN</p>
                      </div>
                      <div className="mt-4 pt-2 border-t border-[#1E293B]/40 text-[10px] text-slate-400 flex justify-between font-medium">
                        <span>Ortodoncia</span>
                        <span className="font-semibold text-white">Anticipo pagado</span>
                      </div>
                    </div>

                    {/* Card 4: Expediente clínico Actualizado - float-slow */}
                    <div className="p-4 sm:p-5 rounded-2xl bg-[#0F172A] border border-[#1E293B]/60 flex flex-col justify-between transition-all duration-500 hover:scale-[1.02] hover:border-slate-700 hover:shadow-lg animate-float-slow">
                      <div>
                        <div className="flex justify-between items-start mb-3">
                          <span className="text-[9px] font-extrabold text-slate-500 uppercase tracking-widest">Historial</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        </div>
                        <h4 className="text-sm font-extrabold text-white mb-0.5">Expediente Clínico</h4>
                        <p className="text-xs text-slate-400">Ortodoncia activa</p>
                      </div>
                      <div className="mt-4 pt-2 border-t border-[#1E293B]/40 flex items-center justify-between text-[10px] font-medium text-slate-400">
                        <span>Alineadores</span>
                        <span className="font-bold text-accent">14 / 14 completados</span>
                      </div>
                    </div>

                  </div>

                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
