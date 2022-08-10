import styles from './BaseRadio.module.scss';

const BaseRadio = () => {
  return (
    <div className={ styles['radio-control'] }>
      <input type="radio" id="option-1" name="options" value="option-1" />
      <label htmlFor="option-1" className={ `${styles['radio-control__label']} | stack` }>
        Option
        <span className={ styles['radio-control__description'] }>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</span>
      </label>
    </div>
  );
};

export default BaseRadio;
