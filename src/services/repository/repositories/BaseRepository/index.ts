import type { getAllType, getByIdType } from './types';
import { useApiClient } from '@repository/services/useApiClient';
import { useReplaceUrlParams } from './BaseRepository.hook';

export function useBaseRepository<T, K, E extends string>(endpoint: E) {
  const { get } = useApiClient();
  const { replace } = useReplaceUrlParams();

  const getAll = async ({
    queryParams,
    parser,
    customActions,
  }: getAllType<K, E, T>): Promise<T> => {
    const response = await get<T, K>({
      endpoint: replace(endpoint, parser),
      queryParams,
      ...customActions,
    });
    return response;
  };

  const getById = async ({ id, parser, customActions }: getByIdType<E, T>): Promise<T> => {
    const endpointWithId = `${endpoint}${id}/`;
    const response = await get<T, undefined>({
      endpoint: replace(endpointWithId, parser),
      ...customActions,
    });
    return response;
  };

  return { getAll, getById };
}
