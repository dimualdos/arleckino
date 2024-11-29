import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1UserTimezoneListQueryResponse } from "../../../models/ts/apiController/ApiV1UserTimezoneList"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1UserTimezoneListClient = typeof client<ApiV1UserTimezoneListQueryResponse, never, never>
type ApiV1UserTimezoneList = {
  data: ApiV1UserTimezoneListQueryResponse
  error: never
  request: never
  pathParams: never
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserTimezoneListClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserTimezoneListClient>[0]>
    return: Awaited<ReturnType<ApiV1UserTimezoneListClient>>
  }
}
export const apiV1UserTimezoneListQueryKey = () => [{ url: "/api/v1/user/timezone/" }] as const
export type ApiV1UserTimezoneListQueryKey = ReturnType<typeof apiV1UserTimezoneListQueryKey>
export function apiV1UserTimezoneListQueryOptions<TData = ApiV1UserTimezoneList["response"], TQueryData = ApiV1UserTimezoneList["response"]>(
  options: ApiV1UserTimezoneList["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1UserTimezoneList["response"], ApiV1UserTimezoneList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserTimezoneListQueryKey()
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1UserTimezoneList["data"], ApiV1UserTimezoneList["error"]>({
        method: "get",
        url: `/api/v1/user/timezone/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description .
 * @summary Получение списка временных зон.
 * @link /api/v1/user/timezone/ */
export function useApiV1UserTimezoneList<TData = ApiV1UserTimezoneList["response"], TQueryData = ApiV1UserTimezoneList["response"], TQueryKey extends QueryKey = ApiV1UserTimezoneListQueryKey>(
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1UserTimezoneList["response"], ApiV1UserTimezoneList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserTimezoneList["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1UserTimezoneList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserTimezoneListQueryKey()
  const query = useQuery<ApiV1UserTimezoneList["data"], ApiV1UserTimezoneList["error"], TData, any>({
    ...apiV1UserTimezoneListQueryOptions<TData, TQueryData>(clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1UserTimezoneList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1UserTimezoneListInfiniteQueryKey = () => [{ url: "/api/v1/user/timezone/" }] as const
export type ApiV1UserTimezoneListInfiniteQueryKey = ReturnType<typeof apiV1UserTimezoneListInfiniteQueryKey>
export function apiV1UserTimezoneListInfiniteQueryOptions<TData = ApiV1UserTimezoneList["response"], TQueryData = ApiV1UserTimezoneList["response"]>(
  options: ApiV1UserTimezoneList["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1UserTimezoneList["response"], ApiV1UserTimezoneList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserTimezoneListInfiniteQueryKey()
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1UserTimezoneList["data"], ApiV1UserTimezoneList["error"]>({
        method: "get",
        url: `/api/v1/user/timezone/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description .
 * @summary Получение списка временных зон.
 * @link /api/v1/user/timezone/ */
export function useApiV1UserTimezoneListInfinite<
  TData = InfiniteData<ApiV1UserTimezoneList["response"]>,
  TQueryData = ApiV1UserTimezoneList["response"],
  TQueryKey extends QueryKey = ApiV1UserTimezoneListInfiniteQueryKey,
>(
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1UserTimezoneList["response"], ApiV1UserTimezoneList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserTimezoneList["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1UserTimezoneList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserTimezoneListInfiniteQueryKey()
  const query = useInfiniteQuery<ApiV1UserTimezoneList["data"], ApiV1UserTimezoneList["error"], TData, any>({
    ...apiV1UserTimezoneListInfiniteQueryOptions<TData, TQueryData>(clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1UserTimezoneList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
