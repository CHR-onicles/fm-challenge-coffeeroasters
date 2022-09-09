import styles from './BaseSwatch.module.scss';

interface IColor {
  name: string;
  hex: string;
  rgb: string;
  hsl: string;
  colorVar: string;
  type?: string;
};

interface ISwatchProps {
  colorSwatch: IColor;
};

const BaseSwatch = ({ colorSwatch }: ISwatchProps) => {
  const { name, hex, rgb, hsl, colorVar, type } = colorSwatch;

  return (
    <div className={ `${styles.swatch} | stack` } data-variant={ type }>
      <div className={ `${styles['swatch__color']} | row box | bg-${colorVar}` }>
        <span className="text-font-black text-neutral-color-1">{ hex }</span>

        <span className="text-font-black">{ name }</span>
      </div>

      <div className={ `${styles['swatch__color-model']} | row` }>
        <span>RGB</span>

        <span>{ rgb }</span>
      </div>

      <div className={ `${styles['swatch__color-model']} | row` }>
        <span>HSL</span>

        <span>{ hsl }</span>
      </div>
    </div>
  );
};

export default BaseSwatch;
