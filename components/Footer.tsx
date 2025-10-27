'use client'

export default function Footer() {
  return (
    <footer className="bg-minimal-card border-t border-minimal-border mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <div className="text-2xl mascot-bounce">😊</div>
              <div>
                <h3 className="text-xl font-bold text-minimal-text font-display tracking-wider">
                  LACNÉ ŽUVKY
                </h3>
                <p className="text-xs text-accent-primary font-medium">
                  Nabité aj v noci
                </p>
              </div>
            </div>
            <p className="text-minimal-text-secondary text-sm">
              Lacné Žuvky — nabité chuťou aj energiou. Najlepšie ceny v Európe.
            </p>
          </div>

          {/* Contact Section */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-minimal-text mb-4">Kontakt</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <span className="text-lg">📱</span>
                <div>
                  <p className="text-minimal-text-secondary text-sm">Kontaktuj nás na Signal:</p>
                  <p className="text-accent-primary font-semibold">@golo.21</p>
                </div>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <span className="text-lg">💬</span>
                <div>
                  <p className="text-minimal-text-secondary text-sm">Rýchle odpovede</p>
                  <p className="text-minimal-text text-sm">24/7 podpora</p>
                </div>
              </div>
            </div>
          </div>

          {/* Info Section */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-minimal-text mb-4">Informácie</h4>
            <div className="space-y-2 text-sm text-minimal-text-secondary">
              <p>139 prémiových produktov</p>
              <p>5 značiek (PABLO, KILLA, CUBA, ICEBERG, SIBERIA)</p>
              <p>Rýchle dodanie po celej Európe</p>
              <p>Bezpečné platby</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-minimal-border">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-minimal-text-secondary text-sm">
              © {new Date().getFullYear()} LACNÉ ŽUVKY. Všetky práva vyhradené.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <div className="text-lg mascot-bounce">😊</div>
              <p className="text-minimal-text-secondary text-sm">
                Vytvorené s ❤️ pre milovníkov kvality
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
