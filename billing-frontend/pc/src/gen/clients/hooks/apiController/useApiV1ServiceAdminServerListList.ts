import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1ServiceAdminServerListListQueryResponse, ApiV1ServiceAdminServerListListQueryParams } from "../../../models/ts/apiController/ApiV1ServiceAdminServerListList"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1ServiceAdminServerListListClient = typeof client<ApiV1ServiceAdminServerListListQueryResponse, never, never>
type ApiV1ServiceAdminServerListList = {
  data: ApiV1ServiceAdminServerListListQueryResponse
  error: never
  request: never
  pathParams: never
  queryParams: ApiV1ServiceAdminServerListListQueryParams
  headerParams: never
  response: Awaited<ReturnType<ApiV1ServiceAdminServerListListClient>>
  client: {
    parameters: Partial<Parameters<ApiV1ServiceAdminServerListListClient>[0]>
    return: Awaited<ReturnType<ApiV1ServiceAdminServerListListClient>>
  }
}
export const apiV1ServiceAdminServerListListQueryKey = (params?: ApiV1ServiceAdminServerListList["queryParams"]) =>
  [{ url: "/api/v1/service/admin/server/list/" }, ...(params ? [params] : [])] as const
export type ApiV1ServiceAdminServerListListQueryKey = ReturnType<typeof apiV1ServiceAdminServerListListQueryKey>
export function apiV1ServiceAdminServerListListQueryOptions<TData = ApiV1ServiceAdminServerListList["response"], TQueryData = ApiV1ServiceAdminServerListList["response"]>(
  params?: ApiV1ServiceAdminServerListList["queryParams"],
  options: ApiV1ServiceAdminServerListList["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1ServiceAdminServerListList["response"], ApiV1ServiceAdminServerListList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1ServiceAdminServerListListQueryKey(params)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1ServiceAdminServerListList["data"], ApiV1ServiceAdminServerListList["error"]>({
        method: "get",
        url: `/api/v1/service/admin/server/list/`,
        params,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description Список сообщений **message_type**:* **virtual_server_already_exists**Виртуальный сервер уже существует.
 * @summary Список серверов, создание нового сервера
 * @link /api/v1/service/admin/server/list/ */
export function useApiV1ServiceAdminServerListList<
  TData = ApiV1ServiceAdminServerListList["response"],
  TQueryData = ApiV1ServiceAdminServerListList["response"],
  TQueryKey extends QueryKey = ApiV1ServiceAdminServerListListQueryKey,
>(
  params?: ApiV1ServiceAdminServerListList["queryParams"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1ServiceAdminServerListList["response"], ApiV1ServiceAdminServerListList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1ServiceAdminServerListList["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1ServiceAdminServerListList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1ServiceAdminServerListListQueryKey(params)
  const query = useQuery<ApiV1ServiceAdminServerListList["data"], ApiV1ServiceAdminServerListList["error"], TData, any>({
    ...apiV1ServiceAdminServerListListQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1ServiceAdminServerListList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1ServiceAdminServerListListInfiniteQueryKey = (params?: ApiV1ServiceAdminServerListList["queryParams"]) =>
  [{ url: "/api/v1/service/admin/server/list/" }, ...(params ? [params] : [])] as const
export type ApiV1ServiceAdminServerListListInfiniteQueryKey = ReturnType<typeof apiV1ServiceAdminServerListListInfiniteQueryKey>
export function apiV1ServiceAdminServerListListInfiniteQueryOptions<TData = ApiV1ServiceAdminServerListList["response"], TQueryData = ApiV1ServiceAdminServerListList["response"]>(
  params?: ApiV1ServiceAdminServerListList["queryParams"],
  options: ApiV1ServiceAdminServerListList["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1ServiceAdminServerListList["response"], ApiV1ServiceAdminServerListList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1ServiceAdminServerListListInfiniteQueryKey(params)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1ServiceAdminServerListList["data"], ApiV1ServiceAdminServerListList["error"]>({
        method: "get",
        url: `/api/v1/service/admin/server/list/`,
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
 * @description Список сообщений **message_type**:* **virtual_server_already_exists**Виртуальный сервер уже существует.
 * @summary Список серверов, создание нового сервера
 * @link /api/v1/service/admin/server/list/ */
export function useApiV1ServiceAdminServerListListInfinite<
  TData = InfiniteData<ApiV1ServiceAdminServerListList["response"]>,
  TQueryData = ApiV1ServiceAdminServerListList["response"],
  TQueryKey extends QueryKey = ApiV1ServiceAdminServerListListInfiniteQueryKey,
>(
  params?: ApiV1ServiceAdminServerListList["queryParams"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1ServiceAdminServerListList["response"], ApiV1ServiceAdminServerListList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1ServiceAdminServerListList["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1ServiceAdminServerListList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1ServiceAdminServerListListInfiniteQueryKey(params)
  const query = useInfiniteQuery<ApiV1ServiceAdminServerListList["data"], ApiV1ServiceAdminServerListList["error"], TData, any>({
    ...apiV1ServiceAdminServerListListInfiniteQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1ServiceAdminServerListList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
