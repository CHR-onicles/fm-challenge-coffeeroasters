import { BaseCard } from '../../../components/ui';

const WhyChooseUs = () => {
  return (
    <section>
      <div className="container">
        <BaseCard>
          <div className="grid-cols">
            <div className="grid__item grid__item--span-lg-6 grid__item--start-lg-4">
              <h2>Why choose us?</h2>

              <p>A large part of our role is choosing which particular coffees will be featured in our range. This means working closely with the best coffee growers to give you a more impactful experience on every level.</p> 
            </div>
          </div>
        </BaseCard>
      </div>
    </section>
  );
};

export default WhyChooseUs;
