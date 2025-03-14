import Button from '@/components/Button'
import styles from '@/styles/components/banner-home-page.module.sass'

export default function BannerHomePage() {
  return (
    <section className={styles.content_banner}>
      <div className={styles.content}>
        <h1>
          Venha conhecer nossas <br />
          promoções
        </h1>
        <h2>
          <strong>50% Off</strong> nos produtos
        </h2>

        <a href="#related_products">
          <Button text="Ver Produto" variant="primary" />
        </a>
      </div>
    </section>
  )
}
