import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#FAFAFA] border-t border-slate-200/50 pt-24 pb-16 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Footer Top Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 lg:gap-16 mb-20">
          
          {/* Brand Column (Spans 2 columns for clean weighting) */}
          <div className="col-span-2 flex flex-col items-start gap-4">
            <a href="#" className="flex items-center gap-2.5 group">
              <span className="h-9 w-9 rounded-xl bg-primary flex items-center justify-center font-bold text-white text-base shadow-lg shadow-primary/10 group-hover:scale-105 transition-transform duration-300">
                M
              </span>
              <span className="text-xl font-extrabold text-primary tracking-tight">
                MADENT
              </span>
            </a>
            <p className="text-text text-sm leading-relaxed max-w-xs mt-3">
              La plataforma de gestión moderna diseñada específicamente para odontólogos independientes que buscan ordenar y hacer crecer su práctica.
            </p>
          </div>

          {/* Column 1: Producto */}
          <div>
            <h4 className="text-[11px] font-bold text-primary uppercase tracking-widest mb-5">
              Producto
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-text font-medium">
              <li>
                <a href="#solucion" className="hover:text-primary transition-colors duration-300">Funciones</a>
              </li>
              <li>
                <a href="#solucion" className="hover:text-primary transition-colors duration-300">Agenda</a>
              </li>
              <li>
                <a href="#solucion" className="hover:text-primary transition-colors duration-300">Odontograma</a>
              </li>
              <li>
                <Link href="/planes" className="hover:text-primary transition-colors duration-300">
                  Planes
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Empresa */}
          <div>
            <h4 className="text-[11px] font-bold text-primary uppercase tracking-widest mb-5">
              Empresa
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-text font-medium">
              <li>
                <Link href="/nosotros" className="hover:text-primary transition-colors duration-300">
                  Sobre nosotros
                </Link>
              </li>
              <li>
                <span className="text-slate-400">Carreras</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Recursos */}
          <div>
            <h4 className="text-[11px] font-bold text-primary uppercase tracking-widest mb-5">
              Recursos
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-text font-medium">
              <li>
                <Link href="/blog" className="hover:text-primary transition-colors duration-300">
                  Blog
                </Link>
              </li>
              <li>
                <span className="text-slate-400">Guías para odontólogos</span>
              </li>
              <li>
                <span className="text-slate-400">Centro de ayuda</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Contact Info Section */}
        <div className="border-t border-slate-200/50 pt-8 pb-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-sm text-text border-b">
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <div>
              <span className="font-semibold text-primary block sm:inline mr-1">Contacto:</span>
              <a href="mailto:contacto@madent.com.mx" className="hover:text-primary transition-colors duration-300">
                contacto@madent.com.mx
              </a>
            </div>
            <div>
              <span className="font-semibold text-primary block sm:inline mr-1">WhatsApp:</span>
              <span className="text-slate-400 italic">Próximamente</span>
            </div>
          </div>
        </div>

        {/* Footer Bottom (Copyright & legal link styling) */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text font-medium">
          <p>&copy; {new Date().getFullYear()} MADENT. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-primary cursor-pointer transition-colors duration-300">Términos de servicio</span>
            <span className="hover:text-primary cursor-pointer transition-colors duration-300">Política de privacidad</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
