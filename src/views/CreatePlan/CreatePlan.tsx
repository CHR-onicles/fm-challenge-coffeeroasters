import { useState, useEffect, Fragment } from 'react';

import { BaseHero } from '../../components/layout';
import { BaseHowItWorks } from '../../components/ui';
import { Order } from './index';

import { getPageContent, getPlans } from '../../services';

import { IPageContent } from '../../interfaces/page-content-interface';
import { IPlan } from '../../interfaces/plan-interface';

const Subscribe = () => {
  const [ pageContent, setPageContent ] = useState<IPageContent[]>([]);
  const [ plans, setPlans ] = useState<IPlan[]>([]);

  const handleGetPageContent = async () => {
    try {
      const pageContentData = await getPageContent('plan');

      setPageContent(pageContentData);
    } catch (error) {
      setPageContent([]);
    }
  };

  const handleGetPlans = async () => {
    try {
      const plansData = await getPlans();

      setPlans(plansData);
    } catch (error) {
      setPlans([]);
    }
  };

  useEffect(() => {
    handleGetPageContent();
    handleGetPlans();
  }, []);

  return (
    <main>
      {
        pageContent.length ? (
          <Fragment>
            <BaseHero content={ pageContent[0] }/>

            <BaseHowItWorks
              content={ pageContent[1] }
              variant="dark"
              withTitle= { false }
              withCTA={ false }
            />

            <Order orderOptions={ plans } />
          </Fragment>
        ) : null
      }
    </main>
  );
};

export default Subscribe;
