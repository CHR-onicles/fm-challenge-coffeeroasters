import { Link } from 'react-router-dom';

import Logo from '../../../assets/images/shared/logo.svg';

import styles from './BaseLogo.module.scss';

const BaseLogo = () => {
  return (
    <Link to="/" className={ styles['header__brand'] }>
      <img src={ Logo } alt="Coffeeroasters logo" />
    </Link>
  );
};

export default BaseLogo;
