import { BaseRadio } from "../../../components/form";

const ButtonsSection = () => {
  const handleChange = () => {
    console.log('handleChange');
  };

  return (
    <section className="container | mb-s5">
      <h2 className="sr-only">Buttons</h2>

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

          <BaseRadio
            id="option-1"
            value="option-1"
            name="options" 
            label="Option 1"
            description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
            onHandleChange={ handleChange }
          />
        </div>

        <div className="grid__item grid__item--span-4 | text-align-center">
          <p className="mb-s3">Big Selection Option Hover</p>

          <BaseRadio
            id="option-2"
            value="option-2"
            name="options" 
            label="Option 2"
            description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
            onHandleChange={ handleChange }
          />
        </div>

        <div className="grid__item grid__item--span-4 | text-align-center">
          <p className="mb-s3">Big Selection Option Active</p>

          <BaseRadio
            id="option-3"
            value="option-3"
            name="options" 
            label="Option 3"
            description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
            onHandleChange={ handleChange }
            checked={ true }
          />
        </div>
      </div>
    </section>
  );
};

export default ButtonsSection;
