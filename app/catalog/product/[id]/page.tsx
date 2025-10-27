'use client'

import { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { getProductById, products } from '@/lib/products'
import { Product } from '@/types/product'

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
      <div className="min-h-screen bg-sky-blue flex items-center justify-center">
        <p>Loading...</p>
      </div>
    )
  }

  const handleAddToCart = () => {
    alert(`Added ${quantity} x ${product.name} to cart!`)
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  return (
    <div className="min-h-screen bg-sky-blue">
      {/* Header */}
      <header className="bg-white sticker mb-6">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <button
            onClick={() => router.push('/catalog')}
            className="text-deep-navy hover:text-soft-pink transition-playful"
          >
            ← Back to Catalog
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 pb-8">
        <div className="bg-white rounded-playful sticker p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Image */}
            <div>
              <div className="w-full h-96 bg-gradient-to-br from-sky-blue to-soft-pink rounded-lg flex items-center justify-center">
                {product.imageUrl ? (
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  <span className="text-9xl">
                    {product.category === 'Mint' && '🌿'}
                    {product.category === 'Fruit' && '🍎'}
                    {product.category === 'Bubble' && '💨'}
                    {product.category === 'Sugar-Free' && '✨'}
                    {!['Mint', 'Fruit', 'Bubble', 'Sugar-Free'].includes(product.category) && '🍬'}
                  </span>
                )}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-4xl font-bold text-deep-navy mb-2">
                {product.name}
              </h1>

              <div className="flex items-center gap-4 mb-4">
                <p className="text-3xl font-bold text-soft-pink">
                  €{product.price.toFixed(2)}
                </p>
                {product.tags && product.tags.includes('popular') && (
                  <span className="px-3 py-1 bg-warm-orange text-white text-sm rounded-full font-bold">
                    Popular!
                  </span>
                )}
              </div>

              <p className="text-gray-600 mb-6">{product.description}</p>

              {/* SKU */}
              <div className="mb-6">
                <p className="text-sm text-gray-500">
                  <strong>SKU:</strong> {product.sku}
                </p>
                <p className="text-sm text-gray-500">
                  <strong>Category:</strong> {product.category}
                </p>
              </div>

              {/* Stock Status */}
              <div className="mb-6">
                <p className={`text-lg font-semibold ${product.stock > 10 ? 'text-green-600' : 'text-orange-600'}`}>
                  {product.stock > 0 ? `✓ In Stock (${product.stock} available)` : '✗ Out of Stock'}
                </p>
              </div>

              {/* Quantity Selector */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-deep-navy mb-2">
                  Quantity
                </label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 bg-gray-200 rounded-lg font-bold hover:bg-gray-300 transition-playful"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    min="1"
                    max={product.stock}
                    className="w-20 text-center border-2 border-deep-navy rounded-lg py-2"
                  />
                  <button
                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                    className="w-10 h-10 bg-gray-200 rounded-lg font-bold hover:bg-gray-300 transition-playful"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                disabled={product.stock === 0}
                className={`w-full py-4 rounded-lg font-bold text-lg transition-playful sticker ${
                  product.stock > 0
                    ? 'bg-warm-orange hover:bg-orange-600 text-white bounce-hover'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
              </button>

              {/* Tags */}
              {product.tags && product.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {product.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-warm-orange text-white text-sm rounded-full"
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
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-deep-navy mb-4">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedProducts.map(relatedProduct => (
                <div
                  key={relatedProduct.id}
                  onClick={() => router.push(`/catalog/product/${relatedProduct.id}`)}
                  className="bg-white rounded-playful sticker p-4 hover:shadow-lg transition-playful cursor-pointer"
                >
                  <div className="w-full h-32 bg-gradient-to-br from-sky-blue to-soft-pink rounded-lg mb-2 flex items-center justify-center">
                    <span className="text-4xl">🍬</span>
                  </div>
                  <h3 className="font-bold text-deep-navy mb-1">
                    {relatedProduct.name}
                  </h3>
                  <p className="text-xl font-bold text-soft-pink">
                    €{relatedProduct.price.toFixed(2)}
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
