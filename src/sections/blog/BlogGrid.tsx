import React from 'react';

export default function BlogGrid() {
  const articles = [
    {
      category: "Gestión del consultorio",
      title: "Cómo organizar un consultorio dental desde cero",
      description: "Guía paso a paso sobre flujos de trabajo, administración de citas y cómo establecer orden operativo en tu práctica odontológica.",
      readTime: "5 min de lectura",
      href: "#"
    },
    {
      category: "Tecnología",
      title: "Software dental para odontólogos independientes: qué debe incluir",
      description: "Una lista de las herramientas clave indispensables que debe tener tu sistema para acompañar tu día a día sin complicaciones.",
      readTime: "4 min de lectura",
      href: "#"
    },
    {
      category: "Expedientes clínicos",
      title: "Expediente clínico dental digital: por qué dejar el papel",
      description: "Las ventajas regulatorias, de seguridad y de eficiencia que obtienes al digitalizar el historial médico de tus pacientes.",
      readTime: "6 min de lectura",
      href: "#"
    },
    {
      category: "Expedientes clínicos",
      title: "Odontograma digital: cómo mejora la comunicación con tus pacientes",
      description: "Descubre cómo una representación gráfica e interactiva genera mayor confianza y ayuda a que los pacientes entiendan su diagnóstico.",
      readTime: "4 min de lectura",
      href: "#"
    },
    {
      category: "Marketing dental",
      title: "Cómo atraer pacientes por WhatsApp sin perder el control",
      description: "Estrategias efectivas de comunicación, confirmaciones rápidas y cómo programar recordatorios automáticos sin saturar tu día.",
      readTime: "5 min de lectura",
      href: "#"
    },
    {
      category: "Prevención",
      title: "Prevención dental: cómo dar seguimiento continuo a tus pacientes",
      description: "Métodos para establecer un plan preventivo proactivo, fidelizar a tus pacientes de manera constante y mejorar su salud a largo plazo.",
      readTime: "5 min de lectura",
      href: "#"
    }
  ];

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <article 
              key={idx}
              className="p-6 rounded-[28px] bg-[#FAFAFA]/70 border border-slate-100 flex flex-col justify-between transition-all duration-500 hover:shadow-[0_20px_50px_rgba(15,23,42,0.03)] hover:border-slate-200 hover:bg-white group"
            >
              <div>
                {/* Category Badge */}
                <span className="text-[10px] font-bold text-accent uppercase tracking-widest px-2.5 py-1 rounded-md bg-accent/10 border border-accent/15 mb-5 inline-block">
                  {article.category}
                </span>

                {/* Title */}
                <h3 className="text-lg font-extrabold text-primary mb-3 leading-snug group-hover:text-accent transition-colors duration-300">
                  <a href={article.href}>{article.title}</a>
                </h3>

                {/* Description */}
                <p className="text-text text-sm leading-relaxed mb-6">
                  {article.description}
                </p>
              </div>

              {/* Card Footer */}
              <div className="flex items-center justify-between border-t border-slate-100/80 pt-4 mt-4 text-xs font-semibold">
                <span className="text-slate-400 font-medium">
                  {article.readTime}
                </span>
                <a 
                  href={article.href}
                  className="text-primary hover:text-accent transition-colors flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                >
                  Leer artículo
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
