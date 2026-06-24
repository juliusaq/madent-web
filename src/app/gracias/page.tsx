import React from 'react';
import type { Metadata } from 'next';
import Header from '@/sections/Header';
import Footer from '@/sections/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Gracias por tu interés | MADENT',
  description: 'Hemos recibido tu solicitud de demostración. Nos pondremos en contacto a la brevedad.',
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: '/gracias',
  },
};

export default function GraciasPage() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-x-hidden bg-[#FAFAFA] font-sans antialiased text-[#64748B]">
      
      {/* Navigation Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 py-24 sm:py-32 flex flex-col items-center justify-center">
        <div className="max-w-xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center">
          
          {/* Success Icon */}
          <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-8 border border-emerald-500/15">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight leading-tight mb-4">
            Gracias por tu interés
          </h1>

          <p className="text-text text-sm sm:text-base leading-relaxed mb-10">
            Hemos recibido tu solicitud. Nos pondremos en contacto contigo para agendar una demostración personalizada y mostrarte cómo MADENT puede ayudarte a trabajar con más orden.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <Link
              href="/"
              className="px-6 py-3 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-accent transition-colors text-center shadow-md shadow-primary/10"
            >
              Inicio
            </Link>
            <Link
              href="/funciones"
              className="px-6 py-3 rounded-xl bg-white border border-slate-200 text-primary font-semibold text-sm hover:bg-slate-50 transition-colors text-center shadow-sm"
            >
              Funciones
            </Link>
          </div>

        </div>
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}
