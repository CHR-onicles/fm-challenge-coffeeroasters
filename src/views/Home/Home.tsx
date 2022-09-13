import { useState, useEffect, Fragment } from 'react';

import { TheHero, BaseHowItWorks } from '../../components/layout';
import { OurCollection, WhyChooseUs } from './index';

import { getPageContent, getCoffeeCollection, getBenefits, getWorkingSteps } from '../../services';

import { IPageContent } from '../../interfaces/page-content-interface';
import { ICoffeeType } from '../../interfaces/coffee-type-interface';
import { IBenefit } from '../../interfaces/benefit-interface';
import { IWorkingStep } from '../../interfaces/working-step-interface';

const Home = () => {
  const [ pageContent, setPageContent ] = useState<IPageContent[]>([]);
  const [ coffeeCollection, setCoffeeCollection ] = useState<ICoffeeType[]>([]);
  const [ benefits, setBenefits ] = useState<IBenefit[]>([]);
  const [ workingSteps, setWorkingSteps ] = useState<IWorkingStep[]>([]);

  const handleGetPageContent = async () => {
    try {
      const pageContentData = await getPageContent('home');

      setPageContent(pageContentData);
    } catch (error) {
      setPageContent([]);
    }
  };

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
  };

  useEffect(() => {
    handleGetPageContent();
    handleGetCoffeeCollection();
    handleGetBenefits();
    handleGetWorkingSteps();
  }, []);

  return (
    <main>
      {
        pageContent.length ? (
          <Fragment>
            <TheHero content={ pageContent[0] } />
      
            <OurCollection coffeeTypes={ coffeeCollection } />

            <WhyChooseUs content={ pageContent[1] } benefits={ benefits } />

            <BaseHowItWorks steps={ workingSteps } />
          </Fragment>
        ) : null
      }
    </main>
  );
};

export default Home;
