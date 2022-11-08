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
    const imageElement = screen.getByRole('img');

    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAccessibleName('Coffeeroasters logo');
    expect(imageElement).toHaveAttribute('src', 'logo.svg');
  });

  it('should render an image with white logo given #isLogoDark is set to false', () => {
    render(<BaseBrand isLogoDark={ false } />, { wrapper: BrowserRouter });
    const imageElement = screen.getByRole('img');

    expect(imageElement).toHaveAttribute('src', 'logo-white.svg');
  });
});
