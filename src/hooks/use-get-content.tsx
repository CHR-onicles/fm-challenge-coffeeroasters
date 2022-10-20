import { useState, useEffect, useCallback } from 'react';

import { getPageContent } from '../services';

import { IPageContent } from '../interfaces/page-content-interface';

const useGetContent = (page: string) => {
  const [ pageContent, setPageContent ] = useState<IPageContent[]>([]);
  const [ error, setError ] = useState<string | null>(null);
  const [ isLoading, setIsLoading ] = useState<boolean>(false);

  const handleGetPageContent = useCallback(async () => {
    try {
      setIsLoading(true);

      const pageContentData = await getPageContent(page);

      setPageContent(pageContentData);
    } catch (error) {
      setPageContent([]);
      setError('Something went wrong while fetching page content data');
    } finally {
      setIsLoading(false);
    }
  }, [page]);

  useEffect(() => {
    handleGetPageContent();
  }, [handleGetPageContent]);

  return [ pageContent, error, isLoading ];
};

export default useGetContent;
