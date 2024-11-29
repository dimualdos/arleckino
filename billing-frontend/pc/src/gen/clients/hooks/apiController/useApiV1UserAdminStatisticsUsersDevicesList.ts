import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type {
  ApiV1UserAdminStatisticsUsersDevicesListQueryResponse,
  ApiV1UserAdminStatisticsUsersDevicesListQueryParams,
} from "../../../models/ts/apiController/ApiV1UserAdminStatisticsUsersDevicesList"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1UserAdminStatisticsUsersDevicesListClient = typeof client<ApiV1UserAdminStatisticsUsersDevicesListQueryResponse, never, never>
type ApiV1UserAdminStatisticsUsersDevicesList = {
  data: ApiV1UserAdminStatisticsUsersDevicesListQueryResponse
  error: never
  request: never
  pathParams: never
  queryParams: ApiV1UserAdminStatisticsUsersDevicesListQueryParams
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserAdminStatisticsUsersDevicesListClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserAdminStatisticsUsersDevicesListClient>[0]>
    return: Awaited<ReturnType<ApiV1UserAdminStatisticsUsersDevicesListClient>>
  }
}
export const apiV1UserAdminStatisticsUsersDevicesListQueryKey = (params?: ApiV1UserAdminStatisticsUsersDevicesList["queryParams"]) =>
  [{ url: "/api/v1/user/admin/statistics/users/devices" }, ...(params ? [params] : [])] as const
export type ApiV1UserAdminStatisticsUsersDevicesListQueryKey = ReturnType<typeof apiV1UserAdminStatisticsUsersDevicesListQueryKey>
export function apiV1UserAdminStatisticsUsersDevicesListQueryOptions<TData = ApiV1UserAdminStatisticsUsersDevicesList["response"], TQueryData = ApiV1UserAdminStatisticsUsersDevicesList["response"]>(
  params?: ApiV1UserAdminStatisticsUsersDevicesList["queryParams"],
  options: ApiV1UserAdminStatisticsUsersDevicesList["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1UserAdminStatisticsUsersDevicesList["response"], ApiV1UserAdminStatisticsUsersDevicesList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserAdminStatisticsUsersDevicesListQueryKey(params)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1UserAdminStatisticsUsersDevicesList["data"], ApiV1UserAdminStatisticsUsersDevicesList["error"]>({
        method: "get",
        url: `/api/v1/user/admin/statistics/users/devices`,
        params,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description .
 * @summary Данные для показателя "Устройств с подпиской" секции "ПОЛЬЗОВАТЕЛИ" раздела "Статистика"
 * @link /api/v1/user/admin/statistics/users/devices */
export function useApiV1UserAdminStatisticsUsersDevicesList<
  TData = ApiV1UserAdminStatisticsUsersDevicesList["response"],
  TQueryData = ApiV1UserAdminStatisticsUsersDevicesList["response"],
  TQueryKey extends QueryKey = ApiV1UserAdminStatisticsUsersDevicesListQueryKey,
>(
  params?: ApiV1UserAdminStatisticsUsersDevicesList["queryParams"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1UserAdminStatisticsUsersDevicesList["response"], ApiV1UserAdminStatisticsUsersDevicesList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserAdminStatisticsUsersDevicesList["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1UserAdminStatisticsUsersDevicesList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserAdminStatisticsUsersDevicesListQueryKey(params)
  const query = useQuery<ApiV1UserAdminStatisticsUsersDevicesList["data"], ApiV1UserAdminStatisticsUsersDevicesList["error"], TData, any>({
    ...apiV1UserAdminStatisticsUsersDevicesListQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1UserAdminStatisticsUsersDevicesList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1UserAdminStatisticsUsersDevicesListInfiniteQueryKey = (params?: ApiV1UserAdminStatisticsUsersDevicesList["queryParams"]) =>
  [{ url: "/api/v1/user/admin/statistics/users/devices" }, ...(params ? [params] : [])] as const
export type ApiV1UserAdminStatisticsUsersDevicesListInfiniteQueryKey = ReturnType<typeof apiV1UserAdminStatisticsUsersDevicesListInfiniteQueryKey>
export function apiV1UserAdminStatisticsUsersDevicesListInfiniteQueryOptions<
  TData = ApiV1UserAdminStatisticsUsersDevicesList["response"],
  TQueryData = ApiV1UserAdminStatisticsUsersDevicesList["response"],
>(
  params?: ApiV1UserAdminStatisticsUsersDevicesList["queryParams"],
  options: ApiV1UserAdminStatisticsUsersDevicesList["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1UserAdminStatisticsUsersDevicesList["response"], ApiV1UserAdminStatisticsUsersDevicesList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserAdminStatisticsUsersDevicesListInfiniteQueryKey(params)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1UserAdminStatisticsUsersDevicesList["data"], ApiV1UserAdminStatisticsUsersDevicesList["error"]>({
        method: "get",
        url: `/api/v1/user/admin/statistics/users/devices`,
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
 * @description .
 * @summary Данные для показателя "Устройств с подпиской" секции "ПОЛЬЗОВАТЕЛИ" раздела "Статистика"
 * @link /api/v1/user/admin/statistics/users/devices */
export function useApiV1UserAdminStatisticsUsersDevicesListInfinite<
  TData = InfiniteData<ApiV1UserAdminStatisticsUsersDevicesList["response"]>,
  TQueryData = ApiV1UserAdminStatisticsUsersDevicesList["response"],
  TQueryKey extends QueryKey = ApiV1UserAdminStatisticsUsersDevicesListInfiniteQueryKey,
>(
  params?: ApiV1UserAdminStatisticsUsersDevicesList["queryParams"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1UserAdminStatisticsUsersDevicesList["response"], ApiV1UserAdminStatisticsUsersDevicesList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserAdminStatisticsUsersDevicesList["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1UserAdminStatisticsUsersDevicesList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserAdminStatisticsUsersDevicesListInfiniteQueryKey(params)
  const query = useInfiniteQuery<ApiV1UserAdminStatisticsUsersDevicesList["data"], ApiV1UserAdminStatisticsUsersDevicesList["error"], TData, any>({
    ...apiV1UserAdminStatisticsUsersDevicesListInfiniteQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1UserAdminStatisticsUsersDevicesList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
