import React from "react";
import { Star, Quote, CheckCircle2, ShieldCheck } from "lucide-react";
import { REVIEWS, COMPANY_INFO } from "@/lib/data";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-surface-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollAnimationWrapper className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
            <span>Verified Customer Feedback</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-primary">
            What Homeowners Say
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mt-3 max-w-2xl mx-auto">
            Honest ratings from homeowners who trust Roofing Company to protect their biggest investment.
          </p>

          {/* Google Rating Badge */}
          <div className="mt-6 inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white border border-gray-200 shadow-sm">
            <div className="w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center font-bold text-xs text-primary border border-gray-200">
              G
            </div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" aria-hidden="true" />
              ))}
            </div>
            <span className="text-sm font-bold text-primary">
              {COMPANY_INFO.rating} / 5.0 Rating
            </span>
            <span className="text-xs text-gray-500 hidden sm:inline">
              ({COMPANY_INFO.reviewCount}+ Google Reviews)
            </span>
          </div>
        </ScrollAnimationWrapper>

        {/* 3 Review Cards - STRICT: All Male Names (Mark T., James L., David K.) - No Photos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, index) => (
            <ScrollAnimationWrapper
              key={review.id}
              delay={index * 0.1}
              className="bg-white rounded-[10px] p-8 border border-gray-200/90 shadow-soft hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between relative group hover:-translate-y-1"
            >
              <div>
                {/* Header: Stars & Quote Icon - strictly no photos */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" aria-hidden="true" />
                    ))}
                  </div>
                  <div className="w-10 h-10 rounded-full bg-surface-light flex items-center justify-center text-primary group-hover:text-accent group-hover:bg-accent/10 transition-colors">
                    <Quote className="w-5 h-5 fill-current opacity-80" aria-hidden="true" />
                  </div>
                </div>

                {/* Short Quote */}
                <blockquote className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6 font-normal italic">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
              </div>

              {/* Footer: Initial Badge, Name & City - NO PHOTOS */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* Clean Initial Badge */}
                  <div className="w-10 h-10 rounded-[8px] bg-primary text-white flex items-center justify-center font-heading font-black text-lg">
                    {review.initial}
                  </div>
                  <div>
                    <div className="font-heading text-lg font-bold uppercase text-primary leading-tight">
                      {review.name}
                    </div>
                    <div className="text-xs text-gray-500">
                      {review.city} &bull; <span className="text-gray-400">{review.service}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-[11px] font-semibold text-trust-green bg-trust-green/10 px-2 py-0.5 rounded-[4px]">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Verified</span>
                </div>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>

        {/* Bottom guarantee trust callout */}
        <ScrollAnimationWrapper className="mt-12 text-center text-xs text-gray-500 flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-trust-green" />
          <span>Every review represents a real homeowner backed by our 25-Year Non-Prorated Workmanship Warranty.</span>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
