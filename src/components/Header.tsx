import styles from '@/styles/components/header.module.sass'

import ShieldCheck from '@/assets/icons/header/ShieldCheck.png'
import Truck from '@/assets/icons/header/Truck.png'
import CreditCard from '@/assets/icons/header/CreditCard.png'

import Logo from '@/assets/Logo.png'
import Package from '@/assets/icons/header/Package.png'
import Heart from '@/assets/icons/header/Heart.png'
import UserCircle from '@/assets/icons/header/UserCircle.png'
import ShoppingCart from '@/assets/icons/header/ShoppingCart.png'

import { TbCrown } from 'react-icons/tb'
import SearchInput from './SearchInput'
import { NavLink } from 'react-router'

const tags = [
  {
    icon: ShieldCheck,
    alt: 'Icone de proteção',
    text: (
      <>
        Compra <strong>100% segura</strong>
      </>
    ),
  },
  {
    icon: Truck,
    alt: 'Icone de caminhão',
    text: (
      <>
        <strong>Frete grátis</strong> acima de R$ 200
      </>
    ),
  },
  {
    icon: CreditCard,
    alt: 'Icone de cartão de crédito',
    text: (
      <>
        <strong>Parcele</strong> suas compras
      </>
    ),
  },
]

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

const itemsNavBar = [
  {
    text: 'Todas Categorias',
    url: '/all-categories',
  },
  {
    text: 'Supermercado',
    url: '/market',
  },
  {
    text: 'Livros',
    url: '/books',
  },
  {
    text: 'Moda',
    url: '/fashion',
  },
  {
    text: 'Lançamentos',
    url: '/releases',
  },
  {
    text: <strong>Oferta do dia</strong>,
    url: '/offer-day',
  },
  {
    text: 'Assinatura',
    url: '/subscription',
    icon: <TbCrown size={20} />,
  },
]

export default function Header() {
  return (
    <header className={styles.header}>
      <ul className={styles.header_tags}>
        {tags.map((tag, index) => (
          <li key={index}>
            <img src={tag.icon} alt={tag.alt} />
            <p>{tag.text}</p>
          </li>
        ))}
      </ul>

      <div className={styles.header_bar}>
        <a href="/">
          <img src={Logo} alt="logo da econverse" className={styles.logo} />
        </a>

        <SearchInput />

        <ul className={styles.header_bar_items}>
          {itemsShortcut.map((item, index) => (
            <li key={index}>
              <NavLink to={item.url}>
                <img src={item.src} alt={item.alt} />
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <nav className={styles.header_navbar}>
        <ul className={styles.header_navbar_list}>
          {itemsNavBar.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.url}
                className={({ isActive }) =>
                  isActive ? `${styles.active_link}` : `${styles.inactive_link}`
                }
              >
                <span>{item.icon}</span>
                <p>{item.text}</p>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
