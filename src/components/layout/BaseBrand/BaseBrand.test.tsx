import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import BaseBrand from './BaseBrand';

describe('BaseBrand component', () => {
  it('should render a link to the home page', () => {
    render(<BaseBrand />, { wrapper: BrowserRouter });

    expect(screen.getByRole('link')).toBeInTheDocument();
  });

  it('should render an image as logo', () => {
    render(<BaseBrand />, { wrapper: BrowserRouter });
    const brandImg = screen.getByRole('img');

    expect(brandImg).toBeInTheDocument();
    expect(brandImg).toHaveAccessibleName('Coffeeroasters logo');
  });
});
