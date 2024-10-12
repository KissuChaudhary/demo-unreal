// app/api/affiliate/record-conversion/route.ts
import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request: Request) {
  const { customerEmail, amount } = await request.json()

  // Find the referral
  const { data: referral, error: referralError } = await supabase
    .from('referrals')
    .select('id')
    .eq('customer_email', customerEmail)
    .single()

  if (referralError || !referral) {
    return NextResponse.json({ error: 'No referral found for this customer' }, { status: 400 })
  }

  // Record the conversion
  const { data, error } = await supabase
    .from('conversions')
    .insert({ referral_id: referral.id, amount })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 })
  }

  // Update referral status
  await supabase
    .from('referrals')
    .update({ status: 'converted' })
    .eq('id', referral.id)

  return NextResponse.json({ success: true })
}
