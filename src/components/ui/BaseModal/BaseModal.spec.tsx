import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import BaseModal from './BaseModal';

describe('BaseModal component', () => {
  const onDismissSpy = jest.fn();
  const props = {
    title: 'Modal heading',
    onDismiss: onDismissSpy,
    children: (<h3>Modal content</h3>),
  };

  it('should render a heading', () => {
    render(<BaseModal { ...props } />);

    expect(screen.getByRole('heading', { name: /Modal heading/i })).toBeInTheDocument();
  });

  it('should render the content', () => {
    render(<BaseModal { ...props } />);

    expect(screen.getByRole('heading', { name: /Modal content/i })).toBeInTheDocument();
  });

  it('should render a close button', () => {
    render(<BaseModal { ...props } />);

    expect(screen.getByRole('button', { name: /Close Modal/i })).toBeInTheDocument();
  });

  it('should render a backdrop', () => {
    render(<BaseModal { ...props } />);

    expect(screen.getByTestId('modal-backdrop')).toBeInTheDocument();
  });

  it('should call #onDismissSpy given user clicks on close button', () => {
    render(<BaseModal { ...props } />);

    const closeButtonElem = screen.getByRole('button', { name: /Close Modal/i });

    userEvent.click(closeButtonElem);

    expect(onDismissSpy).toHaveBeenCalled();
  });

  it('should call #onDismissSpy given user clicks on the backdrop', () => {
    render(<BaseModal { ...props } />);

    const backdropElem = screen.getByTestId('modal-backdrop');

    userEvent.click(backdropElem);

    expect(onDismissSpy).toHaveBeenCalled();
  });
});
