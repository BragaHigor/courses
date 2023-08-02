//SCSS
import styles from './NotFound.module.scss';
import stylesTema from '../../styles/Tema.module.scss';

//router
import { useNavigate } from 'react-router-dom';

//classNames
import classNames from 'classnames';

//img
import notFoundImage from '../../assets/not_found.svg';

const NotFound = () => {

  const navigate = useNavigate();

  return (
    <div className={classNames({
      [styles.container]: true,
      [stylesTema.container]: true
    })}>
      <div className={styles.voltar}>
        <button onClick={() => navigate(-1)}>
          {'< Voltar'}
        </button>
      </div>
      <img src={notFoundImage} alt="imagem de erro" />
    </div>
  );
};

export default NotFound;