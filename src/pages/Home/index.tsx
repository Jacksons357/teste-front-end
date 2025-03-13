import CardPartner from '@/components/CardPartner'
import BannerHomePage from './components/BannerHomePage'
import RelatedProducts from './components/RelatedProducts'
import TopicNavigation from './components/TopicNavigation'
import parceiro from '@/assets/parceiros.png'
import styles from '@/styles/pages/home.module.sass'
import Brands from '@/components/Brands'
import brandLogo from '@/assets/Logo.png'

const partners = [
  {
    title: 'Parceiros',
    description: 'Parceiros description teste example',
    image: parceiro,
  },
  {
    title: 'Parceiros',
    description: 'Parceiros description teste example',
    image: parceiro,
  },
]

const brands = [
  {
    image: brandLogo,
    alt: 'logo da marca X',
    link: '#',
  },
  {
    image: brandLogo,
    alt: 'logo da marca X',
    link: '#',
  },
  {
    image: brandLogo,
    alt: 'logo da marca X',
    link: '#',
  },
  {
    image: brandLogo,
    alt: 'logo da marca X',
    link: '#',
  },
  {
    image: brandLogo,
    alt: 'logo da marca X',
    link: '#',
  },
]

export default function Home() {
  return (
    <main>
      <BannerHomePage />

      <section className={styles.topic_navigation}>
        <TopicNavigation />
      </section>

      <section className={styles.related_products}>
        <RelatedProducts
          showNavigation={true}
          title="Produtos Relacionados"
          color="#3442B5"
        />
      </section>

      <section className={styles.partners}>
        {partners.map((partner, index) => (
          <CardPartner
            key={index}
            image={partner.image}
            title={partner.title}
            description={partner.description}
          />
        ))}
      </section>

      <section className={styles.related_products}>
        <RelatedProducts
          showNavigation={false}
          title="Produtos Relacionados"
          color="#3F3F40"
        />
      </section>

      <section className={styles.partners}>
        {partners.map((partner, index) => (
          <CardPartner
            key={index}
            image={partner.image}
            title={partner.title}
            description={partner.description}
          />
        ))}
      </section>

      <section className={styles.brands}>
        <h1>Navegue por Marcas</h1>
        <div className={styles.brands_item}>
          {brands.map((brand, item) => (
            <Brands
              key={item}
              image={brand.image}
              alt={brand.alt}
              link={brand.link}
            />
          ))}
        </div>
      </section>

      <section className={styles.related_products}>
        <RelatedProducts
          showNavigation={false}
          title="Produtos Relacionados"
          color="#3442B5"
        />
      </section>
    </main>
  )
}
