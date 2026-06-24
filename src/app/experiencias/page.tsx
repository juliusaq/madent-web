import React from 'react';
import type { Metadata } from 'next';
import Header from '@/sections/Header';
import StoriesHero from '@/sections/stories/StoriesHero';
import FeaturedStory from '@/sections/stories/FeaturedStory';
import TestimonialSection from '@/sections/stories/TestimonialSection';
import PhilosophySection from '@/sections/stories/PhilosophySection';
import StoriesCTA from '@/sections/stories/StoriesCTA';
import Footer from '@/sections/Footer';

export const metadata: Metadata = {
  title: 'Experiencias | MADENT',
  description: 'Conoce cómo odontólogos independientes están organizando y haciendo crecer sus consultorios con MADENT.',
  alternates: {
    canonical: '/experiencias',
  },
};

export default function ExperienciasPage() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-x-hidden bg-[#FAFAFA] font-sans antialiased text-[#64748B]">
      
      {/* Navigation Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        
        {/* Stories Hero */}
        <StoriesHero />

        {/* Featured Story - Smile Health Studio */}
        <FeaturedStory />

        {/* Testimonial Section - Future Testimonials Placeholders */}
        <TestimonialSection />

        {/* Philosophy Section */}
        <PhilosophySection />

        {/* Stories Bottom Call to Action */}
        <StoriesCTA />

      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}
