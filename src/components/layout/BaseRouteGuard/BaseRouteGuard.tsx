import { ReactNode, Fragment, useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

interface IBaseRouteGuardProps {
  isAccessGranted: boolean;
  redirectPath: string;
  children: ReactNode;
}

const BaseRouteGuard = ({ isAccessGranted, redirectPath, children }: IBaseRouteGuardProps) => {
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!isAccessGranted) {
      navigate(redirectPath, { replace: true });
    }
  }, [navigate, isAccessGranted, redirectPath]);

  return (
    <Fragment>
      { children ? children : <Outlet /> }
    </Fragment>
  );
};

export default BaseRouteGuard;
