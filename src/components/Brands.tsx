import styles from '@/styles/components/brands.module.sass'

interface BrandsProps {
  image: string
  alt: string
  link: string
}

export default function Brands({ image, alt, link }: BrandsProps) {
  return (
    <a className={styles.container} href={link}>
      <img src={image} alt={alt} />
    </a>
  )
}
