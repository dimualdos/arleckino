import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1NewsReadQueryResponse, ApiV1NewsReadPathParams } from "../../../models/ts/apiController/ApiV1NewsRead"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1NewsReadClient = typeof client<ApiV1NewsReadQueryResponse, never, never>
type ApiV1NewsRead = {
  data: ApiV1NewsReadQueryResponse
  error: never
  request: never
  pathParams: ApiV1NewsReadPathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1NewsReadClient>>
  client: {
    parameters: Partial<Parameters<ApiV1NewsReadClient>[0]>
    return: Awaited<ReturnType<ApiV1NewsReadClient>>
  }
}
export const apiV1NewsReadQueryKey = (id: ApiV1NewsReadPathParams["id"]) => [{ url: "/api/v1/news/:id/", params: { id: id } }] as const
export type ApiV1NewsReadQueryKey = ReturnType<typeof apiV1NewsReadQueryKey>
export function apiV1NewsReadQueryOptions<TData = ApiV1NewsRead["response"], TQueryData = ApiV1NewsRead["response"]>(
  id: ApiV1NewsReadPathParams["id"],
  options: ApiV1NewsRead["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1NewsRead["response"], ApiV1NewsRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1NewsReadQueryKey(id)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1NewsRead["data"], ApiV1NewsRead["error"]>({
        method: "get",
        url: `/api/v1/news/${id}/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description .
 * @summary Просмотр новости.
 * @link /api/v1/news/:id/ */
export function useApiV1NewsRead<TData = ApiV1NewsRead["response"], TQueryData = ApiV1NewsRead["response"], TQueryKey extends QueryKey = ApiV1NewsReadQueryKey>(
  id: ApiV1NewsReadPathParams["id"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1NewsRead["response"], ApiV1NewsRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1NewsRead["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1NewsRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1NewsReadQueryKey(id)
  const query = useQuery<ApiV1NewsRead["data"], ApiV1NewsRead["error"], TData, any>({
    ...apiV1NewsReadQueryOptions<TData, TQueryData>(id, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1NewsRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1NewsReadInfiniteQueryKey = (id: ApiV1NewsReadPathParams["id"]) => [{ url: "/api/v1/news/:id/", params: { id: id } }] as const
export type ApiV1NewsReadInfiniteQueryKey = ReturnType<typeof apiV1NewsReadInfiniteQueryKey>
export function apiV1NewsReadInfiniteQueryOptions<TData = ApiV1NewsRead["response"], TQueryData = ApiV1NewsRead["response"]>(
  id: ApiV1NewsReadPathParams["id"],
  options: ApiV1NewsRead["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1NewsRead["response"], ApiV1NewsRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1NewsReadInfiniteQueryKey(id)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1NewsRead["data"], ApiV1NewsRead["error"]>({
        method: "get",
        url: `/api/v1/news/${id}/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description .
 * @summary Просмотр новости.
 * @link /api/v1/news/:id/ */
export function useApiV1NewsReadInfinite<TData = InfiniteData<ApiV1NewsRead["response"]>, TQueryData = ApiV1NewsRead["response"], TQueryKey extends QueryKey = ApiV1NewsReadInfiniteQueryKey>(
  id: ApiV1NewsReadPathParams["id"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1NewsRead["response"], ApiV1NewsRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1NewsRead["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1NewsRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1NewsReadInfiniteQueryKey(id)
  const query = useInfiniteQuery<ApiV1NewsRead["data"], ApiV1NewsRead["error"], TData, any>({
    ...apiV1NewsReadInfiniteQueryOptions<TData, TQueryData>(id, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1NewsRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
