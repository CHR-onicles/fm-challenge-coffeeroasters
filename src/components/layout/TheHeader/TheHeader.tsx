import { BaseNavigation } from '../index';

import { BaseBrand } from '../index';

import styles from './TheHeader.module.scss';

const TheHeader = () => {
  return (
    <header id="header" className={ styles.header }>
      <div className={ `container row ${styles.row}` }>
        <BaseBrand />
        
        <BaseNavigation />
      </div>
    </header>
  );
};

export default TheHeader;
