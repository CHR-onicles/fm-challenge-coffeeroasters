import { useEffect, useContext } from 'react';

import { BaseHero } from '../../components/layout';
import { BaseSkeleton, BaseError } from '../../components/ui';
import { ThankYou } from './index';

import AppContext from '../../context/AppContext';

import { useContent } from '../../hooks';

const Checkout = () => {
  const { content, error, status } = useContent('checkout');
  const { onSetCheckout } = useContext(AppContext);

  useEffect(() => {
    return () => {
      onSetCheckout();
    };
  }, [onSetCheckout]);

  if (status === 'loading') {
    return (
      <main id="main">
        <section>
          <div className="container">
            <div className="grid-cols mb-s5 pb-s5">
              <div className="grid__item">
                <BaseSkeleton variant="hero-page" />
              </div>
            </div>

            <div className="grid-cols ml-md-s5 mr-md-s5 pl-md-s5 pr-md-s5 mb-s5 pb-s5">
              <div className="grid__item">
                <BaseSkeleton variant="article" />
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  if (status === 'error') {
    return (
      <main id="main">
        <BaseError error={ error } />
      </main>
    );
  }

  return (
    <main id="main">
      <BaseHero content={ content[0] } />

      <ThankYou />
    </main>
  );
};

export default Checkout;
