import { Fragment } from 'react';

import BaseSkeletonElement from './BaseSkeletonElement';

interface IBaseSkeletonProps {
  variant?: string;
}

const BaseSkeleton = ({ variant = 'default' }: IBaseSkeletonProps) => {
  const handleSetContentVariant = () => {
    let content;

    switch (variant) {
      case 'hero':
        content = (
          <Fragment>
            <BaseSkeletonElement variant="title-h1" />

            <BaseSkeletonElement />

            <BaseSkeletonElement />

            <BaseSkeletonElement />

            <BaseSkeletonElement variant="button" />
          </Fragment>
        );
        break;

      case 'hero-page':
        content = (
          <Fragment>
            <BaseSkeletonElement variant="title-h1" />

            <BaseSkeletonElement />

            <BaseSkeletonElement />

            <BaseSkeletonElement />
          </Fragment>
        );
        break;
        
      case 'content':
        content = (
          <Fragment>
            <BaseSkeletonElement variant="title-h2" />

            <BaseSkeletonElement />

            <BaseSkeletonElement />

            <BaseSkeletonElement />

            <BaseSkeletonElement />
            
            <BaseSkeletonElement />
          </Fragment>
        );
        break;
        
        case 'image':
          content = (
            <Fragment>
            <BaseSkeletonElement variant="thumbnail" />
          </Fragment>
        );
        break;

        case 'list':
          content = (
            <Fragment>  
              <BaseSkeletonElement />
  
              <BaseSkeletonElement />
  
              <BaseSkeletonElement />
  
              <BaseSkeletonElement />
  
              <BaseSkeletonElement />
            </Fragment>
          );
          break;

      case 'card':
        content = (
          <Fragment>
            <BaseSkeletonElement variant="thumbnail" />

            <BaseSkeletonElement variant="title-h3" />

            <BaseSkeletonElement />

            <BaseSkeletonElement />

            <BaseSkeletonElement />
          </Fragment>
        );
        break;

      case 'article':
        content = (
          <Fragment>
            <BaseSkeletonElement variant="title-h2" />

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
