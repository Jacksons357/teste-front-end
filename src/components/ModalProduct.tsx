import styles from '@/styles/components/modal-product.module.sass'
import { useEffect } from 'react'
import { IoIosClose } from 'react-icons/io'
import { NavLink } from 'react-router'

interface ModalProductProps {
  productName: string
  photo: string
  price: number
  descriptionShort: string
  onCloseModal: () => void
}

export default function ModalProduct({
  productName,
  photo,
  price,
  descriptionShort,
  onCloseModal,
}: ModalProductProps) {
  const priceFormatted = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onCloseModal}>
          <IoIosClose size={40} />
        </button>

        <div className={styles.modalImage}>
          <img src={photo} alt={productName} />
        </div>

        <div className={styles.modal_details}>
          <div>
            <h1 className={styles.modal_details_title}>{productName}</h1>
            <span className={styles.price}>{priceFormatted}</span>
          </div>

          <div>
            <p className={styles.description_short}>{descriptionShort}</p>
            <NavLink to="#" onClick={onCloseModal}>
              Veja mais detalhes do produto &gt;
            </NavLink>
          </div>

          <div className={styles.container_controls}>
            <div className={styles.controls}>
              <button className={styles.controls_less}>-</button>
              <span>1</span>
              <button className={styles.controls_more}>+</button>
            </div>

            <button className={styles.button_buy} onClick={onCloseModal}>
              COMPRAR
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
