import { useState, useEffect, ReactNode } from 'react';

import styles from './BaseAccordion.module.scss';
import { ReactComponent as IconArrow } from '../../../assets/images/shared/icon-arrow.svg';

interface IBaseAccordionProps {
  id: string;
  label: string;
  initialState?: boolean;
  isDisabled?: boolean;
  onMarkAsActive?: (slug: string) => void;
  children: ReactNode;
}

const BaseAccordion = ({ id, label, initialState = false, isDisabled = false, onMarkAsActive, children }: IBaseAccordionProps) => {
  const [ isActive, setIsActive ] = useState<boolean>(initialState);

  const handleTogglePanel = () => {
    setIsActive((prevState => !prevState));

    if (onMarkAsActive) {
      onMarkAsActive(id);
    }
  };

  useEffect(() => {
    setIsActive(initialState);
  }, [initialState]);

  return (
    <fieldset id={ id } className={ styles.accordion }>
      <legend>
        <button
          type="button"
          id={ `accordion-header-${id}` }
          aria-controls={ `accordion-panel-${id}` }
          aria-expanded={ isActive }
          className={ `row | ${styles['accordion__header']} ${isActive ? `${styles['accordion__header-active']}` : ``}` }
          disabled={ isDisabled }
          onClick={ handleTogglePanel }
        >
          <span>{ label }</span> <IconArrow aria-hidden="true" />
        </button>
      </legend>

      <section
        id={ `accordion-panel-${id}` }
        aria-labelledby={ `accordion-header-${id}` }
        className={ `${isActive ? `${styles['accordion__panel--active']}` : `${styles['accordion__panel']}`}` }
      >
        { children }
      </section>
    </fieldset>
  );
};

export default BaseAccordion;
