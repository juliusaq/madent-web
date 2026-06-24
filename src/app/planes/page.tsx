import React from 'react';
import type { Metadata } from 'next';
import Header from '@/sections/Header';
import PricingHero from '@/sections/pricing/PricingHero';
import PricingCards from '@/sections/pricing/PricingCards';
import PricingTable from '@/sections/pricing/PricingTable';
import PricingFAQ from '@/sections/pricing/PricingFAQ';
import PricingCTA from '@/sections/pricing/PricingCTA';
import Footer from '@/sections/Footer';

export const metadata: Metadata = {
  title: 'Planes | MADENT - Software para Odontólogos Independientes',
  description: 'Conoce los planes de MADENT y descubre cómo organizar tu consultorio con una plataforma diseñada para odontólogos independientes.',
};

export default function PlanesPage() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-x-hidden bg-[#FAFAFA] font-sans antialiased text-[#64748B]">
      
      {/* Navigation Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Pricing Hero */}
        <PricingHero />

        {/* Pricing Cards */}
        <PricingCards />

        {/* Detail Comparison Table */}
        <PricingTable />

        {/* Frequently Asked Questions */}
        <PricingFAQ />

        {/* Pricing Bottom CTA */}
        <PricingCTA />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}
