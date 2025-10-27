'use client'

import { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { getProductById, products } from '@/lib/products'
import { Product, PRICE_TIERS, calculatePrice } from '@/types/product'

export default function ProductDetailPage() {
  const router = useRouter()
  const params = useParams()
  const productId = params.id as string
  const [product, setProduct] = useState<Product | null>(null)
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    const cookies = document.cookie.split(';').map(c => c.trim())
    const isAuthenticated = cookies.some(c => c.startsWith('authenticated=true'))

    if (!isAuthenticated) {
      router.push('/')
      return
    }

    const foundProduct = getProductById(productId)
    if (!foundProduct) {
      router.push('/catalog')
      return
    }

    setProduct(foundProduct)
  }, [productId, router])

  if (!product) {
    return (
      <div className="min-h-screen bg-minimal-bg flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-accent-primary/30 border-t-accent-primary rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-minimal-text-secondary font-semibold">Načítavam...</p>
        </div>
      </div>
    )
  }

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

  const handleAddToCart = () => {
    const priceInfo = calculatePrice(product, quantity)
    alert(`Pridané do košíka: ${quantity}x ${product.name} (${priceInfo.tier.label})`)
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  const priceInfo = calculatePrice(product, quantity)

  return (
    <div className="min-h-screen bg-minimal-bg">
      {/* Header */}
      <header className="bg-minimal-card border-b border-minimal-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <button
            onClick={() => router.push('/catalog')}
            className="flex items-center space-x-2 text-minimal-text hover:text-accent-primary transition-colors font-semibold"
          >
            <span>←</span>
            <span>Späť do katalógu</span>
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 pb-12">
        <div className="bg-minimal-card border border-minimal-border rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="relative">
              <div className="w-full h-96 lg:h-[500px] bg-minimal-surface rounded-2xl flex items-center justify-center relative overflow-hidden border border-minimal-border">
                {product.imageUrl ? (
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                ) : (
                  <div className="text-center">
                    <div className="text-6xl mb-4">{getCategoryIcon(product.category)}</div>
                    <div className="text-xl font-bold text-minimal-text-secondary">{product.category}</div>
                  </div>
                )}
                
                {/* Floating mascot */}
                <div className="absolute top-4 right-4 w-12 h-12">
                  <img 
                    src="/images/mascot.png" 
                    alt="Mascot" 
                    className="w-full h-full object-contain animate-bounce-gentle"
                  />
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-minimal-text mb-4 font-display tracking-wider">
                  {product.name}
                </h1>
                <p className="text-lg text-minimal-text-secondary font-medium">
                  {product.code}
                </p>
              </div>

              {/* Dynamic Pricing Display */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="text-4xl font-bold text-accent-primary">
                      €{priceInfo.totalPrice.toFixed(2)}
                    </div>
                    <div className="text-sm text-minimal-text-secondary">
                      {priceInfo.tier.description}
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-bold border ${getStrengthColor(product.strength)}`}>
                    💥 {product.strength}mg nikotínu
                  </div>
                </div>

                {/* Quantity Selector */}
                <div>
                  <label className="block text-lg font-bold text-minimal-text mb-3">
                    Množstvo:
                  </label>
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-12 h-12 bg-minimal-surface hover:bg-minimal-card rounded-lg font-bold text-xl transition-colors border border-minimal-border text-minimal-text"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      min="1"
                      max={product.stock}
                      className="w-24 text-center text-xl font-bold bg-minimal-surface border-2 border-minimal-border rounded-lg py-3 focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-accent-primary text-minimal-text"
                    />
                    <button
                      onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                      className="w-12 h-12 bg-minimal-surface hover:bg-minimal-card rounded-lg font-bold text-xl transition-colors border border-minimal-border text-minimal-text"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Enhanced Pricing Chart */}
                <div className="bg-minimal-surface/50 rounded-lg p-4 border border-minimal-border">
                  <p className="text-sm text-minimal-text-secondary mb-3 flex items-center">
                    💸 Buy more, pay less
                    <span className="ml-2 text-sm text-accent-primary animate-pulse">💥</span>
                  </p>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className={`text-center p-3 rounded transition-colors ${
                      priceInfo.tier.key === 'tier1' ? 'bg-accent-primary/20 border border-accent-primary/50' : 'bg-minimal-card/50'
                    }`}>
                      <div className="font-bold text-minimal-text">1-10 pcs</div>
                      <div className="text-accent-primary">€4 per unit</div>
                    </div>
                    <div className={`text-center p-3 rounded transition-colors ${
                      priceInfo.tier.key === 'tier2' ? 'bg-accent-primary/20 border border-accent-primary/50' : 'bg-minimal-card/50'
                    }`}>
                      <div className="font-bold text-minimal-text">11-49 pcs</div>
                      <div className="text-accent-primary">€3.5 per unit</div>
                    </div>
                    <div className={`text-center p-3 rounded transition-colors ${
                      priceInfo.tier.key === 'tier3' ? 'bg-accent-primary/20 border border-accent-primary/50' : 'bg-minimal-card/50'
                    }`}>
                      <div className="font-bold text-minimal-text">50+ pcs</div>
                      <div className="text-accent-primary">€3 per unit</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stock Status */}
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${product.stock > 10 ? 'bg-accent-success' : 'bg-accent-warning'}`}></div>
                <p className={`text-lg font-semibold ${product.stock > 10 ? 'text-accent-success' : 'text-accent-warning'}`}>
                  {product.stock > 0 ? `✓ Na sklade (${product.stock} kusov)` : '✗ Nie je na sklade'}
                </p>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                disabled={product.stock === 0}
                className={`w-full py-4 rounded-lg font-bold text-xl transition-colors ${
                  product.stock > 0
                    ? 'btn-primary hover:scale-105'
                    : 'bg-minimal-border text-minimal-text-muted cursor-not-allowed'
                }`}
              >
                {product.stock > 0 ? 'Pridať do košíka' : 'Nie je na sklade'}
              </button>

              {/* Tags */}
              {product.tags && product.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {product.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-accent-primary text-white text-sm rounded-full font-bold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-minimal-text mb-8 font-display">Podobné produkty</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(relatedProduct => (
                <div
                  key={relatedProduct.id}
                  onClick={() => router.push(`/catalog/product/${relatedProduct.id}`)}
                  className="product-card p-4 hover:scale-105 transition-transform cursor-pointer"
                >
                  <div className="w-full h-32 bg-minimal-surface rounded-lg mb-3 flex items-center justify-center border border-minimal-border">
                    <span className="text-4xl">{getCategoryIcon(relatedProduct.category)}</span>
                  </div>
                  <h3 className="font-bold text-minimal-text mb-2 line-clamp-2">
                    {relatedProduct.name}
                  </h3>
                  <p className="text-xl font-bold text-accent-primary">
                    €{relatedProduct.prices.tier2.toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}