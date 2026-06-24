import React from 'react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <span className="h-9 w-9 rounded-xl bg-primary flex items-center justify-center font-bold text-white text-base shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform duration-300">
            M
          </span>
          <span className="text-xl font-extrabold text-primary tracking-tight">
            MADENT
          </span>
        </a>

        {/* Navigation Links - Hidden on Mobile */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-text">
          <a href="#problema" className="hover:text-primary transition-colors duration-200">
            El Problema
          </a>
          <a href="#solucion" className="hover:text-primary transition-colors duration-200">
            Módulos
          </a>
          <a href="#beneficios" className="hover:text-primary transition-colors duration-200">
            Beneficios
          </a>
          <a href="#como-funciona" className="hover:text-primary transition-colors duration-200">
            Cómo funciona
          </a>
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-4">
          <a 
            href="#contacto" 
            className="px-5 py-2.5 rounded-lg bg-primary text-white font-medium text-sm hover:bg-accent hover:shadow-md hover:shadow-accent/15 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Solicitar demo
          </a>
        </div>
      </div>
    </header>
  );
}
