"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, Phone, ArrowRight } from "lucide-react";
import { FAQS, COMPANY_INFO } from "@/lib/data";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // FAQPage Schema Markup
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white relative">
      {/* FAQ JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Clear Answers</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-primary">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mt-3">
            Everything you need to know about roof replacements, pricing, timelines, and warranties.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-[10px] border border-gray-200/90 overflow-hidden transition-colors bg-surface-light/50 hover:bg-surface-light"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-4 sm:py-5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="font-heading text-lg sm:text-xl font-bold uppercase tracking-wide text-primary">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "rotate-180 bg-accent text-white"
                        : "bg-white text-gray-500 border border-gray-200"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${index}`}
                    className="px-5 sm:px-6 pb-5 pt-1 text-sm sm:text-base text-gray-600 leading-relaxed border-t border-gray-100 bg-white"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="mt-14 p-6 sm:p-8 bg-surface-light rounded-[10px] border border-gray-200 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="font-heading text-xl sm:text-2xl font-bold uppercase text-primary">
              Have a specific question about your roof?
            </h4>
            <p className="text-sm text-gray-600">
              Our master roof inspectors are here to help. Speak with an expert or request your free assessment.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="#quote"
              className="px-5 py-3 rounded-[10px] bg-accent hover:bg-accent-hover text-white text-xs font-bold uppercase tracking-wider shadow-sm flex items-center gap-2 transition-all active:scale-[0.98]"
            >
              <span>Get Inspection</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="px-4 py-3 rounded-[10px] bg-white border border-gray-300 text-primary hover:text-accent text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-accent" />
              <span>Call Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
