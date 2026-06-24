import React from 'react';
import Link from 'next/link';

export default function PricingCards() {
  const plans = [
    {
      name: "Esencial",
      tagline: "Ideal para odontólogos independientes.",
      price: "Desde $799 MXN/mes",
      description: "Todas las herramientas clave para ordenar e impulsar tu consulta profesional de manera individual.",
      features: [
        "Agenda inteligente",
        "Expedientes clínicos",
        "Odontograma",
        "Presupuestos",
        "Recetas y documentos",
        "Cédulas profesionales",
        "Reportes",
        "Soporte estándar"
      ],
      ctaText: "Solicitar demostración",
      href: "/demo",
      popular: true
    },
    {
      name: "Crecimiento",
      tagline: "Ideal para consultorios con varios doctores o en expansión.",
      price: "Personalizado",
      description: "Colaboración integrada y herramientas de control operativo para tu equipo en crecimiento.",
      features: [
        "Todo lo del Plan Esencial +",
        "Acceso multiusuario",
        "Roles y permisos personalizados",
        "Mejor seguimiento operativo",
        "Soporte prioritario"
      ],
      ctaText: "Hablar con nosotros",
      href: "/demo",
      popular: false
    },
    {
      name: "Clínica",
      tagline: "Ideal para clínicas con necesidades específicas.",
      price: "A medida",
      description: "Máxima personalización e implementación guiada de punta a punta para clínicas consolidadas.",
      features: [
        "Configuración personalizada",
        "Implementación acompañada",
        "Capacitación de personal",
        "Soporte especializado dedicado"
      ],
      ctaText: "Solicitar asesoría",
      href: "/demo",
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-white relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative p-8 rounded-[32px] border bg-[#FAFAFA]/70 shadow-[0_4px_25px_rgba(0,0,0,0.003)] flex flex-col justify-between transition-all duration-500 hover:shadow-[0_25px_60px_rgba(15,23,42,0.04)] hover:-translate-y-0.5 group ${
                plan.popular 
                  ? 'border-accent bg-white shadow-[0_20px_50px_rgba(20,184,166,0.04)]' 
                  : 'border-slate-150'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 right-8 -translate-y-1/2 px-3 py-1 rounded-full bg-accent text-white font-bold text-[10px] uppercase tracking-widest">
                  Más popular
                </div>
              )}

              <div>
                {/* Plan Name */}
                <h3 className="text-xl font-extrabold text-primary mb-1">
                  Plan {plan.name}
                </h3>
                {/* Tagline */}
                <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-6">
                  {plan.tagline}
                </p>

                {/* Pricing block */}
                <div className="mb-6 pb-6 border-b border-slate-100/80">
                  <span className="text-2xl sm:text-3xl font-black text-primary tracking-tight">
                    {plan.price}
                  </span>
                  <p className="text-text text-xs mt-2 leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                {/* Features List */}
                <ul className="flex flex-col gap-3.5 mb-8">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm text-primary font-medium">
                      <span className="w-5 h-5 rounded-full bg-slate-900/5 text-accent flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <Link 
                href={plan.href}
                className={`w-full py-4 px-6 rounded-xl font-semibold text-sm text-center transition-all duration-300 transform hover:-translate-y-0.5 ${
                  plan.popular
                    ? 'bg-primary text-white shadow-md shadow-primary/10 hover:bg-accent hover:shadow-lg hover:shadow-accent/20'
                    : 'bg-white border border-slate-200 text-primary hover:bg-slate-50 hover:border-slate-350 shadow-sm'
                }`}
              >
                {plan.ctaText}
              </Link>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
