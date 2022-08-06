import { Outlet } from 'react-router-dom';

import { TheHeader, TheFooter } from './components/layout';

function App() {
  return (
    <div className="page">
      <TheHeader />

      <Outlet />

      <TheFooter />
    </div>
  );
}

export default App;
