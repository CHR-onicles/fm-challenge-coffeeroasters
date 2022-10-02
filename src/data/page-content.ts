import { v4 as uuidv4 } from 'uuid';

import mobileHeroImage from '../assets/images/home/mobile/image-hero-coffeepress.jpg';
import tabletHeroImage from '../assets/images/home/tablet/image-hero-coffeepress.jpg';
import desktopHeroImage from '../assets/images/home/desktop/image-hero-coffeepress.jpg';

import ImageGranEspresso from '../assets/images/home/desktop/image-gran-espresso.png';
import ImagePlanalto from '../assets/images/home/desktop/image-planalto.png';
import ImagePiccollo from '../assets/images/home/desktop/image-piccollo.png';
import ImageDanche from '../assets/images/home/desktop/image-danche.png';

import IconCoffeeBean from '../assets/images/home/desktop/icon-coffee-bean.svg';
import IconGift from '../assets/images/home/desktop/icon-gift.svg';
import IconTruck from '../assets/images/home/desktop/icon-truck.svg';

import mobileAboutHeroImage from '../assets/images/about/mobile/image-hero-whitecup.jpg';
import tabletAboutHeroImage from '../assets/images/about/tablet/image-hero-whitecup.jpg';
import desktopAboutHeroImage from '../assets/images/about/desktop/image-hero-whitecup.jpg';

import mobileCommitmentImage from '../assets/images/about/mobile/image-commitment.jpg';
import tabletCommitmentImage from '../assets/images/about/tablet/image-commitment.jpg';
import desktopCommitmentImage from '../assets/images/about/desktop/image-commitment.jpg';

import mobileQualityImage from '../assets/images/about/mobile/image-quality.jpg';
import tabletQualityImage from '../assets/images/about/tablet/image-quality.jpg';
import desktopQualityImage from '../assets/images/about/desktop/image-quality.jpg';

import IllustrationUK from '../assets/images/about/desktop/illustration-uk.svg';
import IllustrationCanada from '../assets/images/about/desktop/illustration-canada.svg';
import IllustrationAustralia from '../assets/images/about/desktop/illustration-australia.svg';

import mobilePlanHeroImage from '../assets/images/plan/mobile/image-hero-blackcup.jpg';
import tabletPlanHeroImage from '../assets/images/plan/tablet/image-hero-blackcup.jpg';
import desktopPlanHeroImage from '../assets/images/plan/desktop/image-hero-blackcup.jpg';

export const pageContent = new Map();

pageContent.set('home', [
  {
    id: uuidv4(),
    title: 'Great coffee made simple.',
    description: 'Start your mornings with the world\'s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.',
    imagePath: [mobileHeroImage, tabletHeroImage, desktopHeroImage],
    listing: null,
  },
  {
    id: uuidv4(),
    title: 'our collection',
    description: null,
    imagePath: null,
    listing: [
      {
        id: uuidv4(),
        title: 'Gran Espresso',
        description: 'Light and flavorful blend with cocoa and black pepper for an intense experience',
        imagePath: ImageGranEspresso,
      },
      {
        id: uuidv4(),
        title: 'Planalto',
        description: 'Brazilian dark roast with rich and velvety body, and hints of fruits and nuts',
        imagePath: ImagePlanalto,
      },
      {
        id: uuidv4(),
        title: 'Piccollo',
        description: 'Mild and smooth blend featuring notes of toasted almond and dried cherry ',
        imagePath: ImagePiccollo,
      },
      {
        id: uuidv4(),
        title: 'Danche',
        description: 'Ethiopian hand-harvested blend densely packed with vibrant fruit notes',
        imagePath: ImageDanche,
      },
    ],
  },
  {
    id: uuidv4(),
    title: 'Why choose us?',
    description: 'A large part of our role is choosing which particular coffees will be featured in our range. This means working closely with the best coffee growers to give you a more impactful experience on every level.',
    imagePath: null,
    listing: [
      {
        id: uuidv4(),
        title: 'Best quality',
        description: 'Discover an endless variety of the world’s best artisan coffee from each of our roasters.',
        imagePath: IconCoffeeBean,
      },
      {
        id: uuidv4(),
        title: 'Exclusive benefits',
        description: 'Special offers and swag when you subscribe, including 30% off your first shipment.',
        imagePath: IconGift,
      },
      {
        id: uuidv4(),
        title: 'Free shipping',
        description: 'We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.',
        imagePath: IconTruck,
      },
    ],
  },
  {
    id: uuidv4(),
    title: 'How it works',
    description: null,
    imagePath: null,
    listing: [
      {
        id: uuidv4(),
        title: 'Pick your coffee',
        description: 'Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.',
        imagePath: null,
      },
      {
        id: uuidv4(),
        title: 'Choose the frequency',
        description: 'Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.',
        imagePath: null,
      },
      {
        id: uuidv4(),
        title: 'Receive and enjoy!',
        description: 'We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.',
        imagePath: null,
      },
    ],
  },
]);

pageContent.set('about', [
  {
    id: uuidv4(),
    title: 'About Us',
    description: 'Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment.',
    imagePath: [mobileAboutHeroImage, tabletAboutHeroImage, desktopAboutHeroImage],
    listing: null,
  },
  {
    id: uuidv4(),
    title: 'Our commitment',
    description: 'We’re built on a simple mission and a commitment to doing good along the way. We want to make it easy for you to discover and brew the world’s best coffee at home. It all starts at the source. To locate the specific lots we want to purchase, we travel nearly 60 days a year trying to understand the challenges and opportunities in each of these places. We collaborate with exceptional coffee growers and empower a global community of farmers through with well above fair-trade benchmarks. We also offer training, support farm community initiatives, and invest in coffee plant science. Curating only the finest blends, we roast each lot to highlight tasting profiles distinctive to their native growing region.',
    imagePath: [mobileCommitmentImage, tabletCommitmentImage, desktopCommitmentImage],
    listing: null,
  },
  {
    id: uuidv4(),
    title: 'Uncompromising quality',
    description: 'Although we work with growers who pay close attention to all stages of harvest and processing, we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast consistent, user-friendly coffee, so that brewing is easy and enjoyable.',
    imagePath: [mobileQualityImage, tabletQualityImage, desktopQualityImage],
    listing: null,
  },
  {
    id: uuidv4(),
    title: 'Our headquarters',
    description: null,
    imagePath: null,
    listing: [
      {
        id: uuidv4(),
        country: 'United Kingdom',
        state: 'SY6 1YA',
        address: '68  Asfordby Rd',
        town: 'Alcaston',
        tel: '+44 1241 918425',
        imagePath: IllustrationUK,
      },
      {
        id: uuidv4(),
        country: 'Canada',
        state: 'Ontario M4P 1A6',
        address: '1528  Eglinton Avenue',
        town: 'Toronto',
        tel: '+1 416 485 2997',
        imagePath: IllustrationCanada,
      },
      {
        id: uuidv4(),
        country: 'Australia',
        state: 'Victoria',
        address: '36 Swanston Street',
        town: 'Kewell',
        tel: '+61 4 9928 3629',
        imagePath: IllustrationAustralia,
      },
    ]
  },
]);

pageContent.set('plan', [
  {
    id: uuidv4(),
    title: 'Create plan',
    description: 'Coffee the way you wanted it to be. For coffee delivered tomorrow, or next week. For whatever brew method you use. For choice, for convenience, for quality.',
    imagePath: [mobilePlanHeroImage, tabletPlanHeroImage, desktopPlanHeroImage],
  },
  {
    id: uuidv4(),
    title: 'How it works',
    description: null,
    imagePath: null,
    listing: [
      {
        id: uuidv4(),
        title: 'Pick your coffee',
        description: 'Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.',
        imagePath: null,
      },
      {
        id: uuidv4(),
        title: 'Choose the frequency',
        description: 'Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.',
        imagePath: null,
      },
      {
        id: uuidv4(),
        title: 'Receive and enjoy!',
        description: 'We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.',
        imagePath: null,
      },
    ],
  },
]);
