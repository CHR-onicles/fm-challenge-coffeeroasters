import { Link } from 'react-router-dom';

import { BaseCard } from '../../ui';

import { IWorkingStep } from '../../../interfaces/working-step-interface';

import styles from './BaseHowItWorks.module.scss';

interface IBaseHowItWorksProps {
  steps: IWorkingStep[]
}

const BaseHowItWorks = ({ steps }: IBaseHowItWorksProps) => {
  return (
    <section className={ styles['how-it-works'] }>
      <div className="container">
        <BaseCard customClasses={ styles['how-it-works__card'] }>
          <h2 className={ styles['how-it-works__title'] }>How it works</h2>

          {
            steps.length
            ? (
              <ul className={ `${styles['how-it-works__list']} | grid-cols` }>
                {
                  steps.map(step => (
                    <li
                      key={ step.id }
                      className={ `${styles['how-it-works__item']} | grid__item grid__item--span-md-4 grid__item--span-lg-4` }
                    >
                      <h3>{ step.title }</h3>

                      <p>{ step.description }</p>
                    </li>
                  ))
                }
              </ul>
            ) : (
              <p className={ styles['how-it-works__error'] }>Sorry, working steps data could not be loaded.</p>
            )
          }

          <Link to="/" className={ `${styles['how-it-works__cta']} | btn` }>Create your plan</Link>
        </BaseCard>
      </div>
    </section>
  );
};

export default BaseHowItWorks;
