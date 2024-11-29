import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1UserMetaListQueryResponse } from "../../../models/ts/apiController/ApiV1UserMetaList"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1UserMetaListClient = typeof client<ApiV1UserMetaListQueryResponse, never, never>
type ApiV1UserMetaList = {
  data: ApiV1UserMetaListQueryResponse
  error: never
  request: never
  pathParams: never
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserMetaListClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserMetaListClient>[0]>
    return: Awaited<ReturnType<ApiV1UserMetaListClient>>
  }
}
export const apiV1UserMetaListQueryKey = () => [{ url: "/api/v1/user/meta/" }] as const
export type ApiV1UserMetaListQueryKey = ReturnType<typeof apiV1UserMetaListQueryKey>
export function apiV1UserMetaListQueryOptions<TData = ApiV1UserMetaList["response"], TQueryData = ApiV1UserMetaList["response"]>(
  options: ApiV1UserMetaList["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1UserMetaList["response"], ApiV1UserMetaList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserMetaListQueryKey()
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1UserMetaList["data"], ApiV1UserMetaList["error"]>({
        method: "get",
        url: `/api/v1/user/meta/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @link /api/v1/user/meta/ */
export function useApiV1UserMetaList<TData = ApiV1UserMetaList["response"], TQueryData = ApiV1UserMetaList["response"], TQueryKey extends QueryKey = ApiV1UserMetaListQueryKey>(
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1UserMetaList["response"], ApiV1UserMetaList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserMetaList["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1UserMetaList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserMetaListQueryKey()
  const query = useQuery<ApiV1UserMetaList["data"], ApiV1UserMetaList["error"], TData, any>({
    ...apiV1UserMetaListQueryOptions<TData, TQueryData>(clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1UserMetaList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1UserMetaListInfiniteQueryKey = () => [{ url: "/api/v1/user/meta/" }] as const
export type ApiV1UserMetaListInfiniteQueryKey = ReturnType<typeof apiV1UserMetaListInfiniteQueryKey>
export function apiV1UserMetaListInfiniteQueryOptions<TData = ApiV1UserMetaList["response"], TQueryData = ApiV1UserMetaList["response"]>(
  options: ApiV1UserMetaList["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1UserMetaList["response"], ApiV1UserMetaList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserMetaListInfiniteQueryKey()
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1UserMetaList["data"], ApiV1UserMetaList["error"]>({
        method: "get",
        url: `/api/v1/user/meta/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @link /api/v1/user/meta/ */
export function useApiV1UserMetaListInfinite<
  TData = InfiniteData<ApiV1UserMetaList["response"]>,
  TQueryData = ApiV1UserMetaList["response"],
  TQueryKey extends QueryKey = ApiV1UserMetaListInfiniteQueryKey,
>(
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1UserMetaList["response"], ApiV1UserMetaList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserMetaList["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1UserMetaList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserMetaListInfiniteQueryKey()
  const query = useInfiniteQuery<ApiV1UserMetaList["data"], ApiV1UserMetaList["error"], TData, any>({
    ...apiV1UserMetaListInfiniteQueryOptions<TData, TQueryData>(clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1UserMetaList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
