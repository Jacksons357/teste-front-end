import { useCart } from '@/lib/hooks/useCart'
import { useToast } from '@/lib/hooks/useToast'
import styles from '@/styles/components/modal-product.module.sass'
import { useEffect, useState } from 'react'
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
  const { addToCart } = useCart()
  const { showToast } = useToast()

  const [value, setValue] = useState(1)

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

  function increment() {
    setValue(prevValue => prevValue + 1)
  }

  function decrement() {
    if (value > 1) {
      setValue(prevValue => prevValue - 1)
    }
  }

  function handleBuy() {
    addToCart({
      productName,
      photo,
      price,
      quantity: 1,
    })

    onCloseModal()

    showToast(`Adicionado ao carrinho com sucesso!`, 'success')
  }

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
              <button className={styles.controls_less} onClick={decrement}>
                -
              </button>
              <span>{value}</span>
              <button className={styles.controls_more} onClick={increment}>
                +
              </button>
            </div>

            <button className={styles.button_buy} onClick={handleBuy}>
              COMPRAR
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
