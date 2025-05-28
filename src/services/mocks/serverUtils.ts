// eslint-disable-next-line import/no-extraneous-dependencies
import { http } from 'msw';
import type { HTTPMethodsInterface } from './types';

export const mockMethods = {
  GET: ({ path, resolver, options }: HTTPMethodsInterface) => http.get(path, resolver, options),
  POST: ({ path, resolver, options }: HTTPMethodsInterface) => http.post(path, resolver, options),
  DELETE: ({ path, resolver, options }: HTTPMethodsInterface) =>
    http.delete(path, resolver, options),
  PATCH: ({ path, resolver, options }: HTTPMethodsInterface) => http.patch(path, resolver, options),
  PUT: ({ path, resolver, options }: HTTPMethodsInterface) => http.put(path, resolver, options),
};
