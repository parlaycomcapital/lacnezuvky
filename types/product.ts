export interface Product {
  id: string
  code: string
  category: string
  name: string
  strength: number // MG/Pouch - nicotine strength
  prices: {
    tier1: number // 1-10 pcs = €4 per unit
    tier2: number // 11-49 pcs = €3.5 per unit  
    tier3: number // 50+ pcs = €3 per unit
  }
  imageUrl?: string
  tags?: string[]
  stock: number
  description?: string
  flavor?: string
}

export interface ProductVariant {
  name: string
  value: string
  price?: number
}

export interface CartItem {
  product: Product
  quantity: number
  selectedTier: 'tier1' | 'tier2' | 'tier3'
}

export interface PriceTier {
  key: 'tier1' | 'tier2' | 'tier3'
  label: string
  minQuantity: number
  maxQuantity?: number
  pricePerUnit: number
  description: string
}

export const PRICE_TIERS: PriceTier[] = [
  { key: 'tier1', label: '1-10 pcs', minQuantity: 1, maxQuantity: 10, pricePerUnit: 4.0, description: '€4 per unit' },
  { key: 'tier2', label: '11-49 pcs', minQuantity: 11, maxQuantity: 49, pricePerUnit: 3.5, description: '€3.5 per unit' },
  { key: 'tier3', label: '50+ pcs', minQuantity: 50, pricePerUnit: 3.0, description: '€3 per unit' },
]

// Helper function to calculate price based on quantity
export function calculatePrice(product: Product, quantity: number): { tier: PriceTier, totalPrice: number, pricePerUnit: number } {
  let selectedTier: PriceTier
  
  if (quantity >= 50) {
    selectedTier = PRICE_TIERS[2] // 50+ pcs
  } else if (quantity >= 11) {
    selectedTier = PRICE_TIERS[1] // 11-49 pcs
  } else {
    selectedTier = PRICE_TIERS[0] // 1-10 pcs
  }
  
  const totalPrice = quantity * selectedTier.pricePerUnit
  
  return {
    tier: selectedTier,
    totalPrice,
    pricePerUnit: selectedTier.pricePerUnit
  }
}
