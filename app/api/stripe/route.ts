export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

// Export the GET handler
export async function GET(req: NextRequest) {
  // Get the base URL of the app
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

  try {
    // Extract the price ID from the query parameters
    const { searchParams } = new URL(req.url);
    const priceId = searchParams.get("priceId");

    if (!priceId) {
      return NextResponse.json(
        { error: "Price ID is required" },
        { status: 400 }
      );
    }

    const successUrl = `${baseUrl}/overview`;
    const cancelUrl = `${baseUrl}/overview`;

    // Create a Stripe checkout session
    const stripeSession = await stripe.checkout.sessions.create({
      success_url: successUrl,
      cancel_url: cancelUrl,
      payment_method_types: ["card"],
      mode: "payment", // Use 'payment' for one-time payments
      billing_address_collection: "auto",
      line_items: [
        {
          price: priceId, // Directly use the passed price ID
          quantity: 1,
        },
      ],
    });

    return new NextResponse(JSON.stringify({ url: stripeSession.url }));
  } catch (error) {
    console.error("[STRIPE_ERROR]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
