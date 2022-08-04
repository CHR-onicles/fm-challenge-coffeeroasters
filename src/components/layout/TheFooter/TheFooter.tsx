import { NavLink } from 'react-router-dom';

import { BaseNavigation } from '../index';
import { ReactComponent as Logo } from '../../../assets/images/shared/logo.svg';

const TheFooter = () => {
  return (
    <footer>
      <div className="container row">
        <NavLink to="/">
          <Logo />
        </NavLink>
        
        <BaseNavigation />
      </div>
    </footer>
  );
};

export default TheFooter;
