import { Link } from 'react-router-dom';

import { IContent } from '../../../interfaces/content-interface';

import styles from './TheHero.module.scss';

interface ITheHeroProps {
  content: IContent;
}

const TheHero = ({ content }: ITheHeroProps) => {
  const { title, description, imagePath } = content;

  return (
    <section className={ styles.hero }>
      <div className="container">
        <div className={ styles['hero__content'] }>
          <picture>
            <source media="(min-width: 1110px)" srcSet={ imagePath ? imagePath[2] : '' } />
            <source media="(min-width: 768px)" srcSet={ imagePath ? imagePath[1] : '' } />
            <source srcSet={ imagePath ? imagePath[0] : '' } />
            <img
              src={ imagePath ? imagePath[0] : '' }
              alt={ title }
            />
          </picture>

          <div className={ styles['hero__body'] }>
            <h1>{ title }</h1>

            <p>{ description }</p>

            <Link
              to="/create-plan"
              className="btn"
              data-testid="btn-hero"
            >Create your plan</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheHero;
