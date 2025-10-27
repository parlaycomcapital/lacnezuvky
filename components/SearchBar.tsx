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
        placeholder="Search products..."
        className="w-full px-4 py-3 pr-12 border-2 border-deep-navy rounded-lg focus:outline-none focus:ring-2 focus:ring-soft-pink"
      />
      <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-2xl">
        🔍
      </span>
    </div>
  )
}
