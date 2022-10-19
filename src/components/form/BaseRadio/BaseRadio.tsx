import { FormEvent, KeyboardEvent } from 'react';

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
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.code === 'Space' || event.code === 'Enter') {
      console.log('handleKeyDown: ', event.code);
    }
  }

  return (
    <div className={ styles['radio-control'] }>
      <input 
        type="radio"
        id={ id }
        value={ value }
        name={ name }
        defaultChecked={ checked }
        onChange={ onHandleChange }
        hidden
      />

      <label
        htmlFor={ id }
        className={ `${styles['radio-control__label']} | stack` }
        tabIndex={ 0 }
        onKeyDown={ handleKeyDown }
      >
        { label }
        <span className={ styles['radio-control__description'] }>{ description }</span>
      </label>
    </div>
  );
};

export default BaseRadio;
