import React from "react";
import { Award, Sparkles, BadgeDollarSign, Clock3, ShieldCheck, FileText, Phone } from "lucide-react";
import { WHY_CHOOSE_US, COMPANY_INFO } from "@/lib/data";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";

const iconMap = {
  Award: Award,
  Sparkles: Sparkles,
  BadgeDollarSign: BadgeDollarSign,
  Clock3: Clock3,
  ShieldCheck: ShieldCheck,
  FileText: FileText,
};

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 lg:py-28 bg-primary text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollAnimationWrapper className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-accent text-xs font-bold uppercase tracking-wider mb-3">
            <span>The Gold Standard</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
            Why Homeowners Choose Roofing Company
          </h2>
          <p className="text-base sm:text-lg text-gray-300 mt-3 max-w-2xl mx-auto">
            We operate on strict craftsmanship standards, direct accountability, and respect for your property.
          </p>
        </ScrollAnimationWrapper>

        {/* 6 Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_US.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <ScrollAnimationWrapper
                key={item.id}
                delay={index * 0.07}
                className="p-7 rounded-[10px] bg-slate-dark/60 border border-gray-700/60 hover:border-accent/60 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-[10px] bg-primary flex items-center justify-center text-accent mb-4 border border-gray-700">
                  <Icon className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="font-heading text-xl font-bold uppercase tracking-wide text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </ScrollAnimationWrapper>
            );
          })}
        </div>

        {/* Action bar inside section */}
        <ScrollAnimationWrapper className="mt-14 pt-8 border-t border-gray-700/60 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <div className="font-heading text-2xl font-bold uppercase text-white">
              Ready to experience roofing done right?
            </div>
            <p className="text-sm text-gray-300">
              Speak directly with an experienced project estimator today.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#quote"
              className="px-6 py-3.5 rounded-[10px] bg-accent hover:bg-accent-hover text-white font-heading font-bold text-base uppercase tracking-wider shadow-md transition-all active:scale-[0.98]"
            >
              Request Free Inspection
            </a>
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="px-5 py-3.5 rounded-[10px] bg-white/10 hover:bg-white/20 text-white font-heading font-bold text-base uppercase tracking-wider border border-white/20 transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-accent" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
