import React from 'react';
import type { Metadata } from 'next';
import Header from '@/sections/Header';
import DemoHero from '@/sections/demo/DemoHero';
import DemoWhatYouWillSee from '@/sections/demo/DemoWhatYouWillSee';
import DemoContactOptions from '@/sections/demo/DemoContactOptions';
import DemoFAQ from '@/sections/demo/DemoFAQ';
import DemoCTA from '@/sections/demo/DemoCTA';
import Footer from '@/sections/Footer';

export const metadata: Metadata = {
  title: 'Demo | MADENT - Software para Odontólogos Independientes',
  description: 'Agenda una demostración de MADENT y descubre cómo organizar tu consultorio dental con agenda, expedientes clínicos, odontograma, presupuestos y portal del paciente.',
  alternates: {
    canonical: '/demo',
  },
};

export default function DemoPage() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-x-hidden bg-[#FAFAFA] font-sans antialiased text-[#64748B]">
      
      {/* Navigation Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Demo Hero */}
        <DemoHero />

        {/* What you will see in the demo (8 key modules) */}
        <DemoWhatYouWillSee />

        {/* Contact/Demo options (WhatsApp, Contact Form, Calendly) */}
        <DemoContactOptions />

        {/* Frequently Asked Questions */}
        <DemoFAQ />

        {/* Final Conversion Call to Action */}
        <DemoCTA />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}
