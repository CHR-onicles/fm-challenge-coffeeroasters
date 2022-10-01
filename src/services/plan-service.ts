import { plans } from '../data/plans';

import { IPlan } from '../interfaces/plan-interface';

const getPlans = (): Promise<IPlan[]> => {
  return new Promise((resolve, reject) => {
    if (!plans) {
      return setTimeout(() => {
        reject(new Error('Sorry, an error occurred while fetching plans.'));
      }, 250);
    }

    setTimeout(() => {
      resolve(plans);
    }, 250);
  });
};

export default getPlans;
