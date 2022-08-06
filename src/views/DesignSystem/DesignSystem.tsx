import { Fragment } from 'react';

import { BaseLogo } from '../../components/layout';
import { ColorsSection, TypographySection, ButtonsSection, AccordionSection } from './';

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
        <ColorsSection />

        <TypographySection />

        <ButtonsSection />

        <AccordionSection />
      </main>
    </Fragment>
  );
};

export default DesignSystem;
