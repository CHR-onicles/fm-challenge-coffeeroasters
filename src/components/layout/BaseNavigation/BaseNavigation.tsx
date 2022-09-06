import { Fragment, useRef, useState, useCallback } from 'react';
import { NavLink } from 'react-router-dom';

import { useMediaQuery } from '../../../hooks';

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

  const handleMediaQueryChange = useCallback((mediaQueryList: MediaQueryList) => {
    if (!navRef.current) {
      return;
    }

    if (mediaQueryList.matches) {
      navRef.current.dataset.variant = 'mobile';
    } else {
      navRef.current.removeAttribute('data-variant');
    }
  }, []);

  useMediaQuery('(max-width: 767px)', handleMediaQueryChange);

  // useEffect(() => {
  //   const mediaQueryList: MediaQueryList = window.matchMedia('(max-width: 767px)');

  //   handleMediaQueryChange(mediaQueryList);

  //   mediaQueryList.addEventListener('change', (event: MediaQueryListEvent) => {
  //     const mql = event.target as MediaQueryList;

  //     handleMediaQueryChange(mql);
  //   });
  // }, []);

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
