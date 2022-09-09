import { v4 as uuidv4 } from 'uuid';

import IconCoffeeBean from '../assets/images/home/desktop/icon-coffee-bean.svg';
import IconGift from '../assets/images/home/desktop/icon-gift.svg';
import IconTruck from '../assets/images/home/desktop/icon-truck.svg';

export const benefits = [
  {
    id: uuidv4(),
    title: 'Best quality',
    description: 'Discover an endless variety of the world’s best artisan coffee from each of our roasters.',
    icon: IconCoffeeBean,
  },
  {
    id: uuidv4(),
    title: 'Exclusive benefits',
    description: 'Special offers and swag when you subscribe, including 30% off your first shipment.',
    icon: IconGift,
  },
  {
    id: uuidv4(),
    title: 'Free shipping',
    description: 'We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.',
    icon: IconTruck,
  },
];
