interface ButtonProps {
  label: string;
}

const BaseButton = ({ label, ...rest }: ButtonProps) => {
  return (
    <button {...rest}>{ label }</button>
  );
};

export default BaseButton;
