import React from "react";
import Image from "next/image";
import { MATERIALS } from "@/lib/data";
import { Clock, Check, ArrowRight } from "lucide-react";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";

export default function Materials() {
  return (
    <section className="py-20 lg:py-28 bg-surface-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollAnimationWrapper className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
            <span>Engineering Durability</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-primary">
            Materials Guide
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mt-3 max-w-2xl mx-auto">
            Compare premium roofing materials to match your architectural vision, wind and hail resistance goals, and budget.
          </p>
        </ScrollAnimationWrapper>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MATERIALS.map((mat, index) => (
            <ScrollAnimationWrapper
              key={mat.id}
              delay={index * 0.08}
              className="bg-white rounded-[10px] overflow-hidden border border-gray-200/90 shadow-soft hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
            >
              <div>
                {/* Material Texture Image - Roof texture only, no living things */}
                <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                  <Image
                    src={mat.image}
                    alt={`${mat.name} roofing material texture`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Badge */}
                  <div className="absolute top-3 left-3 bg-primary/90 backdrop-blur-sm text-white px-2.5 py-1 rounded-[6px] text-xs font-bold uppercase tracking-wider">
                    {mat.priceLevel}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-heading text-2xl font-bold uppercase tracking-wide text-primary mb-1">
                    {mat.name}
                  </h3>
                  <p className="text-xs text-gray-500 mb-4 italic">
                    {mat.tagline}
                  </p>

                  {/* Lifespan & Price Range */}
                  <div className="space-y-2 mb-4 p-3 bg-surface-light rounded-[8px] border border-gray-100 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-accent" />
                        <span>Lifespan:</span>
                      </span>
                      <span className="font-bold text-primary">{mat.lifespan}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500">Price Range:</span>
                      <span className="font-bold text-gray-800">{mat.priceRange}</span>
                    </div>
                  </div>

                  {/* Best For */}
                  <div className="text-xs text-gray-600 mb-4">
                    <strong className="text-primary block mb-0.5">Best For:</strong>
                    <span>{mat.bestFor}</span>
                  </div>

                  {/* Feature checklist */}
                  <ul className="space-y-1.5 mb-2 text-xs text-gray-600">
                    {mat.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-trust-green shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Small Request Quote Button */}
              <div className="p-5 pt-0">
                <a
                  href="#quote"
                  className="w-full py-2.5 px-3 rounded-[8px] bg-accent hover:bg-accent-hover text-white text-xs font-bold uppercase tracking-wider shadow-sm flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Request Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
