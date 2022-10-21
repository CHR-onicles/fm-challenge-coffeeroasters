import { Fragment } from 'react';

import { BaseHero } from '../../components/layout';
import { BaseHowItWorks, BaseSkeleton } from '../../components/ui';
import { Order } from './index';

import { useContent } from '../../hooks';

import { IPlan } from '../../interfaces/plan-interface';

const Subscribe = () => {
  const { pageContent, error, isLoading } = useContent('plan');

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

              <div className="grid-cols ml-md-s5 mr-md-s5 pl-md-s5 pr-md-s5 mb-s5 pb-s5">
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
            <BaseHero content={ pageContent[0] }/>

            <BaseHowItWorks
              content={ pageContent[1] }
              variant="dark"
              withTitle= { false }
              withCTA={ false }
            />

            <Order orderOptions={ pageContent[2]?.listing as IPlan[] } />
          </Fragment>
        )
      }
    </main>
  );
};

export default Subscribe;
