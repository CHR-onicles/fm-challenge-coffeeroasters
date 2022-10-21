import axios, { AxiosRequestConfig } from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { match } from 'path-to-regexp';

import { apiRoutes } from '../routes';
import { contentMap } from '../fixtures/contents';

const initializeMockAdapter = () => {
  const mock = new MockAdapter(axios, {
    delayResponse: 2000,
    onNoMatch: 'throwException',
  });

  mock.onGet(apiRoutes.contents).reply((config: AxiosRequestConfig) => {
    const result = match<{ id: string }>(apiRoutes.contents, {
      decode: decodeURIComponent,
    })(config.url!);

    if (!result) {
      return [403];
    }

    const { id } = config.params;

    return [200, contentMap.get(id)];
  });

  // mock.onGet(apiRoutes.contents).networkError();
};

export default initializeMockAdapter;
