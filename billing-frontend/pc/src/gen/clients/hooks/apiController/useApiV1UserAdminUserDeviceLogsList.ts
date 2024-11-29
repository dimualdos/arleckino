import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type {
  ApiV1UserAdminUserDeviceLogsListQueryResponse,
  ApiV1UserAdminUserDeviceLogsListPathParams,
  ApiV1UserAdminUserDeviceLogsListQueryParams,
} from "../../../models/ts/apiController/ApiV1UserAdminUserDeviceLogsList"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1UserAdminUserDeviceLogsListClient = typeof client<ApiV1UserAdminUserDeviceLogsListQueryResponse, never, never>
type ApiV1UserAdminUserDeviceLogsList = {
  data: ApiV1UserAdminUserDeviceLogsListQueryResponse
  error: never
  request: never
  pathParams: ApiV1UserAdminUserDeviceLogsListPathParams
  queryParams: ApiV1UserAdminUserDeviceLogsListQueryParams
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserAdminUserDeviceLogsListClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserAdminUserDeviceLogsListClient>[0]>
    return: Awaited<ReturnType<ApiV1UserAdminUserDeviceLogsListClient>>
  }
}
export const apiV1UserAdminUserDeviceLogsListQueryKey = (
  deviceId: ApiV1UserAdminUserDeviceLogsListPathParams["deviceId"],
  id: ApiV1UserAdminUserDeviceLogsListPathParams["id"],
  params?: ApiV1UserAdminUserDeviceLogsList["queryParams"],
) => [{ url: "/api/v1/user/admin/user/:id/device/:deviceId/logs/", params: { id: id, deviceId: deviceId } }, ...(params ? [params] : [])] as const
export type ApiV1UserAdminUserDeviceLogsListQueryKey = ReturnType<typeof apiV1UserAdminUserDeviceLogsListQueryKey>
export function apiV1UserAdminUserDeviceLogsListQueryOptions<TData = ApiV1UserAdminUserDeviceLogsList["response"], TQueryData = ApiV1UserAdminUserDeviceLogsList["response"]>(
  deviceId: ApiV1UserAdminUserDeviceLogsListPathParams["deviceId"],
  id: ApiV1UserAdminUserDeviceLogsListPathParams["id"],
  params?: ApiV1UserAdminUserDeviceLogsList["queryParams"],
  options: ApiV1UserAdminUserDeviceLogsList["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1UserAdminUserDeviceLogsList["response"], ApiV1UserAdminUserDeviceLogsList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserAdminUserDeviceLogsListQueryKey(deviceId, id, params)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1UserAdminUserDeviceLogsList["data"], ApiV1UserAdminUserDeviceLogsList["error"]>({
        method: "get",
        url: `/api/v1/user/admin/user/${id}/device/${deviceId}/logs/`,
        params,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description .
 * @summary Список логов для устройства пользователя
 * @link /api/v1/user/admin/user/:id/device/:deviceId/logs/ */
export function useApiV1UserAdminUserDeviceLogsList<
  TData = ApiV1UserAdminUserDeviceLogsList["response"],
  TQueryData = ApiV1UserAdminUserDeviceLogsList["response"],
  TQueryKey extends QueryKey = ApiV1UserAdminUserDeviceLogsListQueryKey,
>(
  deviceId: ApiV1UserAdminUserDeviceLogsListPathParams["deviceId"],
  id: ApiV1UserAdminUserDeviceLogsListPathParams["id"],
  params?: ApiV1UserAdminUserDeviceLogsList["queryParams"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1UserAdminUserDeviceLogsList["response"], ApiV1UserAdminUserDeviceLogsList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserAdminUserDeviceLogsList["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1UserAdminUserDeviceLogsList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserAdminUserDeviceLogsListQueryKey(deviceId, id, params)
  const query = useQuery<ApiV1UserAdminUserDeviceLogsList["data"], ApiV1UserAdminUserDeviceLogsList["error"], TData, any>({
    ...apiV1UserAdminUserDeviceLogsListQueryOptions<TData, TQueryData>(deviceId, id, params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1UserAdminUserDeviceLogsList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1UserAdminUserDeviceLogsListInfiniteQueryKey = (
  deviceId: ApiV1UserAdminUserDeviceLogsListPathParams["deviceId"],
  id: ApiV1UserAdminUserDeviceLogsListPathParams["id"],
  params?: ApiV1UserAdminUserDeviceLogsList["queryParams"],
) => [{ url: "/api/v1/user/admin/user/:id/device/:deviceId/logs/", params: { id: id, deviceId: deviceId } }, ...(params ? [params] : [])] as const
export type ApiV1UserAdminUserDeviceLogsListInfiniteQueryKey = ReturnType<typeof apiV1UserAdminUserDeviceLogsListInfiniteQueryKey>
export function apiV1UserAdminUserDeviceLogsListInfiniteQueryOptions<TData = ApiV1UserAdminUserDeviceLogsList["response"], TQueryData = ApiV1UserAdminUserDeviceLogsList["response"]>(
  deviceId: ApiV1UserAdminUserDeviceLogsListPathParams["deviceId"],
  id: ApiV1UserAdminUserDeviceLogsListPathParams["id"],
  params?: ApiV1UserAdminUserDeviceLogsList["queryParams"],
  options: ApiV1UserAdminUserDeviceLogsList["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1UserAdminUserDeviceLogsList["response"], ApiV1UserAdminUserDeviceLogsList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserAdminUserDeviceLogsListInfiniteQueryKey(deviceId, id, params)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1UserAdminUserDeviceLogsList["data"], ApiV1UserAdminUserDeviceLogsList["error"]>({
        method: "get",
        url: `/api/v1/user/admin/user/${id}/device/${deviceId}/logs/`,
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
 * @summary Список логов для устройства пользователя
 * @link /api/v1/user/admin/user/:id/device/:deviceId/logs/ */
export function useApiV1UserAdminUserDeviceLogsListInfinite<
  TData = InfiniteData<ApiV1UserAdminUserDeviceLogsList["response"]>,
  TQueryData = ApiV1UserAdminUserDeviceLogsList["response"],
  TQueryKey extends QueryKey = ApiV1UserAdminUserDeviceLogsListInfiniteQueryKey,
>(
  deviceId: ApiV1UserAdminUserDeviceLogsListPathParams["deviceId"],
  id: ApiV1UserAdminUserDeviceLogsListPathParams["id"],
  params?: ApiV1UserAdminUserDeviceLogsList["queryParams"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1UserAdminUserDeviceLogsList["response"], ApiV1UserAdminUserDeviceLogsList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserAdminUserDeviceLogsList["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1UserAdminUserDeviceLogsList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserAdminUserDeviceLogsListInfiniteQueryKey(deviceId, id, params)
  const query = useInfiniteQuery<ApiV1UserAdminUserDeviceLogsList["data"], ApiV1UserAdminUserDeviceLogsList["error"], TData, any>({
    ...apiV1UserAdminUserDeviceLogsListInfiniteQueryOptions<TData, TQueryData>(deviceId, id, params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1UserAdminUserDeviceLogsList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
