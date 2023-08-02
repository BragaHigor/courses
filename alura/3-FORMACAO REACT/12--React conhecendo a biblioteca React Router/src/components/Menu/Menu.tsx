//SCSS
import styles from './Menu.module.scss';

//router
import { useNavigate } from 'react-router-dom';

//img
import logo from '../../assets/logo.svg';

//router
import { Link } from 'react-router-dom';

const Menu = () => {

  const navigate = useNavigate();

  const rotas = [{
    label: 'Inicio',
    to: '/'
  }, {
    label: 'Cardápio',
    to: '/cardapio'
  }, {
    label: 'Sobre',
    to: '/sobre'
  }];

  return (
    <nav className={styles.menu}>
      <img src={logo} alt='logo do aluroni' onClick={() => navigate('/')} />
      <ul className={styles.menu__list}>
        {rotas.map((rota, index) => (
          <li key={index} className={styles.menu__link}>
            <Link to={rota.to}>
              {rota.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;