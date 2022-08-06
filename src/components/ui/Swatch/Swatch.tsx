import styles from './Swatch.module.scss';

interface Color {
  name: string;
  hex: string;
  rgb: string;
  hsl: string;
  colorVar: string;
};

interface SwatchProps {
  colorSwatch: Color;
};

const Swatch = ({ colorSwatch }: SwatchProps) => {
  const { name, hex, rgb, hsl, colorVar } = colorSwatch;

  return (
    <div className={ `${styles.swatch} | stack` }>
      <div className={ `${styles['swatch__color']} | row box | bg-${colorVar}` }>
        <span className="text-font-black text-neutral-color-1">{ hex }</span>

        <span className="text-font-black">{ name }</span>
      </div>

      <div className="swatch__color-model | row">
        <span>RGB</span>

        <span>{ rgb }</span>
      </div>

      <div className="swatch__color-model | row">
        <span>HSL</span>

        <span>{ hsl }</span>
      </div>
    </div>
  );
};

export default Swatch;
