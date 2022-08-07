import { BaseCard } from '../../../components/ui';

const TypographySection = () => {
  return (
    <section className="container">
      <h2>Typography</h2>

      <BaseCard data-variant="cyan">
        <h3>Some title</h3>

        <p>Some content Test</p>
      </BaseCard>
    </section>
  );
};

export default TypographySection;
