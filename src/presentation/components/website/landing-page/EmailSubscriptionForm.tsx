 'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useState } from 'react'
import { Button } from "../../ui/button"

export const EmailSubscriptionForm = () => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const supabase = createClientComponentClient()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const { error } = await supabase
        .from('email_subscriptions')
        .insert([{ email }])

      if (error) throw error

      setStatus('success')
      setEmail('')
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="h-12 px-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#29d1e0]"
        required
      />
      <Button 
        type="submit"
        disabled={status === 'loading'}
        className="h-12 px-6 bg-[#29d1e0] text-[#202731] hover:bg-[#29d1e0]/90 font-medium text-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
      >
        {status === 'loading' ? 'Registering...' : 'Register Interest'}
      </Button>
      {status === 'success' && (
        <p className="text-[#a2d719] mt-2">Thanks for registering your interest!</p>
      )}
      {status === 'error' && (
        <p className="text-red-500 mt-2">Something went wrong. Please try again.</p>
      )}
    </form>
  )
}