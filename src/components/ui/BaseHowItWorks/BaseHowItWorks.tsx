import { Link } from 'react-router-dom';

import { BaseCard } from '../../ui';

import { IContent } from '../../../interfaces/content-interface';
import { IArticle } from '../../../interfaces/article-interface';

import styles from './BaseHowItWorks.module.scss';

interface IBaseHowItWorksProps {
  content: IContent;
  variant?: string;
  withTitle?: boolean;
  withCTA?: boolean;
}

const BaseHowItWorks = ({ content, variant = 'default', withTitle = true, withCTA = true }: IBaseHowItWorksProps) => {
  const { title, listing } = content;

  return (
    <section className={ styles['how-it-works'] } data-variant={ variant }>
      <div className="container">
        <BaseCard customClasses={ styles['how-it-works__card'] }>
          {
            withTitle ? (
              <h2 className={ styles['how-it-works__title'] }>{ title }</h2>
            ) : null
          }

          {
            listing?.length
            ? (
              <ul className={ `grid-cols | ${styles['how-it-works__list']}` }>
                {
                  listing.map((step: IArticle) => (
                    <li
                      key={ step.id }
                      className={ `grid__item grid__item--span-md-4 grid__item--span-lg-4 | ${styles['how-it-works__item']}` }
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

          {
            withCTA ? (
              <Link
                to="/create-plan"
                className={ `btn | ${styles['how-it-works__cta']}` }
                data-testid="btn-how-it-works"
              >Create your plan</Link>
            ) : null
          }
        </BaseCard>
      </div>
    </section>
  );
};

export default BaseHowItWorks;
