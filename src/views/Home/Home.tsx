import { Fragment } from 'react';

import { TheHero } from '../../components/layout';
import { BaseHowItWorks, BaseSkeleton } from '../../components/ui';
import { OurCollection, WhyChooseUs } from './index';

import { useContent } from '../../hooks';

const Home = () => {
  const { content, error, status } = useContent('home');

  if (status === 'loading') {
    return (
      <main>
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
        <TheHero content={ content[0] } />
  
        <OurCollection content={ content[1] } />

        <WhyChooseUs content={ content[2] } />

        <BaseHowItWorks content={ content[3] } />
      </Fragment>
    </main>
  );
};

export default Home;
