import styles from '@/styles/components/brands.module.sass'
import { NavLink } from 'react-router'

interface BrandsProps {
  image: string
  alt: string
  link: string
}

export default function Brands({ image, alt, link }: BrandsProps) {
  return (
    <NavLink className={styles.container} to={link}>
      <img src={image} alt={alt} />
    </NavLink>
  )
}
