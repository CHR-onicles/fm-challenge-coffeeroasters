import { render, screen } from '@testing-library/react';

import TheCopyright from './TheCopyright';

describe('TheCopyright component', () => {
  it('should render a paragraph with the current year', () => {
    render(<TheCopyright />);
    const year = new Date().getFullYear();
    
    expect(screen.getByText(`© ${year}`)).toBeInTheDocument();
  });

  it('should render a paragraph with the author\'s name', () => {
    render(<TheCopyright />);

    expect(screen.getByText(/Coded by/i)).toBeInTheDocument();
  });

  it('should render a link with the author\'s name', () => {
    render(<TheCopyright />);

    expect(screen.getByRole('link')).toHaveTextContent('Christopher Adolphe');
    expect(screen.getByRole('link')).toHaveAttribute('href', 'https://github.com/christopher-adolphe/fm-challenge-coffeeroasters');
  });
});
