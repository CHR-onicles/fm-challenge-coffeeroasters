import { IPageContent } from '../../../interfaces/page-content-interface';

import styles from './OurCommitment.module.scss';

interface IOurCommitmentProps {
  content: IPageContent;
}

const OurCommitment = ({ content }: IOurCommitmentProps) => {
  const { title, description, imagePath } = content;

  return (
    <section className={ styles['our-commitment'] }>
      <div className="container">
        <div className={ styles['our-commitment__content'] }>
          <div className="grid-cols">
            <div className="grid__item grid__item--span-md-5 grid__item--span-lg-5">
              <picture>
                <source media="(min-width: 1110px)" srcSet={ imagePath[2] } />
                <source media="(min-width: 768px)" srcSet={ imagePath[1] } />
                <img
                  src={ imagePath[0] }
                  alt={ title }
                  className={ styles['our-commitment__content-image'] }
                />
              </picture>
            </div>

            <div className={ `${styles['our-commitment__content-body']} | grid__item grid__item--span-md-6 grid__item--start-md-7 grid__item--span-lg-6 grid__item--start-lg-7` }>
              <h2>{ title }</h2>

              <p>{ description }</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCommitment;
