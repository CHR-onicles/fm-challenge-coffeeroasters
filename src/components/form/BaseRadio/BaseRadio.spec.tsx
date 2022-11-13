import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import BaseRadio from './BaseRadio';

describe('BaseRadio component', () => {
  const onHandleChangeSpy = jest.fn();
  const props = {
    id: 'rad-1',
    label: 'Radio label',
    description: 'Radio description',
    name: 'radio-test',
    value: 'Test',
    checked: false,
    onHandleChange: onHandleChangeSpy,
  };

  it('should render a hidden radio input', () => {
    render(<BaseRadio { ...props } />);

    expect(screen.getByLabelText(/Radio label/i)).toBeInTheDocument();
  });

  it('should render a label', () => {
    render(<BaseRadio { ...props } />);

    expect(screen.getByText(`${props.label}`)).toBeInTheDocument();
  });

  it('should render a description', () => {
    render(<BaseRadio { ...props } />);

    expect(screen.getByText(`${props.description}`)).toBeInTheDocument();
  });

  it('should call #onHandleChange when clicked', () => {
    render(<BaseRadio { ...props } />);

    const labelElem = screen.getByText(/Radio label/i);

    userEvent.click(labelElem);

    expect(onHandleChangeSpy).toHaveBeenCalledWith(props.name, props.value);
  });

  it('should call #onHandleChange when #Enter key is pressed', () => {
    render(<BaseRadio { ...props } />);

    const labelElem = screen.getByText(/Radio label/i);

    labelElem.focus();
    userEvent.keyboard('[Enter]');

    expect(onHandleChangeSpy).toHaveBeenCalledWith(props.name, props.value);
  });
});
