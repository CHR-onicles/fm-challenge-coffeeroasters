import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import BaseError from './BaseError';

describe('BaseError component', () => {
  const errors: { statusCode: string, message: string }[] = [
    {
      statusCode: '400',
      message: 'Sorry, a bad request error occurred as the server did not understand the syntax of the request.',
    },
    {
      statusCode: '401',
      message: 'Sorry, an unauthorized error occurred the request requires authentication before the resource can be accessed.',
    },
    {
      statusCode: '404',
      message: 'Sorry, we\'re not sure how you got here... but the server cannot find the requested page.',
    },
    {
      statusCode: '408',
      message: 'Sorry, a request timeout error occurred as the request took longer than the server was prepared to wait.',
    },
    {
      statusCode: '500',
      message: 'Sorry, an internal server error occurred as the server was unable to complete the request.',
    },
    {
      statusCode: '502',
      message: 'Sorry, a bad gateway error occurred as the server received an invalid response from another server.',
    },
    {
      statusCode: '503',
      message: 'Sorry, the server is currently unavailable. Please try again later.',
    },
    {
      statusCode: '504',
      message: 'Sorry, a gateway timeout error occurred as the server did not receive a timely response from another server.',
    },
  ];

  it('should render a default title', () => {
    render(<BaseError error="Some unexpected error" />, { wrapper: BrowserRouter });

    expect(screen.getByRole('heading', { name: /Whoops!/i})).toBeInTheDocument();
  });

  it('should render a default status code', () => {
    render(<BaseError error="Some unexpected error" />, { wrapper: BrowserRouter });

    expect(screen.getByRole('heading', { name: /Error/i })).toBeInTheDocument();
  });

  it('should render a default message', () => {
    render(<BaseError error="Some unexpected error" />, { wrapper: BrowserRouter });

    expect(screen.getByText(/Sorry, an unexpected error occured./i)).toBeInTheDocument();
  });

  it('should render a link', () => {
    render(<BaseError error="Some unexpected error" />, { wrapper: BrowserRouter });

    expect(screen.getByRole('link', { name: /Back to Home/i})).toBeInTheDocument();
  });

  for (const error of errors) {
    it(`should render a status code and message for ${error.statusCode}`, () => {
      render(<BaseError error={ `Some error ${error.statusCode}` } />, { wrapper: BrowserRouter });

      expect(screen.getByText(`${error.statusCode}`)).toBeInTheDocument();
      expect(screen.getByText(`${error.message}`)).toBeInTheDocument();
    });
  }
});
