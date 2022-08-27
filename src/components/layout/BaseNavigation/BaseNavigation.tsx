import { Fragment, useRef, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { routes } from '../../../data/routes';

import styles from './BaseNavigation.module.scss';

interface BaseNavigationProps {
  isHeaderNav?: boolean;
}

const BaseNavigation = ({ isHeaderNav = true }: BaseNavigationProps) => {
  const navRef = useRef<HTMLElement>(null);
  const [ isActive, setIsActive ] = useState<boolean>(false);

  const handleToggleNav = () => {
    setIsActive(prevState => !prevState);
  };

  useEffect(() => {
    const mediaQueryList: MediaQueryList = window.matchMedia('(max-width: 767px)');

    mediaQueryList.addEventListener('change', (event: MediaQueryListEvent) => {
      const mql = event.target as MediaQueryList;

      if (!navRef.current) {
        return;
      }

      if (mql.matches) {
        navRef.current.dataset.variant = 'mobile';
      } else {
        navRef.current.removeAttribute('data-variant');
      }
    });
  }, []);

  return (
    <Fragment>
      {
        isHeaderNav ? (
          <Fragment>
            <button
              type="button"
              id="btn-nav-toggle"
              className={ `btn ${styles['header__nav-toggle']}` }
              aria-controls="header-nav"
              aria-expanded={ isActive ? 'true' : 'false' }
              data-variant="burger"
              onClick={ handleToggleNav }
            >
              <span className="sr-only">Toggle Menu</span>
            </button>

            <nav
              ref={ navRef }
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
        ) : (
          <nav
            id="footer-nav"
            className={ styles['footer__nav'] }
          >
            <ul className={ `row ${styles.row}` }>
              {
                routes.map(route => (
                  <li key={ `nav-${route.path}` }>
                    <NavLink to={ route.path }>{ route.title }</NavLink>
                  </li>
                ))
              }
            </ul>
          </nav>
        )
      }
    </Fragment>
  );
};

export default BaseNavigation;
