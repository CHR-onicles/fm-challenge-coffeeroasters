import { useState, ReactNode } from 'react';

import styles from './BaseAccordion.module.scss';

interface BaseAccordionProps {
  id: string;
  label: string;
  name: string;
  children: ReactNode;
}

const BaseAccordion = ({ id, label, name, children }: BaseAccordionProps) => {
  const [ isDropdownVisible, setIsDropdownVisible ] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsDropdownVisible(event.target.checked);
  };

  return (
    <div className={ styles.accordion }>
      <div className={ styles['accordion__toggle'] }>
        <label htmlFor={ id }>{ label }</label>
        <input id={ id } type="checkbox" name={ name } onChange={ (event) => handleChange(event) } />
      </div>

      <div className={ `${isDropdownVisible ? `${styles['accordion__dropdown-visible']}` : `${styles['accordion__dropdown']}`}` }>
        { children }
      </div>
    </div>
  );
};

export default BaseAccordion;
