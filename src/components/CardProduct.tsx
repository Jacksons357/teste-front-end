import Button from './Button'
import styles from '@/styles/components/card-product.module.sass'

interface CardProductProps {
  productName: string
  photo: string
  price: number
}

export default function CardProduct({
  photo,
  productName,
  price,
}: CardProductProps) {
  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price)

  const priceFull = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price + 1499)

  const halfPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price / 2)

  return (
    <div className={styles.container}>
      <img src={photo} alt="Celular" />

      <p>{productName}</p>

      <span>{priceFull}</span>
      <p className={styles.price}>{formattedPrice}</p>
      <p className={styles.installments}>ou 2x de R${halfPrice} sem juros</p>
      <p className={styles.free_shipping}>Frete grátis</p>

      <Button text="COMPRAR" variant="secondary" />
    </div>
  )
}
