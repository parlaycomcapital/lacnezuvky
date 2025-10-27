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
      className="product-card p-6 cursor-pointer group"
      onClick={() => router.push(`/catalog/product/${product.id}`)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative mb-4">
        <div className="w-full h-48 bg-minimal-surface rounded-lg flex items-center justify-center relative overflow-hidden border border-minimal-border">
          {product.imageUrl ? (
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-full object-cover rounded-lg transition-transform group-hover:scale-105"
            />
          ) : (
            <div className="text-center">
              <div className="text-4xl mb-2">{getCategoryIcon(product.category)}</div>
              <div className="text-sm font-medium text-minimal-text-secondary">{product.category}</div>
            </div>
          )}
          
          {/* Brand Badge */}
          <div className="absolute top-2 left-2 bg-minimal-card/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-minimal-text border border-minimal-border">
            {product.category}
          </div>

          {/* Nicotine Strength Badge */}
          <div className={`absolute top-2 right-2 px-2 py-1 rounded text-xs font-medium border ${getStrengthColor(product.strength)}`}>
            {product.strength}mg
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-3">
        <div>
          <h3 className="font-semibold text-lg text-minimal-text mb-1 line-clamp-2 group-hover:text-accent-primary transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-minimal-text-secondary">
            {product.code}
          </p>
        </div>

        {/* Pricing Display */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-minimal-text">Cena:</span>
            <div className="text-right">
              <div className="text-xl font-bold text-accent-primary">
                €{priceInfo.totalPrice.toFixed(2)}
              </div>
              <div className="text-xs text-minimal-text-secondary">
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
              className="w-8 h-8 bg-minimal-surface hover:bg-minimal-card rounded border border-minimal-border font-medium text-minimal-text transition-colors"
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
              className="w-16 text-center text-sm font-medium bg-minimal-surface border border-minimal-border rounded py-2 focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-accent-primary text-minimal-text"
            />
            <button
              onClick={(e) => {
                e.stopPropagation()
                setQuantity(Math.min(product.stock, quantity + 1))
              }}
              className="w-8 h-8 bg-minimal-surface hover:bg-minimal-card rounded border border-minimal-border font-medium text-minimal-text transition-colors"
            >
              +
            </button>
          </div>
        </div>

        {/* Pricing Chart */}
        <div className="bg-minimal-surface/50 rounded p-3 border border-minimal-border">
          <p className="text-xs text-minimal-text-secondary mb-2">
            💸 Buy more, pay less
          </p>
          <div className="grid grid-cols-3 gap-1 text-xs">
            <div className="text-center p-1 rounded bg-minimal-card/50">
              <div className="font-medium text-minimal-text">1-10</div>
              <div className="text-accent-primary">€4</div>
            </div>
            <div className="text-center p-1 rounded bg-minimal-card/50">
              <div className="font-medium text-minimal-text">11-49</div>
              <div className="text-accent-primary">€3.5</div>
            </div>
            <div className="text-center p-1 rounded bg-minimal-card/50">
              <div className="font-medium text-minimal-text">50+</div>
              <div className="text-accent-primary">€3</div>
            </div>
          </div>
        </div>

        {/* Stock Status */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className={`w-2 h-2 rounded-full ${product.stock > 10 ? 'bg-accent-success' : 'bg-accent-warning'}`}></div>
            <span className="text-sm text-minimal-text-secondary">
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
          className={`w-full py-2 rounded font-medium transition-colors ${
            product.stock > 0
              ? 'btn-primary hover:scale-105'
              : 'bg-minimal-border text-minimal-text-muted cursor-not-allowed'
          }`}
        >
          {product.stock > 0 ? 'Pridať do košíka' : 'Nie je na sklade'}
        </button>
      </div>
    </div>
  )
}
