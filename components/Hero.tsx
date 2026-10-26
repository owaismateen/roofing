import React from "react";
import Image from "next/image";
import { ShieldCheck, FileText, Award, Phone, ArrowRight } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";
import HeroQuoteForm from "./HeroQuoteForm";

export default function Hero() {
  return (
    <section className="relative bg-primary text-white overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-28">
      {/* Background image - strictly architectural roof only, no people */}
      <div className="absolute inset-0 z-0 opacity-30 mix-blend-luminosity">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
          alt="Architectural roof shingles on residential home"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Dark gradient overlay for contrast */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-primary/95 via-primary/90 to-primary" />

      {/* Architectural subtle angled divider at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-6 bg-surface-light roof-angle-top pointer-events-none z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline, Subheadline, Trust Points & Buttons */}
          <div className="lg:col-span-7 space-y-7">
            {/* Tagline / Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/15 border border-accent/30 text-accent font-semibold text-xs tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span>{COMPANY_INFO.tagline}</span>
            </div>

            {/* H1 Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white leading-[1.08]">
              A New Roof You Can Trust for 30+ Years
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-gray-200 font-normal leading-relaxed max-w-2xl">
              Licensed. Certified. Free inspection and written quote in 24 hours.
            </p>

            {/* Three Trust Points under headline */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2.5 p-3 rounded-[8px] bg-slate-dark/70 border border-gray-700/60 shadow-sm">
                <Award className="w-5 h-5 text-accent shrink-0" aria-hidden="true" />
                <span className="text-xs sm:text-sm font-bold text-gray-100">
                  25-Year Workmanship Warranty
                </span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-[8px] bg-slate-dark/70 border border-gray-700/60 shadow-sm">
                <ShieldCheck className="w-5 h-5 text-trust-green shrink-0" aria-hidden="true" />
                <span className="text-xs sm:text-sm font-bold text-gray-100">
                  Licensed and Certified
                </span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-[8px] bg-slate-dark/70 border border-gray-700/60 shadow-sm">
                <FileText className="w-5 h-5 text-accent shrink-0" aria-hidden="true" />
                <span className="text-xs sm:text-sm font-bold text-gray-100">
                  Free Written Quote
                </span>
              </div>
            </div>

            {/* Two Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href="#quote"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-[10px] bg-accent hover:bg-accent-hover text-white font-heading font-black text-lg uppercase tracking-wider shadow-lg hover:shadow-card-hover transition-all duration-200 active:scale-[0.98]"
              >
                <span>Get Free Quote</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-[10px] bg-transparent hover:bg-white/10 text-white font-heading font-black text-lg uppercase tracking-wider border-2 border-white/80 transition-all duration-200"
                aria-label={`Call ${COMPANY_INFO.phone}`}
              >
                <Phone className="w-5 h-5 text-accent" />
                <span>Call Now: {COMPANY_INFO.phone}</span>
              </a>
            </div>

            {/* Micro assurance */}
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span className="w-1.5 h-1.5 rounded-full bg-trust-green" />
              <span>Over 3,200 roofs installed with 4.9★ Google satisfaction across North Texas.</span>
            </div>
          </div>

          {/* Right Column: Hero Quote Form */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <HeroQuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
}
