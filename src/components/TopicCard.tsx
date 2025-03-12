import styles from '@/styles/components/topic-card.module.sass'

interface TopicCardProps {
  title: string
  link: string
  image: string
  alt: string
}

export default function TopicCard({ title, link, image, alt }: TopicCardProps) {
  return (
    <a href={link} className={styles.content}>
      <div className={styles.content_image}>
        <img src={image} alt={alt} />
      </div>

      <h1>{title}</h1>
    </a>
  )
}
