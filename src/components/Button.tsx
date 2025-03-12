import { ButtonHTMLAttributes } from 'react'
import styles from '../styles/components/button.module.sass'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  variant?: 'primary' | 'secondary'
}

export default function Button({
  text,
  variant = 'primary',
  ...props
}: ButtonProps) {
  return (
    <button className={`${styles.button} ${styles[variant]}`} {...props}>
      {text}
    </button>
  )
}
