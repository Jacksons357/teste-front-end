import Button from './Button'
import styles from '@/styles/components/card-product.module.sass'
import celular from '@/assets/celular.png'

export default function CardProduct() {
  return (
    <div className={styles.container}>
      <img src={celular} alt="Celular" />

      <p>Descrição do produto</p>

      <span>R$ 1.500,00</span>
      <p className={styles.price}>R$ 1.200,00</p>
      <p className={styles.installments}>12x de R$ 100,00 sem juros</p>
      <p className={styles.free_shipping}>Frete grátis</p>

      <Button text="COMPRAR" variant="secondary" />
    </div>
  )
}
