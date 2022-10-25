import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import TheHero from './TheHero';

import { contentMap } from '../../../fixtures/contents';

import { IContent } from '../../../interfaces/content-interface';

describe('TheHero component', () => {
  let data: IContent;

  beforeEach(() => {
    data = contentMap.get('home')![0];
  });


  it('should render a heading', () => {  
    render(<TheHero content={ data } />, { wrapper: BrowserRouter });
  
    expect(screen.getByRole('heading')).toHaveTextContent(data.title);
  });

  it('should render a paragraph', () => {
    render(<TheHero content={ data } />, { wrapper: BrowserRouter });

    expect(screen.getByText(/Start your mornings with the world's best coffees/i)).toBeInTheDocument();
  });

  it('should render a link', () => {
    render(<TheHero content={ data } />, { wrapper: BrowserRouter });

    expect(screen.getByRole('link', { name: /Create your plan/i })).toBeInTheDocument();
  });

  it('should render an image', () => {
    render(<TheHero content={ data } />, { wrapper: BrowserRouter });
    const heroImg = screen.getByRole('img');

    expect(heroImg).toBeInTheDocument();
    expect(heroImg).toHaveAccessibleName(data.title);
  });
});
