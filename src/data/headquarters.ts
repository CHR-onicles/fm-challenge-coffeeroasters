import { v4 as uuidv4 } from 'uuid';

import IllustrationUK from '../assets/images/about/desktop/illustration-uk.svg';
import IllustrationCanada from '../assets/images/about/desktop/illustration-canada.svg';
import IllustrationAustralia from '../assets/images/about/desktop/illustration-australia.svg';

export const headquarters = [
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
];
