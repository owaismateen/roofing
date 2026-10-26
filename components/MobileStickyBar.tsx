"use client";

import React from "react";
import { Phone, CalendarCheck } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";

export default function MobileStickyBar() {
  return (
    <aside
      aria-label="Mobile quick contact bar"
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-t border-primary-light/40 py-2.5 px-4 shadow-[0_-4px_20px_rgba(0,0,0,0.25)]"
    >
      <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
        {/* Call Now */}
        <a
          href={`tel:${COMPANY_INFO.phoneRaw}`}
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-[10px] bg-slate-dark border border-gray-700 text-white font-bold text-sm tracking-wide shadow transition-colors active:bg-gray-800"
          aria-label={`Call Roofing Company at ${COMPANY_INFO.phone}`}
        >
          <Phone className="w-4 h-4 text-accent" aria-hidden="true" />
          <span>Call Now</span>
        </a>

        {/* Get Quote */}
        <a
          href="#quote"
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-[10px] bg-accent hover:bg-accent-hover text-white font-heading font-black text-sm uppercase tracking-wider shadow-md transition-all active:scale-[0.98]"
          aria-label="Request a free quote"
        >
          <CalendarCheck className="w-4 h-4" aria-hidden="true" />
          <span>Get Quote</span>
        </a>
      </div>
    </aside>
  );
}
