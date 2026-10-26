import React from "react";
import { Clock, Hammer, Star, ShieldCheck } from "lucide-react";
import { TRUST_STATS } from "@/lib/data";

const iconMap = {
  Clock: Clock,
  Hammer: Hammer,
  Star: Star,
  ShieldCheck: ShieldCheck,
};

export default function TrustStrip() {
  return (
    <section className="bg-white border-y border-gray-200 shadow-sm relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {TRUST_STATS.map((stat) => {
            const IconComponent = iconMap[stat.icon];
            return (
              <div
                key={stat.id}
                className="flex items-center gap-4 p-2 sm:p-3 rounded-[10px] transition-transform hover:-translate-y-0.5"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-[10px] bg-surface-light border border-gray-100 flex items-center justify-center shrink-0 text-primary shadow-sm">
                  {stat.icon === "Star" ? (
                    <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-amber-500 fill-amber-500" />
                  ) : stat.icon === "ShieldCheck" ? (
                    <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-trust-green" />
                  ) : (
                    <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-accent" />
                  )}
                </div>
                <div>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight text-primary leading-tight">
                    {stat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 mt-0.5 font-medium">
                    {stat.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
