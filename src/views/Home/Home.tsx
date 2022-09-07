import { useState, useEffect } from 'react';

import { TheHero, HowItWorks } from '../../components/layout';
import { OurCollection, WhyChooseUs } from './index';

import { getCoffeeCollection } from '../../services';

const Home = () => {
  const [ coffeeCollection, setCoffeeCollection ] = useState<any>(null);

  useEffect(() => {
    const handleGetCoffeeCollection = async () => {
      try {
        const coffeeCollection = await getCoffeeCollection();
  
        setCoffeeCollection(coffeeCollection);
      } catch (error) {
        console.log(error);
        setCoffeeCollection([]);
      }
    }

    handleGetCoffeeCollection();
  }, []);

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
