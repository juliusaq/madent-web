import React from 'react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-24 sm:pt-32 sm:pb-36 bg-[#FAFAFA]">
      {/* Abstract Background Blobs */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl translate-y-1/3 pointer-events-none" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 flex flex-col text-left">
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-accent/10 border border-accent/25 text-xs font-semibold text-accent mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Diseñado para consultorios independientes
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-primary leading-[1.1] mb-6">
              El software que acompaña al odontólogo independiente en cada etapa de su crecimiento.
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl font-normal text-text leading-relaxed max-w-xl mb-10">
              Agenda citas, administra expedientes, documenta tratamientos y da seguimiento a tus pacientes desde una sola plataforma. Menos administración. Más odontología.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="#contacto"
                className="group relative w-full sm:w-auto px-8 py-4 rounded-xl bg-primary text-white font-semibold text-base text-center shadow-lg shadow-primary/10 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-0.5 overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
          <div className="lg:col-span-6 flex items-center justify-center">
            <div className="relative w-full max-w-lg aspect-square sm:aspect-[4/3] lg:aspect-square flex items-center justify-center">
              
              {/* Decorative Glow back drop */}
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-primary/20 rounded-full blur-2xl opacity-60 scale-95 pointer-events-none" />

              {/* Main Dashboard Frame */}
              <div className="relative w-full h-full bg-slate-900/5 border border-slate-200/50 rounded-3xl p-6 shadow-xl backdrop-blur-sm overflow-hidden flex flex-col justify-between">
                
                {/* Header of Mockup */}
                <div className="flex items-center justify-between border-b border-slate-200/40 pb-4 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-400" />
                    <span className="w-3 h-3 rounded-full bg-yellow-400" />
                    <span className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="text-[10px] sm:text-xs font-semibold text-slate-400 px-3 py-1 rounded bg-slate-100/50 border border-slate-200/30">
                    madent.app/dashboard
                  </div>
                  <div className="w-6" />
                </div>

                {/* Dashboard Grid inside Mockup */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
                  
                  {/* Card 1: Próxima Cita */}
                  <div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-sm flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] hover:shadow-md">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-[10px] font-bold text-accent uppercase tracking-wider">Próxima cita</span>
                      <span className="text-[10px] font-semibold text-primary px-2 py-0.5 rounded bg-primary/5">10:00 AM</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-primary mb-0.5">Carlos Mendoza</h4>
                      <p className="text-xs text-text">Limpieza dental integral</p>
                    </div>
                    <div className="mt-3 pt-2 border-t border-slate-50 flex items-center gap-1.5 text-[10px] text-text">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      Confirmada vía WhatsApp
                    </div>
                  </div>

                  {/* Card 2: Paciente Nuevo */}
                  <div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-sm flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] hover:shadow-md">
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
                    <div className="mt-3 text-[10px] font-medium text-accent">
                      Ficha de registro completada
                    </div>
                  </div>

                  {/* Card 3: Presupuesto Aprobado */}
                  <div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-sm flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] hover:shadow-md">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-[10px] font-bold text-primary uppercase tracking-wider opacity-60">Finanzas</span>
                      <span className="text-[10px] font-semibold text-emerald-600 px-2 py-0.5 rounded bg-emerald-50 border border-emerald-100">Aprobado</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-primary mb-0.5">Presupuesto #2049</h4>
                      <p className="text-xs font-semibold text-text">$4,200 MXN</p>
                    </div>
                    <div className="mt-3 pt-2 border-t border-slate-50 text-[10px] text-text flex justify-between">
                      <span>Ortodoncia</span>
                      <span className="font-semibold text-primary">Enganche recibido</span>
                    </div>
                  </div>

                  {/* Card 4: Expediente clínico Actualizado */}
                  <div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-sm flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] hover:shadow-md">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Historial</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-primary mb-0.5">Expediente Clínico</h4>
                      <p className="text-xs text-text">Ortodoncia activa</p>
                    </div>
                    <div className="mt-3 pt-2 border-t border-slate-50 flex items-center justify-between text-[10px]">
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
