import { useState, useEffect, useContext, Fragment } from 'react';


import { BaseHero } from '../../components/layout';
import { BaseSkeleton } from '../../components/ui';
import { ThankYou } from './index';

import AppContext from '../../context/AppContext';

import { getPageContent } from '../../services';

import { IPageContent } from '../../interfaces/page-content-interface';

const Checkout = () => {
  const [ pageContent, setPageContent ] = useState<IPageContent[]>([]);
  const { onSetCheckout } = useContext(AppContext);

  const handleGetPageContent = async () => {
    try {
      const pageContentData = await getPageContent('checkout');

      setPageContent(pageContentData);
    } catch (error) {
      setPageContent([]);
    }
  };

  useEffect(() => {
    handleGetPageContent();

    window.scrollTo(0, 0);

    return () => {
      onSetCheckout();
    };
  }, [onSetCheckout]);

  return (
    <main>
      {
        pageContent.length ? (
          <Fragment>
            <BaseHero content={ pageContent[0] } />

            <ThankYou />
          </Fragment>
        ) : (
          <section>
            <div className="container">
              <div className="grid-cols mb-s5 pb-s5">
                <div className="grid__item">
                  <BaseSkeleton variant="hero-page" />
                </div>
              </div>

              <div className="grid-cols ml-s5 mr-s5 pl-s5 pr-s5 mb-s5 pb-s5">
                <div className="grid__item">
                  <BaseSkeleton variant="article" />
                </div>
              </div>
            </div>
          </section>
        )
      }
    </main>
  );
};

export default Checkout;
