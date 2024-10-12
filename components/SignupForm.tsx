// components/SignupForm.tsx
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { trackReferral } from '@/lib/trackReferral'
import { supabase } from '@/lib/supabaseClient'

export default function SignupForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [referralCode, setReferralCode] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      // Sign up the user
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      })

      if (error) throw error

      // If signup is successful, create an affiliate record for the new user
      if (data.user) {
        const { error: affiliateError } = await supabase
          .from('affiliates')
          .insert({ id: data.user.id, email: data.user.email })

        if (affiliateError) throw affiliateError

        // Track the referral if a referral code was provided
        if (referralCode) {
          await trackReferral(referralCode, email)
        }

        // Redirect to dashboard
        router.push('/affiliate/dashboard')
      }
    } catch (error) {
      console.error('Signup error:', error)
      setError(error instanceof Error ? error.message : 'An error occurred during signup')
    }

    setIsLoading(false)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="referralCode">Referral Code (optional)</Label>
              <Input
                id="referralCode"
                placeholder="Enter referral code"
                value={referralCode}
                onChange={(e) => setReferralCode(e.target.value)}
              />
            </div>
          </div>
          {error && <p className="text-red-500 mt-2">{error}</p>}
          <CardFooter className="flex justify-between mt-4">
            <Button type="submit" disabled={isLoading}>
              {isLoading ? 'Signing up...' : 'Sign Up'}
            </Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  )
}
