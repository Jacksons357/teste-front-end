import styles from '@/styles/components/related-products-navigation.module.sass'
import { NavLink, useLocation } from 'react-router'

const products = [
  {
    title: 'celular',
    link: '/phone',
  },
  {
    title: 'acessórios',
    link: '/accessories',
  },
  {
    title: 'tablets',
    link: '/tablets',
  },
  {
    title: 'notebooks',
    link: '/notebooks',
  },
  {
    title: 'tvs',
    link: '/tvs',
  },
  {
    title: 'ver todos',
    link: '/all',
  },
]

export default function RelatedProductsNavigation() {
  const location = useLocation()

  return (
    <ul className={styles.content}>
      {products.map((product, index) => {
        const isActive = location.pathname === product.link

        return (
          <NavLink
            key={index}
            to={product.link}
            className={styles.content_link}
          >
            <li
              className={`${styles.content_item} ${isActive ? styles.content_item_active : styles.content_item_default}`}
            >
              {product.title}
            </li>
          </NavLink>
        )
      })}
    </ul>
  )
}
