import { render, screen } from '@testing-library/react';

import BaseRadio from './BaseRadio';

describe('BaseRadio component', () => {
  const props = {
    id: '12345',
    label: 'Radio label',
    description: 'Radio description',
    name: 'radio-test',
    value: 'Test',
    checked: false,
    onHandleChange: (name: string, value: string) => {
      console.log({ name, value });
    },
  };

  // it('should render a hidden radio input', () => {
  //   render(<BaseRadio { ...props } />);

  //   expect(screen.getByRole('input', { name: /radio-test/i })).toBeInTheDocument();
  // });

  it('should render a label', () => {
    render(<BaseRadio { ...props } />);

    expect(screen.getByText(`${props.label}`)).toBeInTheDocument();
  });

  it('should render a description', () => {
    render(<BaseRadio { ...props } />);

    expect(screen.getByText(`${props.description}`)).toBeInTheDocument();
  });
});
