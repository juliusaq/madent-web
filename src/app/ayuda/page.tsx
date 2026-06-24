import React from 'react';
import type { Metadata } from 'next';
import Header from '@/sections/Header';
import HelpHero from '@/sections/help/HelpHero';
import HelpCategories from '@/sections/help/HelpCategories';
import HelpPopular from '@/sections/help/HelpPopular';
import HelpSupport from '@/sections/help/HelpSupport';
import HelpCTA from '@/sections/help/HelpCTA';
import Footer from '@/sections/Footer';

export const metadata: Metadata = {
  title: 'Centro de Ayuda | MADENT',
  description: 'Guías y respuestas para aprovechar mejor las herramientas de MADENT.',
};

export default function AyudaPage() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-x-hidden bg-[#FAFAFA] font-sans antialiased text-[#64748B]">
      
      {/* Navigation Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Help Hero Portada */}
        <HelpHero />

        {/* Help Categories list (Primary steps, Expedientes, Odontograma...) */}
        <HelpCategories />

        {/* Popular Articles Grid */}
        <HelpPopular />

        {/* Support Grid (WhatsApp, Mail, demo) */}
        <HelpSupport />

        {/* Help Bottom CTA */}
        <HelpCTA />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}
