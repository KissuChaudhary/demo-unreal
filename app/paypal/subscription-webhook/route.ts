import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceRoleKey = process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

export async function POST(request: Request) {
  const { orderId, payerId, amount } = await request.json(); // Adjust according to your PayPal response

  if (!orderId || !payerId || amount === undefined) {
    return NextResponse.json(
      { message: "Missing order details" },
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
      .eq("user_id", payerId)
      .single();

    if (selectError) throw selectError;

    if (existingCredits) {
      // If the user has existing credits, update them
      const newCredits = existingCredits.credits + creditsPurchased;
      const { data: updateData, error: updateError } = await supabase
        .from("credits")
        .update({ credits: newCredits })
        .eq("user_id", payerId);

      if (updateError) throw updateError;

      return NextResponse.json({
        message: "Credits updated successfully",
        data: updateData,
      });
    } else {
      // If the user doesn't have credits, create a new row
      const { data: insertData, error: insertError } = await supabase
        .from("credits")
        .insert({ user_id: payerId, credits: creditsPurchased });

      if (insertError) throw insertError;

      return NextResponse.json({
        message: "Credits created successfully",
        data: insertData,
      });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error updating credits" },
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
