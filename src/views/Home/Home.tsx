import { Fragment } from 'react';

import { TheHero } from '../../components/layout';
import { BaseHowItWorks, BaseSkeleton } from '../../components/ui';
import { OurCollection, WhyChooseUs } from './index';

import { useContent } from '../../hooks';

const Home = () => {
  const { pageContent, error, isLoading } = useContent('home');

  return (
    <main>
      {
        isLoading ? (
          <section>
            <div className="container">
              <div className="grid-cols mb-s5 pb-s5">
                <div className="grid__item">
                  <BaseSkeleton variant="hero" />
                </div>
              </div>

              <div className="grid-cols ml-md-s5 mr-md-s5 pl-md-s5 pr-md-s5 mb-s5 pb-s5">
                <div className="grid__item grid__item--span-md-12 grid__item--span-lg-3">
                  <BaseSkeleton variant="card" />
                </div>

                <div className="grid__item grid__item--span-md-12 grid__item--span-lg-3">
                  <BaseSkeleton variant="card" />
                </div>

                <div className="grid__item grid__item--span-md-12 grid__item--span-lg-3">
                  <BaseSkeleton variant="card" />
                </div>
                
                <div className="grid__item grid__item--span-md-12 grid__item--span-lg-3">
                  <BaseSkeleton variant="card" />
                </div>
              </div>

              <div className="grid-cols ml-md-s5 mr-md-s5 pl-md-s5 pr-md-s5 mb-s5 pb-s5">
                <div className="grid__item">
                  <BaseSkeleton variant="article" />
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
            <TheHero content={ pageContent[0] } />
      
            <OurCollection content={ pageContent[1] } />

            <WhyChooseUs content={ pageContent[2] } />

            <BaseHowItWorks content={ pageContent[3] } />
          </Fragment>
        )
      }
    </main>
  );
};

export default Home;
