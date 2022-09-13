import { useState, useEffect, Fragment } from 'react';

import { BaseHero } from '../../components/layout';
import { OurCommitment, OurQuality, OurHeadquarters } from './index';

import { getPageContent, getHeadquarters } from '../../services';

import { IPageContent } from '../../interfaces/page-content-interface';
import { IHeadquarter } from '../../interfaces/headquarter-interface';

const AboutUs = () => {
  const [ pageContent, setPageContent ] = useState<IPageContent[]>([]);
  const [ headquarters, setHeadquarters ] = useState<IHeadquarter[]>([]);

  const handleGetPageContent = async () => {
    try {
      const pageContentData = await getPageContent('about');

      setPageContent(pageContentData);
    } catch (error) {
      setPageContent([]);
    }
  };

  const handleGetHeadquarters = async () => {
    try {
      const headquartersData = await getHeadquarters();

      setHeadquarters(headquartersData);
    } catch (error) {
      setHeadquarters([]);
    }
  }

  useEffect(() => {
    handleGetPageContent();
    handleGetHeadquarters();
  }, []);

  return (
    <main>
      {
        pageContent.length ? (
          <Fragment>
            <BaseHero content={ pageContent[0] }/>

            <OurCommitment content={ pageContent[1] } />

            <OurQuality content={ pageContent[2] } />
          </Fragment>
        ) : null
      }
      
      <OurHeadquarters headquarters={ headquarters } />
    </main>
  );
};

export default AboutUs;
