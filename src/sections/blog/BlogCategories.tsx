'use client';

import React, { useState } from 'react';

export default function BlogCategories() {
  const categories = [
    "Todos",
    "Gestión del consultorio",
    "Expedientes clínicos",
    "Marketing dental",
    "Prevención",
    "Tecnología",
    "WhatsApp"
  ];

  const [activeCategory, setActiveCategory] = useState("Todos");

  return (
    <div id="categorias-blog" className="bg-white border-y border-slate-100 py-6 sticky top-16 sm:top-20 z-40 backdrop-blur-md bg-white/95">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Horizontal Category Scroll Container */}
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-1 sm:pb-0 -mx-6 px-6 sm:mx-0 sm:px-0">
          {categories.map((cat, idx) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={idx}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer border shrink-0 ${
                  isActive
                    ? 'bg-primary text-white border-primary shadow-sm shadow-primary/10'
                    : 'bg-[#FAFAFA] text-primary border-slate-200/60 hover:bg-slate-50 hover:border-slate-300'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

      </div>
    </div>
  );
}
