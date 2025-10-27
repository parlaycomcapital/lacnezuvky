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
        className="w-full px-6 py-4 pr-16 text-lg border-2 border-metallic-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand-blue/20 focus:border-brand-blue transition-premium font-medium placeholder-metallic-400"
      />
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
        <div className="text-2xl animate-pulse">🔍</div>
      </div>
      
      {/* Search suggestions overlay could go here */}
      {value && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-lg border border-metallic-200 z-10">
          <div className="p-4 text-sm text-metallic-600">
            Hľadáte: <span className="font-semibold text-brand-blue">"{value}"</span>
          </div>
        </div>
      )}
    </div>
  )
}
