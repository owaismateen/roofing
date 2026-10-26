import React from "react";
import { Phone, Clock, ShieldCheck, CheckCircle2 } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";
import FinalCTAForm from "./FinalCTAForm";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";

export default function FinalCTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-to-br from-accent/95 via-primary to-primary text-white py-20 lg:py-24 scroll-mt-12">
      {/* Decorative roof-angle backdrop */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Side: Headline & Large Phone Callout */}
          <ScrollAnimationWrapper className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
              <Clock className="w-3.5 h-3.5 text-white" />
              <span>Free 24-Hour Inspection &amp; Quote</span>
            </div>

            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight">
              Get Your Free Roof Inspection Today
            </h2>

            <p className="text-base sm:text-lg text-gray-200 leading-relaxed max-w-xl">
              Don&apos;t wait for a small leak to become structural water damage. Schedule a certified 21-point inspection or call our master roofers right now.
            </p>

            {/* Large Phone Number */}
            <div className="pt-2">
              <span className="text-xs uppercase tracking-widest text-gray-300 font-semibold block mb-1">
                Prefer to speak with an estimator immediately?
              </span>
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="inline-flex items-center gap-3 text-3xl sm:text-4xl md:text-5xl font-heading font-black text-white hover:text-accent transition-colors"
                aria-label={`Call Roofing Company at ${COMPANY_INFO.phone}`}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white text-primary flex items-center justify-center shrink-0 shadow-lg">
                  <Phone className="w-6 h-6 sm:w-7 sm:h-7 text-accent" />
                </div>
                <span>{COMPANY_INFO.phone}</span>
              </a>
              <div className="mt-2 text-xs text-gray-300 flex items-center justify-center lg:justify-start gap-3">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-trust-green" />
                  <span>Mon-Sat 7am-7pm</span>
                </span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-trust-green" />
                  <span>24/7 Emergency Storm Dispatch</span>
                </span>
              </div>
            </div>
          </ScrollAnimationWrapper>

          {/* Right Side: Short 3-Field Form */}
          <ScrollAnimationWrapper
            delay={0.15}
            className="lg:col-span-6 bg-slate-dark/90 backdrop-blur-md p-6 sm:p-8 rounded-[10px] border border-white/10 shadow-2xl"
          >
            <div className="mb-5">
              <span className="text-xs font-bold uppercase tracking-wider text-accent">
                Fast Online Scheduling
              </span>
              <h3 className="font-heading text-2xl font-bold uppercase text-white mt-0.5">
                Request Inspection Online
              </h3>
              <p className="text-xs text-gray-300 mt-1">
                Enter your details below and an estimator will call to confirm your preferred time.
              </p>
            </div>

            <FinalCTAForm />
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
}
