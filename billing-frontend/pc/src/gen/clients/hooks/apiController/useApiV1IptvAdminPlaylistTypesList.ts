import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1IptvAdminPlaylistTypesListQueryResponse, ApiV1IptvAdminPlaylistTypesListQueryParams } from "../../../models/ts/apiController/ApiV1IptvAdminPlaylistTypesList"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1IptvAdminPlaylistTypesListClient = typeof client<ApiV1IptvAdminPlaylistTypesListQueryResponse, never, never>
type ApiV1IptvAdminPlaylistTypesList = {
  data: ApiV1IptvAdminPlaylistTypesListQueryResponse
  error: never
  request: never
  pathParams: never
  queryParams: ApiV1IptvAdminPlaylistTypesListQueryParams
  headerParams: never
  response: Awaited<ReturnType<ApiV1IptvAdminPlaylistTypesListClient>>
  client: {
    parameters: Partial<Parameters<ApiV1IptvAdminPlaylistTypesListClient>[0]>
    return: Awaited<ReturnType<ApiV1IptvAdminPlaylistTypesListClient>>
  }
}
export const apiV1IptvAdminPlaylistTypesListQueryKey = (params?: ApiV1IptvAdminPlaylistTypesList["queryParams"]) =>
  [{ url: "/api/v1/iptv/admin/playlist-types/" }, ...(params ? [params] : [])] as const
export type ApiV1IptvAdminPlaylistTypesListQueryKey = ReturnType<typeof apiV1IptvAdminPlaylistTypesListQueryKey>
export function apiV1IptvAdminPlaylistTypesListQueryOptions<TData = ApiV1IptvAdminPlaylistTypesList["response"], TQueryData = ApiV1IptvAdminPlaylistTypesList["response"]>(
  params?: ApiV1IptvAdminPlaylistTypesList["queryParams"],
  options: ApiV1IptvAdminPlaylistTypesList["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1IptvAdminPlaylistTypesList["response"], ApiV1IptvAdminPlaylistTypesList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1IptvAdminPlaylistTypesListQueryKey(params)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1IptvAdminPlaylistTypesList["data"], ApiV1IptvAdminPlaylistTypesList["error"]>({
        method: "get",
        url: `/api/v1/iptv/admin/playlist-types/`,
        params,
        ...options,
      })
      return res
    },
  }
}
/**
 * @link /api/v1/iptv/admin/playlist-types/ */
export function useApiV1IptvAdminPlaylistTypesList<
  TData = ApiV1IptvAdminPlaylistTypesList["response"],
  TQueryData = ApiV1IptvAdminPlaylistTypesList["response"],
  TQueryKey extends QueryKey = ApiV1IptvAdminPlaylistTypesListQueryKey,
>(
  params?: ApiV1IptvAdminPlaylistTypesList["queryParams"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1IptvAdminPlaylistTypesList["response"], ApiV1IptvAdminPlaylistTypesList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1IptvAdminPlaylistTypesList["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1IptvAdminPlaylistTypesList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1IptvAdminPlaylistTypesListQueryKey(params)
  const query = useQuery<ApiV1IptvAdminPlaylistTypesList["data"], ApiV1IptvAdminPlaylistTypesList["error"], TData, any>({
    ...apiV1IptvAdminPlaylistTypesListQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1IptvAdminPlaylistTypesList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1IptvAdminPlaylistTypesListInfiniteQueryKey = (params?: ApiV1IptvAdminPlaylistTypesList["queryParams"]) =>
  [{ url: "/api/v1/iptv/admin/playlist-types/" }, ...(params ? [params] : [])] as const
export type ApiV1IptvAdminPlaylistTypesListInfiniteQueryKey = ReturnType<typeof apiV1IptvAdminPlaylistTypesListInfiniteQueryKey>
export function apiV1IptvAdminPlaylistTypesListInfiniteQueryOptions<TData = ApiV1IptvAdminPlaylistTypesList["response"], TQueryData = ApiV1IptvAdminPlaylistTypesList["response"]>(
  params?: ApiV1IptvAdminPlaylistTypesList["queryParams"],
  options: ApiV1IptvAdminPlaylistTypesList["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1IptvAdminPlaylistTypesList["response"], ApiV1IptvAdminPlaylistTypesList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1IptvAdminPlaylistTypesListInfiniteQueryKey(params)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1IptvAdminPlaylistTypesList["data"], ApiV1IptvAdminPlaylistTypesList["error"]>({
        method: "get",
        url: `/api/v1/iptv/admin/playlist-types/`,
        ...options,
        params: {
          ...params,
          ["id"]: pageParam,
          ...(options.params || {}),
        },
      })
      return res
    },
  }
}
/**
 * @link /api/v1/iptv/admin/playlist-types/ */
export function useApiV1IptvAdminPlaylistTypesListInfinite<
  TData = InfiniteData<ApiV1IptvAdminPlaylistTypesList["response"]>,
  TQueryData = ApiV1IptvAdminPlaylistTypesList["response"],
  TQueryKey extends QueryKey = ApiV1IptvAdminPlaylistTypesListInfiniteQueryKey,
>(
  params?: ApiV1IptvAdminPlaylistTypesList["queryParams"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1IptvAdminPlaylistTypesList["response"], ApiV1IptvAdminPlaylistTypesList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1IptvAdminPlaylistTypesList["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1IptvAdminPlaylistTypesList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1IptvAdminPlaylistTypesListInfiniteQueryKey(params)
  const query = useInfiniteQuery<ApiV1IptvAdminPlaylistTypesList["data"], ApiV1IptvAdminPlaylistTypesList["error"], TData, any>({
    ...apiV1IptvAdminPlaylistTypesListInfiniteQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1IptvAdminPlaylistTypesList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
