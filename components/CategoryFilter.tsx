'use client'

interface CategoryFilterProps {
  selected: string
  onChange: (category: string) => void
  categories: string[]
}

export default function CategoryFilter({ selected, onChange, categories }: CategoryFilterProps) {
  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: string } = {
      'all': '🌟',
      'PABLO': '🔵',
      'KILLA': '⚡',
      'CUBA': '🌴',
      'ICEBERG': '❄️',
      'SIBERIA': '🏔️',
    }
    return icons[category] || '🍃'
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold text-night-text-dark">Filtrovať podľa značky</h3>
      <div className="flex flex-wrap gap-3">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => onChange(category)}
            className={`px-6 py-3 rounded-xl font-bold transition-premium flex items-center space-x-2 ${
              selected === category
                ? 'bg-gradient-cta text-white shadow-lg transform scale-105 neon-glow'
                : 'bg-night-card text-night-text hover:bg-night-surface border-2 border-night-border hover:border-neon-pink'
            }`}
          >
            <span className="text-lg">{getCategoryIcon(category)}</span>
            <span>{category === 'all' ? 'Všetky' : category}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
