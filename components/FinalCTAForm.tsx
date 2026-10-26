"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { quickQuoteSchema, type QuickQuoteData } from "@/lib/validations";
import { CheckCircle, ArrowRight, Loader2, Lock, ShieldCheck } from "lucide-react";

export default function FinalCTAForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<QuickQuoteData>({
    resolver: zodResolver(quickQuoteSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      zipCode: "",
    },
  });

  const onSubmit = async (data: QuickQuoteData) => {
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
        setErrorMessage(result.message || "Failed to submit request.");
      }
    } catch {
      setErrorMessage("Network error. Please call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[10px] p-6 text-center text-white animate-fadeIn">
        <CheckCircle className="w-10 h-10 text-trust-green mx-auto mb-2" />
        <h4 className="font-heading text-xl font-bold uppercase mb-1">
          Inspection Requested!
        </h4>
        <p className="text-xs text-gray-200 mb-3">
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
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3" noValidate>
      {errorMessage && (
        <div className="p-2.5 text-xs bg-red-900/80 border border-red-400 text-white rounded-[6px]">
          {errorMessage}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
        {/* Name */}
        <div>
          <label htmlFor="cta-name" className="sr-only">Full Name</label>
          <input
            id="cta-name"
            type="text"
            autoComplete="name"
            placeholder="Full Name *"
            {...register("fullName")}
            className={`w-full px-3.5 py-3 rounded-[8px] bg-white text-slate-dark text-sm placeholder-gray-500 border ${
              errors.fullName ? "border-red-400 ring-1 ring-red-400" : "border-transparent"
            } focus:ring-2 focus:ring-accent`}
          />
          {errors.fullName && (
            <p className="text-[11px] text-red-300 mt-1">{errors.fullName.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="cta-phone" className="sr-only">Phone Number</label>
          <input
            id="cta-phone"
            type="tel"
            autoComplete="tel"
            placeholder="Phone Number *"
            {...register("phone")}
            className={`w-full px-3.5 py-3 rounded-[8px] bg-white text-slate-dark text-sm placeholder-gray-500 border ${
              errors.phone ? "border-red-400 ring-1 ring-red-400" : "border-transparent"
            } focus:ring-2 focus:ring-accent`}
          />
          {errors.phone && (
            <p className="text-[11px] text-red-300 mt-1">{errors.phone.message}</p>
          )}
        </div>

        {/* ZIP Code */}
        <div>
          <label htmlFor="cta-zip" className="sr-only">ZIP Code</label>
          <input
            id="cta-zip"
            type="text"
            autoComplete="postal-code"
            placeholder="ZIP Code *"
            maxLength={5}
            {...register("zipCode")}
            className={`w-full px-3.5 py-3 rounded-[8px] bg-white text-slate-dark text-sm placeholder-gray-500 border ${
              errors.zipCode ? "border-red-400 ring-1 ring-red-400" : "border-transparent"
            } focus:ring-2 focus:ring-accent`}
          />
          {errors.zipCode && (
            <p className="text-[11px] text-red-300 mt-1">{errors.zipCode.message}</p>
          )}
        </div>
      </div>

      {/* Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 px-6 rounded-[10px] bg-accent hover:bg-accent-hover text-white font-heading font-black text-lg uppercase tracking-wider shadow-lg hover:shadow-card-hover flex items-center justify-center gap-2 transition-all active:scale-[0.99] disabled:opacity-75 cursor-pointer"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Scheduling...</span>
          </>
        ) : (
          <>
            <span>Request Free Roof Inspection</span>
            <ArrowRight className="w-5 h-5" />
          </>
        )}
      </button>

      {/* Privacy Guarantee */}
      <div className="flex items-center justify-center gap-4 text-[11px] text-gray-300 pt-1">
        <span className="flex items-center gap-1">
          <Lock className="w-3 h-3 text-trust-green" />
          <span>No spam. No pressure.</span>
        </span>
        <span className="flex items-center gap-1">
          <ShieldCheck className="w-3 h-3 text-trust-green" />
          <span>24-Hour turnaround guarantee.</span>
        </span>
      </div>
    </form>
  );
}
