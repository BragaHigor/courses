//SCSS
import styles from './Itens.module.scss';

//hooks
import { useEffect, useState } from 'react';

//json
import cardapio from '../../../data/cardapio.json';

//Cardapio/Itens/components
import Item from './Item/Item';

//types
import { Cardapio } from '../../../types/Prato';

interface IItens {
  busca: string,
  filtro: number | null,
  ordenador: string
}

const Itens = ({busca, filtro, ordenador}:IItens) => {

  const [lista, setLista] = useState(cardapio);

  function testaBusca(title: string){
    const regex = new RegExp(busca, 'i');
    return regex.test(title);
  }

  function testaFiltro (id: number | null) {
    if(filtro !== null) return filtro === id;
    return true;
  }

  function ordenar(novaLista: Cardapio){
    switch(ordenador) {
    case 'porcao':
      return novaLista.sort((a, b) => a.size > b.size ? 1 : -1);
    case 'qtd_pessoas':
      return novaLista.sort((a, b) => a.serving > b.serving ? 1 : -1);
    case 'preço':
      return novaLista.sort((a, b) => a.price > b.price ? 1 : -1);
    default: 
      return novaLista;
    }
  }

  useEffect(() => {

    const novaLista = cardapio.filter(item => testaBusca(item.title) && 
    testaFiltro(item.category.id));

    setLista(ordenar(novaLista));
  },[busca, filtro, ordenador]);

  return (
    <div className={styles.itens}>
      {lista.map(item => (
        <Item 
          key={item.id}
          {...item}  
        />
      ))}
    </div>
  );
};

export default Itens;