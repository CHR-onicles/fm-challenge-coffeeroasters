import { BaseNavigation } from '../index';

import { BaseLogo } from '../index';

const TheHeader = () => {
  return (
    <header>
      <div className="container row">
        <BaseLogo />
        
        <BaseNavigation />
      </div>
    </header>
  );
};

export default TheHeader;
