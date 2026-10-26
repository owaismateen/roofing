import React from "react";
import Link from "next/link";
import { Shield, Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { COMPANY_INFO, SERVICES, NAV_LINKS } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-dark text-gray-300 pt-16 pb-24 md:pb-12 border-t border-gray-800 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-gray-800">
          {/* Column 1: Logo & Short Text (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-[8px] bg-primary flex items-center justify-center text-accent shadow-md">
                <Shield className="w-6 h-6 text-white stroke-[2.2]" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-xl font-black tracking-wide text-white uppercase leading-tight">
                  Roofing Company
                </span>
                <span className="text-[10px] tracking-widest uppercase font-semibold text-gray-400">
                  Dallas-Fort Worth, TX
                </span>
              </div>
            </Link>

            <p className="text-sm text-gray-400 leading-relaxed pr-4">
              Roofing Company builds high-durability residential and commercial roof systems engineered to protect Texas properties for 30+ years. Fully licensed, certified, and backed by our non-prorated 25-year workmanship warranty.
            </p>

            <div className="pt-2 text-xs text-gray-400 space-y-1">
              <div>
                <strong className="text-gray-200">License:</strong> {COMPANY_INFO.licenseNumber}
              </div>
              <div>
                <strong className="text-gray-200">Certification:</strong> {COMPANY_INFO.certification}
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-heading text-lg font-bold uppercase tracking-wider text-white border-l-2 border-accent pl-2.5">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-accent transition-colors flex items-center gap-1.5"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-gray-600" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="#faq"
                  className="hover:text-accent transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-gray-600" />
                  <span>FAQs</span>
                </a>
              </li>
              <li>
                <a
                  href="#quote"
                  className="hover:text-accent transition-colors flex items-center gap-1.5 text-accent font-semibold"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-accent" />
                  <span>Request Quote</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Services (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading text-lg font-bold uppercase tracking-wider text-white border-l-2 border-accent pl-2.5">
              Roofing Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <a
                    href="#quote"
                    className="hover:text-accent transition-colors flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/60" />
                    <span>{service.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Hours (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading text-lg font-bold uppercase tracking-wider text-white border-l-2 border-accent pl-2.5">
              Contact &amp; Hours
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="flex items-start gap-2.5 hover:text-accent transition-colors group"
                >
                  <Phone className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-white group-hover:text-accent">
                      {COMPANY_INFO.phone}
                    </span>
                    <span className="text-xs text-gray-400">Toll-Free Direct Line</span>
                  </div>
                </a>
              </li>

              <li>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-start gap-2.5 hover:text-accent transition-colors"
                >
                  <Mail className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span className="text-xs break-all">{COMPANY_INFO.email}</span>
                </a>
              </li>

              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed">
                  {COMPANY_INFO.address.full}
                </span>
              </li>

              <li className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-trust-green shrink-0 mt-0.5" />
                <div className="text-xs space-y-0.5">
                  <span className="block text-gray-200">{COMPANY_INFO.hours.regular}</span>
                  <span className="block text-trust-green font-semibold">
                    {COMPANY_INFO.hours.emergency}
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar with Developer Credit and LinkedIn */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <span suppressHydrationWarning>
            &copy; {currentYear} {COMPANY_INFO.name}. All rights reserved. {COMPANY_INFO.tagline}
          </span>

          <span className="text-gray-300">
            Website developed by{" "}
            <a
              href="http://linkedin.com/in/realmuhammadowais"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-white font-bold transition-colors underline underline-offset-4"
            >
              Muhammad Owais
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
