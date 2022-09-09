import { workingSteps } from '../data/working-steps';

import { IWorkingStep } from '../interfaces/working-step-interface';

const getWorkingSteps = (): Promise<IWorkingStep[]> => {
  return new Promise((resolve, reject) => {
    if (!workingSteps) {
      return setTimeout(() => {
        reject(new Error('Sorry, an error occurred while fetching working steps.'));
      }, 250);
    }

    setTimeout(() => {
      resolve(workingSteps);
    }, 250);
  });
};

export default getWorkingSteps;
