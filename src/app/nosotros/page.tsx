import React from 'react';
import type { Metadata } from 'next';
import Header from '@/sections/Header';
import AboutHero from '@/sections/about/AboutHero';
import AboutWhyMADENT from '@/sections/about/AboutWhyMADENT';
import AboutForWhom from '@/sections/about/AboutForWhom';
import AboutBeliefs from '@/sections/about/AboutBeliefs';
import AboutDifferences from '@/sections/about/AboutDifferences';
import AboutVision from '@/sections/about/AboutVision';
import AboutCTA from '@/sections/about/AboutCTA';
import Footer from '@/sections/Footer';

export const metadata: Metadata = {
  title: 'Nosotros | MADENT - Software para Odontólogos Independientes',
  description: 'Conoce por qué existe MADENT, una plataforma creada para ayudar a odontólogos independientes a organizar, administrar y hacer crecer su consultorio dental.',
  alternates: {
    canonical: '/nosotros',
  },
};

export default function NosotrosPage() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-x-hidden bg-[#FAFAFA] font-sans antialiased text-[#64748B]">
      
      {/* Navigation Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* About Hero */}
        <AboutHero />

        {/* Why MADENT exists (Manifesto) */}
        <AboutWhyMADENT />

        {/* For Whom it is designed (Grid) */}
        <AboutForWhom />

        {/* What we believe (Values) */}
        <AboutBeliefs />

        {/* What makes us different */}
        <AboutDifferences />

        {/* Ecosistema Vision */}
        <AboutVision />

        {/* About CTA */}
        <AboutCTA />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}
