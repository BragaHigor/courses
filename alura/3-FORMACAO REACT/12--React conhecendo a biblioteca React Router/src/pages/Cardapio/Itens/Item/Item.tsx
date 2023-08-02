//SCSS
import styles from './Item.module.scss';

//hooks
import { memo } from 'react';

//router
import { useNavigate } from 'react-router-dom';

//types
import { Prato } from '../../../../types/Prato';

//components
import Tags from '../../../../components/Tags/Tags';


const Item = (props:Prato) => {

  const { id, title, description, photo} = props;

  const navigate = useNavigate();

  return (
    <div className={styles.item} onClick={() => navigate(`/prato/${id}`)}>
      <div className={styles.item__imagem}>
        <img src={photo} alt={title} />
      </div>
      <div className={styles.item__descricao}>
        <div className={styles.item__titulo}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <Tags {...props} />
      </div>
    </div>
  );
};

export default memo(Item);