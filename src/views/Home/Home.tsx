import { useState, useEffect, Fragment } from 'react';

import { TheHero } from '../../components/layout';
import { BaseHowItWorks, BaseSkeleton } from '../../components/ui';
import { OurCollection, WhyChooseUs } from './index';

import { getPageContent } from '../../services';

import { IPageContent } from '../../interfaces/page-content-interface';

const Home = () => {
  const [ pageContent, setPageContent ] = useState<IPageContent[]>([]);

  const handleGetPageContent = async () => {
    try {
      const pageContentData = await getPageContent('home');

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
            <TheHero content={ pageContent[0] } />
      
            <OurCollection content={ pageContent[1] } />

            <WhyChooseUs content={ pageContent[2] } />

            <BaseHowItWorks content={ pageContent[3] } />
          </Fragment>
        ) : (
          <section>
            <div className="container">
              <div className="grid-cols mb-s5 pb-s5">
                <div className="grid__item">
                  <BaseSkeleton variant="hero" />
                </div>
              </div>

              <div className="grid-cols ml-s5 mr-s5 pl-s5 pr-s5 mb-s5 pb-s5">
                <div className="grid__item grid__item--span-md-10 grid__item--span-lg-3">
                  <BaseSkeleton variant="card" />
                </div>

                <div className="grid__item grid__item--span-md-10 grid__item--span-lg-3">
                  <BaseSkeleton variant="card" />
                </div>

                <div className="grid__item grid__item--span-md-10 grid__item--span-lg-3">
                  <BaseSkeleton variant="card" />
                </div>
                
                <div className="grid__item grid__item--span-md-10 grid__item--span-lg-3">
                  <BaseSkeleton variant="card" />
                </div>
              </div>

              <div className="grid-cols ml-s5 mr-s5 pl-s5 pr-s5 mb-s5 pb-s5">
                <div className="grid__item">
                  <BaseSkeleton variant="article" />
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
            </div>
          </section>
        )
      }
    </main>
  );
};

export default Home;
