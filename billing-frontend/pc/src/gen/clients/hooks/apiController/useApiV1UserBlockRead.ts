import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1UserBlockReadQueryResponse } from "../../../models/ts/apiController/ApiV1UserBlockRead"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1UserBlockReadClient = typeof client<ApiV1UserBlockReadQueryResponse, never, never>
type ApiV1UserBlockRead = {
  data: ApiV1UserBlockReadQueryResponse
  error: never
  request: never
  pathParams: never
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserBlockReadClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserBlockReadClient>[0]>
    return: Awaited<ReturnType<ApiV1UserBlockReadClient>>
  }
}
export const apiV1UserBlockReadQueryKey = () => [{ url: "/api/v1/user/block/" }] as const
export type ApiV1UserBlockReadQueryKey = ReturnType<typeof apiV1UserBlockReadQueryKey>
export function apiV1UserBlockReadQueryOptions<TData = ApiV1UserBlockRead["response"], TQueryData = ApiV1UserBlockRead["response"]>(
  options: ApiV1UserBlockRead["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1UserBlockRead["response"], ApiV1UserBlockRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserBlockReadQueryKey()
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1UserBlockRead["data"], ApiV1UserBlockRead["error"]>({
        method: "get",
        url: `/api/v1/user/block/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description Апи представление для получения информации о нынешней блокировки активного пользователя
 * @link /api/v1/user/block/ */
export function useApiV1UserBlockRead<TData = ApiV1UserBlockRead["response"], TQueryData = ApiV1UserBlockRead["response"], TQueryKey extends QueryKey = ApiV1UserBlockReadQueryKey>(
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1UserBlockRead["response"], ApiV1UserBlockRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserBlockRead["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1UserBlockRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserBlockReadQueryKey()
  const query = useQuery<ApiV1UserBlockRead["data"], ApiV1UserBlockRead["error"], TData, any>({
    ...apiV1UserBlockReadQueryOptions<TData, TQueryData>(clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1UserBlockRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1UserBlockReadInfiniteQueryKey = () => [{ url: "/api/v1/user/block/" }] as const
export type ApiV1UserBlockReadInfiniteQueryKey = ReturnType<typeof apiV1UserBlockReadInfiniteQueryKey>
export function apiV1UserBlockReadInfiniteQueryOptions<TData = ApiV1UserBlockRead["response"], TQueryData = ApiV1UserBlockRead["response"]>(
  options: ApiV1UserBlockRead["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1UserBlockRead["response"], ApiV1UserBlockRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserBlockReadInfiniteQueryKey()
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1UserBlockRead["data"], ApiV1UserBlockRead["error"]>({
        method: "get",
        url: `/api/v1/user/block/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description Апи представление для получения информации о нынешней блокировки активного пользователя
 * @link /api/v1/user/block/ */
export function useApiV1UserBlockReadInfinite<
  TData = InfiniteData<ApiV1UserBlockRead["response"]>,
  TQueryData = ApiV1UserBlockRead["response"],
  TQueryKey extends QueryKey = ApiV1UserBlockReadInfiniteQueryKey,
>(
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1UserBlockRead["response"], ApiV1UserBlockRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserBlockRead["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1UserBlockRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserBlockReadInfiniteQueryKey()
  const query = useInfiniteQuery<ApiV1UserBlockRead["data"], ApiV1UserBlockRead["error"], TData, any>({
    ...apiV1UserBlockReadInfiniteQueryOptions<TData, TQueryData>(clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1UserBlockRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
