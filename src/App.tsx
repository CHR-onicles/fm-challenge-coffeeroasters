import { Outlet } from 'react-router-dom';

import { TheHeader, TheFooter } from './components/layout';

function App() {
  return (
    <div className="page">
      <a
        href="#main"
        className="page__btn-skip | btn"
        aria-label="Skip to main content"
      >Skip to main content</a>

      <TheHeader />

      <Outlet />

      <TheFooter />
    </div>
  );
}

export default App;
