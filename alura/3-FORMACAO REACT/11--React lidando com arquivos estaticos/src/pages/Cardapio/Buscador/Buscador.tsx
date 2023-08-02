//SCSS
import styles from './Buscador.module.scss'

//React-icons
import { CgSearch } from 'react-icons/cg';

interface BuscadorProps {
    busca: string,
    setBusca: React.Dispatch<React.SetStateAction<string>>
}

const Buscador = ({busca, setBusca}: BuscadorProps) => {
  return (
    <div className={styles.buscador}>
      <input 
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        placeholder="Buscar"
      />
      <CgSearch 
        size={20}
        color="#4C4D5E"
      />
    </div>
  )
}

export default Buscador