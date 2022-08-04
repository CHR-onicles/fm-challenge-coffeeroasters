import { Outlet } from 'react-router-dom';

import styles from './App.module.scss';

import { TheHeader, TheFooter } from './components/layout';

function App() {
  return (
    <div className={ styles.app }>
      <TheHeader />

      <Outlet />

      <TheFooter />
    </div>
  );
}

export default App;
