import React, { Component, ElementType } from 'react';

interface BaseContainerProps {
  className: string;
  component: ElementType;
}

const buildClassName = (...names: string[]) => names.map(name => name).join(' ');

const BaseContainer = ({ className, component, ...rest }: BaseContainerProps) => {

  return (
    <Component className={buildClassName('container', className)} { ...rest } />
  );
};

export default BaseContainer;