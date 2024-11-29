import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1ServiceAdminMinistraReadQueryResponse, ApiV1ServiceAdminMinistraReadPathParams } from "../../../models/ts/apiController/ApiV1ServiceAdminMinistraRead"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1ServiceAdminMinistraReadClient = typeof client<ApiV1ServiceAdminMinistraReadQueryResponse, never, never>
type ApiV1ServiceAdminMinistraRead = {
  data: ApiV1ServiceAdminMinistraReadQueryResponse
  error: never
  request: never
  pathParams: ApiV1ServiceAdminMinistraReadPathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1ServiceAdminMinistraReadClient>>
  client: {
    parameters: Partial<Parameters<ApiV1ServiceAdminMinistraReadClient>[0]>
    return: Awaited<ReturnType<ApiV1ServiceAdminMinistraReadClient>>
  }
}
export const apiV1ServiceAdminMinistraReadQueryKey = (id: ApiV1ServiceAdminMinistraReadPathParams["id"]) => [{ url: "/api/v1/service/admin/ministra/:id/", params: { id: id } }] as const
export type ApiV1ServiceAdminMinistraReadQueryKey = ReturnType<typeof apiV1ServiceAdminMinistraReadQueryKey>
export function apiV1ServiceAdminMinistraReadQueryOptions<TData = ApiV1ServiceAdminMinistraRead["response"], TQueryData = ApiV1ServiceAdminMinistraRead["response"]>(
  id: ApiV1ServiceAdminMinistraReadPathParams["id"],
  options: ApiV1ServiceAdminMinistraRead["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1ServiceAdminMinistraRead["response"], ApiV1ServiceAdminMinistraRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1ServiceAdminMinistraReadQueryKey(id)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1ServiceAdminMinistraRead["data"], ApiV1ServiceAdminMinistraRead["error"]>({
        method: "get",
        url: `/api/v1/service/admin/ministra/${id}/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @link /api/v1/service/admin/ministra/:id/ */
export function useApiV1ServiceAdminMinistraRead<
  TData = ApiV1ServiceAdminMinistraRead["response"],
  TQueryData = ApiV1ServiceAdminMinistraRead["response"],
  TQueryKey extends QueryKey = ApiV1ServiceAdminMinistraReadQueryKey,
>(
  id: ApiV1ServiceAdminMinistraReadPathParams["id"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1ServiceAdminMinistraRead["response"], ApiV1ServiceAdminMinistraRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1ServiceAdminMinistraRead["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1ServiceAdminMinistraRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1ServiceAdminMinistraReadQueryKey(id)
  const query = useQuery<ApiV1ServiceAdminMinistraRead["data"], ApiV1ServiceAdminMinistraRead["error"], TData, any>({
    ...apiV1ServiceAdminMinistraReadQueryOptions<TData, TQueryData>(id, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1ServiceAdminMinistraRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1ServiceAdminMinistraReadInfiniteQueryKey = (id: ApiV1ServiceAdminMinistraReadPathParams["id"]) => [{ url: "/api/v1/service/admin/ministra/:id/", params: { id: id } }] as const
export type ApiV1ServiceAdminMinistraReadInfiniteQueryKey = ReturnType<typeof apiV1ServiceAdminMinistraReadInfiniteQueryKey>
export function apiV1ServiceAdminMinistraReadInfiniteQueryOptions<TData = ApiV1ServiceAdminMinistraRead["response"], TQueryData = ApiV1ServiceAdminMinistraRead["response"]>(
  id: ApiV1ServiceAdminMinistraReadPathParams["id"],
  options: ApiV1ServiceAdminMinistraRead["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1ServiceAdminMinistraRead["response"], ApiV1ServiceAdminMinistraRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1ServiceAdminMinistraReadInfiniteQueryKey(id)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1ServiceAdminMinistraRead["data"], ApiV1ServiceAdminMinistraRead["error"]>({
        method: "get",
        url: `/api/v1/service/admin/ministra/${id}/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @link /api/v1/service/admin/ministra/:id/ */
export function useApiV1ServiceAdminMinistraReadInfinite<
  TData = InfiniteData<ApiV1ServiceAdminMinistraRead["response"]>,
  TQueryData = ApiV1ServiceAdminMinistraRead["response"],
  TQueryKey extends QueryKey = ApiV1ServiceAdminMinistraReadInfiniteQueryKey,
>(
  id: ApiV1ServiceAdminMinistraReadPathParams["id"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1ServiceAdminMinistraRead["response"], ApiV1ServiceAdminMinistraRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1ServiceAdminMinistraRead["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1ServiceAdminMinistraRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1ServiceAdminMinistraReadInfiniteQueryKey(id)
  const query = useInfiniteQuery<ApiV1ServiceAdminMinistraRead["data"], ApiV1ServiceAdminMinistraRead["error"], TData, any>({
    ...apiV1ServiceAdminMinistraReadInfiniteQueryOptions<TData, TQueryData>(id, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1ServiceAdminMinistraRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
