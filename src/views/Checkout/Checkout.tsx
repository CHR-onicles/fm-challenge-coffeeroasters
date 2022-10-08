import { useState, useEffect, useContext, Fragment } from 'react';

import AppContext from '../../context/AppContext';

import { BaseHero } from '../../components/layout';
import { ThankYou } from './index';

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
        ) : null
      }
    </main>
  );
};

export default Checkout;
