import styles from '@/styles/components/topic-navigation.module.sass'

import devices from '@/assets/icons/topics/devices.png'
import supermercados from '@/assets/icons/topics/supermercados.png'
import whiskey from '@/assets/icons/topics/whiskey.png'
import ferramentas from '@/assets/icons/topics/ferramentas.png'
import cuidados from '@/assets/icons/topics/cuidados.png'
import corrida from '@/assets/icons/topics/corrida.png'
import moda from '@/assets/icons/topics/moda.png'

import TopicCard from '@/components/TopicCard'

const topics = [
  {
    title: 'Tecnologia',
    link: '#',
    image: devices,
    alt: 'Imagem de dispositivos tecnologicos',
  },
  {
    title: 'Supermercado',
    link: '#',
    image: supermercados,
    alt: 'Imagem de supermercado',
  },
  {
    title: 'Bebidas',
    link: '#',
    image: whiskey,
    alt: 'Imagem de bebida',
  },
  {
    title: 'Ferramentas',
    link: '#',
    image: ferramentas,
    alt: 'Imagem de ferramentas',
  },
  {
    title: 'Saúde',
    link: '#',
    image: cuidados,
    alt: 'Imagem de saúde',
  },
  {
    title: 'Esporte e Fitness',
    link: '#',
    image: corrida,
    alt: 'Imagem de esporte',
  },
  {
    title: 'Moda',
    link: '#',
    image: moda,
    alt: 'Imagem de roupas',
  },
]

export default function TopicNavigation() {
  return (
    <section className={styles.section}>
      {topics.map((topic, index) => (
        <TopicCard
          key={index}
          title={topic.title}
          image={topic.image}
          link={topic.link}
          alt={topic.alt}
        />
      ))}
    </section>
  )
}
