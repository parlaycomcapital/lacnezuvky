import { Product } from '@/types/product'
import productsData from './products-data.json'

export const products: Product[] = productsData as Product[]

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id)
}

export function getProductsByCategory(category: string): Product[] {
  if (category === 'all') return products
  return products.filter(p => p.category.toLowerCase() === category.toLowerCase())
}

export function getCategories(): string[] {
  const categories = new Set(products.map(p => p.category))
  return Array.from(categories)
}

export function searchProducts(query: string): Product[] {
  const lowerQuery = query.toLowerCase()
  return products.filter(p => 
    p.name.toLowerCase().includes(lowerQuery) ||
    p.category.toLowerCase().includes(lowerQuery) ||
    p.code.toLowerCase().includes(lowerQuery)
  )
}

export function getProductsByStrength(minStrength: number, maxStrength: number): Product[] {
  return products.filter(p => p.strength >= minStrength && p.strength <= maxStrength)
}
