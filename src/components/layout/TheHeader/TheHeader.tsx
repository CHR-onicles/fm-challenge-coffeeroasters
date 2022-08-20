import { BaseNavigation } from '../index';

import { BaseLogo } from '../index';

import styles from './TheHeader.module.scss';

const TheHeader = () => {
  return (
    <header id="header" className={ styles.header }>
      <div className={ `container row ${styles.row}` }>
        <BaseLogo />
        
        <BaseNavigation />
      </div>
    </header>
  );
};

export default TheHeader;
