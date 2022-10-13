import { useEffect } from 'react';

const useMediaQuery = (mediaQuery: string, mediaQueryChangeHandler: (mediaQueryList: MediaQueryList) => void) => {
  useEffect(() => {
    const mediaQueryList: MediaQueryList = window.matchMedia(mediaQuery);

    const handleChange = (event: MediaQueryListEvent) => {
      const mql = event.target as MediaQueryList;

      mediaQueryChangeHandler(mql);
    };

    mediaQueryChangeHandler(mediaQueryList);

    mediaQueryList.addEventListener('change', handleChange);

    return () => {
      mediaQueryList.removeEventListener('change', handleChange);
    };
  }, [mediaQuery, mediaQueryChangeHandler]);
};

export default useMediaQuery;
