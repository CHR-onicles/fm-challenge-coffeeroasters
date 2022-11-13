import { Link } from 'react-router-dom';

import Logo from '../../../assets/images/shared/logo.svg';
import LogoWhite from '../../../assets/images/shared/logo-white.svg';

import styles from './BaseBrand.module.scss';

const BaseBrand = ({ isLogoDark = true }) => {
  return (
    <Link to="/" className={ styles.brand }>
      <img src={ isLogoDark ? Logo : LogoWhite } alt="Coffeeroasters logo" />
    </Link>
  );
};

export default BaseBrand;
