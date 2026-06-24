import React from 'react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-32 sm:pt-36 sm:pb-44 bg-[#FAFAFA]">
      {/* Background radial blurs */}
      <div className="absolute top-0 right-1/4 w-[700px] h-[700px] bg-accent/5 rounded-full blur-[120px] -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] translate-y-1/3 pointer-events-none" />

      {/* Grid Pattern with fade overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_80%,transparent_100%)] opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 flex flex-col text-left">
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-xs font-semibold text-accent mb-8 transition-all hover:bg-accent/15 duration-300">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Diseñado para consultorios independientes
            </div>

            {/* Title - Larger & tracking tight */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-primary leading-[1.05] mb-8 selection:bg-accent selection:text-white">
              El software que acompaña al odontólogo independiente en cada etapa de su crecimiento.
            </h1>

            {/* Subtitle - Reduced max-w for better phrasing rhythm */}
            <p className="text-lg sm:text-xl font-normal text-text leading-relaxed max-w-lg mb-12">
              Agenda citas, administra expedientes, documenta tratamientos y da seguimiento a tus pacientes desde una sola plataforma. Menos administración. Más odontología.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <a
                href="#contacto"
                className="group relative w-full sm:w-auto px-8 py-4 rounded-xl bg-primary text-white font-semibold text-base text-center shadow-md shadow-primary/10 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-0.5 overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10">Solicitar demostración</span>
              </a>
              <a
                href="#solucion"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white border border-slate-200 text-primary font-semibold text-base text-center hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm"
              >
                Ver funciones
              </a>
            </div>
          </div>

          {/* Right Visual Column (Dashboard Mockup) */}
          <div className="lg:col-span-6 flex items-center justify-center w-full">
            <div className="relative w-full max-w-lg aspect-square sm:aspect-[4/3] lg:aspect-square flex items-center justify-center p-2">
              
              {/* Decorative Glow backdrop */}
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/25 to-primary/15 rounded-full blur-[80px] opacity-70 scale-95 pointer-events-none" />

              {/* Main Dashboard Frame - Premium glassmorphism dark theme base */}
              <div className="relative w-full h-full bg-slate-900/10 border border-slate-200/60 rounded-[32px] p-6 shadow-[0_32px_64px_-12px_rgba(15,23,42,0.08)] backdrop-blur-md overflow-hidden flex flex-col justify-between">
                
                {/* Header of Mockup */}
                <div className="flex items-center justify-between border-b border-slate-200/50 pb-4 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-100" />
                  </div>
                  <div className="text-[10px] sm:text-xs font-semibold text-slate-400 px-3 py-1 rounded-md bg-slate-100/60 border border-slate-200/40">
                    madent.app/dashboard
                  </div>
                  <div className="w-6" />
                </div>

                {/* Dashboard Grid inside Mockup */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
                  
                  {/* Card 1: Próxima Cita - float-slow */}
                  <div className="p-4 rounded-2xl bg-white border border-slate-100/80 shadow-[0_8px_30px_rgb(0,0,0,0.02)] flex flex-col justify-between transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_16px_40px_rgb(0,0,0,0.05)] animate-float-slow">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-[10px] font-bold text-accent uppercase tracking-wider">Próxima cita</span>
                      <span className="text-[10px] font-bold text-primary px-2 py-0.5 rounded-md bg-primary/5">10:00 AM</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-primary mb-0.5">Carlos Mendoza</h4>
                      <p className="text-xs text-text">Limpieza dental integral</p>
                    </div>
                    <div className="mt-4 pt-2 border-t border-slate-50 flex items-center gap-1.5 text-[10px] text-text font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Confirmada vía WhatsApp
                    </div>
                  </div>

                  {/* Card 2: Paciente Nuevo - float-delayed */}
                  <div className="p-4 rounded-2xl bg-white border border-slate-100/80 shadow-[0_8px_30px_rgb(0,0,0,0.02)] flex flex-col justify-between transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_16px_40px_rgb(0,0,0,0.05)] animate-float-delayed">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-[10px] font-bold text-primary uppercase tracking-wider opacity-60">Paciente nuevo</span>
                      <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center font-bold text-accent text-xs">
                        SR
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-primary">Sofía Ruiz</h4>
                        <p className="text-[10px] text-text">Registrada hace 5 min</p>
                      </div>
                    </div>
                    <div className="mt-4 text-[10px] font-semibold text-accent">
                      Ficha de registro completada
                    </div>
                  </div>

                  {/* Card 3: Presupuesto Aprobado - float-delayed */}
                  <div className="p-4 rounded-2xl bg-white border border-slate-100/80 shadow-[0_8px_30px_rgb(0,0,0,0.02)] flex flex-col justify-between transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_16px_40px_rgb(0,0,0,0.05)] animate-float-delayed">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-[10px] font-bold text-primary uppercase tracking-wider opacity-60">Finanzas</span>
                      <span className="text-[10px] font-bold text-emerald-600 px-2 py-0.5 rounded-md bg-emerald-50 border border-emerald-100/50">Aprobado</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-primary mb-0.5">Presupuesto #2049</h4>
                      <p className="text-xs font-semibold text-text">$4,200 MXN</p>
                    </div>
                    <div className="mt-4 pt-2 border-t border-slate-50 text-[10px] text-text flex justify-between font-medium">
                      <span>Ortodoncia</span>
                      <span className="font-semibold text-primary">Enganche recibido</span>
                    </div>
                  </div>

                  {/* Card 4: Expediente clínico Actualizado - float-slow */}
                  <div className="p-4 rounded-2xl bg-white border border-slate-100/80 shadow-[0_8px_30px_rgb(0,0,0,0.02)] flex flex-col justify-between transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_16px_40px_rgb(0,0,0,0.05)] animate-float-slow">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Historial</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-primary mb-0.5">Expediente Clínico</h4>
                      <p className="text-xs text-text">Ortodoncia activa</p>
                    </div>
                    <div className="mt-4 pt-2 border-t border-slate-50 flex items-center justify-between text-[10px] font-medium">
                      <span className="text-text">Alineadores</span>
                      <span className="font-bold text-accent">14 / 14 completados</span>
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
