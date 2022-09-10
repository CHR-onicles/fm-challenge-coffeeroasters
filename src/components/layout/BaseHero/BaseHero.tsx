import { useRef, useCallback } from 'react';

import { useMediaQuery } from '../../../hooks';

import styles from './BaseHero.module.scss';

interface IBaseHeroProps {
  title: string;
  description: string;
  bgImages: string[];
}

const BaseHero = ({ title, description, bgImages }: IBaseHeroProps) => {
  const divRef = useRef<HTMLDivElement>(null);
  const handleMobileHeroImage = useCallback((mediaQueryList: MediaQueryList) => {
    if (!divRef.current) {
      return;
    }

    if (mediaQueryList.matches) {
      divRef.current.style.backgroundImage = `url(${bgImages[0]})`;
    }
  }, [bgImages]);

  const handleTabletHeroImage = useCallback((mediaQueryList: MediaQueryList) => {
    if (!divRef.current) {
      return;
    }

    if (mediaQueryList.matches) {
      divRef.current.style.backgroundImage = `url(${bgImages[1]})`;
    }
  }, [bgImages]);

  const handleDesktopHeroImage = useCallback((mediaQueryList: MediaQueryList) => {
    if (!divRef.current) {
      return;
    }

    if (mediaQueryList.matches) {
      divRef.current.style.backgroundImage = `url(${bgImages[2]})`;
    }
  }, [bgImages]);

  useMediaQuery('(min-width: 0px) and (max-width: 767px)', handleMobileHeroImage);
  useMediaQuery('(min-width: 768px) and (max-width: 1023px)', handleTabletHeroImage);
  useMediaQuery('(min-width: 1024px)', handleDesktopHeroImage);
  
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
