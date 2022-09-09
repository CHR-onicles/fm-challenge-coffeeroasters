import { useState, useEffect } from 'react';

import { TheHero, BaseHowItWorks } from '../../components/layout';
import { OurCollection, WhyChooseUs } from './index';

import { getCoffeeCollection, getBenefits, getWorkingSteps } from '../../services';

import { ICoffeeType } from '../../interfaces/coffee-type-interface';
import { IBenefit } from '../../interfaces/benefit-interface';
import { IWorkingStep } from '../../interfaces/working-step-interface';

const Home = () => {
  const [ coffeeCollection, setCoffeeCollection ] = useState<ICoffeeType[]>([]);
  const [ benefits, setBenefits ] = useState<IBenefit[]>([]);
  const [ workingSteps, setWorkingSteps ] = useState<IWorkingStep[]>([]);

  const handleGetCoffeeCollection = async () => {
    try {
      const coffeeCollectionData = await getCoffeeCollection();

      setCoffeeCollection(coffeeCollectionData);
    } catch (error) {
      setCoffeeCollection([]);
    }
  };

  const handleGetBenefits = async () => {
    try {
      const benefitsData = await getBenefits();

      setBenefits(benefitsData);
    } catch (error) {
      setBenefits([]);
    }
  };

  const handleGetWorkingSteps = async () => {
    try {
      const workingStepsData = await getWorkingSteps();

      setWorkingSteps(workingStepsData);
    } catch (error) {
      setWorkingSteps([]);
    }
  }

  useEffect(() => {
    handleGetCoffeeCollection();
    handleGetBenefits();
    handleGetWorkingSteps();
  }, []);

  return (
    <main>
      <TheHero />
      
      <OurCollection coffeeTypes={ coffeeCollection } />

      <WhyChooseUs benefits={ benefits } />

      <BaseHowItWorks steps={ workingSteps } />
    </main>
  );
};

export default Home;
