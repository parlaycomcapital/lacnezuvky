'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-minimal-bg text-minimal-text">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-minimal-text mb-4">
              Terms of Service
            </h1>
            <p className="text-minimal-text-secondary">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="prose prose-invert max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-accent-primary mb-4">
                Service Description
              </h2>
              <p className="text-minimal-text-secondary leading-relaxed">
                This website provides information about premium tobacco products. 
                All products are sold for personal use only and in compliance with 
                applicable local laws and regulations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-accent-primary mb-4">
                Age Verification
              </h2>
              <p className="text-minimal-text-secondary leading-relaxed">
                You must be at least 18 years old to access this website and purchase products. 
                By using this service, you confirm that you meet the minimum age requirement 
                in your jurisdiction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-accent-primary mb-4">
                Product Information
              </h2>
              <p className="text-minimal-text-secondary leading-relaxed">
                Product descriptions, images, and specifications are provided for informational 
                purposes. We strive for accuracy but cannot guarantee that all information 
                is complete or current.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-accent-primary mb-4">
                Order Processing
              </h2>
              <p className="text-minimal-text-secondary leading-relaxed">
                Orders are processed securely and confidentially. We reserve the right to 
                refuse service to anyone at our discretion. All transactions are final 
                unless otherwise specified.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-accent-primary mb-4">
                Limitation of Liability
              </h2>
              <p className="text-minimal-text-secondary leading-relaxed">
                This service is provided "as is" without warranties of any kind. We are not 
                liable for any damages arising from the use of this website or products.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-accent-primary mb-4">
                Contact
              </h2>
              <p className="text-minimal-text-secondary leading-relaxed">
                For questions about these terms, contact us via Signal: @golo.21
              </p>
            </section>
          </div>

          <div className="pt-8 border-t border-minimal-border">
            <Link 
              href="/catalog"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>← Back to Catalog</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
