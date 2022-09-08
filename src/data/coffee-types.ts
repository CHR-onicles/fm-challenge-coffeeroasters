import { v4 as uuidv4 } from 'uuid';

import ImageGranEspresso from '../assets/images/home/desktop/image-gran-espresso.png';
import ImagePlanalto from '../assets/images/home/desktop/image-planalto.png';
import ImagePiccollo from '../assets/images/home/desktop/image-piccollo.png';
import ImageDanche from '../assets/images/home/desktop/image-danche.png';

export const coffeeTypes = [
  {
    id: uuidv4(),
    name: 'Gran Espresso',
    description: 'Light and flavorful blend with cocoa and black pepper for an intense experience',
    imagePath: ImageGranEspresso,
  },
  {
    id: uuidv4(),
    name: 'Planalto',
    description: 'Brazilian dark roast with rich and velvety body, and hints of fruits and nuts',
    imagePath: ImagePlanalto,
  },
  {
    id: uuidv4(),
    name: 'Piccollo',
    description: 'Mild and smooth blend featuring notes of toasted almond and dried cherry ',
    imagePath: ImagePiccollo,
  },
  {
    id: uuidv4(),
    name: 'Danche',
    description: 'Ethiopian hand-harvested blend densely packed with vibrant fruit notes',
    imagePath: ImageDanche,
  },
];
