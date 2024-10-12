// app/api/affiliate/register/route.ts
import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request: Request) {
  const { name, email } = await request.json()

  // Generate a unique referral code
  const referralCode = Math.random().toString(36).substring(7)

  const { data, error } = await supabase
    .from('affiliates')
    .insert({ name, email, referral_code: referralCode })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 })
  }

  return NextResponse.json({ success: true, referralCode })
}
