import { BaseCard } from '../../../components/ui';

import styles from './ThankYou.module.scss';

const ThankYou = () => {
  return (
    <section className={ styles['thank-you'] }>
      <div className="container">
        <BaseCard>
          <div className="grid-cols">
            <div className="grid__item">
              <h2>Thank you</h2>
            </div>

            <div className="grid__item grid__item--span-md-10 grid__item--start-md-2 grid__item--span-lg-6 grid__item--start-lg-4">
              <p>Your coffee bag will soon be at your door for you to enjoy your brew. Thank you for placing your trust and confidence in our ability to serve you the world's best artisan coffee from around the world. We hope to see you again.</p> 
            </div>
          </div>
        </BaseCard>
      </div>
    </section>
  );
};

export default ThankYou;
