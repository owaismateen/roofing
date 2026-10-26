import React from "react";
import { MapPin, Phone, CheckCircle, Navigation } from "lucide-react";
import { SERVICE_AREAS, COMPANY_INFO } from "@/lib/data";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";

export default function ServiceAreas() {
  return (
    <section className="py-20 lg:py-28 bg-surface-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollAnimationWrapper className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
            <span>Regional Coverage</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-primary">
            Service Areas
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mt-3 max-w-2xl mx-auto">
            Providing prompt 24/7 storm restoration and scheduled roof replacements across the entire Dallas-Fort Worth metro area.
          </p>
        </ScrollAnimationWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Clean Grid of 12 Cities */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5">
              {SERVICE_AREAS.map((city, index) => (
                <ScrollAnimationWrapper
                  key={city}
                  delay={index * 0.04}
                  className="bg-white rounded-[10px] p-4 border border-gray-200/90 shadow-sm hover:border-accent hover:shadow-md transition-all flex items-center gap-3 group"
                >
                  <div className="w-8 h-8 rounded-[6px] bg-surface-light group-hover:bg-accent/10 flex items-center justify-center text-primary group-hover:text-accent shrink-0 transition-colors">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-heading text-lg font-bold uppercase text-primary block leading-tight">
                      {city.split(",")[0]}
                    </span>
                    <span className="text-[11px] font-semibold text-gray-400">
                      {city.split(",")[1]}
                    </span>
                  </div>
                </ScrollAnimationWrapper>
              ))}
            </div>

            {/* Bottom Callout: "Don't see your city? Call us." */}
            <div className="mt-8 p-5 bg-white rounded-[10px] border border-gray-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0">
                  <Navigation className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading text-lg font-bold uppercase text-primary leading-tight">
                    Don&apos;t see your city? Call us.
                  </h4>
                  <p className="text-xs text-gray-600">
                    We routinely service surrounding counties within a 60-mile radius.
                  </p>
                </div>
              </div>

              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[8px] bg-primary hover:bg-primary-hover text-white text-xs font-bold uppercase tracking-wider transition-colors shrink-0"
              >
                <Phone className="w-3.5 h-3.5 text-accent" />
                <span>Call {COMPANY_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean Architectural Vector Map Graphic (No living things) */}
          <ScrollAnimationWrapper
            delay={0.2}
            className="lg:col-span-5 bg-primary rounded-[10px] p-6 sm:p-8 text-white border border-primary-light shadow-xl relative overflow-hidden"
          >
            {/* SVG Metro Coverage Map Graphic */}
            <div className="relative w-full aspect-square max-h-[380px] bg-slate-dark rounded-[8px] border border-gray-700/80 p-4 flex flex-col items-center justify-center overflow-hidden">
              <svg
                viewBox="0 0 400 400"
                className="w-full h-full text-gray-600"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Metroplex coverage map graphic"
              >
                {/* Background coordinate grid lines */}
                <path d="M50 0 V400 M100 0 V400 M150 0 V400 M200 0 V400 M250 0 V400 M300 0 V400 M350 0 V400" stroke="#1E2A35" strokeWidth="1" strokeDasharray="3 3" />
                <path d="M0 50 H400 M0 100 H400 M0 150 H400 M0 200 H400 M0 250 H400 M0 300 H400 M0 350 H400" stroke="#1E2A35" strokeWidth="1" strokeDasharray="3 3" />

                {/* Concentric radar radius rings */}
                <circle cx="200" cy="200" r="160" stroke="#253545" strokeWidth="1.5" strokeDasharray="4 4" />
                <circle cx="200" cy="200" r="110" stroke="#2D4054" strokeWidth="1.5" />
                <circle cx="200" cy="200" r="60" stroke="#364E66" strokeWidth="1.5" />

                {/* Highway arteries schematics */}
                <path d="M200 40 L200 360" stroke="#486585" strokeWidth="2.5" />
                <path d="M40 200 L360 200" stroke="#486585" strokeWidth="2.5" />
                <path d="M70 70 L330 330" stroke="#364E66" strokeWidth="1.5" />
                <path d="M70 330 L330 70" stroke="#364E66" strokeWidth="1.5" />

                {/* Hub location markers - simple geometric dots and labels */}
                {/* DFW Center */}
                <circle cx="200" cy="200" r="8" fill="#F26B21" />
                <circle cx="200" cy="200" r="14" stroke="#F26B21" strokeWidth="2" opacity="0.6" className="animate-ping origin-center" />
                <text x="200" y="180" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold" fontFamily="sans-serif">
                  HQ & DISPATCH
                </text>

                {/* Satellite nodes */}
                <circle cx="260" cy="130" r="5" fill="#2E9E6B" />
                <text x="260" y="120" textAnchor="middle" fill="#A0AEC0" fontSize="10" fontFamily="sans-serif">Plano / Frisco</text>

                <circle cx="120" cy="220" r="5" fill="#2E9E6B" />
                <text x="120" y="240" textAnchor="middle" fill="#A0AEC0" fontSize="10" fontFamily="sans-serif">Fort Worth</text>

                <circle cx="280" cy="250" r="5" fill="#2E9E6B" />
                <text x="280" y="270" textAnchor="middle" fill="#A0AEC0" fontSize="10" fontFamily="sans-serif">Garland / Mesquite</text>

                <circle cx="150" cy="110" r="5" fill="#2E9E6B" />
                <text x="150" y="100" textAnchor="middle" fill="#A0AEC0" fontSize="10" fontFamily="sans-serif">Denton</text>

                <circle cx="170" cy="280" r="5" fill="#2E9E6B" />
                <text x="170" y="300" textAnchor="middle" fill="#A0AEC0" fontSize="10" fontFamily="sans-serif">Arlington</text>
              </svg>

              {/* Legend overlay */}
              <div className="absolute bottom-3 left-3 right-3 bg-primary/90 backdrop-blur-sm p-2 rounded-[6px] border border-gray-700 flex items-center justify-between text-[11px] text-gray-300">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-accent" />
                  <span>Central Dispatch</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-trust-green" />
                  <span>Rapid Response Zone</span>
                </span>
              </div>
            </div>

            <div className="mt-5 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-trust-green">
                <CheckCircle className="w-4 h-4" />
                <span>Guaranteed 24-Hour Inspection Scheduling</span>
              </div>
              <p className="text-xs text-gray-300">
                Our local mobile inspection fleet operates throughout all counties with full drone and digital moisture detection equipment.
              </p>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
}
