import { AxiosResponse } from 'axios';

import { transformAxiosResponse } from './transformAxiosResponse';

describe(transformAxiosResponse, () => {
  const mockResponse = {
    data: 'foo',
  } as unknown as AxiosResponse;

  it('transforms a basic response', () => {
    expect(transformAxiosResponse(mockResponse)).toEqual(mockResponse.data);
  });
});
