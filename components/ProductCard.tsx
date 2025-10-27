'use client'

import { Product, PRICE_TIERS } from '@/types/product'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const router = useRouter()
  const [selectedTier, setSelectedTier] = useState<'tier1' | 'tier2' | 'tier3' | 'tier4' | 'tier5'>('tier2')
  const [isHovered, setIsHovered] = useState(false)

  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: string } = {
      'PABLO': '🔵',
      'KILLA': '⚡',
      'CUBA': '🌴',
      'ICEBERG': '❄️',
      'SIBERIA': '🏔️',
    }
    return icons[category] || '🍃'
  }

  const getStrengthColor = (strength: number) => {
    if (strength >= 20) return 'text-red-600 bg-red-50'
    if (strength >= 15) return 'text-orange-600 bg-orange-50'
    if (strength >= 10) return 'text-yellow-600 bg-yellow-50'
    return 'text-green-600 bg-green-50'
  }

  const currentPrice = product.prices[selectedTier]

  return (
    <div
      className="tin-card p-6 cursor-pointer group transition-premium"
      onClick={() => router.push(`/catalog/product/${product.id}`)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative mb-6">
        <div className="w-full h-48 bg-gradient-to-br from-metallic-50 to-metallic-100 rounded-xl flex items-center justify-center relative overflow-hidden">
          {product.imageUrl ? (
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-full object-cover rounded-xl transition-premium group-hover:scale-110"
            />
          ) : (
            <div className="text-center">
              <div className="text-6xl mb-2">{getCategoryIcon(product.category)}</div>
              <div className="text-sm font-semibold text-metallic-600">{product.category}</div>
            </div>
          )}
          
          {/* Premium overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-premium"></div>
          
          {/* Floating mascot on hover */}
          {isHovered && (
            <div className="absolute top-2 right-2 text-2xl animate-bounce-gentle">
              😊
            </div>
          )}
        </div>

        {/* Brand Badge */}
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-metallic-800">
          {product.category}
        </div>

        {/* Strength Badge */}
        <div className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-bold ${getStrengthColor(product.strength)}`}>
          {product.strength}mg
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-4">
        <div>
          <h3 className="font-bold text-xl text-metallic-800 mb-2 line-clamp-2 group-hover:text-brand-blue transition-premium">
            {product.name}
          </h3>
          <p className="text-sm text-metallic-600 font-medium">
            {product.code}
          </p>
        </div>

        {/* Price Tiers */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-metallic-700">Cena:</span>
            <span className="text-2xl font-bold text-brand-orange">
              €{currentPrice.toFixed(2)}
            </span>
          </div>
          
          <select
            value={selectedTier}
            onChange={(e) => setSelectedTier(e.target.value as any)}
            onClick={(e) => e.stopPropagation()}
            className="w-full text-sm border border-metallic-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-premium"
          >
            {PRICE_TIERS.map(tier => (
              <option key={tier.key} value={tier.key}>
                {tier.label} - €{product.prices[tier.key].toFixed(2)}
              </option>
            ))}
          </select>
        </div>

        {/* Stock Status */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className={`w-2 h-2 rounded-full ${product.stock > 10 ? 'bg-green-500' : 'bg-orange-500'}`}></div>
            <span className="text-sm font-medium text-metallic-600">
              {product.stock > 0 ? `Na sklade (${product.stock})` : 'Nie je na sklade'}
            </span>
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={(e) => {
            e.stopPropagation()
            // TODO: Add to cart functionality
            alert(`Pridané do košíka: ${product.name} (${PRICE_TIERS.find(t => t.key === selectedTier)?.label})`)
          }}
          disabled={product.stock === 0}
          className={`w-full py-3 rounded-xl font-bold transition-premium ${
            product.stock > 0
              ? 'btn-premium hover:scale-105'
              : 'bg-metallic-200 text-metallic-400 cursor-not-allowed'
          }`}
        >
          {product.stock > 0 ? 'Pridať do košíka' : 'Nie je na sklade'}
        </button>
      </div>
    </div>
  )
}
