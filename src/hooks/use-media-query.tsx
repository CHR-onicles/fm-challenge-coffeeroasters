import { useEffect } from 'react';

const useMediaQuery = (mediaQuery: string, mediaQueryChangeHandler: (mediaQueryList: MediaQueryList) => void) => {
  useEffect(() => {
    const mediaQueryList: MediaQueryList = window.matchMedia(mediaQuery);

    mediaQueryChangeHandler(mediaQueryList);

    mediaQueryList.addEventListener('change', (event: MediaQueryListEvent) => {
      const mql = event.target as MediaQueryList;

      mediaQueryChangeHandler(mql);
    });
  }, [mediaQuery, mediaQueryChangeHandler]);
};

export default useMediaQuery;
