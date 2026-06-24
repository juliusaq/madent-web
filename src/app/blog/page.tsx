import React from 'react';
import type { Metadata } from 'next';
import Header from '@/sections/Header';
import BlogHero from '@/sections/blog/BlogHero';
import BlogCategories from '@/sections/blog/BlogCategories';
import BlogGrid from '@/sections/blog/BlogGrid';
import BlogNewsletter from '@/sections/blog/BlogNewsletter';
import BlogCTA from '@/sections/blog/BlogCTA';
import Footer from '@/sections/Footer';

export const metadata: Metadata = {
  title: 'Blog | MADENT - Recursos para Odontólogos Independientes',
  description: 'Guías y recursos para odontólogos independientes sobre gestión del consultorio, expedientes clínicos digitales, odontograma, marketing dental y prevención.',
};

export default function BlogPage() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-x-hidden bg-[#FAFAFA] font-sans antialiased text-[#64748B]">
      
      {/* Navigation Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Blog Hero Portada */}
        <BlogHero />

        {/* Blog Categories Filter (Client Interactive Tabs) */}
        <BlogCategories />

        {/* Blog Articles Grid */}
        <BlogGrid />

        {/* Blog Newsletter Form */}
        <BlogNewsletter />

        {/* Blog Bottom CTA */}
        <BlogCTA />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}
