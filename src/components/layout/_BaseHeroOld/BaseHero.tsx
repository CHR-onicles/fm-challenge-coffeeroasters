import { useRef, useCallback } from 'react';

import { useMediaQuery } from '../../../hooks';

import styles from './BaseHero.module.scss';

interface IBaseHeroProps {
  title: string;
  description: string;
  bgImages: string[];
}

const MEDIAQUERY = {
  MOBILE: '(max-width: 767px)',
  TABLET: '(min-width: 768px) and (max-width: 1023px)',
  DESKTOP: '(min-width: 1024px)',
};

const BaseHero = ({ title, description, bgImages }: IBaseHeroProps) => {
  const divRef = useRef<HTMLDivElement>(null);
  const handleHeroImage = useCallback((mediaQueryList: MediaQueryList) => {
    if (!divRef.current) {
      return;
    }

    let bgImage;

    switch (mediaQueryList.media) {
      case MEDIAQUERY.MOBILE:
        bgImage = bgImages[0];
        break;

      case MEDIAQUERY.TABLET:
        bgImage = bgImages[1];
        break;
    
      default:
        bgImage = bgImages[2];
        break;
    }

    if (mediaQueryList.matches) {
      divRef.current.style.backgroundImage = `url(${bgImage})`;
    }
  }, [bgImages]);

  useMediaQuery(MEDIAQUERY.MOBILE, handleHeroImage);
  useMediaQuery(MEDIAQUERY.TABLET, handleHeroImage);
  useMediaQuery(MEDIAQUERY.DESKTOP, handleHeroImage);
  
  return (
    <section className={ styles['base-hero'] }>
      <div className="container">
        <div className={ styles['base-hero__content'] } ref={ divRef }>
          <div className="grid-cols">
            <div className="grid__item grid__item--span-md-8 grid__item--span-lg-5">
              <h1>{ title }</h1>

              <p>{ description }</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BaseHero;
