'use client';

import React, { useState } from 'react';

interface ProductScreenshotProps {
  src: string;
  alt: string;
  title: string;
  fallback?: React.ReactNode;
  hasRealScreenshots?: boolean;
}

export default function ProductScreenshot({
  src,
  alt,
  title,
  fallback,
  hasRealScreenshots = false,
}: ProductScreenshotProps) {
  const [hasError, setHasError] = useState(false);

  // If real screenshots are disabled or the image failed to load, render the CSS mockup fallback
  if (!hasRealScreenshots || hasError) {
    return <>{fallback}</>;
  }

  return (
    <div className="relative w-full h-full bg-white border border-slate-200/80 rounded-3xl p-2 shadow-[0_20px_50px_rgba(15,23,42,0.06)] overflow-hidden transition-all duration-300 hover:border-slate-300 flex items-center justify-center">
      <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 flex items-center justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          title={title}
          className="w-full h-full object-cover"
          onError={() => setHasError(true)}
        />
      </div>
    </div>
  );
}
