import { BaseCard } from '../../../components/ui';

import { IBenefit } from '../../../interfaces/benefit-interface';

import styles from './WhyChooseUs.module.scss';

interface IWhyChooseUsProps {
  benefits: IBenefit[];
}

const WhyChooseUs = ({ benefits }: IWhyChooseUsProps) => {
  return (
    <section className={ styles.benefits }>
      <div className="container">
        <BaseCard customClasses={ `${styles['benefits__intro']} | bg-dark-color-2` }>
          <div className="grid-cols">
            <div className="grid__item grid__item--span-md-10 grid__item--start-md-2 grid__item--span-lg-6 grid__item--start-lg-4">
              <h2>Why choose us?</h2>

              <p>A large part of our role is choosing which particular coffees will be featured in our range. This means working closely with the best coffee growers to give you a more impactful experience on every level.</p> 
            </div>
          </div>
        </BaseCard>

        {
          benefits.length ? (
            <ul className="grid-cols">
              {
                benefits.map(benefit => (
                  <li
                    key={ benefit.id }
                    className={ `${styles['benefits__list-item']} | grid__item grid__item--span-lg-4` }
                  >
                    <BaseCard customClasses={ `${styles['benefits__card']} | stack | bg-cyan-color-1` }>
                      <img
                        src={ benefit.icon }
                        alt={ benefit.title }
                      />

                      <div className={ styles['benefits__card-body'] }>
                        <h3>{ benefit.title }</h3>

                        <p>{ benefit.description }</p>
                      </div>
                    </BaseCard>
                  </li>
                ))
              }
            </ul>
          ) : (
            <p className={ styles['benefits__error'] }>Sorry, benefits data could not be loaded.</p>
          )
        }
      </div>
    </section>
  );
};

export default WhyChooseUs;
