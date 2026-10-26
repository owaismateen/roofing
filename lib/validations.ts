import { z } from "zod";

export const quoteFormSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Please enter your full name" })
    .max(80, { message: "Name is too long" }),
  phone: z
    .string()
    .min(10, { message: "Please enter a valid 10-digit phone number" })
    .regex(/^[\d\s()+-]+$/, { message: "Invalid phone number format" }),
  email: z
    .string()
    .email({ message: "Please enter a valid email address" }),
  serviceType: z
    .string()
    .min(1, { message: "Please select a service" }),
  zipCode: z
    .string()
    .regex(/^\d{5}(-\d{4})?$/, { message: "Please enter a valid 5-digit ZIP code" }),
  notes: z.string().optional(),
});

export type QuoteFormData = z.infer<typeof quoteFormSchema>;

export const quickQuoteSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Please enter your full name" }),
  phone: z
    .string()
    .min(10, { message: "Please enter a valid phone number" })
    .regex(/^[\d\s()+-]+$/, { message: "Invalid phone number format" }),
  zipCode: z
    .string()
    .regex(/^\d{5}(-\d{4})?$/, { message: "Please enter a valid 5-digit ZIP code" }),
});

export type QuickQuoteData = z.infer<typeof quickQuoteSchema>;
