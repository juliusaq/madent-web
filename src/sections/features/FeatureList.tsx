import React from 'react';
import ProductScreenshot from '@/components/ProductScreenshot';

export default function FeatureList() {
  const hasRealScreenshots = false;
  const features = [
    {
      id: "agenda",
      badge: "Módulo 01",
      title: "Agenda inteligente para trabajar con más orden.",
      text: "Organiza citas, visualiza tu día y reduce olvidos con una agenda diseñada para el flujo real de un consultorio dental.",
      benefits: [
        "Control diario de citas",
        "Mejor organización del tiempo",
        "Menos mensajes perdidos",
        "Vista clara de pacientes y tratamientos"
      ],
      mockup: (
        <div className="relative w-full h-full bg-[#0F172A] border border-[#1E293B] rounded-3xl p-5 shadow-[0_20px_50px_rgba(15,23,42,0.08)] overflow-hidden flex flex-col justify-between">
          <div className="flex justify-between items-center border-b border-[#1E293B] pb-3 mb-4">
            <span className="text-[10px] font-bold text-accent uppercase tracking-widest">Hoy — Horarios</span>
            <span className="text-[10px] text-slate-400">Dr. Carlos Mendoza</span>
          </div>
          <div className="flex flex-col gap-3 flex-grow">
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex justify-between items-center">
              <div>
                <span className="text-[10px] font-bold text-slate-500">09:00 - 10:00</span>
                <h5 className="text-xs font-bold text-white">Guillermo Ortíz</h5>
                <p className="text-[9px] text-[#14B8A6]">Profilaxis</p>
              </div>
              <span className="text-[9px] font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">Confirmado</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex justify-between items-center">
              <div>
                <span className="text-[10px] font-bold text-slate-500">10:30 - 11:30</span>
                <h5 className="text-xs font-bold text-white">Diana Ramos</h5>
                <p className="text-[9px] text-accent">Resina Estética</p>
              </div>
              <span className="text-[9px] font-bold text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">En sala</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "expedientes",
      badge: "Módulo 02",
      title: "Expedientes clínicos completos y siempre disponibles.",
      text: "Centraliza la información de tus pacientes, antecedentes, evolución, fotografías y documentos en un solo lugar.",
      benefits: [
        "Información clínica organizada",
        "Historial de tratamientos",
        "Documentación por paciente",
        "Acceso rápido y seguro"
      ],
      mockup: (
        <div className="relative w-full h-full bg-[#0F172A] border border-[#1E293B] rounded-3xl p-5 shadow-[0_20px_50px_rgba(15,23,42,0.08)] overflow-hidden flex flex-col justify-between">
          <div className="flex items-center gap-3 border-b border-[#1E293B] pb-4 mb-4">
            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center font-bold text-accent text-sm">DR</div>
            <div>
              <h4 className="text-sm font-bold text-white">Diana Ramos</h4>
              <p className="text-[10px] text-slate-500">Expediente #1092 — Paciente Activo</p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-slate-300">
              <span className="text-[9px] text-slate-500 block uppercase tracking-wider font-semibold">Antecedentes Médicos</span>
              <p className="font-bold text-red-500 mt-1">Hipertensión bajo control. Alergia a Sulfas.</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-[10px] text-slate-400">
                <span className="text-slate-500 block text-[8px] uppercase font-semibold">Última Visita</span>
                <span className="text-white font-bold block mt-1">22 Jun 2026</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-[10px] text-slate-400">
                <span className="text-slate-500 block text-[8px] uppercase font-semibold">Tratamiento Activo</span>
                <span className="text-accent font-bold block mt-1">Endodoncia #36</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "odontograma",
      badge: "Módulo 03",
      title: "Odontograma digital para documentar con claridad.",
      text: "Registra diagnósticos, tratamientos y evolución de manera visual, clara y profesional.",
      benefits: [
        "Registro visual",
        "Better comunicación con pacientes",
        "Seguimiento de tratamientos",
        "Documentación profesional"
      ],
      mockup: (
        <div className="relative w-full h-full bg-[#0F172A] border border-[#1E293B] rounded-3xl p-5 shadow-[0_20px_50px_rgba(15,23,42,0.08)] overflow-hidden flex flex-col justify-between">
          <div className="flex justify-between items-center border-b border-[#1E293B] pb-3 mb-4">
            <span className="text-[10px] font-bold text-accent uppercase tracking-widest">Odontograma Interactivo</span>
            <span className="text-[9px] text-slate-400">Cuadrante superior</span>
          </div>
          {/* Teeth Simulation grid */}
          <div className="grid grid-cols-8 gap-1.5 flex-grow items-center justify-center p-2">
            {[18, 17, 16, 15, 14, 13, 12, 11].map((tooth, idx) => {
              const hasTreatment = tooth === 16 || tooth === 14;
              return (
                <div key={idx} className="flex flex-col items-center gap-1.5">
                  <span className="text-[8px] text-slate-500 font-bold">{tooth}</span>
                  <div className={`w-8 h-10 rounded-md border flex items-center justify-center font-bold text-xs ${hasTreatment ? 'bg-accent/20 border-accent text-accent' : 'bg-slate-900 border-slate-800 text-slate-500'}`}>
                    U
                  </div>
                  <span className={`w-1.5 h-1.5 rounded-full ${hasTreatment ? 'bg-accent animate-pulse' : 'bg-transparent'}`} />
                </div>
              );
            })}
          </div>
          <div className="mt-2 text-[9px] text-slate-400 border-t border-[#1E293B]/40 pt-2 flex justify-between">
            <span>Verde: Pendiente</span>
            <span>Rojo: Daño detectado</span>
          </div>
        </div>
      )
    },
    {
      id: "presupuestos",
      badge: "Módulo 04",
      title: "Presupuestos claros para pacientes mejor informados.",
      text: "Crea propuestas de tratamiento profesionales y fáciles de entender para mejorar la aceptación de tus pacientes.",
      benefits: [
        "Propuestas claras",
        "Mayor profesionalismo",
        "Mejor seguimiento económico",
        "Historial de presupuestos"
      ],
      mockup: (
        <div className="relative w-full h-full bg-[#0F172A] border border-[#1E293B] rounded-3xl p-5 shadow-[0_20px_50px_rgba(15,23,42,0.08)] overflow-hidden flex flex-col justify-between">
          <div className="flex justify-between items-center border-b border-[#1E293B] pb-3 mb-4">
            <span className="text-[10px] font-bold text-[#14B8A6] uppercase tracking-widest">Presupuesto #2049</span>
            <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/25">Aprobado</span>
          </div>
          <div className="flex flex-col gap-2.5 flex-grow mt-2 text-[11px]">
            <div className="flex justify-between text-slate-400 border-b border-[#1E293B]/20 pb-1.5">
              <span>Endodoncia dental #36</span>
              <span className="text-white font-bold">$1,800.00</span>
            </div>
            <div className="flex justify-between text-slate-400 border-b border-[#1E293B]/20 pb-1.5">
              <span>Corona de zirconio #36</span>
              <span className="text-white font-bold">$4,500.00</span>
            </div>
            <div className="flex justify-between text-slate-400 border-b border-[#1E293B]/20 pb-1.5">
              <span>Profilaxis ultrasónica</span>
              <span className="text-white font-bold">$600.00</span>
            </div>
            <div className="flex justify-between text-white font-bold pt-2 text-sm">
              <span>Total</span>
              <span className="text-accent">$6,900.00 MXN</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "portal",
      badge: "Módulo 05",
      title: "Una experiencia más profesional para tus pacientes.",
      text: "Ofrece a tus pacientes una experiencia moderna, organizada y cercana desde el primer contacto.",
      benefits: [
        "Mejor experiencia del paciente",
        "Información centralizada",
        "Comunicación más clara",
        "Imagen más profesional"
      ],
      mockup: (
        <div className="relative w-full h-full bg-[#0F172A] border border-[#1E293B] rounded-3xl p-5 shadow-[0_20px_50px_rgba(15,23,42,0.08)] overflow-hidden flex flex-col justify-between">
          <div className="flex justify-between items-center border-b border-[#1E293B] pb-3 mb-4">
            <span className="text-[10px] font-bold text-accent uppercase tracking-widest">Portal Paciente</span>
            <span className="text-[9px] text-slate-500">Mi Salud Dental</span>
          </div>
          <div className="flex-grow flex flex-col justify-center gap-3">
            <div className="bg-[#0b0f19] border border-slate-800 p-3 rounded-xl">
              <h6 className="text-[11px] font-bold text-white mb-1">Tu próxima cita:</h6>
              <p className="text-[10px] text-slate-400 font-medium">Miércoles 24 Jun — 10:00 AM</p>
              <p className="text-[9px] text-accent mt-0.5">Indicación: Ayuno de 2 horas</p>
            </div>
            <div className="flex items-center justify-center">
              <button className="px-4 py-2 rounded-lg bg-accent text-white font-bold text-[10px] shadow hover:bg-accent/90 transition-colors">
                Confirmar asistencia
              </button>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "recetas",
      badge: "Módulo 06",
      title: "Recetas y documentos listos en menos tiempo.",
      text: "Genera documentos clínicos de forma rápida, ordenada y con la información de tu consultorio.",
      benefits: [
        "Ahorro de tiempo",
        "Documentos consistentes",
        "Mejor presentación",
        "Menos trabajo repetitivo"
      ],
      mockup: (
        <div className="relative w-full h-full bg-[#0F172A] border border-[#1E293B] rounded-3xl p-5 shadow-[0_20px_50px_rgba(15,23,42,0.08)] overflow-hidden flex flex-col justify-between">
          <div className="border-b border-[#1E293B] pb-3 mb-3 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="w-5 h-5 rounded bg-accent flex items-center justify-center font-bold text-white text-[9px]">M</span>
              <span className="text-[9px] font-bold text-white uppercase tracking-wider">Madent Dental Clinic</span>
            </div>
            <span className="text-[8px] text-slate-500">Folio: #R-1029</span>
          </div>
          <div className="flex-grow flex flex-col justify-between py-1.5 text-[10px] text-slate-400">
            <div className="bg-[#0b0f19] p-3 rounded-xl border border-slate-800/80">
              <span className="font-bold text-white block mb-1">Rp:</span>
              <p className="leading-relaxed">1. Amoxicilina 500mg — 1 tableta cada 8 horas por 7 días.</p>
              <p className="leading-relaxed mt-1">2. Ibuprofeno 400mg — 1 tableta cada 6 horas por 3 días.</p>
            </div>
          </div>
          <div className="mt-2 pt-2 border-t border-[#1E293B]/40 flex justify-between items-center text-[8px] text-slate-500">
            <span>Dr. Carlos Mendoza</span>
            <span className="font-bold text-[#14B8A6]">Firma Digitalizada ✓</span>
          </div>
        </div>
      )
    },
    {
      id: "cedulas",
      badge: "Módulo 07",
      title: "Cédulas profesionales organizadas y disponibles.",
      text: "Mantén la información profesional de tu equipo organizada para respaldar documentos, recetas y atención clínica.",
      benefits: [
        "Información profesional centralizada",
        "Documentación más confiable",
        "Soporte para equipo clínico",
        "Mayor orden administrativo"
      ],
      mockup: (
        <div className="relative w-full h-full bg-[#0F172A] border border-[#1E293B] rounded-3xl p-5 shadow-[0_20px_50px_rgba(15,23,42,0.08)] overflow-hidden flex flex-col justify-between">
          <div className="flex justify-between items-center border-b border-[#1E293B] pb-3 mb-4">
            <span className="text-[10px] font-bold text-accent uppercase tracking-widest">Validación de Cédula</span>
            <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/25">Verificada</span>
          </div>
          <div className="flex items-center gap-3.5 mb-4">
            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center font-bold text-white text-xs">CM</div>
            <div>
              <h5 className="text-xs font-bold text-white">Dr. Carlos Mendoza</h5>
              <p className="text-[10px] text-slate-400">Odontólogo Generalista</p>
            </div>
          </div>
          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-[10px] text-slate-400">
            <div className="flex justify-between mb-1">
              <span>Cédula Profesional:</span>
              <span className="font-bold text-white">#9876543-D</span>
            </div>
            <div className="flex justify-between">
              <span>Institución:</span>
              <span className="font-bold text-white">UNAM</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "reportes",
      badge: "Módulo 08",
      title: "Control claro sobre tu práctica.",
      text: "Visualiza información clave de tu consultorio para tomar mejores decisiones y crecer con más tranquilidad.",
      benefits: [
        "Visión general del consultorio",
        "Indicadores clave",
        "Mejor toma de decisiones",
        "Crecimiento con orden"
      ],
      mockup: (
        <div className="relative w-full h-full bg-[#0F172A] border border-[#1E293B] rounded-3xl p-5 shadow-[0_20px_50px_rgba(15,23,42,0.08)] overflow-hidden flex flex-col justify-between">
          <div className="flex justify-between items-center border-b border-[#1E293B] pb-3 mb-4">
            <span className="text-[10px] font-bold text-accent uppercase tracking-widest">Métricas Mensuales</span>
            <span className="text-[10px] text-emerald-400">+18% vs mes ant.</span>
          </div>
          {/* Custom SVG Charts */}
          <div className="flex-grow flex items-end justify-between gap-3 px-4 h-24 mt-2">
            <div className="flex flex-col items-center gap-1.5 w-full">
              <div className="w-full bg-slate-800 rounded-md h-12" />
              <span className="text-[8px] text-slate-500 font-bold">Abr</span>
            </div>
            <div className="flex flex-col items-center gap-1.5 w-full">
              <div className="w-full bg-[#1E293B] rounded-md h-16" />
              <span className="text-[8px] text-slate-500 font-bold">May</span>
            </div>
            <div className="flex flex-col items-center gap-1.5 w-full">
              <div className="w-full bg-accent rounded-md h-20 animate-pulse" />
              <span className="text-[8px] text-slate-500 font-bold">Jun</span>
            </div>
          </div>
          <div className="mt-4 pt-2 border-t border-[#1E293B]/40 flex justify-between text-[10px] text-slate-400 font-medium">
            <span>Ingresos Totales:</span>
            <span className="font-bold text-white">$45,200 MXN</span>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="lista-funciones" className="py-24 sm:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Layout list container */}
        <div className="flex flex-col gap-32 sm:gap-40">
          {features.map((feature, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div 
                key={feature.id}
                id={feature.id}
                className={`flex flex-col md:flex-row items-center gap-12 lg:gap-20 ${isEven ? '' : 'md:flex-row-reverse'}`}
              >
                {/* Text Content Column */}
                <div className="w-full md:w-1/2 flex flex-col items-start text-left">
                  {/* Badge */}
                  <span className="text-xs font-bold text-accent uppercase tracking-widest px-3 py-1 rounded-full bg-accent/10 border border-accent/15 mb-6">
                    {feature.badge}
                  </span>
                  
                  {/* Title */}
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight mb-6 leading-tight">
                    {feature.title}
                  </h2>
                  
                  {/* Text description */}
                  <p className="text-text text-base sm:text-lg leading-relaxed mb-8">
                    {feature.text}
                  </p>

                  {/* Bullet list of benefits */}
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5 w-full">
                    {feature.benefits.map((benefit, bIdx) => (
                      <li key={bIdx} className="flex items-center gap-2.5 text-sm text-primary font-medium">
                        <svg className="w-4.5 h-4.5 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Mockup Column */}
                <div className="w-full md:w-1/2 flex items-center justify-center">
                  <div className="w-full max-w-md aspect-[4/3] relative">
                    {/* Visual box wrapper */}
                    <ProductScreenshot
                      src={`/screenshots/${feature.id}.webp`}
                      alt={feature.title}
                      title={feature.title}
                      fallback={feature.mockup}
                      hasRealScreenshots={hasRealScreenshots}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
