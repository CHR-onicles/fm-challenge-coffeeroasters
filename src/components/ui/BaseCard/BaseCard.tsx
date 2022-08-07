import { ReactNode } from 'react';

import styles from './BaseCard.module.scss';

interface BaseCardProps {
  children: ReactNode;
}

const BaseCard = ({ children, ...rest }: BaseCardProps) => {
  return (
    <div className={ styles.card } { ...rest }>
      <div className={ styles['card__content'] }>
        { children }
      </div>
    </div>
  );
};

export default BaseCard;
