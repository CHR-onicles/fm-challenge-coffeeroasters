import { useState, useEffect } from 'react';

import { IErrorResponse } from '../../../interfaces/error-response-interface';

interface IBaseErrorProps {
  error: string;
  title?: string;
}

const BaseError = ({ error, title = 'Whoops!' }: IBaseErrorProps) => {
  const [ errorResponse, setErrorResponseStatus ] = useState<IErrorResponse>({ statusCode: '', message: '' });

  useEffect(() => {
    setErrorResponseStatus((prevErrorStatus) => {
      let statusCode = error.substring(error.length - 3);

      console.log('handleDefineError: ', error);
      console.log('handleDefineError: ', statusCode);

      let message: string;

      switch (statusCode) {
        case '404':
          message = 'Sorry, we\'re not sure how you got here... but the server can\'t find the requested page.';
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
        <div className="grid-cols">
          <div className="grid__item">
            <h2 className="text-align-center mb-s5">{ title }</h2>

            <span>{ errorResponse.statusCode }</span>
            
            <p className="text-align-center">{ errorResponse.message }</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BaseError;
