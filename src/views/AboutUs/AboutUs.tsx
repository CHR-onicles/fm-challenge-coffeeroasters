import { Fragment } from 'react';

import { BaseHero } from '../../components/layout';
import { BaseSkeleton, BaseError } from '../../components/ui';
import { OurCommitment, OurQuality, OurHeadquarters } from './index';

import { useContent } from '../../hooks';

const AboutUs = () => {
  const { content, error, status } = useContent('about');

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
              <div className="grid__item grid__item--span-md-5 grid__item--span-lg-5">
                <BaseSkeleton variant="image" />
              </div>

              <div className="grid__item grid__item--span-md-6 grid__item--start-md-7 grid__item--span-lg-6 grid__item--start-lg-7">
                <BaseSkeleton variant="content" />
              </div>
            </div>

            <div className="grid-cols ml-md-s5 mr-md-s5 pl-md-s5 pr-md-s5 mb-s5 pb-s5">
              <div className="grid__item grid__item--span-md-6 grid__item--span-lg-6">
                <BaseSkeleton variant="content" />
              </div>

              <div className="grid__item grid__item--span-md-5 grid__item--start-md-8 grid__item--span-lg-5 grid__item--start-lg-8">
                <BaseSkeleton variant="image" />
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
        <BaseError error={ error } />
      </main>
    );
  }

  return (
    <main>
      <Fragment>
        <BaseHero content={ content[0] }/>

        <OurCommitment content={ content[1] } />

        <OurQuality content={ content[2] } />

        <OurHeadquarters content={ content[3] } />
      </Fragment>
    </main>
  );
};

export default AboutUs;
