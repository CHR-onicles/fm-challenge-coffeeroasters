import { useState, useEffect, useCallback } from 'react';

import { getPageContent } from '../services';

import { IPageContent } from '../interfaces/page-content-interface';

const useGetContent = (page: string) => {
  const [ pageContent, setPageContent ] = useState<IPageContent[]>([]);
  const [ error, setError ] = useState<string | null>(null);
  const [ isLoading, setIsLoading ] = useState<boolean>(true);

  const handleGetPageContent = useCallback(async () => {
    try {
      setIsLoading(true);

      const pageContentData = await getPageContent(page);

      setPageContent(pageContentData);
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

export default useGetContent;
