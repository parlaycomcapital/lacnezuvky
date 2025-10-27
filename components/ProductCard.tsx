'use client'

import { Product, PRICE_TIERS, calculatePrice } from '@/types/product'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const router = useRouter()
  const [quantity, setQuantity] = useState(1)
  const [isHovered, setIsHovered] = useState(false)
  
  const priceInfo = calculatePrice(product, quantity)

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
    if (strength >= 20) return 'text-red-400 bg-red-900/20 border-red-500/30'
    if (strength >= 15) return 'text-orange-400 bg-orange-900/20 border-orange-500/30'
    if (strength >= 10) return 'text-yellow-400 bg-yellow-900/20 border-yellow-500/30'
    return 'text-green-400 bg-green-900/20 border-green-500/30'
  }

  return (
    <div
      className="tin-card p-6 cursor-pointer group transition-premium hover:neon-glow"
      onClick={() => router.push(`/catalog/product/${product.id}`)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative mb-6">
        <div className="w-full h-48 bg-gradient-to-br from-night-card to-night-surface rounded-xl flex items-center justify-center relative overflow-hidden border border-night-border">
          {product.imageUrl ? (
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-full object-cover rounded-xl transition-premium group-hover:scale-110"
            />
          ) : (
            <div className="text-center">
              <div className="text-6xl mb-2">{getCategoryIcon(product.category)}</div>
              <div className="text-sm font-semibold text-night-text-light">{product.category}</div>
            </div>
          )}
          
          {/* Neon overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-neon-pink/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-premium"></div>
          
          {/* Floating mascot on hover */}
          {isHovered && (
            <div className="absolute top-2 right-2 text-2xl animate-bounce-gentle">
              😊
            </div>
          )}
        </div>

        {/* Brand Badge */}
        <div className="absolute top-3 left-3 bg-night-card/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-white border border-night-border">
          {product.category}
        </div>

        {/* Nicotine Strength Badge with Tooltip */}
        <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold border ${getStrengthColor(product.strength)}`}>
          <span className="relative group/strength">
            {product.strength}mg
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-night-card text-white text-xs rounded opacity-0 group-hover/strength:opacity-100 transition-opacity whitespace-nowrap border border-night-border">
              💥 {product.strength}mg of power!
            </div>
          </span>
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-4">
        <div>
          <h3 className="font-bold text-xl text-white mb-2 line-clamp-2 group-hover:text-neon-pink transition-premium">
            {product.name}
          </h3>
          <p className="text-sm text-night-text-light font-medium">
            {product.code}
          </p>
        </div>

        {/* Dynamic Pricing Display */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-white">Cena:</span>
            <div className="text-right">
              <div className="text-2xl font-bold text-neon-orange">
                €{priceInfo.totalPrice.toFixed(2)}
              </div>
              <div className="text-xs text-night-text-light">
                {priceInfo.tier.description}
              </div>
            </div>
          </div>
          
          {/* Quantity Selector */}
          <div className="flex items-center space-x-2">
            <button
              onClick={(e) => {
                e.stopPropagation()
                setQuantity(Math.max(1, quantity - 1))
              }}
              className="w-8 h-8 bg-night-card hover:bg-night-surface rounded-lg font-bold text-white border border-night-border transition-premium"
            >
              -
            </button>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
              onClick={(e) => e.stopPropagation()}
              min="1"
              max={product.stock}
              className="w-16 text-center text-sm font-bold bg-night-card border border-night-border rounded-lg py-2 focus:outline-none focus:ring-2 focus:ring-neon-pink/20 focus:border-neon-pink text-white"
            />
            <button
              onClick={(e) => {
                e.stopPropagation()
                setQuantity(Math.min(product.stock, quantity + 1))
              }}
              className="w-8 h-8 bg-night-card hover:bg-night-surface rounded-lg font-bold text-white border border-night-border transition-premium"
            >
              +
            </button>
          </div>
        </div>

        {/* Pricing Chart */}
        <div className="bg-night-card/50 rounded-lg p-3 border border-night-border">
          <p className="text-xs text-night-text-light mb-2">Buy more, pay less 💥</p>
          <div className="flex justify-between text-xs">
            <span>1-10: €4</span>
            <span>11-49: €3.5</span>
            <span>50+: €3</span>
          </div>
        </div>

        {/* Stock Status */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className={`w-2 h-2 rounded-full ${product.stock > 10 ? 'bg-green-400' : 'bg-orange-400'}`}></div>
            <span className="text-sm font-medium text-night-text-light">
              {product.stock > 0 ? `Na sklade (${product.stock})` : 'Nie je na sklade'}
            </span>
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={(e) => {
            e.stopPropagation()
            // TODO: Add to cart functionality
            alert(`Pridané do košíka: ${quantity}x ${product.name} (${priceInfo.tier.label})`)
          }}
          disabled={product.stock === 0}
          className={`w-full py-3 rounded-xl font-bold transition-premium ${
            product.stock > 0
              ? 'btn-premium hover:scale-105 neon-glow'
              : 'bg-night-border text-night-text-light cursor-not-allowed'
          }`}
        >
          {product.stock > 0 ? 'Pridať do košíka' : 'Nie je na sklade'}
        </button>
      </div>
    </div>
  )
}
