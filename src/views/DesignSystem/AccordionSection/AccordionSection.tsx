import { BaseAccordion } from '../../../components/ui';

const AccordionSection = () => {
  return (
    <section className="container">
      <h2 className="sr-only">Accordion</h2>

      <div className="grid-cols | mb-s5">
        <div className="grid__item grid__item--span-4 | text-align-center">
          <p className="mb-s3">Accordion Menu Closed Default</p>

          <BaseAccordion id="menu-1" label="Sample Menu">
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
          </BaseAccordion>
        </div>

        <div className="grid__item grid__item--span-4 | text-align-center">
          <p className="mb-s3">Accordion Menu Closed Hover</p>

          <BaseAccordion id="menu-2" label="Sample Menu">
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
          </BaseAccordion>
        </div>

        <div className="grid__item grid__item--span-4 | text-align-center">
          <p className="mb-s3">Accordion Menu Closed Disabled</p>

          <BaseAccordion id="menu-3" label="Sample Menu">
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
          </BaseAccordion>
        </div>
      </div>
    </section>
  );
};

export default AccordionSection;
