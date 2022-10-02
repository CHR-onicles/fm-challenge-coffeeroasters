import { useRef, useCallback } from 'react';

import { useMediaQuery } from '../../../hooks';

import { IPageContent } from '../../../interfaces/page-content-interface';

import styles from './OurCollection.module.scss';

interface IOurCollectionProps {
  content: IPageContent;
}

const OurCollection = ({ content }: IOurCollectionProps) => {
  const { title, listing } = content;

  const collectionListRef = useRef<HTMLUListElement>(null);

  const handleMediaQueryChange = useCallback((mediaQueryList: MediaQueryList) => {
    if (!collectionListRef.current) {
      return;
    }

    const liElements = collectionListRef.current.querySelectorAll('li');

    if (mediaQueryList.matches) {
      liElements.forEach(elem => {
        elem.classList.add('grid__item--start-md-2');
      });
    } else {
      liElements.forEach(elem => {
        elem.classList.remove('grid__item--start-md-2');
      });
    }
  }, []);

  useMediaQuery('(max-width: 992px)', handleMediaQueryChange);

  return (
    <section className={ styles.collection }>
      <div className="container">
        <div className={ styles['collection__content'] }>
          <h2 className={ styles['collection__title'] }>{ title }</h2>
          
          {
            listing?.length ? (
              <ul
                ref={ collectionListRef }
                className={ `${styles['collection__list']} | grid-cols` }
              >
                {
                  listing.map(coffeeType => (
                    <li
                      key={ coffeeType.id }
                      className={ `grid__item grid__item--span-md-10 grid__item--span-lg-3 | ${styles['collection__item']}` }
                    >
                      <img
                        className={ styles['collection__image'] }
                        src={ coffeeType.imagePath }
                        alt={ coffeeType.title }
                      />

                      <div className={ styles['collection__body'] }>
                        <h3 className="h4">{ coffeeType.title }</h3>

                        <p>{ coffeeType.description }</p>
                      </div>
                    </li>
                  ))
                }
              </ul>
            ) : (
              <p className={ styles['collection__error'] }>Sorry, coffee collection data could not be loaded.</p>
            )
          }
        </div>
      </div>
    </section>
  );
};

export default OurCollection;
