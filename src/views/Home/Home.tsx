import { useState, useEffect, Fragment } from 'react';

import { TheHero } from '../../components/layout';
import { BaseHowItWorks } from '../../components/ui';
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
        ) : null
      }
    </main>
  );
};

export default Home;
