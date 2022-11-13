import { render, screen} from '@testing-library/react';

import BaseOrderSummary from './BaseOrderSummary';

describe('BaseOrderSummary component', () => {
  const props = {
    preferences: '',
    beanType: '',
    quantity: '',
    grindOption: '',
    deliveries: '',
  };

  it('should render a heading', () => {
    render(<BaseOrderSummary formData={ props } />);

    expect(screen.getByRole('heading', { name: /Order Summary/i })).toBeInTheDocument();
  });

  it('should render an order summary with blank options', () => {
    render(<BaseOrderSummary formData={ props } />);

    expect(screen.getByTestId('order-summary')).toBeInTheDocument();
  });

  it('should render an order summary with grind option given #preferences is not #Capsule', () => {
    props.preferences = 'Filter';
    props.beanType = 'Blended';
    props.quantity = '500g';
    props.grindOption = 'Wholebean';
    props.deliveries = 'Every 2 weeks';

    render(<BaseOrderSummary formData={ props } />);

    expect(screen.getByTestId('order-summary')).toHaveTextContent(`I drink my coffee as ${props.preferences}, with a ${props.beanType} type of bean. ${props.quantity} ground ala ${props.grindOption}, sent to me ${props.deliveries}`);
  });

  it('should render an order summary with no grind option given #preferences is #Capsule', () => {
    props.preferences = 'Capsule';
    props.beanType = 'Single Origin';
    props.quantity = '250g';
    props.grindOption = '';
    props.deliveries = 'Every month';

    render(<BaseOrderSummary formData={ props } />);

    expect(screen.getByTestId('order-summary')).toHaveTextContent(`I drink my coffee using ${props.preferences}, with a ${props.beanType} type of bean. ${props.quantity}, sent to me ${props.deliveries}`);
  });
});
