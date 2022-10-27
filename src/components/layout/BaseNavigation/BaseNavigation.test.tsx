import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import BaseNavigation from './BaseNavigation';

describe.skip('BaseNavigation component', () => {
  it('should render a button', () => {
    render(<BaseNavigation />, { wrapper: BrowserRouter });

    expect(screen.getByRole('button', { name: /Toggle Menu/i })).toBeInTheDocument();
  });

  it('should not render a button given #isHeaderNav is set to false', () => {
    render(<BaseNavigation isHeaderNav={ false } />, { wrapper: BrowserRouter });

    expect(screen.queryByRole('button', { name: /Toggle Menu/i })).not.toBeInTheDocument();
  });

  it('should render naviation 3 links', () => {
    render(<BaseNavigation />, { wrapper: BrowserRouter });
    const anchorElements = screen.getAllByRole('link');

    expect(anchorElements).toHaveLength(3);
    expect(anchorElements[0]).toHaveTextContent(/Home/i);
    expect(anchorElements[1]).toHaveTextContent(/About us/i);
    expect(anchorElements[2]).toHaveTextContent(/Create your plan/i);
  });
});
