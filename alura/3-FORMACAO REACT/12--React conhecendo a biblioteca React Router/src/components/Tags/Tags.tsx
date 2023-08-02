//SCSS
import styles from './Tags.module.scss';

//classNames
import classNames from 'classnames';

//types
import { Prato } from '../../types/Prato';

const Tags = ({category, size, serving, price}: Prato) => {
  return (
    <div>
      <div className={styles.tags__tags}>
        <div className = {classNames ({
          [styles.tags__tipo] : true, 
          [styles[`tags__tipo__${category.label.toLocaleLowerCase()}`]] : true
        })}>{category.label}</div>
        <div className={styles.tags__porcao}>{size}g</div>
        <div className={styles.tags__qtdpessoas}>Serve {serving} pessoa{serving === 1 ? '' : 's'} </div>
        <div className={styles.tags__valor}>R${price.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default Tags;