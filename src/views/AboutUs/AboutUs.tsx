import { BaseHero } from '../../components/layout';

const AboutUs = () => {
  return (
    <main>
      <BaseHero title="About Us" description="Some text for the description" imgPath="some image path" />

      <section className="container">
        <h2>About us Component</h2>
      </section>
    </main>
  );
};

export default AboutUs;
