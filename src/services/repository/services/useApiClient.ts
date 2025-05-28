import { useCallbackApi } from 'services/hooks/useCallbackApi';
import type { getProps } from './types';

export function useApiClient() {
  const callbackApi = useCallbackApi;

  const get = async <T, K>({
    endpoint,
    queryParams,
    onError,
    onSettled,
    onSuccess,
  }: getProps<T, K>) => {
    let response: T;
    try {
      response = await callbackApi<T>(endpoint, {
        method: 'GET',
        params: {
          ...queryParams,
        },
      });
      await onSuccess?.(response);
    } catch (error) {
      onError?.(error);
      throw error;
    }
    onSettled?.();
    return response;
  };

  return {
    get,
  };
}
