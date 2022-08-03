import { Outlet } from 'react-router-dom';

import styles from './App.module.scss';

import { TheHeader, TheFooter, BaseUtility } from './components/layout';

function App() {
  return (
    <div className={ styles.app }>
      <TheHeader />

      <BaseUtility className="container | text-color-dark">
        <p>Container is a `div` element by default</p>
      </BaseUtility>

      <BaseUtility className="stack | text-color-dark" elemType="ul">
        <li>Stack is a `ul` element</li>
      </BaseUtility>

      <BaseUtility className="box | text-color-dark" elemType="header">
        <p>Box is a `header` element</p>
      </BaseUtility>

      <BaseUtility className="grid | text-color-dark" elemType="footer">
        <p>Grid is a `footer` element</p>
      </BaseUtility>

      <Outlet />

      <TheFooter />
    </div>
  );
}

export default App;
