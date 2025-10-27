'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function PasswordGate() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (password === 'lz25') {
      // Set a session cookie (in production, use a proper API route with secure cookies)
      document.cookie = `authenticated=true; max-age=28800; path=/` // 8 hours
      router.push('/catalog')
    } else {
      setError('Incorrect password. Please try again.')
      setPassword('')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-blue to-soft-pink p-4">
      <div className="max-w-md w-full bg-white rounded-playful sticker p-8 text-center">
        <h1 className="text-4xl font-bold mb-2 text-soft-pink" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
          LACNÉ ŽUVKY
        </h1>
        <p className="text-deep-navy mb-6" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
          NABIJEME?!
        </p>
        
        <div className="mb-6">
          <div className="w-32 h-32 mx-auto bg-sky-blue rounded-full flex items-center justify-center">
            <span className="text-6xl">😊</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-deep-navy mb-2">
              Enter Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border-2 border-deep-navy rounded-lg focus:outline-none focus:ring-2 focus:ring-soft-pink"
              placeholder="Password"
              required
            />
          </div>

          {error && (
            <div className="text-red-600 text-sm bg-red-50 p-3 rounded-lg border border-red-200">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-warm-orange hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-playful transform hover:scale-105 sticker"
          >
            Enter Shop
          </button>
        </form>

        <p className="text-xs text-gray-500 mt-4">
          For authorized users only
        </p>
      </div>
    </div>
  )
}
