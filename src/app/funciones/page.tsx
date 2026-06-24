import React from 'react';
import type { Metadata } from 'next';
import Header from '@/sections/Header';
import FeaturesHero from '@/sections/features/FeaturesHero';
import FeatureList from '@/sections/features/FeatureList';
import FeaturesCTA from '@/sections/features/FeaturesCTA';
import Footer from '@/sections/Footer';

export const metadata: Metadata = {
  title: 'Funciones | MADENT - Software para odontólogos independientes',
  description: 'Descubre las herramientas de MADENT diseñadas para simplificar la gestión clínica y administrativa: agenda inteligente, expedientes clínicos, odontograma interactivo y más.',
};

export default function FuncionesPage() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-x-hidden bg-[#FAFAFA] font-sans antialiased text-[#64748B]">
      
      {/* Navigation Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Features Hero */}
        <FeaturesHero />

        {/* Feature List (8 modules in alternating layout) */}
        <FeatureList />

        {/* Call to Action Block */}
        <FeaturesCTA />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}
