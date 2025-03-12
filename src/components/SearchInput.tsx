import styles from '@/styles/components/search-input.module.sass'

import MagnifyingGlass from '@/assets/icons/header/MagnifyingGlass.png'

export default function SearchInput() {
  return (
    <div className={styles.search_input_content}>
      <input
        type="text"
        placeholder="O que você está buscando?"
        className={styles.search_input}
      />
      <img
        src={MagnifyingGlass}
        alt="Ícone de pesquisa"
        className={styles.search_icon}
      />
    </div>
  )
}
