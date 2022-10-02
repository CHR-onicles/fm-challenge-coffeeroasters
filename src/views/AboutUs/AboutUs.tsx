import { useState, useEffect, Fragment } from 'react';

import { BaseHero } from '../../components/layout';
import { OurCommitment, OurQuality, OurHeadquarters } from './index';

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
  }, []);

  return (
    <main>
      {
        pageContent.length ? (
          <Fragment>
            <BaseHero content={ pageContent[0] }/>

            <OurCommitment content={ pageContent[1] } />

            <OurQuality content={ pageContent[2] } />

            <OurHeadquarters content={ pageContent[3] } />
          </Fragment>
        ) : null
      }
    </main>
  );
};

export default AboutUs;
