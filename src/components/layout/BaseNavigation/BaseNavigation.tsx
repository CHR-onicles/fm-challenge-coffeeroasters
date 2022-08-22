import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import { routes } from '../../../data/routes';

import styles from './BaseNavigation.module.scss';

const BaseNavigation = () => {
  return (
    <Fragment>
      <button
        type="button"
        id="btn-nav-toggle"
        className={ `btn ${styles['header__nav-toggle']}` }
        aria-controls="header-nav"
        aria-expanded="false"
        data-variant="burger"
      >
        <span className="sr-only">Toggle Menu</span>
      </button>

      <nav
        id="header-nav"
        className={ styles['header__nav'] }
      >
        <ul className={ `row ${styles.row}`}>
          {
            routes.map(route => (
              <li key={ `nav-${route.path}` }>
                <NavLink to={ route.path }>{ route.title }</NavLink>
              </li>
            ))
          }
        </ul>
      </nav>
    </Fragment>
  );
};

export default BaseNavigation;
