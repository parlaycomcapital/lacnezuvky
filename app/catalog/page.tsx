'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { products, getCategories, searchProducts } from '@/lib/products'
import { Product } from '@/types/product'
import ProductCard from '@/components/ProductCard'
import SearchBar from '@/components/SearchBar'
import CategoryFilter from '@/components/CategoryFilter'
import Footer from '@/components/Footer'

export default function CatalogPage() {
  const router = useRouter()
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>(products)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('name')
  const [strengthRange, setStrengthRange] = useState<[number, number]>([0, 50])

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
      filtered = searchProducts(searchQuery)
      if (selectedCategory !== 'all') {
        filtered = filtered.filter(p => p.category === selectedCategory)
      }
    }

    // Filter by strength
    filtered = filtered.filter(p => p.strength >= strengthRange[0] && p.strength <= strengthRange[1])

    // Sort
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.prices.tier2 - b.prices.tier2
        case 'price-high':
          return b.prices.tier2 - a.prices.tier2
        case 'strength-low':
          return a.strength - b.strength
        case 'strength-high':
          return b.strength - a.strength
        case 'name':
        default:
          return a.name.localeCompare(b.name)
      }
    })

    setDisplayedProducts(sorted)
  }, [searchQuery, selectedCategory, sortBy, strengthRange])

  const handleLogout = () => {
    document.cookie = 'authenticated=; max-age=0; path=/'
    router.push('/')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-night-bg to-night-surface">
      {/* Header */}
      <header className="glass-card sticky top-0 z-50 mb-8">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-4xl mascot-wave">😊</div>
              <div>
                <h1 className="text-3xl font-black text-white font-display tracking-wider">
                  LACNÉ ŽUVKY
                </h1>
                <p className="text-sm text-neon-orange font-mascot font-bold">
                  NABIJEME?!
                </p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="px-6 py-3 bg-night-card hover:bg-night-surface rounded-xl transition-premium font-semibold text-white border border-night-border"
            >
              Odhlásiť sa
            </button>
          </div>
        </div>
      </header>

      {/* Cinematic Hero Section */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="glass-card rounded-3xl p-8 lg:p-12 text-center relative overflow-hidden shadow-cinematic">
          {/* Floating Tin Background Elements */}
          <div className="absolute top-4 right-4 w-12 h-16 bg-gradient-to-br from-tin-gold to-tin-bronze rounded tin-float tin-gold" style={{ animationDelay: '0s' }}></div>
          <div className="absolute bottom-4 left-4 w-10 h-14 bg-gradient-to-br from-tin-silver to-tin-steel rounded tin-float tin-silver" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 right-1/4 w-8 h-12 bg-gradient-to-br from-tin-bronze to-tin-gold rounded tin-float tin-bronze" style={{ animationDelay: '4s' }}></div>
          
          {/* Animated Elements */}
          <div className="absolute top-4 right-4 text-6xl opacity-20 animate-float">💰</div>
          <div className="absolute bottom-4 left-4 text-4xl opacity-20 animate-float" style={{ animationDelay: '2s' }}>👍</div>
          
          <div className="relative z-10">
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-4 font-display tracking-wider animate-glow-pulse">
              Lacné Žuvky — nabité chuťou aj energiou
            </h2>
            <p className="text-xl text-night-text-light mb-8 max-w-2xl mx-auto">
              Objavte našu prémiovú kolekciu snus produktov s najlepšími cenami v Európe
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="bg-neon-pink/20 px-4 py-2 rounded-full font-semibold text-white border border-neon-pink/30 hover:bg-neon-pink/30 transition-premium">
                {products.length} produktov
              </div>
              <div className="bg-neon-blue/20 px-4 py-2 rounded-full font-semibold text-white border border-neon-blue/30 hover:bg-neon-blue/30 transition-premium">
                {getCategories().length} značiek
              </div>
              <div className="bg-neon-orange/20 px-4 py-2 rounded-full font-semibold text-white border border-neon-orange/30 hover:bg-neon-orange/30 transition-premium">
                Rýchle dodanie
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <div className="glass-card rounded-2xl p-6 mb-6">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Category Filter */}
          <div className="lg:col-span-2">
            <CategoryFilter
              selected={selectedCategory}
              onChange={setSelectedCategory}
              categories={['all', ...getCategories()]}
            />
          </div>

          {/* Sort and Strength Filter */}
          <div className="space-y-4">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-4 py-3 border-2 border-metallic-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-brand-blue/20 focus:border-brand-blue transition-premium font-semibold"
            >
              <option value="name">Zoradiť podľa názvu</option>
              <option value="price-low">Cena: od najnižšej</option>
              <option value="price-high">Cena: od najvyššej</option>
              <option value="strength-low">Sila: od najnižšej</option>
              <option value="strength-high">Sila: od najvyššej</option>
            </select>

            <div>
              <label className="block text-sm font-semibold text-metallic-700 mb-2">
                Sila nikotínu: {strengthRange[0]}mg - {strengthRange[1]}mg
              </label>
              <div className="flex space-x-2">
                <input
                  type="range"
                  min="0"
                  max="50"
                  value={strengthRange[0]}
                  onChange={(e) => setStrengthRange([parseInt(e.target.value), strengthRange[1]])}
                  className="flex-1"
                />
                <input
                  type="range"
                  min="0"
                  max="50"
                  value={strengthRange[1]}
                  onChange={(e) => setStrengthRange([strengthRange[0], parseInt(e.target.value)])}
                  className="flex-1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-12">
        {displayedProducts.length === 0 ? (
          <div className="text-center py-16 glass-card rounded-3xl">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-2xl font-bold text-metallic-600 mb-2">Žiadne produkty sa nenašli</p>
            <p className="text-metallic-500">Skúste upraviť filtre alebo vyhľadávanie</p>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-metallic-800">
                {displayedProducts.length} produktov
              </h3>
              <div className="text-sm text-metallic-600">
                Zobrazené {displayedProducts.length} z {products.length} produktov
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {displayedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </>
        )}
      </div>
      
      <Footer />
    </div>
  )
}
