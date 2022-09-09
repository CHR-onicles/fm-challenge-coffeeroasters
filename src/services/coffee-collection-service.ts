import { coffeeTypes } from '../data/coffee-types';

import { ICoffeeType } from '../interfaces/coffee-type-interface';

const getCoffeeCollection = (): Promise<ICoffeeType[]> => {
  return new Promise((resolve, reject) => {
    if (!coffeeTypes) {
      return setTimeout(() => {
        reject(new Error('Sorry, an error occurred while fetching coffee collection.'));
      }, 250);
    }

    setTimeout(() => {
      resolve(coffeeTypes);
    }, 250);
  });
};

export default getCoffeeCollection;
