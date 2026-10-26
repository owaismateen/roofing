"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  title: string;
  city: string;
  roofType: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  title,
  city,
  roofType,
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const width = rect.width;
    const percentage = Math.max(0, Math.min(100, (x / width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <div className="relative rounded-[10px] overflow-hidden bg-gray-900 border border-gray-200 shadow-soft select-none group">
      {/* Slider Container */}
      <div
        ref={containerRef}
        className="relative h-72 sm:h-84 md:h-96 w-full overflow-hidden cursor-ew-resize"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* AFTER Image (Full background) */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={afterImage}
            alt={`${title} - After new roof installation in ${city}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center"
          />
          <div className="absolute top-3 right-3 bg-trust-green text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-[6px] shadow-md z-10 pointer-events-none">
            After: New Roof
          </div>
        </div>

        {/* BEFORE Image (Pixel-perfect clip-path overlay) */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image
            src={beforeImage}
            alt={`${title} - Before roof replacement in ${city}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center"
          />
          <div className="absolute top-3 left-3 bg-slate-dark/90 text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-[6px] shadow-md z-10 pointer-events-none">
            Before: Damaged
          </div>
        </div>

        {/* Vertical Divider Line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.6)] z-20 pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Handle Circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-accent border-2 border-white shadow-xl flex items-center justify-center text-white text-xs font-bold transition-transform group-hover:scale-110">
            <span className="flex items-center text-[10px] tracking-tighter select-none font-sans font-black">
              ◀▶
            </span>
          </div>
        </div>

        {/* Accessibility range input */}
        <input
          type="range"
          min="0"
          max="100"
          value={sliderPosition}
          onChange={(e) => setSliderPosition(Number(e.target.value))}
          aria-label={`Comparison slider for ${title}`}
          className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full z-30"
        />
      </div>

      {/* Card Info Below Slider */}
      <div className="p-4 sm:p-5 bg-white border-t border-gray-100 flex items-center justify-between">
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-accent mb-0.5">
            {city}
          </div>
          <h4 className="font-heading text-lg sm:text-xl font-bold uppercase text-primary leading-tight">
            {roofType}
          </h4>
        </div>
        <div className="text-[11px] font-semibold text-gray-500 bg-surface-light px-3 py-1.5 rounded-[6px] border border-gray-200 shrink-0">
          Slide to compare
        </div>
      </div>
    </div>
  );
}
