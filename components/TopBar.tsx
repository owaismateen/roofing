import React from "react";
import { Phone, Clock, ShieldCheck, CheckCircle2 } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";

export default function TopBar() {
  return (
    <div className="bg-primary text-white text-xs border-b border-primary-light/40 py-2 px-4 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-2 gap-x-4">
        {/* Left: Hours & Emergency */}
        <div className="flex items-center gap-x-4">
          <div className="flex items-center gap-1.5 text-gray-300">
            <Clock className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
            <span>{COMPANY_INFO.hours.regular}</span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 text-trust-green font-medium">
            <span className="w-2 h-2 rounded-full bg-trust-green animate-pulse" />
            <span>{COMPANY_INFO.hours.emergency}</span>
          </div>
        </div>

        {/* Center: Free Inspection Badge */}
        <div className="hidden md:flex items-center gap-1.5 font-medium text-gray-200">
          <CheckCircle2 className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
          <span>Free 21-Point Roof Inspection &amp; 24-Hr Written Quote</span>
        </div>

        {/* Right: License & Click-to-Call Phone */}
        <div className="flex items-center gap-x-4 ml-auto sm:ml-0">
          <div className="hidden lg:flex items-center gap-1 text-gray-300">
            <ShieldCheck className="w-3.5 h-3.5 text-trust-green" aria-hidden="true" />
            <span>{COMPANY_INFO.licenseNumber}</span>
          </div>
          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="flex items-center gap-1.5 font-bold text-white hover:text-accent transition-colors"
            aria-label={`Call Roofing Company at ${COMPANY_INFO.phone}`}
          >
            <Phone className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
            <span>{COMPANY_INFO.phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
