import CardProduct from '@/components/CardProduct'
import Carousel from '@/components/Carousel'
import RelatedProductsNavigation from '@/components/RelatedProductsNavigation'
import Separator from '@/components/Separator'
import styles from '@/styles/components/related-products.module.sass'

interface RelatedProducts {
  color: string
  title: string
  showNavigation: boolean
}

export default function RelatedProducts({
  color,
  title,
  showNavigation,
}: RelatedProducts) {
  return (
    <section className={styles.content}>
      <Separator title={title} color={color} />

      {showNavigation ? (
        <RelatedProductsNavigation />
      ) : (
        <div className={styles.content_menu}>
          <a href="$">Ver todos</a>
        </div>
      )}

      <Carousel>
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </Carousel>
    </section>
  )
}
