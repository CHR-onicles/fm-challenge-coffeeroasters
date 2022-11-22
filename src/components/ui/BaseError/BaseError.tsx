import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { IErrorResponse } from '../../../interfaces/error-response-interface';

import styles from './BaseError.module.scss';

interface IBaseErrorProps {
  error: string;
  title?: string;
}

const BaseError = ({ error, title = 'Whoops!' }: IBaseErrorProps) => {
  const [ errorResponse, setErrorResponseStatus ] = useState<IErrorResponse>({ statusCode: '', message: '' });

  useEffect(() => {
    setErrorResponseStatus(() => {
      let statusCode = error.substring(error.length - 3);
      let message: string;

      switch (statusCode) {
        case '400':
          message = 'Sorry, a bad request error occurred as the server did not understand the syntax of the request.';
          break;

        case '401':
          message = 'Sorry, an unauthorized error occurred the request requires authentication before the resource can be accessed.';
          break;

        case '404':
          message = 'Sorry, we\'re not sure how you got here... but the server cannot find the requested page.';
          break;

        case '408':
          message = 'Sorry, a request timeout error occurred as the request took longer than the server was prepared to wait.';
          break;

        case '500':
          message = 'Sorry, an internal server error occurred as the server was unable to complete the request.';
          break;

        case '502':
          message = 'Sorry, a bad gateway error occurred as the server received an invalid response from another server.';
          break;

        case '503':
          message = 'Sorry, the server is currently unavailable. Please try again later.';
          break;

        case '504':
          message = 'Sorry, a gateway timeout error occurred as the server did not receive a timely response from another server.';
          break;
      
        default:
          statusCode = 'Error';
          message = 'Sorry, an unexpected error occured.';
          break;
      }

      return { statusCode, message };
    });
  }, [error]);

  return (
    <section>
      <div className="container">
        <div className={ styles.error }>
          <div className="grid-cols">
            <div className="grid__item grid__item--start-md-3 grid__item--span-md-8 grid__item--start-lg-4 grid__item--span-lg-6 | text-align-center">
              <h1 className={ `${styles['error__title']}` }>{ title }</h1>
              
              <h2 className={ `${styles['error__status-code']}` }>{ errorResponse.statusCode }</h2>

              <p className={ `${styles['error__message']}` }>{ errorResponse.message }</p>

              <Link
                to="/"
                className={ `btn | ${styles['error__cta']}`}
              >Back to Home</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BaseError;
