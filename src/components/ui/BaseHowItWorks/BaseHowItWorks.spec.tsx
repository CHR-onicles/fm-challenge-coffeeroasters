import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import BaseHowItWorks from './BaseHowItWorks';
import { IContent } from '../../../interfaces/content-interface';

describe('BaseHowItWorks component', () => {
  const mockContent: IContent = {
    id: '12345',
    title: 'Content title',
    description: null,
    imagePath: null,
    listing: [
      {
        id: '1',
        title: 'Item title 1',
        description: 'Item description 1',
        imagePath: 'Item image 1',
      },
      {
        id: '2',
        title: 'Item title 2',
        description: 'Item description 2',
        imagePath: 'Item image 2',
      },
      {
        id: '3',
        title: 'Item title 3',
        description: 'Item description 3',
        imagePath: 'Item image 3',
      },
    ],
  };

  it('should render a heading given #withTitle prop is set to true', () => {
    render(<BaseHowItWorks content={ mockContent } />, { wrapper: BrowserRouter });

    expect(screen.getByRole('heading', { name: /Content title/i })).toBeInTheDocument();
  });

  it('should render a link given #withCTA prop is set to true', () => {
    render(<BaseHowItWorks content={ mockContent } />, { wrapper: BrowserRouter });

    expect(screen.getByRole('link', { name: /Create your plan/i })).toBeInTheDocument();
  });

  it('should not render a heading given #withTitle prop is set to false', () => {
    render(<BaseHowItWorks content={ mockContent } withTitle={ false } />, { wrapper: BrowserRouter });

    expect(screen.queryByRole('heading', { name: /Content title/i })).not.toBeInTheDocument();
  });

  it('should not render a link given #withCTA prop is set to false', () => {
    render(<BaseHowItWorks content={ mockContent } withCTA={ false } />, { wrapper: BrowserRouter });

    expect(screen.queryByRole('link', { name: /Create your plan/i })).not.toBeInTheDocument();
  });

  it('should render a list', () => {
    render(<BaseHowItWorks content={ mockContent } />, { wrapper: BrowserRouter });

    expect(screen.getByRole('heading', { name: /Item title 1/i })).toBeInTheDocument();
    expect(screen.getByText(/Item description 1/i)).toBeInTheDocument();

    expect(screen.getByRole('heading', { name: /Item title 2/i })).toBeInTheDocument();
    expect(screen.getByText(/Item description 2/i)).toBeInTheDocument();

    expect(screen.getByRole('heading', { name: /Item title 3/i })).toBeInTheDocument();
    expect(screen.getByText(/Item description 3/i)).toBeInTheDocument();
  });

  it('should render a message given #content prop is not set', () => {
    mockContent.listing = null;

    render(<BaseHowItWorks content={ mockContent } />, { wrapper: BrowserRouter });

    expect(screen.getByText(/Sorry, working steps data could not be loaded/i)).toBeInTheDocument();
  });
});
