import { useState, useEffect, Fragment } from 'react';

import { BaseHero } from '../../components/layout';
import { OurCommitment, OurQuality, OurHeadQuarters } from './index';

import { getPageContent } from '../../services';

import { IPageContent } from '../../interfaces/page-content-interface';

import mobileHeroImage from '../../assets/images/about/mobile/image-hero-whitecup.jpg';
import tabletHeroImage from '../../assets/images/about/tablet/image-hero-whitecup.jpg';
import desktopHeroImage from '../../assets/images/about/desktop/image-hero-whitecup.jpg';

const AboutUs = () => {
  const [ pageContent, setPageContent ] = useState<IPageContent[]>([]);

  const handleGetPageContent = async () => {
    try {
      const pageContentData = await getPageContent('about');

      // console.log('handleGetPageContent: ', pageContentData[0].title);
      setPageContent(() => pageContentData);
    } catch(error) {
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
            <BaseHero
              title={ pageContent[0].title }
              description={ pageContent[0].description }
              bgImages={ pageContent[0].imagePath }
            />

            <OurCommitment content={ pageContent[1] } />

            <OurQuality content={ pageContent[2] } />

            <OurHeadQuarters />
          </Fragment>
        ) : null
      }
    </main>
  );
};

export default AboutUs;
