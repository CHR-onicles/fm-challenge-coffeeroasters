import React from 'react';

import { BaseButton } from '../../../components/ui';

const ButtonsSection = () => {
  return (
    <section className="container | mb-s5">
      <div className="grid-cols">
        <div className="grid__item grid__item--span-4 | text-center">
          <BaseButton label="Button 1" />
        </div>

        <div className="grid__item grid__item--span-4 | text-center">
          <BaseButton label="Button 2" />
        </div>

        <div className="grid__item grid__item--span-4 | text-center">
          <BaseButton label="Button 3" />
        </div>
      </div>
    </section>
  );
};

export default ButtonsSection;
