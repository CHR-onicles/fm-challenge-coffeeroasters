import { useState, useEffect, Fragment } from 'react';

import { BaseHero } from '../../components/layout';
import { BaseHowItWorks, BaseSkeleton } from '../../components/ui';
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

    window.scrollTo(0, 0);
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
        ) : (
          <section>
            <div className="container">
              <div className="grid-cols mb-s5 pb-s5">
                <div className="grid__item">
                  <BaseSkeleton variant="hero-page" />
                </div>
              </div>

              <div className="grid-cols ml-s5 mr-s5 pl-s5 pr-s5 mb-s5 pb-s5">
                <div className="grid__item grid__item--span-lg-4">
                  <BaseSkeleton variant="card" />
                </div>

                <div className="grid__item grid__item--span-lg-4">
                  <BaseSkeleton variant="card" />
                </div>

                <div className="grid__item grid__item--span-lg-4">
                  <BaseSkeleton variant="card" />
                </div>
              </div>

              <div className="grid-cols ml-s5 mr-s5 pl-s5 pr-s5 mb-s5 pb-s5">
                <div className="grid__items grid__item--span-lg-3">
                  <BaseSkeleton variant="list" />
                </div>

                <div className="grid__items grid__item--span-lg-8 grid__item--start-lg-5">
                  <BaseSkeleton variant="content" />

                  <BaseSkeleton variant="content" />

                  <BaseSkeleton variant="content" />
                  
                  <BaseSkeleton variant="content" />
                </div>
              </div>
            </div>
          </section>
        )
      }
    </main>
  );
};

export default Subscribe;
