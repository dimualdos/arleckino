import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1UserInfoReadQueryResponse } from "../../../models/ts/apiController/ApiV1UserInfoRead"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1UserInfoReadClient = typeof client<ApiV1UserInfoReadQueryResponse, never, never>
type ApiV1UserInfoRead = {
  data: ApiV1UserInfoReadQueryResponse
  error: never
  request: never
  pathParams: never
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserInfoReadClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserInfoReadClient>[0]>
    return: Awaited<ReturnType<ApiV1UserInfoReadClient>>
  }
}
export const apiV1UserInfoReadQueryKey = () => [{ url: "/api/v1/user/info/" }] as const
export type ApiV1UserInfoReadQueryKey = ReturnType<typeof apiV1UserInfoReadQueryKey>
export function apiV1UserInfoReadQueryOptions<TData = ApiV1UserInfoRead["response"], TQueryData = ApiV1UserInfoRead["response"]>(
  options: ApiV1UserInfoRead["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1UserInfoRead["response"], ApiV1UserInfoRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserInfoReadQueryKey()
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1UserInfoRead["data"], ApiV1UserInfoRead["error"]>({
        method: "get",
        url: `/api/v1/user/info/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description .
 * @summary Получение информации о текущем пользователе.
 * @link /api/v1/user/info/ */
export function useApiV1UserInfoRead<TData = ApiV1UserInfoRead["response"], TQueryData = ApiV1UserInfoRead["response"], TQueryKey extends QueryKey = ApiV1UserInfoReadQueryKey>(
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1UserInfoRead["response"], ApiV1UserInfoRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserInfoRead["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1UserInfoRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserInfoReadQueryKey()
  const query = useQuery<ApiV1UserInfoRead["data"], ApiV1UserInfoRead["error"], TData, any>({
    ...apiV1UserInfoReadQueryOptions<TData, TQueryData>(clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1UserInfoRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1UserInfoReadInfiniteQueryKey = () => [{ url: "/api/v1/user/info/" }] as const
export type ApiV1UserInfoReadInfiniteQueryKey = ReturnType<typeof apiV1UserInfoReadInfiniteQueryKey>
export function apiV1UserInfoReadInfiniteQueryOptions<TData = ApiV1UserInfoRead["response"], TQueryData = ApiV1UserInfoRead["response"]>(
  options: ApiV1UserInfoRead["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1UserInfoRead["response"], ApiV1UserInfoRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserInfoReadInfiniteQueryKey()
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1UserInfoRead["data"], ApiV1UserInfoRead["error"]>({
        method: "get",
        url: `/api/v1/user/info/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description .
 * @summary Получение информации о текущем пользователе.
 * @link /api/v1/user/info/ */
export function useApiV1UserInfoReadInfinite<
  TData = InfiniteData<ApiV1UserInfoRead["response"]>,
  TQueryData = ApiV1UserInfoRead["response"],
  TQueryKey extends QueryKey = ApiV1UserInfoReadInfiniteQueryKey,
>(
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1UserInfoRead["response"], ApiV1UserInfoRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserInfoRead["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1UserInfoRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserInfoReadInfiniteQueryKey()
  const query = useInfiniteQuery<ApiV1UserInfoRead["data"], ApiV1UserInfoRead["error"], TData, any>({
    ...apiV1UserInfoReadInfiniteQueryOptions<TData, TQueryData>(clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1UserInfoRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
