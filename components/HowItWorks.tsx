import React from "react";
import { HOW_IT_WORKS } from "@/lib/data";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";

export default function HowItWorks() {
  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollAnimationWrapper className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
            <span>Seamless 4-Step Process</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-primary">
            How It Works
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mt-3 max-w-2xl mx-auto">
            From initial drone scan to final magnetic sweep, we keep the process clear, fast, and stress-free.
          </p>
        </ScrollAnimationWrapper>

        {/* 4 Steps on Horizontal Line */}
        <div className="relative">
          {/* Connecting line on desktop */}
          <div className="hidden lg:block absolute top-1/4 left-16 right-16 h-1 bg-gray-200 -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {HOW_IT_WORKS.map((step, index) => (
              <ScrollAnimationWrapper
                key={step.step}
                delay={index * 0.1}
                className="relative flex flex-col items-center text-center p-6 bg-surface-light rounded-[10px] border border-gray-200/80 hover:border-accent/40 shadow-sm transition-all hover:-translate-y-1"
              >
                {/* Step badge */}
                <div className="w-14 h-14 rounded-full bg-primary text-white border-4 border-white shadow-md flex items-center justify-center font-heading font-black text-2xl mb-5 group-hover:bg-accent transition-colors">
                  <span className="text-accent">{step.step}</span>
                </div>

                {/* Duration chip */}
                <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-2">
                  <CheckCircle2 className="w-3 h-3 text-trust-green" />
                  {step.duration}
                </span>

                {/* Step title */}
                <h3 className="font-heading text-2xl font-bold uppercase tracking-wide text-primary mb-2">
                  {step.title}
                </h3>

                {/* Step description */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>

        {/* Orange CTA below */}
        <ScrollAnimationWrapper className="mt-14 text-center">
          <a
            href="#quote"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[10px] bg-accent hover:bg-accent-hover text-white font-heading font-black text-lg uppercase tracking-wider shadow-lg hover:shadow-card-hover transition-all duration-200 active:scale-[0.98]"
          >
            <span>Book My Inspection</span>
            <ArrowRight className="w-5 h-5" />
          </a>
          <p className="text-xs text-gray-500 mt-2.5">
            Takes less than 60 seconds • We schedule at your convenience
          </p>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
