import { ReactNode, Fragment, useEffect, useContext } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

import AppContext from '../../../context/AppContext';

interface IBaseRouteGuardProps {
  redirectPath: string;
  children: ReactNode;
}

const BaseRouteGuard = ({ redirectPath, children }: IBaseRouteGuardProps) => {
  const { willCheckout } = useContext(AppContext);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!willCheckout) {
      navigate(redirectPath, { replace: true });
    }
  }, [navigate, willCheckout, redirectPath]);

  return (
    <Fragment>
      { children ? children : <Outlet /> }
    </Fragment>
  );
};

export default BaseRouteGuard;
