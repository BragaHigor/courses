//hooks
import { useState } from 'react'

//SCSS
import styles from './Cardapio.module.scss'

//img
import logo from '../../assets/logo.svg'

//Cardapio/components
import Buscador from './Buscador/Buscador'
import Filtros from './Filtros/Filtros'
import Ordenador from './Ordenador/Ordenador'
import Itens from './Itens/Itens'

const Cardapio = () => {

  const [busca, setBusca] = useState("")
  const [filtro, setFiltro] = useState<number | null>(null)
  const [ordenador, setOrdenador] = useState("")

  return (
    <main>
        <nav className={styles.menu}>
            <img src={logo} alt='logo do aluroni' />
        </nav>
        <header className={styles.header}>
          <div className={styles.header__text}>
            A casa do código e da massa
          </div>
        </header>
        <section className={styles.cardapio}>
          <h3 className={styles.cardapio__titulo}>Cardápio</h3>
          <Buscador 
            busca={busca} 
            setBusca={setBusca}
          />
          <div className={styles.cardapio__filtros}>
            <Filtros 
              filtro={filtro}
              setFiltro={setFiltro}
            />
            <Ordenador 
              ordenador={ordenador}
              setOrdenador={setOrdenador}
            />
          </div>
          <Itens 
            busca={busca}
            filtro={filtro}
            ordenador={ordenador}
          />
        </section>
    </main>
  )
}

export default Cardapio