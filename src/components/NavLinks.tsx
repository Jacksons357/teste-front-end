import Package from '@/assets/icons/header/Package.png'
import Heart from '@/assets/icons/header/Heart.png'
import UserCircle from '@/assets/icons/header/UserCircle.png'
import ShoppingCart from '@/assets/icons/header/ShoppingCart.png'
import { NavLink } from 'react-router'

import styles from '@/styles/components/nav-links.module.sass'
import { useCart } from '@/lib/hooks/useCart'

const itemsShortcut = [
  {
    src: Package,
    alt: 'Icone para ver encomendas',
    url: '#',
  },
  {
    src: Heart,
    alt: 'Icone para ver favoritos',
    url: '#',
  },
  {
    src: UserCircle,
    alt: 'Icone para ver conta do usuário',
    url: '#',
  },
  {
    src: ShoppingCart,
    alt: 'Icone para ver carrinho',
    url: '#',
  },
]

export default function NavLinks() {
  const { cart } = useCart()

  return (
    <ul className={styles.header_bar_items}>
      {itemsShortcut.map((item, index) => (
        <li key={index}>
          <NavLink to={item.url}>
            <img src={item.src} alt={item.alt} />
            {item.src === ShoppingCart && cart.length > 0 && (
              <span className={styles.cart_badge}>{cart.length}</span>
            )}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}
