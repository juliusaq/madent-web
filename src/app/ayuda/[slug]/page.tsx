import React from 'react';
import Header from '@/sections/Header';
import Footer from '@/sections/Footer';
import Link from 'next/link';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function HelpArticlePage({ params }: PageProps) {
  const { slug } = await params;
  
  // Format slug to user-friendly title
  const formattedTitle = slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-x-hidden bg-[#FAFAFA] font-sans antialiased text-[#64748B]">
      
      {/* Navigation Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 py-24 sm:py-32 flex flex-col items-center justify-center">
        <div className="max-w-xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center">
          
          <span className="text-xs font-bold text-accent uppercase tracking-widest px-3 py-1 rounded-full bg-accent/10 border border-accent/15 mb-6">
            Guía de Ayuda
          </span>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight leading-tight mb-4">
            {formattedTitle}
          </h1>

          <p className="text-text text-sm sm:text-base leading-relaxed mb-10">
            Este tutorial se encuentra en preparación. Muy pronto podrás consultar la guía detallada de <strong>{formattedTitle}</strong> para configurar y optimizar el uso de MADENT en tu consultorio.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <Link
              href="/ayuda"
              className="px-6 py-3 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-accent transition-colors text-center shadow-md shadow-primary/10"
            >
              Volver al Centro de Ayuda
            </Link>
            <Link
              href="/demo"
              className="px-6 py-3 rounded-xl bg-white border border-slate-200 text-primary font-semibold text-sm hover:bg-slate-50 transition-colors text-center shadow-sm"
            >
              Probar en la Demo
            </Link>
          </div>

        </div>
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}
