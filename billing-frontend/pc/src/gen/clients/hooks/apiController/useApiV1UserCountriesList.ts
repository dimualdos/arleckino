import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1UserCountriesListQueryResponse } from "../../../models/ts/apiController/ApiV1UserCountriesList"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1UserCountriesListClient = typeof client<ApiV1UserCountriesListQueryResponse, never, never>
type ApiV1UserCountriesList = {
  data: ApiV1UserCountriesListQueryResponse
  error: never
  request: never
  pathParams: never
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserCountriesListClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserCountriesListClient>[0]>
    return: Awaited<ReturnType<ApiV1UserCountriesListClient>>
  }
}
export const apiV1UserCountriesListQueryKey = () => [{ url: "/api/v1/user/countries/" }] as const
export type ApiV1UserCountriesListQueryKey = ReturnType<typeof apiV1UserCountriesListQueryKey>
export function apiV1UserCountriesListQueryOptions<TData = ApiV1UserCountriesList["response"], TQueryData = ApiV1UserCountriesList["response"]>(
  options: ApiV1UserCountriesList["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1UserCountriesList["response"], ApiV1UserCountriesList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserCountriesListQueryKey()
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1UserCountriesList["data"], ApiV1UserCountriesList["error"]>({
        method: "get",
        url: `/api/v1/user/countries/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @link /api/v1/user/countries/ */
export function useApiV1UserCountriesList<TData = ApiV1UserCountriesList["response"], TQueryData = ApiV1UserCountriesList["response"], TQueryKey extends QueryKey = ApiV1UserCountriesListQueryKey>(
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1UserCountriesList["response"], ApiV1UserCountriesList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserCountriesList["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1UserCountriesList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserCountriesListQueryKey()
  const query = useQuery<ApiV1UserCountriesList["data"], ApiV1UserCountriesList["error"], TData, any>({
    ...apiV1UserCountriesListQueryOptions<TData, TQueryData>(clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1UserCountriesList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1UserCountriesListInfiniteQueryKey = () => [{ url: "/api/v1/user/countries/" }] as const
export type ApiV1UserCountriesListInfiniteQueryKey = ReturnType<typeof apiV1UserCountriesListInfiniteQueryKey>
export function apiV1UserCountriesListInfiniteQueryOptions<TData = ApiV1UserCountriesList["response"], TQueryData = ApiV1UserCountriesList["response"]>(
  options: ApiV1UserCountriesList["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1UserCountriesList["response"], ApiV1UserCountriesList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserCountriesListInfiniteQueryKey()
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1UserCountriesList["data"], ApiV1UserCountriesList["error"]>({
        method: "get",
        url: `/api/v1/user/countries/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @link /api/v1/user/countries/ */
export function useApiV1UserCountriesListInfinite<
  TData = InfiniteData<ApiV1UserCountriesList["response"]>,
  TQueryData = ApiV1UserCountriesList["response"],
  TQueryKey extends QueryKey = ApiV1UserCountriesListInfiniteQueryKey,
>(
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1UserCountriesList["response"], ApiV1UserCountriesList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserCountriesList["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1UserCountriesList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserCountriesListInfiniteQueryKey()
  const query = useInfiniteQuery<ApiV1UserCountriesList["data"], ApiV1UserCountriesList["error"], TData, any>({
    ...apiV1UserCountriesListInfiniteQueryOptions<TData, TQueryData>(clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1UserCountriesList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
