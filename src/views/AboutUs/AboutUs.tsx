import { BaseHero } from '../../components/layout';
import { OurCommitment, OurQuality, OurHeadQuarters } from './index';

import mobileHeroImage from '../../assets/images/about/mobile/image-hero-whitecup.jpg';
import tabletHeroImage from '../../assets/images/about/tablet/image-hero-whitecup.jpg';
import desktopHeroImage from '../../assets/images/about/desktop/image-hero-whitecup.jpg';

const AboutUs = () => {
  return (
    <main>
      <BaseHero
        title="About Us"
        description="Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment."
        bgImages={ [mobileHeroImage, tabletHeroImage, desktopHeroImage] }
      />

      <OurCommitment />

      <OurQuality />

      <OurHeadQuarters />
    </main>
  );
};

export default AboutUs;
