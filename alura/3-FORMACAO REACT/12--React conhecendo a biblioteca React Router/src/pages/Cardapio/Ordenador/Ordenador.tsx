//hooks
import { useState } from 'react';

//SCSS
import styles from './Ordenador.module.scss';

//json
import opcoes from './opcoes.json';

//classNames
import classNames from 'classnames';

//React-icons
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

interface IOrdenador {
    ordenador: string
    setOrdenador: React.Dispatch<React.SetStateAction<string>>
}

const Ordenador = ({ordenador, setOrdenador}:IOrdenador) => {

  const [aberto, setAberto] = useState(false);

  const nomeOrdenador = ordenador && opcoes.find(opcao => opcao.value === ordenador)?.nome;

  return (
    <button 
      className={classNames({
        [styles.ordenador]: true,
        [styles['ordenador--ativo']]: ordenador !== ''
      })}
      onClick={() => setAberto(!aberto)}
      onBlur={() => setAberto(false)}
    >
      <span>{nomeOrdenador || 'Ordenar Por'}</span>

      {aberto ? (
        <MdKeyboardArrowUp size={20}/>
      ) : (
        <MdKeyboardArrowDown size={20}/>
      )}

      <div className={classNames({
        [styles.ordenador__options]: true,
        [styles['ordenador__options--ativo']]: aberto,
      })}>
        {opcoes.map((opcao) => (
          <div className={styles.ordenador__option}
            key={opcao.value} 
            onClick={() => setOrdenador(opcao.value)}
          >
            {opcao.nome}
          </div>
        ))}
      </div>
    </button>
  );
};

export default Ordenador;