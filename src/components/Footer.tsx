import styles from '@/styles/components/footer.module.sass'
import Button from './Button'
import Input from './Input'
import logo from '@/assets/Logo.png'
import { FaInstagram } from 'react-icons/fa'
import { SlSocialFacebook } from 'react-icons/sl'
import { SlSocialLinkedin } from 'react-icons/sl'

const icons = [
  {
    icon: <FaInstagram size={24} />,
    link: '#',
  },
  {
    icon: <SlSocialFacebook size={24} />,
    link: '#',
  },
  {
    icon: <SlSocialLinkedin size={24} />,
    link: '#',
  },
]

const institucional = [
  {
    text: 'Sobre nós',
    url: '#',
  },
  {
    text: 'Movimento',
    url: '#',
  },
  {
    text: 'Trabalhe conosco',
    url: '#',
  },
]

const ajuda = [
  {
    text: 'Suporte',
    url: '#',
  },
  {
    text: 'Fale Conosco',
    url: '#',
  },
  {
    text: 'Perguntas Frequentes',
    url: '#',
  },
]

const termos = [
  {
    text: 'Termos e Condições',
    url: '#',
  },
  {
    text: 'Política de Privacidade',
    url: '#',
  },
  {
    text: 'Troca e Devolução',
    url: '#',
  },
]

export default function Footer() {
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.container_section}>
          <div>
            <h1 className={styles.container_title}>
              Inscreva-se na nossa newsletter
            </h1>
            <p>
              Assine a nossa newsletter e receba as novidades e conteúdos
              exclusivos da Econverse.
            </p>
          </div>

          <form className={styles.container_form}>
            <div className={styles.container_form_container}>
              <Input type="text" placeholder="Digite seu nome" />
              <Input type="email" placeholder="Digite seu email" />

              <Button text="INSCREVER" variant="primary" />
            </div>
            <label htmlFor="checkbox">
              <input type="checkbox" id="checkbox" />
              Aceito os termos e condições
            </label>
          </form>
        </div>
      </div>

      <div className={styles.second_container}>
        <div className={styles.second_container_section}>
          <div className={styles.second_container_section_box}>
            <img src={logo} alt="logo da econverse" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

            <div className={styles.second_container_section_box_icons}>
              {icons.map((icon, index) => (
                <a href={icon.link} key={index}>
                  {icon.icon}
                </a>
              ))}
            </div>
          </div>

          <span className={styles.separator}></span>

          <div className={styles.second_container_section_box_second}>
            <div>
              <h1>Institucional</h1>

              <ul className={styles.container_items}>
                {institucional.map((item, index) => (
                  <li key={index}>
                    <a href={item.url}>{item.text}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h1>Ajuda</h1>

              <ul className={styles.container_items}>
                {ajuda.map((item, index) => (
                  <li key={index}>
                    <a href={item.url}>{item.text}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h1>Termos</h1>

              <ul className={styles.container_items}>
                {termos.map((item, index) => (
                  <li key={index}>
                    <a href={item.url}>{item.text}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.tertiary_container}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </footer>
  )
}
