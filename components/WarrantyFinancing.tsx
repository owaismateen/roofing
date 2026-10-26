import React from "react";
import { Check, ShieldCheck, BadgeDollarSign, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";

export default function WarrantyFinancing() {
  const warrantyPoints = [
    "25-Year Non-Prorated Workmanship Warranty backed directly by Roofing Company.",
    "Up to 50-Year Manufacturer Material Warranty on certified shingle & metal installations.",
    "Fully transferable coverage to the next homeowner if you sell your property.",
    "Annual courtesy roof inspections included at no charge for the first 5 years.",
  ];

  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollAnimationWrapper className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
            <span>Ironclad Protection &amp; Honest Pricing</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-primary">
            Warranty &amp; Transparent Payment Plans
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mt-3 max-w-2xl mx-auto">
            Maximum peace of mind with lifetime structural guarantees and clear milestone payment plans designed for complete budget transparency.
          </p>
        </ScrollAnimationWrapper>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Warranty Details in 4 Checkmarks */}
          <ScrollAnimationWrapper className="lg:col-span-7 bg-surface-light rounded-[10px] p-8 sm:p-10 border border-gray-200/90 shadow-soft flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-[10px] bg-primary text-accent flex items-center justify-center">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-accent">
                    Unmatched Guarantee
                  </span>
                  <h3 className="font-heading text-2xl sm:text-3xl font-extrabold uppercase text-primary leading-tight">
                    {COMPANY_INFO.warrantyYears}-Year Workmanship Warranty
                  </h3>
                </div>
              </div>

              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Most roofers offer only 2 to 5 years of workmanship coverage before disappearing. Roofing Company stands behind every nail, seam, and flashing with non-prorated 25-year protection.
              </p>

              {/* 4 Checkmarks */}
              <ul className="space-y-4">
                {warrantyPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-trust-green/15 text-trust-green flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4 stroke-[3]" />
                    </div>
                    <span className="text-sm sm:text-base text-gray-800 font-medium">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200/80 flex items-center gap-2 text-xs text-gray-500">
              <Sparkles className="w-4 h-4 text-accent" />
              <span>Registered directly with certified national roofing manufacturers.</span>
            </div>
          </ScrollAnimationWrapper>

          {/* Right Column: Transparent Milestone Billing Box */}
          <ScrollAnimationWrapper
            delay={0.15}
            className="lg:col-span-5 bg-primary text-white rounded-[10px] p-8 sm:p-10 border border-primary-light shadow-xl flex flex-col justify-between relative overflow-hidden"
          >
            {/* Background design glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-[10px] bg-white/10 text-accent flex items-center justify-center border border-white/10">
                  <BadgeDollarSign className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-accent">
                    Clear &amp; Honest Billing
                  </span>
                  <h3 className="font-heading text-2xl sm:text-3xl font-extrabold uppercase text-white leading-tight">
                    Milestone Payment Plans
                  </h3>
                </div>
              </div>

              {/* Price Callout */}
              <div className="p-4 rounded-[10px] bg-slate-dark/80 border border-gray-700 mb-6">
                <div className="text-xs text-gray-300 uppercase tracking-wider font-semibold">
                  Zero Hidden Costs &bull; Zero Surprise Fees
                </div>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="font-heading text-3xl sm:text-4xl font-black text-white">
                    Fixed Price Quotes
                  </span>
                </div>
                <div className="mt-3 flex items-center gap-2 text-xs text-trust-green font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Pay in structured milestones as work completes</span>
                </div>
              </div>

              {/* Milestone bullet features */}
              <ul className="space-y-3 text-xs sm:text-sm text-gray-300 mb-8">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                  <span><strong>No Upfront Deposit:</strong> Pay only after initial delivery and project commencement.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                  <span><strong>Milestone Progress:</strong> Structured installments linked to clear project checkpoints.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                  <span><strong>100% Fixed Written Quote:</strong> The itemized price you receive is guaranteed in writing.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                  <span><strong>Multiple Payment Options:</strong> Direct bank transfer, checks, debit, and all card payments.</span>
                </li>
              </ul>
            </div>

            {/* Button: "Request Written Estimate" */}
            <div className="relative z-10 pt-4 border-t border-gray-700/80">
              <a
                href="#quote"
                className="w-full py-4 px-6 rounded-[10px] bg-accent hover:bg-accent-hover text-white font-heading font-black text-lg uppercase tracking-wider shadow-lg hover:shadow-card-hover flex items-center justify-center gap-2 transition-all duration-200 active:scale-[0.98]"
              >
                <span>Request Written Estimate</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <p className="text-[11px] text-gray-400 text-center mt-2.5">
                Detailed 24-hour written quote &bull; 100% Free with zero obligation
              </p>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
}
