'use client'

interface CategoryFilterProps {
  selected: string
  onChange: (category: string) => void
  categories: string[]
}

export default function CategoryFilter({ selected, onChange, categories }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map(category => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={`px-4 py-2 rounded-lg font-semibold transition-playful ${
            selected === category
              ? 'bg-soft-pink text-white sticker'
              : 'bg-white text-deep-navy hover:bg-gray-100'
          }`}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </div>
  )
}
