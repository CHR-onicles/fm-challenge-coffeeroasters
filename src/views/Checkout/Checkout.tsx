import { useEffect, useContext, Fragment } from 'react';

import { BaseHero } from '../../components/layout';
import { BaseSkeleton } from '../../components/ui';
import { ThankYou } from './index';

import AppContext from '../../context/AppContext';

import { useContent } from '../../hooks';

const Checkout = () => {
  const { pageContent, error, isLoading } = useContent('checkout');
  const { onSetCheckout } = useContext(AppContext);

  useEffect(() => {
    return () => {
      onSetCheckout();
    };
  }, [onSetCheckout]);

  return (
    <main>
      {
        isLoading ? (
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
        ) : !isLoading && error?.length ? (
          <section>
            <div className="container">
              <div className="grid-cols mb-s5 pb-s5">
                <div className="grid__item">
                  <p>{ error }</p>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <Fragment>
            <BaseHero content={ pageContent[0] } />

            <ThankYou />
          </Fragment>
        )
      }
    </main>
  );
};

export default Checkout;
