import { BaseNavigation } from '../index';

import { BaseBrand } from '../index';

import styles from './TheFooter.module.scss';

const TheFooter = () => {
  return (
    <footer id="footer" className={ styles.footer }>
      <div className={ `container row ${styles.row}` }>
        <BaseBrand isLogoDark={ false } />
        
        <BaseNavigation isHeaderNav={ false } />
      </div>
    </footer>
  );
};

export default TheFooter;
