'use client'

export default function Footer() {
  return (
    <footer className="bg-night-card border-t border-night-border mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <div className="text-3xl mascot-glow mascot-bounce">😊</div>
              <div>
                <h3 className="text-2xl font-black text-white font-display tracking-wider">
                  LACNÉ ŽUVKY
                </h3>
                <p className="text-sm text-neon-orange font-mascot font-bold">
                  NABIJEME?!
                </p>
              </div>
            </div>
            <p className="text-night-text-light text-sm">
              Lacné Žuvky — nabité chuťou aj energiou. Najlepšie ceny v Európe.
            </p>
          </div>

          {/* Contact Section */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-bold text-white mb-4">Kontakt</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <span className="text-2xl">📱</span>
                <div>
                  <p className="text-night-text-light text-sm">Kontaktuj nás na Signal:</p>
                  <p className="text-neon-pink font-semibold animate-pulse">@golo.21</p>
                </div>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <span className="text-2xl">💬</span>
                <div>
                  <p className="text-night-text-light text-sm">Rýchle odpovede</p>
                  <p className="text-white text-sm">24/7 podpora</p>
                </div>
              </div>
            </div>
          </div>

          {/* Info Section */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-bold text-white mb-4">Informácie</h4>
            <div className="space-y-2 text-sm text-night-text-light">
              <p>139 prémiových produktov</p>
              <p>5 značiek (PABLO, KILLA, CUBA, ICEBERG, SIBERIA)</p>
              <p>Rýchle dodanie po celej Európe</p>
              <p>Bezpečné platby</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-night-border">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-night-text-light text-sm">
              © 2024 LACNÉ ŽUVKY. Všetky práva vyhradené.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <div className="text-2xl animate-bounce-gentle">😊</div>
              <p className="text-night-text-light text-sm">
                Vytvorené s ❤️ pre milovníkov kvality
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
