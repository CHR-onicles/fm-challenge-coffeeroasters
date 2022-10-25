import { render, screen } from '@testing-library/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import TheHero from './TheHero';

import { contentMap } from '../../../fixtures/contents';
import { IContent } from '../../../interfaces/content-interface';

describe('TheHero component', () => {
  let data: IContent;

  beforeEach(() => {
    data = contentMap.get('home')![0];
  });


  it('should render a title', () => {  
    render(<TheHero content={ data } />, { wrapper: BrowserRouter });
  
    expect(screen.getByRole('heading')).toHaveTextContent(data.title);
  });
});
