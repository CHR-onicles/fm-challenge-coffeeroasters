import { render, screen, fireEvent } from '@testing-library/react';

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

    fireEvent.click(screen.getByLabelText(/Radio label/i));

    expect(onHandleChangeSpy).toHaveBeenCalledWith(props.name, props.value);
  });

  it('should call #onHandleChange when #Enter key is pressed', () => {
    render(<BaseRadio { ...props } />);

    fireEvent.keyDown(screen.getByTestId(`lbl-${props.id}`), { key: 'Enter', code: 'Enter', keyCode: 13 });

    expect(onHandleChangeSpy).toHaveBeenCalledWith(props.name, props.value);
  });
});
