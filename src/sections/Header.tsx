import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <span className="h-9 w-9 rounded-xl bg-primary flex items-center justify-center font-bold text-white text-base shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform duration-300">
            M
          </span>
          <span className="text-xl font-extrabold text-primary tracking-tight">
            MADENT
          </span>
        </Link>

        {/* Navigation Links - Hidden on Mobile */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8 text-sm font-medium text-text">
          <Link href="/#problema" className="hover:text-primary transition-colors duration-200">
            El Problema
          </Link>
          <Link href="/funciones" className="hover:text-primary transition-colors duration-200">
            Funciones
          </Link>
          <Link href="/#beneficios" className="hover:text-primary transition-colors duration-200">
            Beneficios
          </Link>
          <Link href="/#como-funciona" className="hover:text-primary transition-colors duration-200">
            Cómo funciona
          </Link>
          <Link href="/nosotros" className="hover:text-primary transition-colors duration-200">
            Nosotros
          </Link>
          <Link href="/planes" className="hover:text-primary transition-colors duration-200">
            Planes
          </Link>
          <Link href="/blog" className="hover:text-primary transition-colors duration-200">
            Blog
          </Link>
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-4">
          <Link 
            href="/demo" 
            className="px-5 py-2.5 rounded-lg bg-primary text-white font-medium text-sm hover:bg-accent hover:shadow-md hover:shadow-accent/15 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Solicitar demo
          </Link>
        </div>
      </div>
    </header>
  );
}
