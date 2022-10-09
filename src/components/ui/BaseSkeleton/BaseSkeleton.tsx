import { Fragment } from 'react';

import BaseSkeletonElement from './BaseSkeletonElement';

interface IBaseSkeletonProps {
  variant?: string;
}

const BaseSkeleton = ({ variant = 'default' }: IBaseSkeletonProps) => {
  const handleSetContentVariant = () => {
    let content;

    switch (variant) {
      case 'card':
        content = (
          <Fragment>
            <BaseSkeletonElement variant="thumbnail" />

            <BaseSkeletonElement variant="title" />

            <BaseSkeletonElement />

            <BaseSkeletonElement />

            <BaseSkeletonElement />
          </Fragment>
        );
        break;

      case 'article':
        content = (
          <Fragment>
            <BaseSkeletonElement variant="title" />

            <BaseSkeletonElement />

            <BaseSkeletonElement />

            <BaseSkeletonElement />
          </Fragment>
        );
        break;
    
      default:
        content = (
          <Fragment>
            <BaseSkeletonElement />
          </Fragment>
        );
        break;
    }

    return content;
  };

  return (
    <div className="skeleton" data-variant={ variant }>
      {
        handleSetContentVariant()
      }
    </div>
  );
};

export default BaseSkeleton;
