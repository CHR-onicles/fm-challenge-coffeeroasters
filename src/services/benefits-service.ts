import { benefits } from '../data/benefits';

import { IBenefit } from '../interfaces/benefit-interface';

const getBenefits = (): Promise<IBenefit[]> => {
  return new Promise((resolve, reject) => {
    if (!benefits) {
      return setTimeout(() => {
        reject(new Error('Sorry, an error occurred while fetching benefits.'));
      }, 250);
    }

    setTimeout(() => {
      resolve(benefits)
    }, 250)
  });
};

export default getBenefits;
