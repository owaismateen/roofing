import { NextRequest, NextResponse } from "next/server";
import { quoteFormSchema, quickQuoteSchema } from "@/lib/validations";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Check if it's a quick quote (3 fields) or full quote (5 fields)
    let validatedData;
    let isQuickQuote = false;

    if (body.serviceType) {
      const result = quoteFormSchema.safeParse(body);
      if (!result.success) {
        return NextResponse.json(
          {
            success: false,
            message: "Validation failed",
            errors: result.error.flatten().fieldErrors,
          },
          { status: 400 }
        );
      }
      validatedData = result.data;
    } else {
      isQuickQuote = true;
      const result = quickQuoteSchema.safeParse(body);
      if (!result.success) {
        return NextResponse.json(
          {
            success: false,
            message: "Validation failed",
            errors: result.error.flatten().fieldErrors,
          },
          { status: 400 }
        );
      }
      validatedData = result.data;
    }

    // Generate a unique quote reference ID
    const quoteId = `RC-${Date.now().toString(36).toUpperCase()}-${Math.floor(
      100 + Math.random() * 900
    )}`;

    // In a production environment, this would save to a database (e.g. Postgres / Prisma)
    // and trigger an email / SMS notification to the sales dispatch team (e.g. Resend / Twilio)
    console.log("[QUOTE REQUEST RECEIVED]", {
      quoteId,
      timestamp: new Date().toISOString(),
      type: isQuickQuote ? "Quick Inspection Request" : "Full Quote Request",
      data: validatedData,
    });

    return NextResponse.json(
      {
        success: true,
        quoteId,
        message:
          "Thank you! Your inspection request has been submitted. Our certified estimator will call you within 24 hours to schedule your free inspection.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[QUOTE API ERROR]", error);
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred while processing your request. Please call us directly.",
      },
      { status: 500 }
    );
  }
}
