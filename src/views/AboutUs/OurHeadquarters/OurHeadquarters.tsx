import { IContent } from '../../../interfaces/content-interface';
import { IHeadquarter } from '../../../interfaces/headquarter-interface';

import styles from './OurHeadquarters.module.scss';

interface IOurHeadquartersProps {
  content: IContent;
}

const OurHeadquarters = ({ content }: IOurHeadquartersProps) => {
  const { title, listing } = content;

  return (
    <section className={ styles.headquarters }>
      <div className="container">
        <div className={ styles['headquarters__content'] }>
          <h2>{ title }</h2>

          {
            listing?.length ? (
              <ul className={ `grid-cols | ${styles['headquarters__list']}` }>
                {
                  listing.map((headquarter: IHeadquarter) => (
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
