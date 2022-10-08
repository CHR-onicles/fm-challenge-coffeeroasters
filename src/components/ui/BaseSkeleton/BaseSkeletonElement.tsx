interface IBaseSkeletonProps {
  variant?: string;
}

const BaseSkeletonElement = ({ variant = 'default' }: IBaseSkeletonProps) => {
  return (
    <div className="skeleton__element" data-variant={ variant }></div>
  );
};

export default BaseSkeletonElement;
