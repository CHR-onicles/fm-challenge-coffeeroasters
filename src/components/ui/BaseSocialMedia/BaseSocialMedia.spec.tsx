import { render, screen} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import BaseSocialMedia from './BaseSocialMedia';

describe('BaseSocialMedia component', () => {
  it('should render a list', () => {
    render(<BaseSocialMedia />, { wrapper: BrowserRouter });

    expect(screen.getByRole('list')).toBeInTheDocument();
  });

  it('should render a Facebook social media link', () => {
    render(<BaseSocialMedia />, { wrapper: BrowserRouter });

    expect(screen.getByRole('link', { name: /Facebook logo/i })).toBeInTheDocument();
  });

  it('should render a Twitter social media link', () => {
    render(<BaseSocialMedia />, { wrapper: BrowserRouter });

    expect(screen.getByRole('link', { name: /Twitter logo/i })).toBeInTheDocument();
  });

  it('should render an Instagram social media link', () => {
    render(<BaseSocialMedia />, { wrapper: BrowserRouter });

    expect(screen.getByRole('link', { name: /Instagram logo/i })).toBeInTheDocument();
  });
});
