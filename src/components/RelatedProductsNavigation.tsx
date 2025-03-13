import styles from '@/styles/components/related-products-navigation.module.sass'

const products = [
  {
    title: 'celular',
    link: '#',
  },
  {
    title: 'acessórios',
    link: '#',
  },
  {
    title: 'tablets',
    link: '#',
  },
  {
    title: 'notebooks',
    link: '#',
  },
  {
    title: 'tvs',
    link: '#',
  },
  {
    title: 'ver todos',
    link: '#',
  },
]

export default function RelatedProductsNavigation() {
  return (
    <ul className={styles.content}>
      {products.map((product, index) => (
        <a key={index} href={product.link} className={styles.content_link}>
          <li className={styles.content_item}>{product.title}</li>
        </a>
      ))}
    </ul>
  )
}
