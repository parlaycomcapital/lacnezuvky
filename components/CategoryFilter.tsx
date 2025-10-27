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
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => onChange(category)}
            className={`px-3 py-2 rounded font-medium transition-colors flex items-center space-x-2 text-sm ${
              selected === category
                ? 'bg-accent-primary text-white'
                : 'bg-minimal-surface text-minimal-text-secondary hover:bg-minimal-card hover:text-minimal-text border border-minimal-border'
            }`}
          >
            <span className="text-sm">{getCategoryIcon(category)}</span>
            <span>{category === 'all' ? 'Všetky' : category}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
