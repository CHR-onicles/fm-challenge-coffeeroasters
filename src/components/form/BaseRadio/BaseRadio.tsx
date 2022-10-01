import { FormEvent } from 'react';

import styles from './BaseRadio.module.scss';

interface IBaseRadioProps {
  id: string;
  label: string;
  description: string;
  name: string;
  value: string;
  checked?: boolean;
  onHandleChange: (event: FormEvent<HTMLInputElement>) => void;
}

const BaseRadio = ({ id, label, description, name, value, checked = false, onHandleChange }: IBaseRadioProps) => {
  return (
    <div className={ styles['radio-control'] }>
      <input 
        type="radio"
        id={ id }
        value={ value }
        name={ name }
        defaultChecked={ checked }
        onChange={ onHandleChange }
      />

      <label htmlFor={ id } className={ `${styles['radio-control__label']} | stack` }>
        { label }
        <span className={ styles['radio-control__description'] }>{ description }</span>
      </label>
    </div>
  );
};

export default BaseRadio;
