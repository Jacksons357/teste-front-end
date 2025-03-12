import ShieldCheck from '../assets/icons/ShieldCheck.png'
import Truck from '../assets/icons/Truck.png'
import CreditCard from '../assets/icons/CreditCard.png'

import Logo from '../assets/Logo.png'
import Package from '../assets/icons/Package.png'
import Heart from '../assets/icons/Heart.png'
import UserCircle from '../assets/icons/UserCircle.png'
import ShoppingCart from '../assets/icons/ShoppingCart.png'

import { TbCrown } from 'react-icons/tb'

import SearchInput from './SearchInput'

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
        <p>
          <strong>Parcele</strong> suas compras
        </p>
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
    url: '#',
  },
  {
    text: 'Supermercado',
    url: '#',
  },
  {
    text: 'Livros',
    url: '#',
  },
  {
    text: 'Moda',
    url: '#',
  },
  {
    text: 'Lançamentos',
    url: '#',
  },
  {
    text: <strong>Oferta do dia</strong>,
    url: '#',
  },
  {
    text: 'Assinatura',
    url: '#',
    icon: <TbCrown size={20} />,
  },
]

export default function Header() {
  return (
    <header className="header">
      <ul className="header_tags">
        {tags.map((tag, index) => (
          <li key={index}>
            <img src={tag.icon} alt={tag.alt} />
            <p>{tag.text}</p>
          </li>
        ))}
      </ul>

      <div className="header_bar">
        <img src={Logo} alt="logo da econverse" className="logo" />

        <SearchInput />

        <ul className="header_bar_items">
          {itemsShortcut.map((item, index) => (
            <li key={index}>
              <a href={item.url}>
                <img src={item.src} alt={item.alt} />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <nav className="header_navbar">
        <ul className="header_navbar_list">
          {itemsNavBar.map((item, index) => (
            <li key={index}>
              <a href={item.url}>
                <span>{item.icon}</span>
                <p>{item.text}</p>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
