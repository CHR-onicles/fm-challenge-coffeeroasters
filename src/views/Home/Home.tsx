import { TheHero, HowItWorks } from '../../components/layout';
import { OurCollection, WhyChooseUs } from './index';

const Home = () => {
  return (
    <main>
      <TheHero />
      
      <OurCollection />

      <WhyChooseUs />

      <HowItWorks />
    </main>
  );
};

export default Home;
