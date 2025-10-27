'use client'

import { Product } from '@/types/product'
import { useRouter } from 'next/navigation'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const router = useRouter()

  return (
    <div
      className="bg-white rounded-playful sticker p-4 hover:shadow-lg transition-playful cursor-pointer bounce-hover"
      onClick={() => router.push(`/catalog/product/${product.id}`)}
    >
      {/* Product Image Placeholder */}
      <div className="w-full h-48 bg-gradient-to-br from-sky-blue to-soft-pink rounded-lg mb-3 flex items-center justify-center">
        {product.imageUrl ? (
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover rounded-lg"
          />
        ) : (
          <span className="text-6xl">
            {product.category === 'Mint' && '🌿'}
            {product.category === 'Fruit' && '🍎'}
            {product.category === 'Bubble' && '💨'}
            {product.category === 'Sugar-Free' && '✨'}
            {!['Mint', 'Fruit', 'Bubble', 'Sugar-Free'].includes(product.category) && '🍬'}
          </span>
        )}
      </div>

      {/* Product Info */}
      <h3 className="font-bold text-lg text-deep-navy mb-1 line-clamp-2">
        {product.name}
      </h3>
      
      <p className="text-sm text-gray-600 mb-2 line-clamp-2">
        {product.description}
      </p>

      {/* Tags */}
      {product.tags && product.tags.length > 0 && (
        <div className="flex flex-wrap gap-1 mb-2">
          {product.tags.map(tag => (
            <span
              key={tag}
              className="px-2 py-1 bg-warm-orange text-white text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Price and Stock */}
      <div className="flex items-center justify-between mt-3">
        <div>
          <p className="text-2xl font-bold text-soft-pink">
            €{product.price.toFixed(2)}
          </p>
          <p className="text-xs text-gray-500">SKU: {product.sku}</p>
        </div>
        <div className="text-right">
          <p className={`text-sm font-semibold ${product.stock > 10 ? 'text-green-600' : 'text-orange-600'}`}>
            {product.stock > 0 ? `In Stock (${product.stock})` : 'Out of Stock'}
          </p>
        </div>
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={(e) => {
          e.stopPropagation()
          // TODO: Add to cart functionality
          alert('Added to cart!')
        }}
        disabled={product.stock === 0}
        className={`w-full mt-3 py-2 rounded-lg font-bold transition-playful ${
          product.stock > 0
            ? 'bg-warm-orange hover:bg-orange-600 text-white'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
      >
        {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
      </button>
    </div>
  )
}
