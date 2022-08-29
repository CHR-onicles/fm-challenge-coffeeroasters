import { Link } from 'react-router-dom';

import mobileHeroImage from '../../../assets/images/home/mobile/image-hero-coffeepress.jpg';
import tabletHeroImage from '../../../assets/images/home/tablet/image-hero-coffeepress.jpg';
import desktopHeroImage from '../../../assets/images/home/desktop/image-hero-coffeepress.jpg';

import styles from './TheHero.module.scss';

const TheHero = () => {
  return (
    <section>
      <div className={ `container ${styles.hero}` }>
        <div className={ styles['hero__img'] }>
          <picture>
            <source media="(min-width: 1110px)" srcSet={ desktopHeroImage } />
            <source media="(min-width: 768px)" srcSet={ tabletHeroImage } />
            <source srcSet={ mobileHeroImage } />
            <img src={ mobileHeroImage } alt="Great coffee made simple" />
          </picture>
        </div>
        
        <div className={ styles['hero__content'] }>
          <h1>Great coffee made simple.</h1>

          <p>Start your mornings with the world's best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.</p>

          <Link to="/" className="btn">Create your plan</Link>
        </div>
      </div>
    </section>
  );
};

export default TheHero;
