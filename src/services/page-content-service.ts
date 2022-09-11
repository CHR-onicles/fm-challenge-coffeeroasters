import { pageContent } from '../data/page-content';

import { IPageContent } from '../interfaces/page-content-interface';

const getPageContent = (page: string): Promise<IPageContent[]> => {
  return new Promise((resolve, reject) => {
    if (!pageContent) {
      return setTimeout(() => {
        reject(new Error(`Sorry, an error occurred while fetching ${page} page content.`))
      }, 250);
    }

    setTimeout(() => {
      resolve(pageContent.get(page));
    }, 250);
  });
};

export default getPageContent;
