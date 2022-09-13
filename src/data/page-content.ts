import { v4 as uuidv4 } from 'uuid';

import mobileHeroImage from '../assets/images/home/mobile/image-hero-coffeepress.jpg';
import tabletHeroImage from '../assets/images/home/tablet/image-hero-coffeepress.jpg';
import desktopHeroImage from '../assets/images/home/desktop/image-hero-coffeepress.jpg';

import mobileAboutHeroImage from '../assets/images/about/mobile/image-hero-whitecup.jpg';
import tabletAboutHeroImage from '../assets/images/about/tablet/image-hero-whitecup.jpg';
import desktopAboutHeroImage from '../assets/images/about/desktop/image-hero-whitecup.jpg';

import mobileCommitmentImage from '../assets/images/about/mobile/image-commitment.jpg';
import tabletCommitmentImage from '../assets/images/about/tablet/image-commitment.jpg';
import desktopCommitmentImage from '../assets/images/about/desktop/image-commitment.jpg';

import mobileQualityImage from '../assets/images/about/mobile/image-quality.jpg';
import tabletQualityImage from '../assets/images/about/tablet/image-quality.jpg';
import desktopQualityImage from '../assets/images/about/desktop/image-quality.jpg';

export const pageContent = new Map();

pageContent.set('home', [
  {
    id: uuidv4(),
    title: 'Great coffee made simple.',
    description: 'Start your mornings with the world\'s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.',
    imagePath: [mobileHeroImage, tabletHeroImage, desktopHeroImage],
  },
  {
    id: uuidv4(),
    title: 'Why choose us?',
    description: 'A large part of our role is choosing which particular coffees will be featured in our range. This means working closely with the best coffee growers to give you a more impactful experience on every level.',
    imagePath: null,
  },
]);

pageContent.set('about', [
  {
    id: uuidv4(),
    title: 'About Us',
    description: 'Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment.',
    imagePath: [mobileAboutHeroImage, tabletAboutHeroImage, desktopAboutHeroImage],
  },
  {
    id: uuidv4(),
    title: 'Our commitment',
    description: 'We’re built on a simple mission and a commitment to doing good along the way. We want to make it easy for you to discover and brew the world’s best coffee at home. It all starts at the source. To locate the specific lots we want to purchase, we travel nearly 60 days a year trying to understand the challenges and opportunities in each of these places. We collaborate with exceptional coffee growers and empower a global community of farmers through with well above fair-trade benchmarks. We also offer training, support farm community initiatives, and invest in coffee plant science. Curating only the finest blends, we roast each lot to highlight tasting profiles distinctive to their native growing region.',
    imagePath: [mobileCommitmentImage, tabletCommitmentImage, desktopCommitmentImage],
  },
  {
    id: uuidv4(),
    title: 'Uncompromising quality',
    description: 'Although we work with growers who pay close attention to all stages of harvest and processing, we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast consistent, user-friendly coffee, so that brewing is easy and enjoyable.',
    imagePath: [mobileQualityImage, tabletQualityImage, desktopQualityImage],
  },
]);
