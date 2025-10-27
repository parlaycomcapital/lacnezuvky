'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function PasswordGate() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [shake, setShake] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate loading for better UX
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    if (password === 'lz25') {
      document.cookie = `authenticated=true; max-age=28800; path=/` // 8 hours
      router.push('/catalog')
    } else {
      setError('Zle! Skús znova 😜')
      setPassword('')
      setIsLoading(false)
      setShake(true)
      setTimeout(() => setShake(false), 500)
    }
  }

  return (
    <div className="min-h-screen bg-minimal-bg flex items-center justify-center p-4">
      {/* Minimalist Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-minimal-bg to-minimal-surface"></div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-md">
        <div className="text-center mb-8">
          {/* Mascot Logo */}
          <div className="w-24 h-24 mx-auto mb-6">
            <div className="text-6xl mascot-bounce">😊</div>
          </div>
          
          <h1 className="text-4xl font-bold text-minimal-text font-display tracking-wider mb-2">
            LACNÉ ŽUVKY
          </h1>
          <p className="text-minimal-text-secondary text-lg">
            Nabité aj v noci
          </p>
        </div>

        {/* Login Form */}
        <div className={`bg-minimal-card border border-minimal-border rounded-lg p-8 ${shake ? 'animate-pulse' : ''}`}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-minimal-text mb-2">
                Heslo
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-minimal-surface border border-minimal-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-accent-primary transition-colors text-minimal-text"
                placeholder="Zadajte heslo"
                required
                disabled={isLoading}
              />
            </div>

            {error && (
              <div className="bg-red-900/20 border border-red-500/50 rounded-lg p-3 text-center">
                <p className="text-red-400 font-medium">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full btn-primary py-3 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                  Načítavam...
                </div>
              ) : (
                'NABIJEME! 🔋'
              )}
            </button>
          </form>
        </div>
      </div>

    </div>
  )
}
