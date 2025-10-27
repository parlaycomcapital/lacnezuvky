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
    <div className="min-h-screen bg-minimal-bg">
      {/* Header */}
      <header className="bg-minimal-card border-b border-minimal-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10">
                <img 
                  src="/images/mascot.png" 
                  alt="Lacné Žuvky Mascot" 
                  className="w-full h-full object-contain mascot-bounce"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-minimal-text font-display tracking-wider">
                  LACNÉ ŽUVKY
                </h1>
                <p className="text-xs text-accent-primary font-medium">
                  Nabité aj v noci
                </p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="btn-secondary px-4 py-2 text-sm"
            >
              Odhlásiť sa
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section with Product Photography */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl lg:text-4xl font-bold text-minimal-text font-display tracking-wider mb-4">
              Lacné Žuvky — Nabité aj v noci
            </h2>
            <p className="text-minimal-text-secondary text-lg mb-8">
              Objavte našu prémiovú kolekciu snus produktov s najlepšími cenami v Európe
            </p>
            
            {/* Stats */}
            <div className="flex justify-center lg:justify-start gap-8 text-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-primary">{products.length}</div>
                <div className="text-minimal-text-secondary">Produktov</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-primary">{getCategories().length}</div>
                <div className="text-minimal-text-secondary">Značiek</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-primary">24/7</div>
                <div className="text-minimal-text-secondary">Podpora</div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Product Photography */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="/images/product-hero.png" 
                alt="Premium Snus Products" 
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-minimal-bg/20 to-transparent"></div>
            </div>
            
            {/* Floating mascot */}
            <div className="absolute -top-4 -right-4 w-16 h-16">
              <img 
                src="/images/mascot.png" 
                alt="Mascot" 
                className="w-full h-full object-contain mascot-bounce"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <div className="bg-minimal-card border border-minimal-border rounded-lg p-6 mb-6">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-minimal-card border border-minimal-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-minimal-text mb-4">Filtre</h3>
              
              {/* Brand Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-minimal-text mb-3">Značka</label>
                <CategoryFilter
                  selected={selectedCategory}
                  onChange={setSelectedCategory}
                  categories={['all', ...getCategories()]}
                />
              </div>
              
              {/* Strength Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-minimal-text mb-3">
                  Sila nikotínu: {strengthRange[0]}mg - {strengthRange[1]}mg
                </label>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="50"
                    value={strengthRange[0]}
                    onChange={(e) => setStrengthRange([parseInt(e.target.value), strengthRange[1]])}
                    className="w-full accent-accent-primary"
                  />
                  <input
                    type="range"
                    min="0"
                    max="50"
                    value={strengthRange[1]}
                    onChange={(e) => setStrengthRange([strengthRange[0], parseInt(e.target.value)])}
                    className="w-full accent-accent-primary"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Products Grid */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-minimal-text">
                {displayedProducts.length} produktov
              </h3>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-minimal-surface border border-minimal-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-accent-primary text-minimal-text"
              >
                <option value="name">Názov A-Z</option>
                <option value="price-low">Cena: Nízka → Vysoká</option>
                <option value="price-high">Cena: Vysoká → Nízka</option>
                <option value="strength-low">Sila: Nízka → Vysoká</option>
                <option value="strength-high">Sila: Vysoká → Nízka</option>
              </select>
            </div>
            
            {/* Product Grid */}
            {displayedProducts.length === 0 ? (
              <div className="text-center py-16 bg-minimal-card border border-minimal-border rounded-lg">
                <div className="text-4xl mb-4">🔍</div>
                <p className="text-xl font-semibold text-minimal-text mb-2">Žiadne produkty sa nenašli</p>
                <p className="text-minimal-text-secondary">Skúste upraviť filtre alebo vyhľadávanie</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayedProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}
