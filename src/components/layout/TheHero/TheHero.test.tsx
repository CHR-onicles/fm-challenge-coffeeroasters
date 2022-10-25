import { render, screen } from '@testing-library/react';

import TheHero from './TheHero';

import { contentMap } from '../../../fixtures/contents';

test('should render the Hero component', () => {
  const data = contentMap.get('home')![0];

  render(<TheHero content={ data } />);

  expect(screen.getByRole('heading')).toHaveTextContent(data.title);
});
