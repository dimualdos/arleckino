import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type {
  ApiV1UserAdminUserDeviceListQueryResponse,
  ApiV1UserAdminUserDeviceListPathParams,
  ApiV1UserAdminUserDeviceListQueryParams,
} from "../../../models/ts/apiController/ApiV1UserAdminUserDeviceList"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1UserAdminUserDeviceListClient = typeof client<ApiV1UserAdminUserDeviceListQueryResponse, never, never>
type ApiV1UserAdminUserDeviceList = {
  data: ApiV1UserAdminUserDeviceListQueryResponse
  error: never
  request: never
  pathParams: ApiV1UserAdminUserDeviceListPathParams
  queryParams: ApiV1UserAdminUserDeviceListQueryParams
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserAdminUserDeviceListClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserAdminUserDeviceListClient>[0]>
    return: Awaited<ReturnType<ApiV1UserAdminUserDeviceListClient>>
  }
}
export const apiV1UserAdminUserDeviceListQueryKey = (id: ApiV1UserAdminUserDeviceListPathParams["id"], params?: ApiV1UserAdminUserDeviceList["queryParams"]) =>
  [{ url: "/api/v1/user/admin/user/:id/device", params: { id: id } }, ...(params ? [params] : [])] as const
export type ApiV1UserAdminUserDeviceListQueryKey = ReturnType<typeof apiV1UserAdminUserDeviceListQueryKey>
export function apiV1UserAdminUserDeviceListQueryOptions<TData = ApiV1UserAdminUserDeviceList["response"], TQueryData = ApiV1UserAdminUserDeviceList["response"]>(
  id: ApiV1UserAdminUserDeviceListPathParams["id"],
  params?: ApiV1UserAdminUserDeviceList["queryParams"],
  options: ApiV1UserAdminUserDeviceList["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1UserAdminUserDeviceList["response"], ApiV1UserAdminUserDeviceList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserAdminUserDeviceListQueryKey(id, params)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1UserAdminUserDeviceList["data"], ApiV1UserAdminUserDeviceList["error"]>({
        method: "get",
        url: `/api/v1/user/admin/user/${id}/device`,
        params,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description .
 * @summary Список устройств пользователя
 * @link /api/v1/user/admin/user/:id/device */
export function useApiV1UserAdminUserDeviceList<
  TData = ApiV1UserAdminUserDeviceList["response"],
  TQueryData = ApiV1UserAdminUserDeviceList["response"],
  TQueryKey extends QueryKey = ApiV1UserAdminUserDeviceListQueryKey,
>(
  id: ApiV1UserAdminUserDeviceListPathParams["id"],
  params?: ApiV1UserAdminUserDeviceList["queryParams"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1UserAdminUserDeviceList["response"], ApiV1UserAdminUserDeviceList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserAdminUserDeviceList["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1UserAdminUserDeviceList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserAdminUserDeviceListQueryKey(id, params)
  const query = useQuery<ApiV1UserAdminUserDeviceList["data"], ApiV1UserAdminUserDeviceList["error"], TData, any>({
    ...apiV1UserAdminUserDeviceListQueryOptions<TData, TQueryData>(id, params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1UserAdminUserDeviceList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1UserAdminUserDeviceListInfiniteQueryKey = (id: ApiV1UserAdminUserDeviceListPathParams["id"], params?: ApiV1UserAdminUserDeviceList["queryParams"]) =>
  [{ url: "/api/v1/user/admin/user/:id/device", params: { id: id } }, ...(params ? [params] : [])] as const
export type ApiV1UserAdminUserDeviceListInfiniteQueryKey = ReturnType<typeof apiV1UserAdminUserDeviceListInfiniteQueryKey>
export function apiV1UserAdminUserDeviceListInfiniteQueryOptions<TData = ApiV1UserAdminUserDeviceList["response"], TQueryData = ApiV1UserAdminUserDeviceList["response"]>(
  id: ApiV1UserAdminUserDeviceListPathParams["id"],
  params?: ApiV1UserAdminUserDeviceList["queryParams"],
  options: ApiV1UserAdminUserDeviceList["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1UserAdminUserDeviceList["response"], ApiV1UserAdminUserDeviceList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserAdminUserDeviceListInfiniteQueryKey(id, params)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1UserAdminUserDeviceList["data"], ApiV1UserAdminUserDeviceList["error"]>({
        method: "get",
        url: `/api/v1/user/admin/user/${id}/device`,
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
 * @summary Список устройств пользователя
 * @link /api/v1/user/admin/user/:id/device */
export function useApiV1UserAdminUserDeviceListInfinite<
  TData = InfiniteData<ApiV1UserAdminUserDeviceList["response"]>,
  TQueryData = ApiV1UserAdminUserDeviceList["response"],
  TQueryKey extends QueryKey = ApiV1UserAdminUserDeviceListInfiniteQueryKey,
>(
  id: ApiV1UserAdminUserDeviceListPathParams["id"],
  params?: ApiV1UserAdminUserDeviceList["queryParams"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1UserAdminUserDeviceList["response"], ApiV1UserAdminUserDeviceList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserAdminUserDeviceList["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1UserAdminUserDeviceList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserAdminUserDeviceListInfiniteQueryKey(id, params)
  const query = useInfiniteQuery<ApiV1UserAdminUserDeviceList["data"], ApiV1UserAdminUserDeviceList["error"], TData, any>({
    ...apiV1UserAdminUserDeviceListInfiniteQueryOptions<TData, TQueryData>(id, params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1UserAdminUserDeviceList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
