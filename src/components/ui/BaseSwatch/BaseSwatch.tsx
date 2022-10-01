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
    <div className={ `stack | ${styles.swatch}` } data-variant={ type }>
      <div className={ `row box | ${styles['swatch__color']} | bg-${colorVar}` }>
        <span className="text-font-black text-neutral-color-1">{ hex }</span>

        <span className="text-font-black">{ name }</span>
      </div>

      <div className={ `row | ${styles['swatch__color-model']}` }>
        <span>RGB</span>

        <span>{ rgb }</span>
      </div>

      <div className={ `row | ${styles['swatch__color-model']}` }>
        <span>HSL</span>

        <span>{ hsl }</span>
      </div>
    </div>
  );
};

export default BaseSwatch;
