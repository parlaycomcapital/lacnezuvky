export default function Loading() {
  return (
    <div className="min-h-screen bg-minimal-bg flex items-center justify-center">
      <div className="text-center space-y-6">
        {/* Mascot Loading Animation */}
        <div className="w-16 h-16 mx-auto relative">
          <img 
            src="/images/mascot.png" 
            alt="Loading..." 
            className="w-full h-full object-contain animate-spin"
          />
        </div>
        
        {/* Loading Text */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-minimal-text">
            Načítavam...
          </h2>
          <p className="text-minimal-text-secondary">
            Pripravujeme najlepšie produkty pre vás
          </p>
        </div>

        {/* Loading Dots */}
        <div className="flex justify-center space-x-2">
          <div className="w-2 h-2 bg-accent-primary rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-accent-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-accent-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  )
}
