import { useRef } from 'react'
import styles from '@/styles/components/carousel.module.sass'

interface CarouselProps {
  children: React.ReactNode
}

export default function Carousel({ children }: CarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null)

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 319, behavior: 'smooth' })
    }
  }

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -319, behavior: 'smooth' })
    }
  }

  return (
    <div className={styles.carousel_container}>
      <button
        className={`${styles.carousel_btn} ${styles.prev}`}
        onClick={handlePrev}
      >
        &#10094;
      </button>
      <div className={styles.carousel} ref={carouselRef}>
        {children}
      </div>
      <button
        className={`${styles.carousel_btn} ${styles.next}`}
        onClick={handleNext}
      >
        &#10095;
      </button>
    </div>
  )
}
