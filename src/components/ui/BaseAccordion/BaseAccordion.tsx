import { useState, ReactNode } from 'react';

import styles from './BaseAccordion.module.scss';
import { ReactComponent as IconArrow } from '../../../assets/images/shared/icon-arrow.svg';

interface BaseAccordionProps {
  id: string;
  label: string;
  children: ReactNode;
}

const BaseAccordion = ({ id, label, children }: BaseAccordionProps) => {
  const [ isActive, setIsActive ] = useState<boolean>(false);

  const handleToggleDropdown = () => {
    setIsActive((prevState => !prevState));
  };

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
