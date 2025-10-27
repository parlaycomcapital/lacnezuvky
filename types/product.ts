export interface Product {
  id: string
  code: string
  category: string
  name: string
  strength: number // MG/Pouch
  prices: {
    tier1: number // 10 pcs *minimum
    tier2: number // 1–49 pcs
    tier3: number // 50–149 pcs
    tier4: number // 150+ pcs
    tier5: number // 240+ pcs
  }
  imageUrl?: string
  tags?: string[]
  stock: number
}

export interface ProductVariant {
  name: string
  value: string
  price?: number
}

export interface CartItem {
  product: Product
  quantity: number
  selectedTier: 'tier1' | 'tier2' | 'tier3' | 'tier4' | 'tier5'
}

export interface PriceTier {
  key: 'tier1' | 'tier2' | 'tier3' | 'tier4' | 'tier5'
  label: string
  minQuantity: number
  maxQuantity?: number
}

export const PRICE_TIERS: PriceTier[] = [
  { key: 'tier1', label: '10 pcs', minQuantity: 10, maxQuantity: 49 },
  { key: 'tier2', label: '1-49 pcs', minQuantity: 1, maxQuantity: 49 },
  { key: 'tier3', label: '50-149 pcs', minQuantity: 50, maxQuantity: 149 },
  { key: 'tier4', label: '150+ pcs', minQuantity: 150, maxQuantity: 239 },
  { key: 'tier5', label: '240+ pcs', minQuantity: 240 },
]
