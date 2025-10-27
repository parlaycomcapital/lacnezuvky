'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { products, getCategories } from '@/lib/products'
import { Product } from '@/types/product'
import ProductCard from '@/components/ProductCard'
import SearchBar from '@/components/SearchBar'
import CategoryFilter from '@/components/CategoryFilter'

export default function CatalogPage() {
  const router = useRouter()
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>(products)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('name')

  useEffect(() => {
    // Check authentication
    const cookies = document.cookie.split(';').map(c => c.trim())
    const isAuthenticated = cookies.some(c => c.startsWith('authenticated=true'))
    
    if (!isAuthenticated) {
      router.push('/')
    }
  }, [router])

  useEffect(() => {
    let filtered = products

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.category === selectedCategory)
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    // Sort
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price
        case 'price-high':
          return b.price - a.price
        case 'name':
        default:
          return a.name.localeCompare(b.name)
      }
    })

    setDisplayedProducts(sorted)
  }, [searchQuery, selectedCategory, sortBy])

  const handleLogout = () => {
    document.cookie = 'authenticated=; max-age=0; path=/'
    router.push('/')
  }

  return (
    <div className="min-h-screen bg-sky-blue">
      {/* Header */}
      <header className="bg-white sticker mb-6">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-soft-pink" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                LACNÉ ŽUVKY
              </h1>
              <p className="text-sm text-deep-navy" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                NABIJEME?!
              </p>
            </div>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition-playful"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <div className="bg-white rounded-playful sticker p-6 text-center">
          <div className="text-6xl mb-4">😊💰</div>
          <h2 className="text-2xl font-bold text-deep-navy mb-2">
            Welcome to the Cheapest Chewing Gums!
          </h2>
          <p className="text-gray-600">
            Affordable prices, great quality, amazing flavors!
          </p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 mb-6">
        <div className="bg-white rounded-playful p-4 mb-4">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>

        <div className="flex flex-wrap gap-4 mb-6">
          <CategoryFilter
            selected={selectedCategory}
            onChange={setSelectedCategory}
            categories={['all', ...getCategories()]}
          />

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border-2 border-deep-navy rounded-lg focus:outline-none focus:ring-2 focus:ring-soft-pink"
          >
            <option value="name">Sort by Name</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-8">
        {displayedProducts.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-playful sticker">
            <p className="text-xl text-gray-500">No products found.</p>
            <p className="text-sm text-gray-400 mt-2">Try adjusting your filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {displayedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
