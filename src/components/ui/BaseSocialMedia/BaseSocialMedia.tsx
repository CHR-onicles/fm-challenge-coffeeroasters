import { Link } from 'react-router-dom';

import { socialMediaLinks } from '../../../fixtures/social-media-links';

import styles from './BaseSocialMedia.module.scss';

const BaseSocialMedia = () => {
  return (
    <ul className={ styles['social-media'] }>
      {
        socialMediaLinks.map(socialMedia => (
          <li
            className={ styles['social-media__item'] }
            key={ socialMedia.icon }
          >
            <Link to={ `/${socialMedia.path}` }>
              <img src={ socialMedia.icon } alt={ socialMedia.altText } />
            </Link>
          </li>
        ))
      }
    </ul>
  );
};

export default BaseSocialMedia;
