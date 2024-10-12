// lib/recordConversion.ts
export async function recordConversion(customerEmail: string, amount: number) {
  try {
    const response = await fetch('/api/affiliate/record-conversion', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ customerEmail, amount }),
    })
    const data = await response.json()
    return data.success
  } catch (error) {
    console.error('Error recording conversion:', error)
    return false
  }
}
