import { BaseBrand, BaseNavigation } from '../index';
import { BaseSocialMedia } from '../../ui/index';

import styles from './TheFooter.module.scss';

const TheFooter = () => {
  return (
    <footer id="footer" className={ styles.footer }>
      <div className={ `container row ${styles.row}` }>
        <BaseBrand isLogoDark={ false } />
        
        <BaseNavigation isHeaderNav={ false } />

        <BaseSocialMedia />
      </div>
    </footer>
  );
};

export default TheFooter;
