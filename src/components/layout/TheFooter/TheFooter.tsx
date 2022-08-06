import { BaseNavigation } from '../index';

import { BaseLogo } from '../index';

const TheFooter = () => {
  return (
    <footer>
      <div className="container row">
        <BaseLogo />
        
        <BaseNavigation />
      </div>
    </footer>
  );
};

export default TheFooter;
