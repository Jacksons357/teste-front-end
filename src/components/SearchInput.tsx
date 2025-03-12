import MagnifyingGlass from '../assets/icons/MagnifyingGlass.png'

export default function SearchInput() {
  return (
    <div className="search-input-container">
      <input
        type="text"
        placeholder="O que você está buscando?"
        className="search-input"
      />
      <img
        src={MagnifyingGlass}
        alt="Ícone de pesquisa"
        className="search-icon"
      />
    </div>
  )
}
