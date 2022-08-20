import { BaseCard } from '../../../components/ui';

import styles from './TypographySection.module.scss';

const TypographySection = () => {
  return (
    <section className="container | mb-s5">
      <h2 className="sr-only">Typography</h2>

      <BaseCard data-variant="two-tone">
        <div className="grid-cols">
          <div className="grid__item grid__item--span-7">
            <div className={ `${styles['card__body']} | text-align-left` }>
              <h3 className="text-font-black text-neutral-color-1">Fraunces</h3>

              <p className="text-font-black text-neutral-color-1-opacity-25">A B C D E F G H I J K L M N O P Q R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z 1 2 3 4 5 6 7 8 9 0 ! @ # $ % ^ & * ( ) _ +</p>
            </div>
          </div>

          <div className="grid__item grid__item--span-5">
            <div className={ `${styles['card__body']} | text-align-left` }>
              <h3 className="text-font-regular text-neutral-color-1">Barlow</h3>

              <p className="text-font-regular text-neutral-color-1-opacity-25">A B C D E F G H I J K L M N O P Q R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z 1 2 3 4 5 6 7 8 9 0 ! @ # $ % ^ & * ( ) _ +</p>
            </div>
          </div>
        </div>
      </BaseCard>

      <div className="grid-cols | mt-s4">
        <div className="grid__item grid__item--span-7">
          <div className="stack">
            <p><strong className="mr-s2">H1</strong> Fraunces Black, 72px, 72px line</p>

            <h1>Lorem ipsum dolor sit amet</h1>
          </div>

          <div className="stack | mt-s5">
            <p><strong className="mr-s2">H2</strong> Fraunces Black, 40px, 48px line</p>

            <h2>Lorem ipsum dolor sit amet consectetuer adipiscing</h2>
          </div>

          <div className="stack | mt-s5">
            <p><strong className="mr-s2">H3</strong> Fraunces Black, 32px, 36px line</p>

            <h3>Lorem ipsum dolor sit amet consectetuer adipiscing</h3>
          </div>

          <div className="stack | mt-s5">
            <p><strong className="mr-s2">H4</strong> Fraunces Black, 24px, 32px line</p>

            <h4>Lorem ipsum dolor sit amet consectetuer adipiscing</h4>
          </div>
        </div>

        <div className="grid__item grid__item--span-5">
          <div className="stack">
            <p><strong className="mr-s2">Body</strong> Barlow Regular, 16px, 26px line</p>

            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl.</p>

            <p>Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.</p>

            <p>Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TypographySection;
