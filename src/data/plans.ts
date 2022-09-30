import { v4 as uuidv4 } from 'uuid';

import { IPlan } from '../interfaces/plan-interface';

export const plans: IPlan[] = [
  {
    id: uuidv4(),
    title: 'How do you drink your coffee?',
    options: [
      {
        id: uuidv4(),
        title: 'Capsule',
        description: 'Compatible with Nespresso systems and similar brewers.',
      },
      {
        id: uuidv4(),
        title: 'Filter',
        description: 'For pour over or drip methods like Aeropress, Chemex, and V60.',
      },
      {
        id: uuidv4(),
        title: 'Espresso',
        description: 'Dense and finely ground beans for an intense, flavorful experience.',
      },
    ],
    quickLink: 'Preferences',
    slug: 'preferences',
  },
  {
    id: uuidv4(),
    title: 'What type of coffee?',
    options: [
      {
        id: uuidv4(),
        title: 'Single Origin',
        description: 'Distinct, high quality coffee from a specific family-owned farm.',
      },
      {
        id: uuidv4(),
        title: 'Decaf',
        description: 'Just like regular coffee, except the caffeine has been removed.',
      },
      {
        id: uuidv4(),
        title: 'Blended',
        description: 'Combination of two or three dark roasted beans of organic coffees.',
      },
    ],
    quickLink: 'Bean Type',
    slug: 'beanType',
  },
  {
    id: uuidv4(),
    title: 'How much would you like?',
    options: [
      {
        id: uuidv4(),
        title: '250g',
        description: 'Perfect for the solo drinker. Yields about 12 delicious cups.',
      },
      {
        id: uuidv4(),
        title: '500g',
        description: 'Perfect option for a couple. Yields about 40 delectable cups.',
      },
      {
        id: uuidv4(),
        title: '1000g',
        description: 'Perfect for offices and events. Yields about 90 delightful cups.',
      },
    ],
    quickLink: 'Quantity',
    slug: 'quantity',
  },
  {
    id: uuidv4(),
    title: 'Want us to grind them?',
    options: [
      {
        id: uuidv4(),
        title: 'Wholebean',
        description: 'Best choice if you cherish the full sensory experience.',
      },
      {
        id: uuidv4(),
        title: 'Filter',
        description: 'For drip or pour-over coffee methods such as V60 or Aeropress.',
      },
      {
        id: uuidv4(),
        title: 'Cafetière',
        description: 'Course ground beans specially suited for french press coffee.',
      },
    ],
    quickLink: 'Grind Option',
    slug: 'grindOption',
  },
  {
    id: uuidv4(),
    title: 'How often should we deliver?',
    options: [
      {
        id: uuidv4(),
        title: 'Every week',
        description: 'per shipment. Includes free first-class shipping.',
      },
      {
        id: uuidv4(),
        title: 'Every 2 weeks',
        description: 'per shipment. Includes free priority shipping.',
      },
      {
        id: uuidv4(),
        title: 'Every month',
        description: 'per shipment. Includes free priority shipping.',
      },
    ],
    quickLink: 'Deliveries',
    slug: 'deliveries',
  },
];
