import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

const generatedSignature = (
  razorpayOrderId: string,
  razorpayPaymentId: string
) => {
  const keySecret = process.env.RAZORPAY_KEY_SECRET;
  if (!keySecret) {
    throw new Error(
      "Razorpay key secret is not defined in environment variables."
    );
  }
  const sig = crypto
    .createHmac("sha256", keySecret)
    .update(razorpayOrderId + "|" + razorpayPaymentId)
    .digest("hex");
  return sig;
};

export async function POST(request: NextRequest) {
  const {
    orderCreationId,
    razorpayPaymentId,
    razorpaySignature,
    amount,
    userId,
  } = await request.json();

  // Verify the signature
  const signature = generatedSignature(orderCreationId, razorpayPaymentId);
  if (signature !== razorpaySignature) {
    return NextResponse.json(
      { message: "Payment verification failed", isOk: false },
      { status: 400 }
    );
  }

  try {
    // Determine credits based on the amount
    const creditsPurchased = determineCreditsFromAmount(amount);

    // Check if the user already has credits
    const { data: existingCredits, error: selectError } = await supabase
      .from("credits")
      .select("*")
      .eq("user_id", userId)
      .single();

    if (selectError && selectError.code !== "PGRST116") {
      // Handle cases where there's a database error (excluding the "no rows" error)
      throw selectError;
    }

    if (existingCredits) {
      // If the user has existing credits, update them
      const newCredits = existingCredits.credits + creditsPurchased;
      const { data: updateData, error: updateError } = await supabase
        .from("credits")
        .update({ credits: newCredits })
        .eq("user_id", userId);

      if (updateError) throw updateError;

      return NextResponse.json({
        message: "Payment verified and credits updated successfully",
        data: updateData,
      });
    } else {
      // If the user doesn't have credits, create a new row
      const { data: insertData, error: insertError } = await supabase
        .from("credits")
        .insert({ user_id: userId, credits: creditsPurchased });

      if (insertError) throw insertError;

      return NextResponse.json({
        message: "Payment verified and credits created successfully",
        data: insertData,
      });
    }
  } catch (error) {
    console.error("Error updating credits:", error);
    return NextResponse.json(
      {
        message: "Payment verified, but failed to update credits",
        isOk: false,
      },
      { status: 500 }
    );
  }
}

function determineCreditsFromAmount(amount: number): number {
  // Mapping amount to credits
  if (amount === 12) return 1;
  if (amount === 30) return 3;
  if (amount === 40) return 5;
  return 0; // Default to 0 if no matching amount
}
