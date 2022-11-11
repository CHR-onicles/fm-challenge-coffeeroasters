import { renderHook, act, waitFor } from '@testing-library/react';

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import useContent from './use-content';
import { apiRoutes } from '../routes';
import { contentMap } from '../fixtures/contents';

describe('useContent hook', () => {
  let mock: MockAdapter;

  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

  it('should not get page content', async () => {
    // mock.onGet(apiRoutes.contents).reply(200, contentMap.get('home'));

    const { result } = renderHook(() => useContent('home'));

    expect(result.current.content).toHaveLength(0);
  });

  it('should get the status as #loading', async () => {
    const { result } = renderHook(() => useContent('home'));

    expect(result.current.status).toEqual('loading');
  });

  it('should not get an error', () => {
    const { result } = renderHook(() => useContent('home'));

    expect(result.current.error).toEqual('');
  });
});
