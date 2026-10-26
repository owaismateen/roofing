import React from "react";
import { Home, Wrench, CloudLightning, Hammer, Droplets, SearchCheck, ArrowRight, Check } from "lucide-react";
import { SERVICES } from "@/lib/data";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";

const iconMap = {
  Home: Home,
  Wrench: Wrench,
  CloudLightning: CloudLightning,
  Hammer: Hammer,
  Droplets: Droplets,
  SearchCheck: SearchCheck,
};

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-surface-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollAnimationWrapper className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
            <span>Engineered Precision</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-primary">
            Our Roofing Services
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mt-3 max-w-2xl mx-auto">
            Engineered systems designed to protect your home through decades of heavy wind, hail, and torrential rain.
          </p>
        </ScrollAnimationWrapper>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <ScrollAnimationWrapper
                key={service.id}
                delay={index * 0.08}
                className="group relative flex flex-col justify-between bg-white rounded-[10px] p-7 border-2 border-transparent hover:border-accent shadow-soft hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5"
              >
                <div>
                  {/* Icon Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-14 h-14 rounded-[10px] bg-surface-light group-hover:bg-accent/10 flex items-center justify-center text-primary group-hover:text-accent transition-colors">
                      <Icon className="w-7 h-7" aria-hidden="true" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-400 group-hover:text-accent transition-colors">
                      {service.turnaround}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-2xl font-bold uppercase tracking-wide text-primary group-hover:text-accent transition-colors mb-2.5">
                    {service.title}
                  </h3>

                  {/* 2-line description */}
                  <p className="text-sm text-gray-600 leading-relaxed mb-5 line-clamp-2">
                    {service.shortDescription}
                  </p>

                  {/* Key feature pills */}
                  <ul className="space-y-1.5 mb-6 text-xs text-gray-600">
                    {service.features.slice(0, 2).map((feat, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-trust-green shrink-0" />
                        <span className="truncate">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Link directly to Quote Form */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <a
                    href="#quote"
                    className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary group-hover:text-accent transition-colors"
                  >
                    <span>Request Quote</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>

                  <a
                    href="#quote"
                    className="text-xs font-bold text-gray-400 hover:text-accent uppercase tracking-wider"
                  >
                    Free Inspection
                  </a>
                </div>
              </ScrollAnimationWrapper>
            );
          })}
        </div>

        {/* Section bottom banner pushing to Free Inspection */}
        <ScrollAnimationWrapper className="mt-14 bg-white rounded-[10px] p-6 sm:p-8 border border-gray-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-heading text-xl sm:text-2xl font-bold uppercase text-primary">
              Not sure which service you need?
            </h4>
            <p className="text-sm text-gray-600">
              Schedule a free 21-point roof and attic inspection. We provide clear photo evidence and zero sales pressure.
            </p>
          </div>
          <a
            href="#quote"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[10px] bg-accent hover:bg-accent-hover text-white font-heading font-bold text-base uppercase tracking-wider shadow-md shrink-0 transition-all active:scale-[0.98]"
          >
            <span>Book Free Inspection</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
