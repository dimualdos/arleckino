import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1ServiceSystemSettingsListQueryResponse } from "../../../models/ts/apiController/ApiV1ServiceSystemSettingsList"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1ServiceSystemSettingsListClient = typeof client<ApiV1ServiceSystemSettingsListQueryResponse, never, never>
type ApiV1ServiceSystemSettingsList = {
  data: ApiV1ServiceSystemSettingsListQueryResponse
  error: never
  request: never
  pathParams: never
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1ServiceSystemSettingsListClient>>
  client: {
    parameters: Partial<Parameters<ApiV1ServiceSystemSettingsListClient>[0]>
    return: Awaited<ReturnType<ApiV1ServiceSystemSettingsListClient>>
  }
}
export const apiV1ServiceSystemSettingsListQueryKey = () => [{ url: "/api/v1/service/system-settings/" }] as const
export type ApiV1ServiceSystemSettingsListQueryKey = ReturnType<typeof apiV1ServiceSystemSettingsListQueryKey>
export function apiV1ServiceSystemSettingsListQueryOptions<TData = ApiV1ServiceSystemSettingsList["response"], TQueryData = ApiV1ServiceSystemSettingsList["response"]>(
  options: ApiV1ServiceSystemSettingsList["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1ServiceSystemSettingsList["response"], ApiV1ServiceSystemSettingsList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1ServiceSystemSettingsListQueryKey()
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1ServiceSystemSettingsList["data"], ApiV1ServiceSystemSettingsList["error"]>({
        method: "get",
        url: `/api/v1/service/system-settings/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @link /api/v1/service/system-settings/ */
export function useApiV1ServiceSystemSettingsList<
  TData = ApiV1ServiceSystemSettingsList["response"],
  TQueryData = ApiV1ServiceSystemSettingsList["response"],
  TQueryKey extends QueryKey = ApiV1ServiceSystemSettingsListQueryKey,
>(
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1ServiceSystemSettingsList["response"], ApiV1ServiceSystemSettingsList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1ServiceSystemSettingsList["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1ServiceSystemSettingsList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1ServiceSystemSettingsListQueryKey()
  const query = useQuery<ApiV1ServiceSystemSettingsList["data"], ApiV1ServiceSystemSettingsList["error"], TData, any>({
    ...apiV1ServiceSystemSettingsListQueryOptions<TData, TQueryData>(clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1ServiceSystemSettingsList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1ServiceSystemSettingsListInfiniteQueryKey = () => [{ url: "/api/v1/service/system-settings/" }] as const
export type ApiV1ServiceSystemSettingsListInfiniteQueryKey = ReturnType<typeof apiV1ServiceSystemSettingsListInfiniteQueryKey>
export function apiV1ServiceSystemSettingsListInfiniteQueryOptions<TData = ApiV1ServiceSystemSettingsList["response"], TQueryData = ApiV1ServiceSystemSettingsList["response"]>(
  options: ApiV1ServiceSystemSettingsList["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1ServiceSystemSettingsList["response"], ApiV1ServiceSystemSettingsList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1ServiceSystemSettingsListInfiniteQueryKey()
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1ServiceSystemSettingsList["data"], ApiV1ServiceSystemSettingsList["error"]>({
        method: "get",
        url: `/api/v1/service/system-settings/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @link /api/v1/service/system-settings/ */
export function useApiV1ServiceSystemSettingsListInfinite<
  TData = InfiniteData<ApiV1ServiceSystemSettingsList["response"]>,
  TQueryData = ApiV1ServiceSystemSettingsList["response"],
  TQueryKey extends QueryKey = ApiV1ServiceSystemSettingsListInfiniteQueryKey,
>(
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1ServiceSystemSettingsList["response"], ApiV1ServiceSystemSettingsList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1ServiceSystemSettingsList["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1ServiceSystemSettingsList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1ServiceSystemSettingsListInfiniteQueryKey()
  const query = useInfiniteQuery<ApiV1ServiceSystemSettingsList["data"], ApiV1ServiceSystemSettingsList["error"], TData, any>({
    ...apiV1ServiceSystemSettingsListInfiniteQueryOptions<TData, TQueryData>(clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1ServiceSystemSettingsList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
