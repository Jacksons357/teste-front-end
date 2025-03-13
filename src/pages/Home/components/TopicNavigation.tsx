import styles from '@/styles/components/topic-navigation.module.sass'

import devices from '@/assets/icons/topics/devices.png'
import devicesActive from '@/assets/icons/topics/devices_active.png'
import supermercados from '@/assets/icons/topics/supermercados.png'
import supermercadosActive from '@/assets/icons/topics/supermercados_active.png'
import whiskey from '@/assets/icons/topics/whiskey.png'
import whiskeyActive from '@/assets/icons/topics/whiskey_active.png'
import ferramentas from '@/assets/icons/topics/ferramentas.png'
import ferramentasActive from '@/assets/icons/topics/ferramentas_active.png'
import cuidados from '@/assets/icons/topics/cuidados.png'
import cuidadosActive from '@/assets/icons/topics/cuidados_active.png'
import corrida from '@/assets/icons/topics/corrida.png'
import corridaActive from '@/assets/icons/topics/corrida_active.png'
import moda from '@/assets/icons/topics/moda.png'
import modaActive from '@/assets/icons/topics/moda_active.png'

import TopicCard from '@/components/TopicCard'

const topics = [
  {
    title: 'Tecnologia',
    link: '/tecnology',
    image: devices,
    alt: 'Imagem de dispositivos tecnologicos',
    imageActive: devicesActive,
  },
  {
    title: 'Supermercado',
    link: '/market',
    image: supermercados,
    alt: 'Imagem de supermercado',
    imageActive: supermercadosActive,
  },
  {
    title: 'Bebidas',
    link: '/drinks',
    image: whiskey,
    alt: 'Imagem de bebida',
    imageActive: whiskeyActive,
  },
  {
    title: 'Ferramentas',
    link: '/tools',
    image: ferramentas,
    alt: 'Imagem de ferramentas',
    imageActive: ferramentasActive,
  },
  {
    title: 'Saúde',
    link: '/health',
    image: cuidados,
    alt: 'Imagem de saúde',
    imageActive: cuidadosActive,
  },
  {
    title: 'Esporte e Fitness',
    link: '/fitness',
    image: corrida,
    alt: 'Imagem de esporte',
    imageActive: corridaActive,
  },
  {
    title: 'Moda',
    link: '/fashion',
    image: moda,
    alt: 'Imagem de roupas',
    imageActive: modaActive,
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
          imageActive={topic.imageActive}
        />
      ))}
    </section>
  )
}
