// app/api/affiliate/track-referral/route.ts
import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request: Request) {
  const { referralCode, customerEmail } = await request.json()

  // Find the affiliate
  const { data: affiliate, error: affiliateError } = await supabase
    .from('affiliates')
    .select('id')
    .eq('referral_code', referralCode)
    .single()

  if (affiliateError || !affiliate) {
    return NextResponse.json({ error: 'Invalid referral code' }, { status: 400 })
  }

  // Record the referral
  const { data, error } = await supabase
    .from('referrals')
    .insert({ affiliate_id: affiliate.id, customer_email: customerEmail })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 })
  }

  return NextResponse.json({ success: true })
}
