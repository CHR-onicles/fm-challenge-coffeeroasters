import { useState, useEffect, useCallback } from 'react';

import { getContent } from '../services';

import { IContent } from '../interfaces/content-interface';

const useContent = (page: string) => {
  const [ pageContent, setPageContent ] = useState<IContent[]>([]);
  const [ error, setError ] = useState<string | null>(null);
  const [ isLoading, setIsLoading ] = useState<boolean>(true);

  const handleGetPageContent = useCallback(async () => {
    try {
      setIsLoading(true);

      const { data } = await getContent(page);

      setPageContent(data);
    } catch (error) {
      setPageContent([]);
      setError(`Something went wrong while fetching content for ${page} page.`);
    } finally {
      setIsLoading(false);
    }
  }, [page]);

  useEffect(() => {
    handleGetPageContent();

    window.scrollTo(0, 0);
  }, [handleGetPageContent]);

  return { pageContent, error, isLoading };
};

export default useContent;
