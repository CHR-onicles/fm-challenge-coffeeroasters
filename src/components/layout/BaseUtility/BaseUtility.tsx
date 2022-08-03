import { Fragment, ReactNode } from 'react';

type ElemType = 'div' | 'ul' | 'header' | 'footer';

interface BaseUtilityProps {
  className: string;
  elemType?: ElemType;
  children: ReactNode;
}

const BaseUtility = ({ className, elemType = 'div', children }: BaseUtilityProps) => {
  return (
    <Fragment>
      {
        elemType === 'div' ? (
          <div className={ className }>{ children }</div>
        ) : null
      }

      {
        elemType === 'ul' ? (
          <ul className={ className }>
            { children }
          </ul>
        ) : null
      }

      {
        elemType === 'header' ? (
          <header className={ className }>
            { children }
          </header>
        ) : null
      }

      {
        elemType === 'footer' ? (
          <footer className={ className }>
            { children }
          </footer>
        ) : null
      }
    </Fragment>
  );
};

export default BaseUtility;
