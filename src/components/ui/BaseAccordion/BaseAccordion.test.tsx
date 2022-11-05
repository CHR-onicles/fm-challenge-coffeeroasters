import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import BaseAccordion from './BaseAccordion';

describe('BaseAccordion component', () => {
  const onMarkAsActiveSpy = jest.fn();
  const props = {
    id: 'accordion-1',
    label: 'Accordion label',
    initialState: false,
    isDisabled: false,
    onMarkAsActive: onMarkAsActiveSpy,
    children: (<p>Accodrion content</p>)
  };

  afterAll(() => {
    props.initialState = false;
    props.isDisabled = false;
  });

  it('should render an accordion toggle button which is enable by default', () => {
    render(<BaseAccordion { ...props } />);

    expect(screen.getByRole('button', { name: /Accordion label/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Accordion label/i })).toBeEnabled();
  });

  it('should not set an active class on accordion section by default', () => {
    render(<BaseAccordion { ...props } />);

    expect(screen.getByRole('region', { name: /Accordion label/i })).not.toHaveClass('accordion__panel--active');
  });

  it('should render a disabled accordion toggle button given #isDisabled is set to true', () => {
    props.isDisabled = true;

    render(<BaseAccordion { ...props } />);

    expect(screen.getByRole('button', { name: /Accordion label/i })).toBeDisabled();
  });

  it('should set #aria-expanded attribute of the accordion toggle button to false by default', () => {
    render(<BaseAccordion { ...props } />);

    expect(screen.getByRole('button', { name: /Accordion label/i })).toHaveAttribute('aria-expanded', 'false');
  });

  it('should set #aria-expanded attribute of the accordion toggle button to true given #initialState is set as true', () => {
    props.initialState = true;

    render(<BaseAccordion { ...props } />);

    expect(screen.getByRole('button', { name: /Accordion label/i })).toHaveAttribute('aria-expanded', 'true');
  });

  it('should set an active class on accordion section given #initialState is set as true', () => {
    props.initialState = true;

    render(<BaseAccordion { ...props } />);

    expect(screen.getByRole('region', { name: /Accordion label/i })).toHaveClass('accordion__panel--active');
  });

  it('should set #aria-expanded attribute to true given user clicks on the accordion toggle button', () => {
    render(<BaseAccordion { ...props } />);

    const button = screen.getByRole('button', { name: /Accordion label/i });

    userEvent.click(button);

    expect(button).toHaveAttribute('aria-expanded', 'true');
  });

  it('should set an active class on accordion section given user clicks on the accordion toggle button', () => {
    render(<BaseAccordion { ...props } />);

    const button = screen.getByRole('button', { name: /Accordion label/i });

    userEvent.click(button);

    expect(screen.getByRole('region', { name: /Accordion label/i })).toHaveClass('accordion__panel--active');
  });

  // it('should not set an active class on accordion section given #isDisabled is set to true', () => {
  //   props.isDisabled = true;

  //   render(<BaseAccordion { ...props } />);

  //   const button = screen.getByRole('button', { name: /Accordion label/i });

  //   userEvent.click(button);

  //   expect(screen.getByRole('region', { name: /Accordion label/i })).not.toHaveClass('accordion__panel--active');
  // });
});
