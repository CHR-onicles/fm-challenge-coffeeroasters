import { Fragment } from 'react';

import { BaseLogo } from '../../components/layout';

const DesignSystem = () => {
  return (
    <Fragment>
      <header>
        <div className="container stack">
          <BaseLogo />

          <h1>Design System</h1>
        </div>
      </header>

      <main>
        <section className="container">
          <h2>Colors</h2>
        </section>

        <section className="container">
          <h2>Typography</h2>
        </section>

        <section className="container">
          <h2>Buttons</h2>
        </section>


        <section className="container">
          <h2>Accordion</h2>
        </section>
      </main>
    </Fragment>
  );
};

export default DesignSystem;
