import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#FAFAFA] border-t border-slate-100 py-16 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Footer Top Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12 mb-16">
          
          {/* Brand Column (Span 2 on medium screens for balance) */}
          <div className="col-span-2 flex flex-col items-start gap-4">
            <a href="#" className="flex items-center gap-2.5 group">
              <span className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center font-bold text-white text-sm shadow-md group-hover:scale-105 transition-transform duration-300">
                M
              </span>
              <span className="text-lg font-extrabold text-primary tracking-tight">
                MADENT
              </span>
            </a>
            <p className="text-text text-sm leading-relaxed max-w-xs mt-2">
              La plataforma de gestión moderna diseñada específicamente para odontólogos independientes que buscan ordenar y hacer crecer su práctica.
            </p>
          </div>

          {/* Column 1: Producto */}
          <div>
            <h4 className="text-xs font-bold text-primary uppercase tracking-widest mb-4">
              Producto
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-text">
              <li>
                <a href="#solucion" className="hover:text-primary transition-colors">Funciones</a>
              </li>
              <li>
                <a href="#solucion" className="hover:text-primary transition-colors">Agenda</a>
              </li>
              <li>
                <a href="#solucion" className="hover:text-primary transition-colors">Odontograma</a>
              </li>
              <li>
                <span className="text-slate-400 cursor-not-allowed">Precios (Próximamente)</span>
              </li>
            </ul>
          </div>

          {/* Column 2: Empresa */}
          <div>
            <h4 className="text-xs font-bold text-primary uppercase tracking-widest mb-4">
              Empresa
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-text">
              <li>
                <span className="text-slate-400">Sobre nosotros</span>
              </li>
              <li>
                <span className="text-slate-400">Carreras</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Recursos */}
          <div>
            <h4 className="text-xs font-bold text-primary uppercase tracking-widest mb-4">
              Recursos
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-text">
              <li>
                <span className="text-slate-400">Blog</span>
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
        <div className="border-t border-slate-100 pt-8 pb-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-sm text-text">
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <div>
              <span className="font-semibold text-primary block sm:inline mr-1">Contacto:</span>
              <a href="mailto:contacto@madent.com.mx" className="hover:text-primary transition-colors">
                contacto@madent.com.mx
              </a>
            </div>
            <div>
              <span className="font-semibold text-primary block sm:inline mr-1">WhatsApp:</span>
              <span className="text-slate-400 italic">Próximamente</span>
            </div>
          </div>
        </div>

        {/* Footer Bottom (Copyright / Legals) */}
        <div className="border-t border-slate-100 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text">
          <p>&copy; {new Date().getFullYear()} MADENT. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-primary cursor-pointer transition-colors">Términos de servicio</span>
            <span className="hover:text-primary cursor-pointer transition-colors">Política de privacidad</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
