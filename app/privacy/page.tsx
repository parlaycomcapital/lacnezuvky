import Link from 'next/link'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-minimal-bg text-minimal-text">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="space-y-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-minimal-text mb-4">
              Privacy Policy
            </h1>
            <p className="text-minimal-text-secondary">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="prose prose-invert max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-accent-primary mb-4">
                Data Collection
              </h2>
              <p className="text-minimal-text-secondary leading-relaxed">
                We collect minimal data necessary for order processing. This includes:
              </p>
              <ul className="list-disc list-inside text-minimal-text-secondary space-y-2 ml-4">
                <li>Contact information for order fulfillment</li>
                <li>Product preferences for service improvement</li>
                <li>Anonymous usage statistics for website optimization</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-accent-primary mb-4">
                Data Protection
              </h2>
              <p className="text-minimal-text-secondary leading-relaxed">
                All data is encrypted in transit and at rest. We implement industry-standard 
                security measures to protect your information from unauthorized access, 
                alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-accent-primary mb-4">
                Third-Party Services
              </h2>
              <p className="text-minimal-text-secondary leading-relaxed">
                We do not share personal information with third parties except as necessary 
                for order fulfillment. All third-party integrations are carefully vetted 
                for security and privacy compliance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-accent-primary mb-4">
                Your Rights
              </h2>
              <p className="text-minimal-text-secondary leading-relaxed">
                You have the right to access, modify, or delete your personal data at any time. 
                Contact us through the provided channels to exercise these rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-accent-primary mb-4">
                Contact
              </h2>
              <p className="text-minimal-text-secondary leading-relaxed">
                For privacy-related inquiries, contact us via Signal: @golo.21
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
        </div>
      </div>
    </div>
  )
}
