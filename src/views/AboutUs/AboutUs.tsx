import { BaseHero } from '../../components/layout';
import { OurCommitment, OurQuality, OurHeadQuarters } from './index';

const AboutUs = () => {
  return (
    <main>
      <BaseHero
        title="About Us"
        description="Some text for the description"
        imgPath="some image path"
        imgAltText="The story of Coffeeroasters"
      />

      <OurCommitment />

      <OurQuality />

      <OurHeadQuarters />
    </main>
  );
};

export default AboutUs;
