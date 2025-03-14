import { CartContext } from '@/context/CartContext'
import { ReactNode, useState } from 'react'

export default function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])

  function addToCart(item: CartItem) {
    setCart(prevCart => {
      const existingItem = prevCart.find(
        cartItem => cartItem.productName === item.productName
      )

      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.productName === item.productName
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        )
      } else {
        return [...prevCart, item]
      }
    })
  }

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}
