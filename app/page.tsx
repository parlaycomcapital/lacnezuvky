'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function PasswordGate() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
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
      setError('Zlý pokus 😜')
      setPassword('')
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-hero">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-brand-blue/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-brand-pink/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-brand-orange/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="max-w-4xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Mascot */}
            <div className="text-center lg:text-left">
              <div className="relative">
                <div className="w-80 h-80 mx-auto lg:mx-0 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/30 to-brand-pink/30 rounded-full blur-2xl animate-glow"></div>
                  <div className="relative z-10 w-full h-full flex items-center justify-center">
                    <div className="text-9xl mascot-float">😊</div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 text-4xl animate-bounce-gentle">💰</div>
                <div className="absolute -bottom-4 -left-4 text-3xl animate-bounce-gentle" style={{ animationDelay: '1s' }}>👍</div>
              </div>
              
              <h1 className="text-6xl lg:text-7xl font-black text-brand-navy mt-8 font-display glow-text">
                LACNÉ ŽUVKY
              </h1>
              <p className="text-2xl lg:text-3xl font-bold text-brand-orange mt-4 font-mascot">
                NABIJEME?!
              </p>
              <p className="text-lg text-metallic-600 mt-6 max-w-md mx-auto lg:mx-0">
                Lacné Žuvky – nabité chuťou, nie cenou.
              </p>
            </div>

            {/* Right Side - Login Form */}
            <div className="glass-card rounded-3xl p-8 lg:p-12 max-w-md mx-auto lg:mx-0">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-metallic-800 mb-2">Prístup do obchodu</h2>
                <p className="text-metallic-600">Zadajte heslo pre pokračovanie</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="password" className="block text-sm font-semibold text-metallic-700 mb-3">
                    Heslo
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-4 border-2 border-metallic-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-brand-blue/20 focus:border-brand-blue transition-premium text-center text-lg font-medium"
                    placeholder="••••••"
                    required
                    disabled={isLoading}
                  />
                </div>

                {error && (
                  <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4 text-center">
                    <p className="text-red-600 font-semibold text-lg">{error}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full btn-premium text-lg py-4 rounded-xl font-bold transition-premium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3"></div>
                      Načítavam...
                    </div>
                  ) : (
                    'NABIJEME! 🚀'
                  )}
                </button>
              </form>

              <div className="mt-8 text-center">
                <p className="text-sm text-metallic-500">
                  Len pre autorizovaných používateľov
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
                fill="url(#gradient)" opacity="0.25"></path>
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#A7D8F9" />
              <stop offset="100%" stopColor="#F78DA7" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}
