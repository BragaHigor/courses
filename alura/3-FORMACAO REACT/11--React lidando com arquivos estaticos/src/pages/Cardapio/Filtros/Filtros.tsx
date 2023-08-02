//SCSS
import styles from './Filtros.module.scss';

//json
import filtros from './filtros.json';

//classname
import classNames from 'classnames';

// type IOpcao = typeof filtros[0];
interface IOpcao {
    id: number,
    label: string
}

interface IFiltros {
    filtro: number | null,
    setFiltro: React.Dispatch<React.SetStateAction<number | null>>
}

const Filtros = ({filtro, setFiltro}: IFiltros) => {

    function selecionarFiltro(opcao: IOpcao) {
        if (filtro === opcao.id) return setFiltro(null)
        return setFiltro(opcao.id)
    }

  return (
    <div className={styles.filtros}>
        {filtros.map (opcao => (
            <button 
                className={classNames({
                    [styles.filtros__filtro]: true,
                    [styles["filtros__filtro--ativo"]]: filtro === opcao.id
                })}
                key={opcao.id}
                onClick={() => selecionarFiltro(opcao)}
            >
                {opcao.label}
            </button>
        ))}
    </div>
  )
}

export default Filtros