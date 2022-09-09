import styles from './BaseHero.module.scss';

interface IBaseHeroProps {
  title: string;
  description: string;
  imgPath: string;
  imgAltText: string;
}

const BaseHero = ({ title, description, imgPath, imgAltText }: IBaseHeroProps) => {
  return (
    <section>
      <div className={ `container ${styles['base-hero']}` }>
        <div>
          <picture>
            <img src="" alt="" />
          </picture>
        </div>

        <div className={ styles['base-hero__content'] }>
          <h1>{ title }</h1>

          <p>{ description }</p>
        </div>
      </div>
    </section>
  );
};

export default BaseHero;
