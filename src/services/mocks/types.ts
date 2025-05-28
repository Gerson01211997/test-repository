// eslint-disable-next-line import/no-extraneous-dependencies
import type { RequestHandlerOptions, ResponseResolver } from 'msw';

export type PartialDeep<T> = {
  [P in keyof T]?: T[P] extends object ? PartialDeep<T[P]> : T[P];
};

export interface HTTPMethodsInterface {
  path: string;
  resolver: ResponseResolver;
  options?: RequestHandlerOptions;
}
