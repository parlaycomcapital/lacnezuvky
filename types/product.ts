export interface Product {
  id: string
  name: string
  description: string
  price: number
  imageUrl?: string
  category: string
  sku: string
  stock: number
  tags?: string[]
  variants?: ProductVariant[]
}

export interface ProductVariant {
  name: string
  value: string
  price?: number
}

export interface CartItem {
  product: Product
  quantity: number
  selectedVariant?: string
}
