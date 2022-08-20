import { NavLink } from 'react-router-dom';

import { ReactComponent as Logo } from '../../../assets/images/shared/logo.svg';

const BaseLogo = () => {
  return (
    <NavLink to="/">
      <Logo />
    </NavLink>
  );
};

export default BaseLogo;
