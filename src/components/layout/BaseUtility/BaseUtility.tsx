import { Fragment, ReactNode, createElement, useState, useEffect, DOMElement, DOMAttributes } from 'react';

type ElemType = 'div' | 'ul' | 'header' | 'footer';

interface BaseUtilityProps {
  className: string;
  elemType?: ElemType;
  children: ReactNode;
}

const BaseUtility = ({ className, elemType = 'div', children }: BaseUtilityProps) => {
  const handleRenderRootElem = (element: string, className: string, children: ReactNode): DOMElement<DOMAttributes<Element>, Element> => {
    return createElement(element, { className, children });
  };

  const [componentRootElem, setComponentRootElem] = useState<DOMElement<DOMAttributes<Element>, Element>>();

  useEffect(() => {
    const elem = handleRenderRootElem(elemType, className, children);

    setComponentRootElem(elem);
  }, [elemType, className, children]);

  return (
    <Fragment>
      {
        componentRootElem
      }
    </Fragment>
  );
};

export default BaseUtility;
