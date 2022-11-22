import { BaseBrand, BaseNavigation, TheCopyright } from '../index';
import { BaseSocialMedia } from '../../ui/index';

import styles from './TheFooter.module.scss';

const TheFooter = () => {
  return (
    <footer id="footer" className={ styles.footer }>
      <div className="container">
        <div className={ `row ${styles.row}` }>
          <BaseBrand isLogoDark={ false } />
          
          <BaseNavigation isHeaderNav={ false } />

          <BaseSocialMedia />

          {/* <TheCopyright /> */}
        </div>
      </div>
    </footer>
  );
};

export default TheFooter;
