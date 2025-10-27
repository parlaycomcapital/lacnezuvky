'use client'

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Hľadať produkty, značky, kódy..."
        className="w-full px-6 py-4 pr-16 text-lg bg-night-card border-2 border-night-border rounded-2xl focus:outline-none focus:ring-4 focus:ring-neon-pink/20 focus:border-neon-pink transition-premium font-medium text-white placeholder-night-text-light"
      />
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
        <div className="text-2xl animate-pulse">🔍</div>
      </div>
      
      {/* Search suggestions overlay */}
      {value && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-night-card rounded-xl shadow-lg border border-night-border z-10">
          <div className="p-4 text-sm text-night-text-light">
            Hľadáte: <span className="font-semibold text-neon-pink">"{value}"</span>
          </div>
        </div>
      )}
    </div>
  )
}
