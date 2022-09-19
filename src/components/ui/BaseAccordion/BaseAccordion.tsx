import { useState, useEffect, ReactNode } from 'react';

import styles from './BaseAccordion.module.scss';
import { ReactComponent as IconArrow } from '../../../assets/images/shared/icon-arrow.svg';

interface IBaseAccordionProps {
  id: string;
  label: string;
  initialState?: boolean;
  onMarkAsActive?: (slug: string) => void;
  children: ReactNode;
}

const BaseAccordion = ({ id, label, initialState = false, onMarkAsActive, children }: IBaseAccordionProps) => {
  const [ isActive, setIsActive ] = useState<boolean>(initialState);

  const handleToggleDropdown = () => {
    setIsActive((prevState => !prevState));

    if (onMarkAsActive) {
      onMarkAsActive(id);
    }
  };

  useEffect(() => {
    setIsActive(initialState);
  }, [initialState]);

  return (
    <div id={ id } className={ styles.accordion }>
      <button
        type="button"
        className={ `${styles['accordion__toggle']} ${isActive ? `${styles['accordion__toggle-active']}` : ``}` }
        onClick={ handleToggleDropdown }
      >{ label } <IconArrow /></button>

      <div className={ `${isActive ? `${styles['accordion__dropdown-active']}` : `${styles['accordion__dropdown']}`}` }>
        { children }
      </div>
    </div>
  );
};

export default BaseAccordion;
