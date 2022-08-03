import { NavLink } from 'react-router-dom';

import { routes } from '../../../data/routes';

const BaseNavigation = () => {
  return (
    <nav>
      <ul>
        {
          routes.map(route => (
            <li key={ `nav-${route.path}` }>
              <NavLink to={ route.path }>{ route.title }</NavLink>
            </li>
          ))
        }
      </ul>
    </nav>
  );
};

export default BaseNavigation;
