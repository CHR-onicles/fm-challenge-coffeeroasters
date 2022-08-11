import styles from './BaseRadio.module.scss';

interface BaseRadioProps {
  id: string;
  label: string;
  description: string;
  name: string;
  value: string;
  checked?: boolean;
}

const BaseRadio = ({ id, label, description, name, value, checked = false }: BaseRadioProps) => {
  return (
    <div className={ styles['radio-control'] }>
      <input type="radio" id={ id } value={ value } name={ name } defaultChecked={ checked } />
      <label htmlFor={ id } className={ `${styles['radio-control__label']} | stack` }>
        { label }
        <span className={ styles['radio-control__description'] }>{ description }</span>
      </label>
    </div>
  );
};

export default BaseRadio;
