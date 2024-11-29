import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1UserDeviceListListQueryResponse, ApiV1UserDeviceListListQueryParams } from "../../../models/ts/apiController/ApiV1UserDeviceListList"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData, UseMutationResult } from "@tanstack/react-query"
import { Device } from "@/src/gen/models/ts/Device"

type ApiV1UserDeviceListListClient = typeof client<ApiV1UserDeviceListListQueryResponse, never, never>
type ApiV1UserDeviceListList = {
  data: ApiV1UserDeviceListListQueryResponse
  error: never
  request: never
  pathParams: never
  queryParams: ApiV1UserDeviceListListQueryParams
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserDeviceListListClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserDeviceListListClient>[0]>
    return: Awaited<ReturnType<ApiV1UserDeviceListListClient>>
  }
}
interface ApiV1UserDeviceListListInfinity {
  pageParams?: []
  pages: ApiV1UserDeviceListList[]
  data?: any
}

export const apiV1UserDeviceListListQueryKey = (params?: ApiV1UserDeviceListList["queryParams"]) => [{ url: "/api/v1/user/device/list/" }, ...(params ? [params] : [])] as const
export type ApiV1UserDeviceListListQueryKey = ReturnType<typeof apiV1UserDeviceListListQueryKey>
export function apiV1UserDeviceListListQueryOptions<TData = ApiV1UserDeviceListList["response"], TQueryData = ApiV1UserDeviceListList["response"]>(
  params?: ApiV1UserDeviceListList["queryParams"],
  options: ApiV1UserDeviceListList["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1UserDeviceListList["response"], ApiV1UserDeviceListList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserDeviceListListQueryKey(params)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1UserDeviceListList["data"], ApiV1UserDeviceListList["error"]>({
        method: "get",
        url: `/api/v1/user/device/list/`,
        params,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description Список сообщений **message_type**:* **device_name_already_exists**Устройство с указанным именем уже существует, укажите другое имя.
 * @summary Список устройств, создание нового устройства
 * @link /api/v1/user/device/list/ */
export function useApiV1UserDeviceListList<TData = ApiV1UserDeviceListList["response"], TQueryData = ApiV1UserDeviceListList["response"], TQueryKey extends QueryKey = ApiV1UserDeviceListListQueryKey>(
  params?: ApiV1UserDeviceListList["queryParams"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1UserDeviceListList["response"], ApiV1UserDeviceListList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserDeviceListList["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1UserDeviceListList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserDeviceListListQueryKey(params)
  const query = useQuery<ApiV1UserDeviceListList["data"], ApiV1UserDeviceListList["error"], TData, any>({
    ...apiV1UserDeviceListListQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1UserDeviceListList["error"]> & {
    queryKey: TQueryKey
    refetchOnWindowFocus: true
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1UserDeviceListListInfiniteQueryKey = (params?: ApiV1UserDeviceListList["queryParams"]) => [{ url: "/api/v1/user/device/list/" }, ...(params ? [params] : [])] as const
export type ApiV1UserDeviceListListInfiniteQueryKey = ReturnType<typeof apiV1UserDeviceListListInfiniteQueryKey>

export function apiV1UserDeviceListListInfiniteQueryOptions<TData = ApiV1UserDeviceListList["response"], TQueryData = ApiV1UserDeviceListList["response"]>(
  params?: ApiV1UserDeviceListList["queryParams"],
  options: ApiV1UserDeviceListList["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1UserDeviceListList["response"], ApiV1UserDeviceListList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserDeviceListListInfiniteQueryKey(params)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1UserDeviceListList["data"], ApiV1UserDeviceListList["error"]>({
        method: "get",
        url: `/api/v1/user/device/list/`,
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
 * @description Список сообщений **message_type**:* **device_name_already_exists**Устройство с указанным именем уже существует, укажите другое имя.
 * @summary Список устройств, создание нового устройства
 * @link /api/v1/user/device/list/ */
export function useApiV1UserDeviceListListInfinite<
  TData = ApiV1UserDeviceListListInfinity,
  TQueryData = ApiV1UserDeviceListList["response"],
  TQueryKey extends QueryKey = ApiV1UserDeviceListListInfiniteQueryKey,
>(
  params?: ApiV1UserDeviceListList["queryParams"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1UserDeviceListList["response"], ApiV1UserDeviceListList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserDeviceListList["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1UserDeviceListList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserDeviceListListInfiniteQueryKey(params)
  const query = useInfiniteQuery<ApiV1UserDeviceListList["data"], ApiV1UserDeviceListList["error"], TData, any>({
    ...apiV1UserDeviceListListInfiniteQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1UserDeviceListList["error"]> & {
    queryKey: TQueryKey
    refetchOnWindowFocus: true
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
