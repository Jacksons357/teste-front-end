import { createContext } from 'react'

interface CartContextType {
  cart: CartItem[]
  addToCart: (item: CartItem) => void
}

export const CartContext = createContext<CartContextType | undefined>(undefined)
