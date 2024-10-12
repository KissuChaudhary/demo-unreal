// app/affiliate/dashboard/page.tsx
import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

async function getAffiliateStats(affiliateId: string) {
  const supabase = createServerComponentClient({ cookies })
  
  const { data: referrals, error: referralsError } = await supabase
    .from('referrals')
    .select('id, status, conversions(amount)')
    .eq('affiliate_id', affiliateId)

  if (referralsError) {
    console.error('Error fetching referrals:', referralsError)
    return null
  }

  const totalReferrals = referrals.length
  const totalConversions = referrals.filter(r => r.status === 'converted').length
  const totalEarnings = referrals.reduce((sum, r) => sum + (r.conversions?.[0]?.amount || 0), 0)

  return { totalReferrals, totalConversions, totalEarnings }
}

export default async function AffiliateDashboard() {
  const supabase = createServerComponentClient({ cookies })
  
  // Get the authenticated user
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return <div>Please log in to view your affiliate dashboard</div>
  }

  const stats = await getAffiliateStats(user.id)

  if (!stats) {
    return <div>Error loading affiliate stats</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Affiliate Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Referrals</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{stats.totalReferrals}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Conversions</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{stats.totalConversions}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Earnings</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">${stats.totalEarnings.toFixed(2)}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
