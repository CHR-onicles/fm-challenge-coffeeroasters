import { coffeeTypes } from '../../../data/coffee-types';

import styles from './OurCollection.module.scss';

const OurCollection = () => {
  return (
    <section className={ styles.collection }>
      <div className="container">
        <h2 className={ styles['collection__title'] }>Our Collection</h2>
        
        <ul className={ `${styles['collection__list']} grid-cols` }>
          {
            coffeeTypes.map(coffeeType => (
              <li
                className={ `${styles['collection__item']} grid__item grid__item--span-lg-3` }
                key={ coffeeType.name }
              >
                <img
                  className={ styles['collection__image'] }
                  src={ coffeeType.imagePath }
                  alt={ coffeeType.name }
                />

                <div className={ styles['collection__content'] }>
                  <h3 className="h4">{ coffeeType.name }</h3>

                  <p>{ coffeeType.description }</p>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  );
};

export default OurCollection;
