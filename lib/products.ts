import { Product } from '@/types/product'

// Sample products data - in production this would come from the Excel file
export const products: Product[] = [
  {
    id: '1',
    name: 'Original Chewing Gum',
    description: 'Classic flavor chewing gum with long-lasting taste.',
    price: 1.50,
    imageUrl: '/placeholder-product.jpg',
    category: 'Classic',
    sku: 'CG-001',
    stock: 100,
    tags: ['popular', 'classic'],
  },
  {
    id: '2',
    name: 'Mint Chewing Gum',
    description: 'Refreshing mint flavor for a fresh breath.',
    price: 1.50,
    imageUrl: '/placeholder-product.jpg',
    category: 'Mint',
    sku: 'CG-002',
    stock: 85,
    tags: ['fresh'],
  },
  {
    id: '3',
    name: 'Fruit Chewing Gum',
    description: 'Mixed fruit flavors - strawberry, orange, and grape.',
    price: 1.50,
    imageUrl: '/placeholder-product.jpg',
    category: 'Fruit',
    sku: 'CG-003',
    stock: 120,
    tags: ['sweet'],
  },
  {
    id: '4',
    name: 'Bubble Gum',
    description: 'Perfect for making big bubbles!',
    price: 1.50,
    imageUrl: '/placeholder-product.jpg',
    category: 'Bubble',
    sku: 'CG-004',
    stock: 90,
    tags: ['fun'],
  },
  {
    id: '5',
    name: 'Sugar-Free Gum',
    description: 'Healthy option with no sugar but all the flavor.',
    price: 1.50,
    imageUrl: '/placeholder-product.jpg',
    category: 'Sugar-Free',
    sku: 'CG-005',
    stock: 75,
    tags: ['healthy'],
  },
  {
    id: '6',
    name: 'Extra Strong Mint',
    description: 'Extra strong mint for maximum freshness.',
    price: 1.50,
    imageUrl: '/placeholder-product.jpg',
    category: 'Mint',
    sku: 'CG-006',
    stock: 65,
    tags: ['strong'],
  },
]

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
