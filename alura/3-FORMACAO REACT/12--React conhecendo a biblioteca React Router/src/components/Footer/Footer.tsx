//SCSS
import styles from './Footer.module.scss';

//img
import logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img src={logo} alt="logo Aluroni" />
    </footer>
  );
};

export default Footer;