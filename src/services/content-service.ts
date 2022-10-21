import axios, { AxiosResponse } from 'axios';

import { apiRoutes } from '../routes';

import { IContent } from '../interfaces/content-interface';

const getContent = (id: string): Promise<AxiosResponse<IContent[]>> => {
  return axios.get<IContent[]>(apiRoutes.contents, {
    params: {
      id,
    }
  });
};

export default getContent;
