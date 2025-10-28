'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-minimal-bg flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        <div className="space-y-8">
          {/* Mascot */}
          <div className="w-32 h-32 mx-auto mb-6 relative">
            <img 
              src="/images/mascot.png" 
              alt="Lacné Žuvky Mascot" 
              className="w-full h-full object-contain"
            />
          </div>

          {/* Error Message */}
          <div className="space-y-4">
            <h1 className="text-6xl font-bold text-accent-primary">500</h1>
            <h2 className="text-2xl font-semibold text-minimal-text">
              Chyba servera
            </h2>
            <p className="text-minimal-text-secondary text-lg">
              Oops! Niečo sa pokazilo na našej strane.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => reset()}
              className="btn-secondary px-6 py-3"
            >
              Skúsiť znova
            </button>
            <Link 
              href="/catalog"
              className="btn-primary px-6 py-3"
            >
              Prejsť do katalógu
            </Link>
          </div>

          {/* Security Notice */}
          <div className="mt-12 p-4 bg-minimal-surface/50 rounded-lg border border-minimal-border">
            <p className="text-sm text-minimal-text-secondary">
              🔒 Ak problém pretrváva, kontaktujte nás na Signal: @golo.21
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
