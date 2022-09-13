import { useState, useEffect, Fragment } from 'react';

import { BaseHero, BaseHowItWorks } from '../../components/layout';
import { Order } from './index';

import { getPageContent, getWorkingSteps } from '../../services';

import { IPageContent } from '../../interfaces/page-content-interface';
import { IWorkingStep } from '../../interfaces/working-step-interface';

const Subscribe = () => {
  const [ pageContent, setPageContent ] = useState<IPageContent[]>([]);
  const [ workingSteps, setWorkingSteps ] = useState<IWorkingStep[]>([]);

  const handleGetPageContent = async () => {
    try {
      const pageContentData = await getPageContent('plan');

      setPageContent(pageContentData);
    } catch (error) {
      setPageContent([]);
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
    handleGetWorkingSteps();
  }, []);

  return (
    <main>
      {
        pageContent.length ? (
          <Fragment>
            <BaseHero content={ pageContent[0] }/>

            <BaseHowItWorks
              steps={ workingSteps }
              variant="dark"
              withTitle= { false }
              withCTA={ false }
            />

            <Order />
          </Fragment>
        ) : null
      }
    </main>
  );
};

export default Subscribe;
