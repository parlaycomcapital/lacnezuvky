'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function NotFound() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-minimal-bg flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Mascot */}
          <div className="w-32 h-32 mx-auto mb-6 relative">
            <img 
              src="/images/mascot.png" 
              alt="Lacné Žuvky Mascot" 
              className="w-full h-full object-contain mascot-bounce"
            />
          </div>

          {/* Error Message */}
          <div className="space-y-4">
            <h1 className="text-6xl font-bold text-accent-primary">404</h1>
            <h2 className="text-2xl font-semibold text-minimal-text">
              Stránka sa nenašla
            </h2>
            <p className="text-minimal-text-secondary text-lg">
              Oops! Táto stránka neexistuje alebo bola presunutá.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => router.back()}
              className="btn-secondary px-6 py-3"
            >
              ← Späť
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
              🔒 Táto stránka je chránená. Ak si myslíte, že je to chyba, 
              kontaktujte nás na Signal: @golo.21
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
