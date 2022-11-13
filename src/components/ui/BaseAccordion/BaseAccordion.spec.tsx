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

  afterEach(() => {
    props.initialState = false;
    props.isDisabled = false;
  });

  it('should render an accordion toggle button which is enable by default', () => {
    render(<BaseAccordion { ...props } />);

    expect(screen.getByRole('button', { name: /Accordion label/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Accordion label/i })).toBeEnabled();
  });

  it('should show accordion content by default', () => {
    render(<BaseAccordion { ...props } />);

    expect(screen.getByText(/Accodrion content/i)).not.toBeVisible();
  });

  it('should render a disabled accordion header given #isDisabled is set to true', () => {
    props.isDisabled = true;

    render(<BaseAccordion { ...props } />);

    expect(screen.getByRole('button', { name: /Accordion label/i })).toBeDisabled();
  });

  it('should set #aria-expanded attribute of the accordion header to false by default', () => {
    render(<BaseAccordion { ...props } />);

    expect(screen.getByRole('button', { name: /Accordion label/i })).toHaveAttribute('aria-expanded', 'false');
  });

  it('should set #aria-expanded attribute of the accordion header to true given #initialState is set as true', () => {
    props.initialState = true;

    render(<BaseAccordion { ...props } />);

    expect(screen.getByRole('button', { name: /Accordion label/i })).toHaveAttribute('aria-expanded', 'true');
  });

  it('should show accordion content given #initialState is set as true', () => {
    props.initialState = true;

    render(<BaseAccordion { ...props } />);

    expect(screen.getByText(/Accodrion content/i)).toBeVisible();
  });

  it('should show accordion content given user clicks on the accordion header', () => {
    render(<BaseAccordion { ...props } />);

    const headerElem = screen.getByRole('button', { name: /Accordion label/i });

    userEvent.click(headerElem);

    expect(screen.getByText(/Accodrion content/i)).toBeVisible();
  });

  it('should not show accordion content given #isDisabled is set to true', () => {
    props.isDisabled = true;

    render(<BaseAccordion { ...props } />);

    const headerElem = screen.getByRole('button', { name: /Accordion label/i });

    userEvent.click(headerElem);

    expect(screen.getByText(/Accodrion content/i)).not.toBeVisible();
  });

  it('should hide accordion content given user clicks twice on the accordion header', () => {
    render(<BaseAccordion { ...props } />);

    const headerElem = screen.getByRole('button', { name: /Accordion label/i });

    userEvent.click(headerElem);
    expect(screen.getByText(/Accodrion content/i)).toBeVisible();

    userEvent.click(headerElem);
    expect(screen.getByText(/Accodrion content/i)).not.toBeVisible();
  });

  it('should have a focusable accordion header', () => {
    render(<BaseAccordion { ...props } />);

    const headerElem = screen.getByRole('button', { name: /Accordion label/i });

    headerElem.focus();

    expect(headerElem).toHaveFocus();
  });

  it('should show and hide accordion content given accordion header is focused and #Space key is pressed', () => {
    render(<BaseAccordion { ...props } />);

    const headerElem = screen.getByRole('button', { name: /Accordion label/i });

    headerElem.focus();

    userEvent.keyboard('[Space]');
    expect(screen.getByText(/Accodrion content/i)).toBeVisible();

    userEvent.keyboard('[Space]');
    expect(screen.getByText(/Accodrion content/i)).not.toBeVisible();
  });

  it('should not show accordion content given accordion header is not focused and #Space key is pressed', () => {
    render(<BaseAccordion { ...props } />);

    userEvent.keyboard('[Space]');
    expect(screen.getByText(/Accodrion content/i)).not.toBeVisible();
  });

  it('should show and hide accordion content given accordion header is focused and #Enter key is pressed', () => {
    render(<BaseAccordion { ...props } />);

    const headerElem = screen.getByRole('button', { name: /Accordion label/i });

    headerElem.focus();

    userEvent.keyboard('[Enter]');
    expect(screen.getByText(/Accodrion content/i)).toBeVisible();

    userEvent.keyboard('[Enter]');
    expect(screen.getByText(/Accodrion content/i)).not.toBeVisible();
  });

  it('should not show accordion content given accordion header is not focused and #Enter key is pressed', () => {
    render(<BaseAccordion { ...props } />);

    userEvent.keyboard('[Enter]');
    expect(screen.getByText(/Accodrion content/i)).not.toBeVisible();
  });
});
