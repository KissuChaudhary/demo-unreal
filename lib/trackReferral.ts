// lib/trackReferral.ts
export async function trackReferral(referralCode: string, customerEmail: string) {
  try {
    const response = await fetch('/api/affiliate/track-referral', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ referralCode, customerEmail }),
    })
    const data = await response.json()
    return data.success
  } catch (error) {
    console.error('Error tracking referral:', error)
    return false
  }
}
