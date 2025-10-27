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
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-night-bg to-night-surface">
      {/* Cinematic Background with Floating Tins */}
      <div className="absolute inset-0">
        {/* Floating Tin Elements */}
        <div className="absolute top-20 left-10 w-16 h-20 bg-gradient-to-br from-tin-gold to-tin-bronze rounded-lg tin-float tin-gold" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-40 right-20 w-14 h-18 bg-gradient-to-br from-tin-silver to-tin-steel rounded-lg tin-float tin-silver" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-18 h-22 bg-gradient-to-br from-tin-bronze to-tin-gold rounded-lg tin-float tin-bronze" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-16 h-20 bg-gradient-to-br from-tin-steel to-tin-silver rounded-lg tin-float tin-silver" style={{ animationDelay: '6s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-20 h-24 bg-gradient-to-br from-tin-gold to-tin-bronze rounded-lg tin-float tin-gold" style={{ animationDelay: '8s' }}></div>
        
        {/* Animated Background Particles */}
        <div className="particle absolute top-20 left-10"></div>
        <div className="particle absolute top-40 right-20"></div>
        <div className="particle absolute bottom-32 left-1/4"></div>
        <div className="particle absolute bottom-20 right-1/3"></div>
        <div className="particle absolute top-1/2 left-1/2"></div>
        
        {/* Glowing Orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-neon-pink/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-neon-blue/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-neon-orange/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="max-w-6xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Side - Mascot & Branding */}
            <div className="text-center lg:text-left">
              <div className="relative mb-8">
                <div className="w-96 h-96 mx-auto lg:mx-0 relative">
                  {/* Cinematic glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/40 to-neon-blue/40 rounded-full blur-3xl animate-glow-pulse"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-orange/20 to-neon-pink/20 rounded-full blur-2xl animate-glow"></div>
                  
                  {/* Mascot container with enhanced animations */}
                  <div className="relative z-10 w-full h-full flex items-center justify-center">
                    <div className="text-9xl mascot-glow mascot-bounce">😊</div>
                  </div>
                  
                  {/* Floating elements with tin-inspired styling */}
                  <div className="absolute -top-6 -right-6 text-5xl animate-bounce-gentle mascot-wiggle">💰</div>
                  <div className="absolute -bottom-6 -left-6 text-4xl animate-bounce-gentle mascot-wiggle" style={{ animationDelay: '1s' }}>👍</div>
                  
                  {/* Additional floating tins around mascot */}
                  <div className="absolute top-4 left-4 w-8 h-10 bg-gradient-to-br from-tin-gold to-tin-bronze rounded tin-float tin-gold" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute bottom-4 right-4 w-6 h-8 bg-gradient-to-br from-tin-silver to-tin-steel rounded tin-float tin-silver" style={{ animationDelay: '3s' }}></div>
                </div>
              </div>
              
              <h1 className="text-6xl lg:text-8xl font-black text-white mt-8 font-display tracking-wider animate-glow-pulse">
                LACNÉ ŽUVKY
              </h1>
              <p className="text-3xl lg:text-4xl font-bold text-neon-orange mt-4 font-mascot animate-pulse-neon">
                NABIJEME?!
              </p>
              <p className="text-xl text-night-text-light mt-6 max-w-md mx-auto lg:mx-0">
                Lacné Žuvky — nabité chuťou aj energiou.
              </p>
            </div>

            {/* Right Side - Login Form */}
            <div className={`glass-card rounded-3xl p-8 lg:p-12 max-w-md mx-auto lg:mx-0 ${shake ? 'animate-pulse' : ''}`}>
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-2">Prístup do obchodu</h2>
                <p className="text-night-text-light">Zadajte heslo pre pokračovanie</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="password" className="block text-sm font-semibold text-white mb-3">
                    Heslo
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-6 py-4 bg-night-card border-2 border-night-border rounded-xl focus:outline-none focus:ring-4 focus:ring-neon-pink/20 focus:border-neon-pink transition-premium text-center text-lg font-medium text-white placeholder-night-text-light"
                    placeholder="••••••"
                    required
                    disabled={isLoading}
                  />
                </div>

                {error && (
                  <div className="bg-red-900/20 border-2 border-red-500/50 rounded-xl p-4 text-center animate-pulse">
                    <p className="text-red-400 font-semibold text-lg">{error}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full btn-premium text-lg py-4 rounded-xl font-bold transition-premium disabled:opacity-50 disabled:cursor-not-allowed neon-glow"
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
                <p className="text-sm text-night-text-light">
                  Len pre autorizovaných používateľov
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave with Neon Gradient */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
                fill="url(#neonGradient)" opacity="0.3"></path>
          <defs>
            <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF6FA5" />
              <stop offset="50%" stopColor="#A7D8F9" />
              <stop offset="100%" stopColor="#FF914D" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}
