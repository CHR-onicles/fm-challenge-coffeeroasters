import { IPageContent } from '../../../interfaces/page-content-interface';

import bgQualityImage from '../../../assets/images/about/desktop/bg-quality.png';

import styles from './OurQuality.module.scss';

interface IOurQualityProps {
  content: IPageContent;
}

const OurQuality = ({ content }: IOurQualityProps) => {
  const { title, description, imagePath } = content;

  return (
    <section className={ styles['our-quality'] }>
      <div className="container">
        <div className={ styles['our-quality__content'] } style={ { backgroundImage: `url(${bgQualityImage})`} }>
          <div className="grid-cols">
            <div className="grid__item grid__item--span-lg-5 grid__item--start-lg-8 grid__item--order-lg-2">
              <picture>
                <source media="(min-width: 1110px)" srcSet={ imagePath[2] } />
                <source media="(min-width: 768px)" srcSet={ imagePath[1] } />
                <img src={ imagePath[0] } alt={ title } className={ styles['our-quality__content-image'] } />
              </picture>
            </div>

            <div className="grid__item grid__item--span-lg-6 grid__item--order-lg-1">
              <h2>{ title }</h2>

              <p>{ description }</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurQuality;
