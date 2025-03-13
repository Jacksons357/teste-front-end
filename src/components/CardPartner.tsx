import styles from '@/styles/components/card-partner.module.sass'

import Button from './Button'

interface CardPartnerProps {
  image: string
  title: string
  description: string
}

export default function CardPartner({
  image,
  description,
  title,
}: CardPartnerProps) {
  return (
    <div
      className={styles.background}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className={styles.container}>
        <h1>{title}</h1>
        <p>{description}</p>

        <Button text="CONFIRA" variant="primary" />
      </div>
    </div>
  )
}
