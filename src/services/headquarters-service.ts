import { headquarters } from '../data/headquarters';

import { IHeadquarter } from '../interfaces/headquarter-interface';

const getHeadquarters = (): Promise<IHeadquarter[]> => {
  return new Promise((resolve, reject) => {
    if (!headquarters) {
      return setTimeout(() => {
        reject(new Error('Sorry, an error occurred while fetching headquarters.'));
      }, 250);
    }

    setTimeout(() => {
      resolve(headquarters);
    }, 250);
  });
};

export default getHeadquarters;
