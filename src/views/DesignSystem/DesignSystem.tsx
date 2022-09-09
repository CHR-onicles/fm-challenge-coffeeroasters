import { Fragment } from 'react';

import { BaseBrand } from '../../components/layout';
import { ColorsSection, TypographySection, ButtonsSection, AccordionSection } from './';

import styles from './DesignSystem.module.scss';

const DesignSystem = () => {
  return (
    <Fragment>
      <header className={ styles.header }>
        <div className="container stack">
          <BaseBrand />

          <h1>Design System</h1>
        </div>
      </header>

      <main>
        <ColorsSection />

        <TypographySection />

        <ButtonsSection />

        <AccordionSection />
      </main>
    </Fragment>
  );
};

export default DesignSystem;
