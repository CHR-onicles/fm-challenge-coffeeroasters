import { BaseRadio } from "../../../components/form";

const ButtonsSection = () => {
  return (
    <section className="container | mb-s5">
      <div className="grid-cols | mb-s5">
        <div className="grid__item grid__item--span-4 | text-align-center">
          <p className="mb-s3">Main Button Default</p>

          <button type="button" className="btn">Button</button>
        </div>

        <div className="grid__item grid__item--span-4 | text-align-center">
          <p className="mb-s3">Main Button Hover</p>

          <button type="button" className="btn active">Button</button>
        </div>

        <div className="grid__item grid__item--span-4 | text-align-center">
          <p className="mb-s3">Main Button Disabled</p>

          <button type="button" className="btn" disabled>Button</button>
        </div>
      </div>

      <div className="grid-cols">
        <div className="grid__item grid__item--span-4 | text-align-center">
          <p className="mb-s3">Big Selection Option Default</p>

          <BaseRadio />
        </div>

        <div className="grid__item grid__item--span-4 | text-align-center">
          <p className="mb-s3">Big Selection Option Hover</p>

          <BaseRadio />
        </div>

        <div className="grid__item grid__item--span-4 | text-align-center">
          <p className="mb-s3">Big Selection Option Active</p>

          <BaseRadio />
        </div>
      </div>
    </section>
  );
};

export default ButtonsSection;
