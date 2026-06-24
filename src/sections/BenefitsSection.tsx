import React from 'react';

export default function BenefitsSection() {
  const benefits = [
    {
      title: "Menos tiempo administrando",
      description: "Automatiza la confirmación de citas y el llenado de recetas. Dedica tus horas a la práctica odontológica y a lo que realmente importa.",
      iconColor: "text-amber-500",
      bgColor: "bg-amber-500/10",
      featured: true,
      svg: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Mayor organización",
      description: "Encuentra el expediente clínico de cualquier paciente, su odontograma e historial de pagos en menos de 5 segundos desde cualquier dispositivo.",
      iconColor: "text-teal-500",
      bgColor: "bg-teal-500/10",
      featured: false,
      svg: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    },
    {
      title: "Imagen más profesional",
      description: "Brinda una experiencia de nivel superior con recordatorios de citas por WhatsApp, recetas en PDF y un portal digital propio.",
      iconColor: "text-blue-500",
      bgColor: "bg-blue-500/10",
      featured: false,
      svg: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      title: "Crece con tranquilidad",
      description: "Ya sea que estés abriendo tu primer consultorio o expandiendo tu práctica, MADENT te proporciona la infraestructura digital para escalar ordenadamente.",
      iconColor: "text-indigo-500",
      bgColor: "bg-indigo-500/10",
      featured: false,
      svg: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    }
  ];

  return (
    <section id="beneficios" className="py-32 sm:py-40 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20 sm:mb-24">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-4">
            El Impacto en tu Práctica
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary tracking-tight leading-[1.1]">
            Más orden para tu consultorio. Más tiempo para tus pacientes.
          </h2>
        </div>

        {/* Benefits Dynamic Grid (Stripe/Linear style) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Featured Card (Spans 2 columns on desktop) */}
          {benefits.filter(b => b.featured).map((benefit, idx) => (
            <div 
              key={idx}
              className="md:col-span-2 p-8 sm:p-12 rounded-[32px] bg-gradient-to-br from-[#FAFAFA] to-[#F1F5F9] border border-slate-100 shadow-[0_4px_30px_rgba(0,0,0,0.01)] flex flex-col justify-between transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(15,23,42,0.05)] hover:border-slate-200 hover:-translate-y-1 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-2xl ${benefit.bgColor} ${benefit.iconColor} flex items-center justify-center mb-8 shadow-sm group-hover:scale-105 transition-transform duration-500`}>
                  {benefit.svg}
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-primary mb-4">
                  {benefit.title}
                </h3>
                <p className="text-text text-lg leading-relaxed max-w-xl">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}

          {/* Regular Cards (Span 1 column on desktop) */}
          {benefits.filter(b => !b.featured).map((benefit, idx) => (
            <div 
              key={idx}
              className="p-8 rounded-[32px] bg-[#FAFAFA]/70 border border-slate-100 shadow-[0_4px_25px_rgba(0,0,0,0.005)] flex flex-col justify-between transition-all duration-500 hover:shadow-[0_24px_50px_rgba(15,23,42,0.04)] hover:border-slate-200 hover:bg-white hover:-translate-y-1 group"
            >
              <div>
                <div className={`w-12 h-12 rounded-xl ${benefit.bgColor} ${benefit.iconColor} flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-500`}>
                  {benefit.svg}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {benefit.title}
                </h3>
                <p className="text-text text-base leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
