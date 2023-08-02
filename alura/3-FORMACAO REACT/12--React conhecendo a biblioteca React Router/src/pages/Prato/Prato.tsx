//SCSS
import styles from './Prato.module.scss';

//router
import { useParams, useNavigate, Routes, Route } from 'react-router-dom';

//json
import cardapio from '../../data/cardapio.json';

//types
import Tags from '../../components/Tags/Tags';

//pages
import NotFound from '../NotFound/NotFound';

//components
import PaginaPadrao from '../../components/PaginaPadrao/PaginaPadrao';

const Prato = () => {

  const { id } = useParams();

  const navigate = useNavigate();

  const prato = cardapio.find(item => item.id === Number(id));
  if (!prato) {
    return <NotFound />;
  }

  return (
    <Routes>
      <Route path='*' element={<PaginaPadrao />} />
      <Route index element={
        <>
          <button className={styles.voltar}
            onClick={() => navigate(-1)}
          >
            {'< Voltar'}
          </button>
          <section>
            <h1 className={styles.titulo}>
              {prato.title}
            </h1>
            <div className={styles.imagem}>
              <img src={prato.photo} alt={prato.title} />
            </div>
            <div className={styles.conteudo}>
              <p className={styles.conteudo__descricao}>
                {prato.description}
              </p>
              <Tags {...prato} />
            </div>
          </section>
        </>
      } />
    </Routes>
  );
};

export default Prato;