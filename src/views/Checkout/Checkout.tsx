import { useState, useEffect, Fragment } from 'react';

import { BaseHero } from '../../components/layout';
import { ThankYou } from './index';

import { getPageContent } from '../../services';

import { IPageContent } from '../../interfaces/page-content-interface';

const Checkout = () => {
  const [ pageContent, setPageContent ] = useState<IPageContent[]>([]);

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
  }, []);

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
