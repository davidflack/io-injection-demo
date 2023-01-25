import { AxiosResponse } from 'axios';

/**
 * Default transformer that simply pulls the data field off an Axios response.
 *
 * @param param0
 * @returns
 */
export const transformAxiosResponse = <T>({ data }: AxiosResponse) => data as T;
