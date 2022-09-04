import { BaseCard } from '../../ui';

import { workingSteps } from '../../../data/working-steps';

import styles from './HowItWorks.module.scss';

const HowItWorks = () => {
  return (
    <section className={ styles['how-it-works'] }>
      <div className="container">
        <BaseCard customClasses={ styles['how-it-works__card'] }>
          <h2 className={ styles['how-it-works__title'] }>How it works</h2>

          <ul className={ `${styles['how-it-works__list']} | grid-cols` }>
            {
              workingSteps.map(step => (
                <li
                  key={ step.title }
                  className={ `${styles['how-it-works__item']} | grid__item grid__item--span-md-4 grid__item--span-lg-4` }
                >
                  <h3>{ step.title }</h3>

                  <p>{ step.description }</p>
                </li>
              ))
            }
          </ul>
        </BaseCard>
      </div>
    </section>
  );
};

export default HowItWorks;
