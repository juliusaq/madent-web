import React from 'react';

export default function DemoFAQ() {
  const faqs = [
    {
      question: "¿Necesito instalar algo?",
      answer: "No. MADENT es una plataforma 100% basada en la web. Puedes acceder de manera segura desde cualquier dispositivo (computadora, tablet o celular) con conexión a internet, sin necesidad de descargas, actualizaciones manuales ni instalaciones complejas."
    },
    {
      question: "¿Puedo migrar la información de mis pacientes actuales?",
      answer: "Sí, por supuesto. Te ayudamos a importar de forma segura y confidencial tus datos de pacientes, fichas básicas o agendas previas desde archivos de Excel u otros formatos. Nuestro equipo te acompaña en el onboarding sin costo adicional."
    },
    {
      question: "¿MADENT funciona para consultorios pequeños o dentistas independientes?",
      answer: "Totalmente. MADENT está diseñado específicamente pensando en odontólogos independientes y clínicas pequeñas que buscan simplificar su día a día. Queremos quitarte carga administrativa para que puedas concentrarte en tus pacientes."
    },
    {
      question: "¿La demostración tiene algún costo?",
      answer: "Ninguno. La demostración es 100% gratuita, personalizada y sin ningún tipo de compromiso. Nuestro objetivo es escuchar tus necesidades, mostrarte cómo MADENT puede resolverlas y responder a todas tus preguntas."
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
            Preguntas frecuentes antes de la demo
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
