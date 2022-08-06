import { colors } from '../../../data/colors';

import { Swatch } from '../../../components/ui/';

const ColorsSection = () => {
  return (
    <section className="container">
      <h2>Colors</h2>

      <div className="grid-cols">
         {
          colors.map(color => (
            <div className="grid__item grid__item--span-lg-4" key={ color.hex }>
              <Swatch colorSwatch={ color }/>
              {/* <div className="swatch | stack">
                <div className={ `swatch__color | row box | bg-${color.colorVar}` }>
                  <span className="text-font-black">{ color.hex }</span>

                  <span className="text-font-black">{ color.name }</span>
                </div>

                <div className="swatch__color-model | row">
                  <span>RGB</span>

                  <span>{ color.rgb }</span>
                </div>

                <div className="swatch__color-model | row">
                  <span>HSL</span>

                  <span>{ color.hsl }</span>
                </div>
              </div> */}
            </div>
          ))
         }
      </div>
    </section>
  );
};

export default ColorsSection;
