import { ReactNode } from 'react';

import styles from './BaseCard.module.scss';

interface BaseCardProps {
  customClasses?: string;
  children: ReactNode;
}

const BaseCard = ({ customClasses = '', children }: BaseCardProps) => {
  return (
    <div className={ `${customClasses !== '' ? `${styles.card} ${customClasses}` : `${styles.card}` }` }>
      <div className={ styles['card__content'] }>
        { children }
      </div>
    </div>
  );
};

export default BaseCard;
