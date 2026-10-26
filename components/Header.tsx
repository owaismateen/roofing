"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Shield, Menu, X, Phone, ArrowRight } from "lucide-react";
import { COMPANY_INFO, NAV_LINKS } from "@/lib/data";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200/80 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-2 sm:gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none shrink-0">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-[10px] bg-primary flex items-center justify-center text-accent shadow-md group-hover:bg-primary-hover transition-colors shrink-0">
              <div className="relative">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-white stroke-[2.2]" />
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3.5 h-1.5 border-t-2 border-accent" />
              </div>
            </div>
            <div className="flex flex-col shrink-0">
              <span className="font-heading text-xl sm:text-2xl font-black tracking-wide text-primary uppercase leading-tight group-hover:text-primary-light transition-colors whitespace-nowrap">
                Roofing Company
              </span>
              <span className="hidden sm:block text-[10px] tracking-widest uppercase font-semibold text-gray-500 whitespace-nowrap">
                Premium Systems &bull; Dallas, TX
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Hidden on md/sm, visible on xl/lg with tight gap */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 shrink-0" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs xl:text-sm font-bold uppercase tracking-wider text-slate-dark hover:text-accent transition-colors py-1 whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right CTA Area */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Phone link on large desktop */}
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="hidden xl:flex items-center gap-2 text-sm font-bold text-primary hover:text-accent transition-colors px-2 py-2 whitespace-nowrap shrink-0"
              aria-label={`Call ${COMPANY_INFO.phone}`}
            >
              <div className="w-8 h-8 rounded-[8px] bg-surface-muted flex items-center justify-center text-primary shrink-0">
                <Phone className="w-4 h-4 text-accent" />
              </div>
              <span className="whitespace-nowrap">{COMPANY_INFO.phone}</span>
            </a>

            {/* Orange Button: ALWAYS SINGLE LINE, never wraps */}
            <a
              href="#quote"
              className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2.5 sm:py-3 rounded-[10px] text-xs sm:text-sm font-heading font-black uppercase tracking-wider text-white bg-accent hover:bg-accent-hover shadow-md hover:shadow-card-hover transition-all duration-200 active:scale-[0.98] whitespace-nowrap shrink-0"
            >
              <span className="whitespace-nowrap">Get Free Quote</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
            </a>

            {/* Mobile / Tablet Menu Button */}
            <div className="flex items-center lg:hidden shrink-0">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-[8px] text-gray-700 hover:text-primary hover:bg-gray-100 focus:outline-none"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile / Tablet Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white shadow-xl animate-fadeIn">
          <div className="px-4 pt-3 pb-6 space-y-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-[8px] text-base font-bold uppercase tracking-wide text-slate-dark hover:bg-surface-light hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-gray-100 flex flex-col gap-2.5">
              <a
                href="#quote"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-[10px] text-sm font-heading font-black uppercase tracking-wider text-white bg-accent hover:bg-accent-hover shadow-md whitespace-nowrap"
              >
                <span>Get Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-[10px] text-sm font-bold text-primary bg-surface-light border border-gray-200 whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-accent" />
                <span>Call {COMPANY_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
