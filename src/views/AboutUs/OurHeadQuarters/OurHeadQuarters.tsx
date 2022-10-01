import { IHeadquarter } from '../../../interfaces/headquarter-interface';

import styles from './OurHeadquarters.module.scss';

interface IOurHeadquartersProps {
  headquarters: IHeadquarter[];
}

const OurHeadquarters = ({ headquarters }: IOurHeadquartersProps) => {
  return (
    <section className={ styles.headquarters }>
      <div className="container">
        <div className={ styles['headquarters__content'] }>
          <h2>Our headquarters</h2>

          {
            headquarters.length ? (
              <ul className={ `grid-cols | ${styles['headquarters__list']}` }>
                {
                  headquarters.map(headquarter => (
                    <li
                      key={ headquarter.id }
                      className={ `grid__item grid__item--span-md-4 grid__item--span-lg-4 | ${styles['headquarters__item']}` }
                    >
                      <img
                        src={ headquarter.imagePath }
                        alt={ headquarter.country }
                        className={ styles['headquarters__image'] }
                      />

                      <div className={ styles['headquarters__body'] }>
                        <h3>{ headquarter.country }</h3>

                        <p>{ headquarter.address }</p>
                        <p>{ headquarter.town }</p>
                        <p>{ headquarter.state }</p>
                        <p>{ headquarter.tel }</p>
                      </div>
                    </li>
                  ))
                }
              </ul>
            ) : (
              <p>Sorry, headquarters data could not be loaded.</p>
            )
          }
        </div>
      </div>
    </section>
  );
};

export default OurHeadquarters;
