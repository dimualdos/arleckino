import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiExternalV1BplDataListQueryResponse } from "../../../models/ts/apiExternalController/ApiExternalV1BplDataList"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiExternalV1BplDataListClient = typeof client<ApiExternalV1BplDataListQueryResponse, never, never>
type ApiExternalV1BplDataList = {
  data: ApiExternalV1BplDataListQueryResponse
  error: never
  request: never
  pathParams: never
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiExternalV1BplDataListClient>>
  client: {
    parameters: Partial<Parameters<ApiExternalV1BplDataListClient>[0]>
    return: Awaited<ReturnType<ApiExternalV1BplDataListClient>>
  }
}
export const apiExternalV1BplDataListQueryKey = () => [{ url: "/api_external/v1/bpl-data/" }] as const
export type ApiExternalV1BplDataListQueryKey = ReturnType<typeof apiExternalV1BplDataListQueryKey>
export function apiExternalV1BplDataListQueryOptions<TData = ApiExternalV1BplDataList["response"], TQueryData = ApiExternalV1BplDataList["response"]>(
  options: ApiExternalV1BplDataList["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiExternalV1BplDataList["response"], ApiExternalV1BplDataList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiExternalV1BplDataListQueryKey()
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiExternalV1BplDataList["data"], ApiExternalV1BplDataList["error"]>({
        method: "get",
        url: `/api_external/v1/bpl-data/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description Отбираются активные устройства активных пользователей с указанным playlist_id и view_type=playlist.Отбираются видимые каналы видимых групп для плейлистов.Отбираются форматы файлов с плейлистом.
 * @summary Данные для внешнего сервиса генерации плейлистов.
 * @link /api_external/v1/bpl-data/ */
export function useApiExternalV1BplDataList<
  TData = ApiExternalV1BplDataList["response"],
  TQueryData = ApiExternalV1BplDataList["response"],
  TQueryKey extends QueryKey = ApiExternalV1BplDataListQueryKey,
>(
  options: {
    query?: Partial<UseBaseQueryOptions<ApiExternalV1BplDataList["response"], ApiExternalV1BplDataList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiExternalV1BplDataList["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiExternalV1BplDataList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiExternalV1BplDataListQueryKey()
  const query = useQuery<ApiExternalV1BplDataList["data"], ApiExternalV1BplDataList["error"], TData, any>({
    ...apiExternalV1BplDataListQueryOptions<TData, TQueryData>(clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiExternalV1BplDataList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiExternalV1BplDataListInfiniteQueryKey = () => [{ url: "/api_external/v1/bpl-data/" }] as const
export type ApiExternalV1BplDataListInfiniteQueryKey = ReturnType<typeof apiExternalV1BplDataListInfiniteQueryKey>
export function apiExternalV1BplDataListInfiniteQueryOptions<TData = ApiExternalV1BplDataList["response"], TQueryData = ApiExternalV1BplDataList["response"]>(
  options: ApiExternalV1BplDataList["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiExternalV1BplDataList["response"], ApiExternalV1BplDataList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiExternalV1BplDataListInfiniteQueryKey()
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiExternalV1BplDataList["data"], ApiExternalV1BplDataList["error"]>({
        method: "get",
        url: `/api_external/v1/bpl-data/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description Отбираются активные устройства активных пользователей с указанным playlist_id и view_type=playlist.Отбираются видимые каналы видимых групп для плейлистов.Отбираются форматы файлов с плейлистом.
 * @summary Данные для внешнего сервиса генерации плейлистов.
 * @link /api_external/v1/bpl-data/ */
export function useApiExternalV1BplDataListInfinite<
  TData = InfiniteData<ApiExternalV1BplDataList["response"]>,
  TQueryData = ApiExternalV1BplDataList["response"],
  TQueryKey extends QueryKey = ApiExternalV1BplDataListInfiniteQueryKey,
>(
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiExternalV1BplDataList["response"], ApiExternalV1BplDataList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiExternalV1BplDataList["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiExternalV1BplDataList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiExternalV1BplDataListInfiniteQueryKey()
  const query = useInfiniteQuery<ApiExternalV1BplDataList["data"], ApiExternalV1BplDataList["error"], TData, any>({
    ...apiExternalV1BplDataListInfiniteQueryOptions<TData, TQueryData>(clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiExternalV1BplDataList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
