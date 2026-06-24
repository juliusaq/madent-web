import React from 'react';

export default function PricingFAQ() {
  const faqs = [
    {
      question: "¿Existe permanencia?",
      answer: "No, no hay plazos forzosos. MADENT funciona mediante una suscripción mensual flexible que puedes cancelar o modificar en cualquier momento sin penalizaciones."
    },
    {
      question: "¿Puedo comenzar con un solo doctor?",
      answer: "Sí. El Plan Esencial está pensado precisamente para odontólogos independientes. Tienes acceso completo a todas las funciones clínicas y administrativas por una tarifa mensual fija."
    },
    {
      question: "¿Puedo cambiar de plan más adelante?",
      answer: "Totalmente. Si expandes tu consultorio, contratas asistentes o incorporas a más odontólogos asociados, puedes migrar al Plan Crecimiento o Clínica de manera inmediata y sin perder tus datos."
    },
    {
      question: "¿La implementación tiene costo?",
      answer: "La demostración, la configuración inicial y el onboarding básico de uso son 100% gratuitos. Si requieres una migración compleja de pacientes desde otros sistemas o formatos, nuestro equipo te ayudará a realizarlo sin costo adicional."
    },
    {
      question: "¿Incluyen soporte?",
      answer: "Sí. Todos nuestros planes incluyen soporte técnico continuo por correo electrónico y chat de asistencia para asegurar que tu consultorio opere todos los días con total orden y tranquilidad."
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-white relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-3">
            Preguntas Frecuentes
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight leading-tight">
            Preguntas frecuentes sobre nuestros planes
          </h2>
        </div>

        {/* FAQs Grid Layout - Answers fully visible */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 max-w-5xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="flex flex-col">
              <h3 className="text-lg font-bold text-primary mb-3 flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                {faq.question}
              </h3>
              <p className="text-text text-sm sm:text-base leading-relaxed pl-4 border-l border-slate-100">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
