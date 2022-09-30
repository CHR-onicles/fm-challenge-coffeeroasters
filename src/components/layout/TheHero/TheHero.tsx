import { Link } from 'react-router-dom';

import { IPageContent } from '../../../interfaces/page-content-interface';

import styles from './TheHero.module.scss';

interface ITheHeroProps {
  content: IPageContent;
}

const TheHero = ({ content }: ITheHeroProps) => {
  const { title, description, imagePath } = content;

  return (
    <section className={ styles.hero }>
      <div className="container">
        <div className={ styles['hero__content'] }>
          <picture>
            <source media="(min-width: 1110px)" srcSet={ imagePath[2] } />
            <source media="(min-width: 768px)" srcSet={ imagePath[1] } />
            <source srcSet={ imagePath[0] } />
            <img
              src={ imagePath[0] }
              alt={ title }
            />
          </picture>

          <div className={ styles['hero__body'] }>
            <h1>{ title }</h1>

            <p>{ description }</p>

            <Link to="/create-plan" className="btn">Create your plan</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheHero;
