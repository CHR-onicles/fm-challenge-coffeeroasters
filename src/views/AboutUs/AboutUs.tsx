import { useState, useEffect, Fragment } from 'react';

import { BaseHero } from '../../components/layout';
import { BaseSkeleton } from '../../components/ui';
import { OurCommitment, OurQuality } from './index';

import { getPageContent } from '../../services';

import { IPageContent } from '../../interfaces/page-content-interface';

const AboutUs = () => {
  const [ pageContent, setPageContent ] = useState<IPageContent[]>([]);

  const handleGetPageContent = async () => {
    try {
      const pageContentData = await getPageContent('about');

      setPageContent(pageContentData);
    } catch (error) {
      setPageContent([]);
    }
  };

  useEffect(() => {
    handleGetPageContent();

    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      {
        pageContent.length ? (
          <Fragment>
            <BaseHero content={ pageContent[0] }/>

            <OurCommitment content={ pageContent[1] } />

            <OurQuality content={ pageContent[2] } />

            {/* <OurHeadquarters content={ pageContent[3] } /> */}
          </Fragment>
        ) : (
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
        )
      }
    </main>
  );
};

export default AboutUs;
