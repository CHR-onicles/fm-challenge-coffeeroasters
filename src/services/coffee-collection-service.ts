import { coffeeTypes } from '../data/coffee-types';

const getCoffeeCollection = () => {
  return new Promise((resolve, reject) => {
    if (!coffeeTypes) {
      return setTimeout(() => {
        reject(new Error('Sorry, an error occurred while fetching coffee collection'));
      }, 250);
    }

    setTimeout(() => {
      resolve(coffeeTypes);
    }, 250);
  });
};

export default getCoffeeCollection;
