import { FormEvent, KeyboardEvent } from 'react';

import styles from './BaseRadio.module.scss';

interface IBaseRadioProps {
  id: string;
  label: string;
  description: string;
  name: string;
  value: string;
  checked?: boolean;
  onHandleChange: (name: string, value: string) => void;
}

const BaseRadio = ({ id, label, description, name, value, checked = false, onHandleChange }: IBaseRadioProps) => {
  const handleRadioChange = (event: FormEvent<HTMLInputElement>) => {
    const { name, value } = event.target as HTMLInputElement;

    onHandleChange(name, value);
  };

  const handleLabelKeyDown = (event: KeyboardEvent) => {
    if (event.code === 'Space' || event.code === 'Enter') {

      onHandleChange(name, value);
    }
  }

  return (
    <div className={ styles['radio-control'] }>
      <input 
        type="radio"
        id={ id }
        value={ value }
        name={ name }
        checked= { checked }
        onChange={ handleRadioChange }
        hidden
      />

      <label
        htmlFor={ id }
        className={ `${styles['radio-control__label']} | stack` }
        tabIndex={ 0 }
        onKeyDown={ handleLabelKeyDown }
      >
        { label }
        <span className={ styles['radio-control__description'] }>{ description }</span>
      </label>
    </div>
  );
};

export default BaseRadio;
