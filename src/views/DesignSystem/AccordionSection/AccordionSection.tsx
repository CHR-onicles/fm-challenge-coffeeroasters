import { BaseAccordion } from '../../../components/ui';

const AccordionSection = () => {
  return (
    <section className="container">
      <h2 className="sr-only">Accordion</h2>

      <BaseAccordion id="menu-1" label="Sample Menu" name="coffee-plan">
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
      </BaseAccordion>

      <BaseAccordion id="menu-2" label="Sample Menu 2" name="coffee-plan">
        <p>Some other content</p>
      </BaseAccordion>
    </section>
  );
};

export default AccordionSection;
