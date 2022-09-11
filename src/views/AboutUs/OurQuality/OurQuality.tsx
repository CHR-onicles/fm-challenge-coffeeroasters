import { IPageContent } from '../../../interfaces/page-content-interface';

// import styles from './OurQuality.modules.scss';

interface IOurQualityProps {
  content: IPageContent;
}

const OurQuality = ({ content }: IOurQualityProps) => {
  const { title, description, imagePath } = content;

  return (
    <section>
      <div className="container">
        <picture>
          <source media="(min-width: 1110px)" srcSet={ imagePath[2] } />
          <source media="(min-width: 768px)" srcSet={ imagePath[1] } />
          <img src={ imagePath[0] } alt={ title } />
        </picture>
        <h2>{ title }</h2>
        <p>{ description }</p>
      </div>
    </section>
  );
};

export default OurQuality;
