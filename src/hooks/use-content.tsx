import { useState, useEffect, useCallback } from 'react';
import axios, { AxiosError } from 'axios';

import { getContent } from '../services';

import { IContent } from '../interfaces/content-interface';

const useContent = (page: string) => {
  const [ content, setContent ] = useState<IContent[]>([]);
  const [ error, setError ] = useState<string>('');
  const [ status, setStatus ] = useState<string>('loading');

  const handleGetPageContent = useCallback(async () => {
    try {
      setStatus('loading');

      const { data } = await getContent(page);

      setContent(data);

      setStatus('success');
    } catch (error) {
      setContent([]);

      if (axios.isAxiosError(error)) {
        const serverError = error as AxiosError;

        setError(serverError.message);
      } else {
        setError(String(error));
      }

      setStatus('error');
    }
  }, [page]);

  useEffect(() => {
    handleGetPageContent();

    window.scrollTo(0, 0);
  }, [handleGetPageContent]);

  return { content, error, status };
};

export default useContent;
