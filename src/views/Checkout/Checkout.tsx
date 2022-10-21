import { useEffect, useContext, Fragment } from 'react';

import { BaseHero } from '../../components/layout';
import { BaseSkeleton } from '../../components/ui';
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
      <main>
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
      <main>
        <section>
          <div className="container">
            <div className="grid-cols mt-s5 pt-s5 mb-s5 pb-s5">
              <div className="grid__item">
                <h2 className="text-align-center mb-s5">Oops</h2>
                
                <p className="text-align-center">{ error }</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      <Fragment>
        <BaseHero content={ content[0] } />

        <ThankYou />
      </Fragment>
    </main>
  );
};

export default Checkout;
