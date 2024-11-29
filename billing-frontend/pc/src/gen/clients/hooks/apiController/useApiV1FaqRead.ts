import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1FaqReadQueryResponse, ApiV1FaqReadPathParams } from "../../../models/ts/apiController/ApiV1FaqRead"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1FaqReadClient = typeof client<ApiV1FaqReadQueryResponse, never, never>
type ApiV1FaqRead = {
  data: ApiV1FaqReadQueryResponse
  error: never
  request: never
  pathParams: ApiV1FaqReadPathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1FaqReadClient>>
  client: {
    parameters: Partial<Parameters<ApiV1FaqReadClient>[0]>
    return: Awaited<ReturnType<ApiV1FaqReadClient>>
  }
}
export const apiV1FaqReadQueryKey = (id: ApiV1FaqReadPathParams["id"]) => [{ url: "/api/v1/faq/:id/", params: { id: id } }] as const
export type ApiV1FaqReadQueryKey = ReturnType<typeof apiV1FaqReadQueryKey>
export function apiV1FaqReadQueryOptions<TData = ApiV1FaqRead["response"], TQueryData = ApiV1FaqRead["response"]>(
  id: ApiV1FaqReadPathParams["id"],
  options: ApiV1FaqRead["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1FaqRead["response"], ApiV1FaqRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1FaqReadQueryKey(id)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1FaqRead["data"], ApiV1FaqRead["error"]>({
        method: "get",
        url: `/api/v1/faq/${id}/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description .
 * @summary Просмотр вопроса.
 * @link /api/v1/faq/:id/ */
export function useApiV1FaqRead<TData = ApiV1FaqRead["response"], TQueryData = ApiV1FaqRead["response"], TQueryKey extends QueryKey = ApiV1FaqReadQueryKey>(
  id: ApiV1FaqReadPathParams["id"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1FaqRead["response"], ApiV1FaqRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1FaqRead["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1FaqRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1FaqReadQueryKey(id)
  const query = useQuery<ApiV1FaqRead["data"], ApiV1FaqRead["error"], TData, any>({
    ...apiV1FaqReadQueryOptions<TData, TQueryData>(id, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1FaqRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1FaqReadInfiniteQueryKey = (id: ApiV1FaqReadPathParams["id"]) => [{ url: "/api/v1/faq/:id/", params: { id: id } }] as const
export type ApiV1FaqReadInfiniteQueryKey = ReturnType<typeof apiV1FaqReadInfiniteQueryKey>
export function apiV1FaqReadInfiniteQueryOptions<TData = ApiV1FaqRead["response"], TQueryData = ApiV1FaqRead["response"]>(
  id: ApiV1FaqReadPathParams["id"],
  options: ApiV1FaqRead["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1FaqRead["response"], ApiV1FaqRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1FaqReadInfiniteQueryKey(id)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1FaqRead["data"], ApiV1FaqRead["error"]>({
        method: "get",
        url: `/api/v1/faq/${id}/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description .
 * @summary Просмотр вопроса.
 * @link /api/v1/faq/:id/ */
export function useApiV1FaqReadInfinite<TData = InfiniteData<ApiV1FaqRead["response"]>, TQueryData = ApiV1FaqRead["response"], TQueryKey extends QueryKey = ApiV1FaqReadInfiniteQueryKey>(
  id: ApiV1FaqReadPathParams["id"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1FaqRead["response"], ApiV1FaqRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1FaqRead["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1FaqRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1FaqReadInfiniteQueryKey(id)
  const query = useInfiniteQuery<ApiV1FaqRead["data"], ApiV1FaqRead["error"], TData, any>({
    ...apiV1FaqReadInfiniteQueryOptions<TData, TQueryData>(id, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1FaqRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
