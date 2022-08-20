import { Outlet } from 'react-router-dom';

const BasePage = () => {
  return (
    <div className="page">
      <Outlet />
    </div>
  );
};

export default BasePage;
