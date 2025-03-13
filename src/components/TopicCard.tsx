import styles from '@/styles/components/topic-card.module.sass'
import { NavLink, useLocation } from 'react-router'

interface TopicCardProps {
  title: string
  link: string
  image: string
  alt: string
  imageActive: string
}

export default function TopicCard({
  title,
  link,
  image,
  alt,
  imageActive,
}: TopicCardProps) {
  const location = useLocation()

  const isActive = location.pathname === link

  return (
    <NavLink to={link} className={styles.content}>
      <div
        className={`${styles.content_image} ${
          isActive ? styles.content_image_active : styles.content_image_default
        }`}
      >
        <img src={isActive ? imageActive : image} alt={alt} />
      </div>

      <h1
        className={` ${
          isActive ? styles.content_title_active : styles.content_title_default
        }`}
      >
        {title}
      </h1>
    </NavLink>
  )
}
