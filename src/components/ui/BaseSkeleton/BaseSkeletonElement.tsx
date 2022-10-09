interface IBaseSkeletonElementProps {
  variant?: string;
}

const BaseSkeletonElement = ({ variant = 'default' }: IBaseSkeletonElementProps) => {
  return (
    <div className="skeleton__element" data-variant={ variant }></div>
  );
};

export default BaseSkeletonElement;
