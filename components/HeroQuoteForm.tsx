"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { quoteFormSchema, type QuoteFormData } from "@/lib/validations";
import { CheckCircle, Lock, ShieldCheck, ArrowRight, Loader2, ChevronDown } from "lucide-react";
import { SERVICES, COMPANY_INFO } from "@/lib/data";

export default function HeroQuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      serviceType: "roof-replacement",
      zipCode: "",
    },
  });

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);
    setErrorMessage(null);
    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitSuccess(result.message);
        reset();
      } else {
        setErrorMessage(result.message || "Failed to submit request. Please call us directly.");
      }
    } catch {
      setErrorMessage(`Network error occurred. Please call ${COMPANY_INFO.phone} for immediate assistance.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="quote" className="w-full max-w-lg bg-white rounded-[10px] p-6 sm:p-8 shadow-2xl border border-gray-100 text-slate-dark relative z-10">
      {/* Form Header */}
      <div className="mb-5">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[6px] bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider mb-2">
          <span>Priority Estimator</span>
        </div>
        <h3 className="font-heading text-2xl sm:text-3xl font-extrabold uppercase tracking-wide text-primary leading-tight">
          Get Your Free Inspection Quote
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 mt-1">
          Detailed written estimate within 24 hours. Zero cost, zero obligation.
        </p>
      </div>

      {submitSuccess ? (
        <div className="bg-trust-green/10 border border-trust-green/30 rounded-[10px] p-6 text-center animate-fadeIn">
          <div className="w-12 h-12 bg-trust-green text-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
            <CheckCircle className="w-7 h-7" />
          </div>
          <h4 className="font-heading text-2xl font-bold uppercase text-primary mb-2">
            Request Received!
          </h4>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            {submitSuccess}
          </p>
          <button
            type="button"
            onClick={() => setSubmitSuccess(null)}
            className="text-xs font-bold uppercase tracking-wider text-accent hover:underline"
          >
            Submit another address
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3.5" noValidate>
          {errorMessage && (
            <div className="p-3 text-xs bg-red-50 border border-red-200 text-red-700 rounded-[8px]">
              {errorMessage}
            </div>
          )}

          {/* Full Name */}
          <div>
            <label htmlFor="hero-name" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
              Your Name *
            </label>
            <input
              id="hero-name"
              type="text"
              autoComplete="name"
              placeholder="e.g. John Miller"
              {...register("fullName")}
              className={`w-full px-3.5 py-2.5 rounded-[8px] border text-sm text-gray-900 bg-surface-light focus:bg-white transition-colors focus:ring-2 focus:ring-accent/40 ${
                errors.fullName ? "border-red-400" : "border-gray-300"
              }`}
            />
            {errors.fullName && (
              <p className="text-[11px] text-red-600 mt-1">{errors.fullName.message}</p>
            )}
          </div>

          {/* Phone & Email Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label htmlFor="hero-phone" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                Phone Number *
              </label>
              <input
                id="hero-phone"
                type="tel"
                autoComplete="tel"
                placeholder="(214) 555-0199"
                {...register("phone")}
                className={`w-full px-3.5 py-2.5 rounded-[8px] border text-sm text-gray-900 bg-surface-light focus:bg-white transition-colors focus:ring-2 focus:ring-accent/40 ${
                  errors.phone ? "border-red-400" : "border-gray-300"
                }`}
              />
              {errors.phone && (
                <p className="text-[11px] text-red-600 mt-1">{errors.phone.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="hero-email" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                Email Address *
              </label>
              <input
                id="hero-email"
                type="email"
                autoComplete="email"
                placeholder="john@example.com"
                {...register("email")}
                className={`w-full px-3.5 py-2.5 rounded-[8px] border text-sm text-gray-900 bg-surface-light focus:bg-white transition-colors focus:ring-2 focus:ring-accent/40 ${
                  errors.email ? "border-red-400" : "border-gray-300"
                }`}
              />
              {errors.email && (
                <p className="text-[11px] text-red-600 mt-1">{errors.email.message}</p>
              )}
            </div>
          </div>

          {/* Service Dropdown & ZIP Code Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label htmlFor="hero-service" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                Service Type *
              </label>
              <div className="relative">
                <select
                  id="hero-service"
                  {...register("serviceType")}
                  className="w-full pl-3.5 pr-10 py-2.5 rounded-[8px] border border-gray-300 text-sm text-gray-900 bg-surface-light focus:bg-white transition-colors focus:ring-2 focus:ring-accent/40 appearance-none cursor-pointer"
                >
                  {SERVICES.map((srv) => (
                    <option key={srv.slug} value={srv.slug}>
                      {srv.title}
                    </option>
                  ))}
                  <option value="other">Other / Emergency Repair</option>
                </select>
                {/* Custom sleek dropdown chevron arrow */}
                <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-accent">
                  <ChevronDown className="w-4 h-4 stroke-[2.5]" aria-hidden="true" />
                </div>
              </div>
              {errors.serviceType && (
                <p className="text-[11px] text-red-600 mt-1">{errors.serviceType.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="hero-zip" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                ZIP Code *
              </label>
              <input
                id="hero-zip"
                type="text"
                autoComplete="postal-code"
                placeholder="75201"
                maxLength={5}
                {...register("zipCode")}
                className={`w-full px-3.5 py-2.5 rounded-[8px] border text-sm text-gray-900 bg-surface-light focus:bg-white transition-colors focus:ring-2 focus:ring-accent/40 ${
                  errors.zipCode ? "border-red-400" : "border-gray-300"
                }`}
              />
              {errors.zipCode && (
                <p className="text-[11px] text-red-600 mt-1">{errors.zipCode.message}</p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-2 py-3.5 px-6 rounded-[10px] bg-accent hover:bg-accent-hover text-white font-heading font-black text-lg uppercase tracking-wider shadow-lg hover:shadow-card-hover transition-all duration-200 flex items-center justify-center gap-2 active:scale-[0.99] disabled:opacity-70 cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Processing...</span>
              </>
            ) : (
              <>
                <span>Get My Free Quote</span>
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </button>

          {/* Under the form */}
          <div className="pt-2 flex items-center justify-between text-[11px] text-gray-500 border-t border-gray-100">
            <span className="flex items-center gap-1 font-medium">
              <Lock className="w-3.5 h-3.5 text-trust-green" />
              <span>No spam. No pressure.</span>
            </span>
            <span className="flex items-center gap-1 font-medium text-gray-600">
              <ShieldCheck className="w-3.5 h-3.5 text-trust-green" />
              <span>100% Free &amp; Confidential</span>
            </span>
          </div>
        </form>
      )}
    </div>
  );
}
