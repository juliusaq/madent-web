import React from 'react';
import Header from '@/sections/Header';
import Hero from '@/sections/Hero';
import ProblemSection from '@/sections/ProblemSection';
import SolutionSection from '@/sections/SolutionSection';
import BenefitsSection from '@/sections/BenefitsSection';
import HowItWorksSection from '@/sections/HowItWorksSection';
import EmotionalSection from '@/sections/EmotionalSection';
import FinalCTASection from '@/sections/FinalCTASection';
import Footer from '@/sections/Footer';

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-x-hidden bg-[#FAFAFA] font-sans antialiased text-[#64748B]">
      
      {/* 1. Header Navigation */}
      <Header />

      {/* Main Body */}
      <main className="flex-1 flex flex-col">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Problem Section */}
        <ProblemSection />

        {/* 4. Solution Section */}
        <SolutionSection />

        {/* 5. Benefits Section */}
        <BenefitsSection />

        {/* 6. How It Works Section */}
        <HowItWorksSection />

        {/* 7. Emotional Section */}
        <EmotionalSection />

        {/* 8. Final CTA Section */}
        <FinalCTASection />
      </main>

      {/* 9. Footer Section */}
      <Footer />

    </div>
  );
}
