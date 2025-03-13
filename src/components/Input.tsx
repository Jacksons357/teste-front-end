import { InputHTMLAttributes } from 'react'
import styles from '@/styles/components/input.module.sass'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'primary | secondary'
}

export default function Input(props: InputProps) {
  return <input {...props} className={styles.input} />
}
