import { NavLink } from 'react-router-dom';

import { BaseNavigation } from '../index';
import { ReactComponent as Logo } from '../../../assets/images/shared/logo.svg';

const TheHeader = () => {
  return (
    <header>
      <div className="container row">
        <NavLink to="/">
          <Logo />
        </NavLink>
        
        <BaseNavigation />
      </div>
    </header>
  );
};

export default TheHeader;
