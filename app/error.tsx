'use client'

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
    <div className="min-h-screen bg-minimal-bg flex items-center justify-center p-4">
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-6">
          <img 
            src="/images/mascot.png" 
            alt="Lacné Žuvky Mascot" 
            className="w-full h-full object-contain"
          />
        </div>
        <h2 className="text-2xl font-bold text-minimal-text mb-4">
          Niečo sa pokazilo!
        </h2>
        <p className="text-minimal-text-secondary mb-6">
          Ospravedlňujeme sa za nepríjemnosti. Skúste to znova.
        </p>
        <button
          onClick={reset}
          className="btn-primary px-6 py-3"
        >
          Skúsiť znova
        </button>
      </div>
    </div>
  )
}
