import BannerHomePage from './components/BannerHomePage'
import TopicNavigation from './components/TopicNavigation'

import styles from '@/styles/pages/home.module.sass'

export default function Home() {
  return (
    <>
      <section>
        <BannerHomePage />
      </section>

      <section className={styles.topic_navigation}>
        <TopicNavigation />
      </section>
    </>
  )
}
