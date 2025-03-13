import styles from '@/styles/components/separator.module.sass'

interface SeparatorProps {
  title: string
  color: string
}

export default function Separator({ title, color }: SeparatorProps) {
  return (
    <div className={styles.separator}>
      <span className={styles.separator_line}></span>
      <h1 style={{ color: `${color}` }}>{title}</h1>
      <span className={styles.separator_line}></span>
    </div>
  )
}
