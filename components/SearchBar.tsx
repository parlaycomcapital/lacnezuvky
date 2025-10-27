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
        className="w-full px-4 py-3 pr-12 bg-minimal-surface border border-minimal-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-accent-primary transition-colors text-minimal-text placeholder-minimal-text-secondary"
      />
      <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
        <div className="text-lg text-minimal-text-secondary">🔍</div>
      </div>
      
      {/* Search suggestions overlay */}
      {value && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-minimal-card rounded-lg shadow-lg border border-minimal-border z-10">
          <div className="p-3 text-sm text-minimal-text-secondary">
            Hľadáte: <span className="font-medium text-accent-primary">"{value}"</span>
          </div>
        </div>
      )}
    </div>
  )
}
