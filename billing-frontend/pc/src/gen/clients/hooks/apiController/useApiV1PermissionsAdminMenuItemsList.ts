import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1PermissionsAdminMenuItemsListQueryResponse } from "../../../models/ts/apiController/ApiV1PermissionsAdminMenuItemsList"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1PermissionsAdminMenuItemsListClient = typeof client<ApiV1PermissionsAdminMenuItemsListQueryResponse, never, never>
type ApiV1PermissionsAdminMenuItemsList = {
  data: ApiV1PermissionsAdminMenuItemsListQueryResponse
  error: never
  request: never
  pathParams: never
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1PermissionsAdminMenuItemsListClient>>
  client: {
    parameters: Partial<Parameters<ApiV1PermissionsAdminMenuItemsListClient>[0]>
    return: Awaited<ReturnType<ApiV1PermissionsAdminMenuItemsListClient>>
  }
}
export const apiV1PermissionsAdminMenuItemsListQueryKey = () => [{ url: "/api/v1/permissions/admin/menu-items/" }] as const
export type ApiV1PermissionsAdminMenuItemsListQueryKey = ReturnType<typeof apiV1PermissionsAdminMenuItemsListQueryKey>
export function apiV1PermissionsAdminMenuItemsListQueryOptions<TData = ApiV1PermissionsAdminMenuItemsList["response"], TQueryData = ApiV1PermissionsAdminMenuItemsList["response"]>(
  options: ApiV1PermissionsAdminMenuItemsList["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1PermissionsAdminMenuItemsList["response"], ApiV1PermissionsAdminMenuItemsList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1PermissionsAdminMenuItemsListQueryKey()
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1PermissionsAdminMenuItemsList["data"], ApiV1PermissionsAdminMenuItemsList["error"]>({
        method: "get",
        url: `/api/v1/permissions/admin/menu-items/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description .
 * @summary Список пунктов меню административной панели сайта
 * @link /api/v1/permissions/admin/menu-items/ */
export function useApiV1PermissionsAdminMenuItemsList<
  TData = ApiV1PermissionsAdminMenuItemsList["response"],
  TQueryData = ApiV1PermissionsAdminMenuItemsList["response"],
  TQueryKey extends QueryKey = ApiV1PermissionsAdminMenuItemsListQueryKey,
>(
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1PermissionsAdminMenuItemsList["response"], ApiV1PermissionsAdminMenuItemsList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1PermissionsAdminMenuItemsList["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1PermissionsAdminMenuItemsList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1PermissionsAdminMenuItemsListQueryKey()
  const query = useQuery<ApiV1PermissionsAdminMenuItemsList["data"], ApiV1PermissionsAdminMenuItemsList["error"], TData, any>({
    ...apiV1PermissionsAdminMenuItemsListQueryOptions<TData, TQueryData>(clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1PermissionsAdminMenuItemsList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1PermissionsAdminMenuItemsListInfiniteQueryKey = () => [{ url: "/api/v1/permissions/admin/menu-items/" }] as const
export type ApiV1PermissionsAdminMenuItemsListInfiniteQueryKey = ReturnType<typeof apiV1PermissionsAdminMenuItemsListInfiniteQueryKey>
export function apiV1PermissionsAdminMenuItemsListInfiniteQueryOptions<TData = ApiV1PermissionsAdminMenuItemsList["response"], TQueryData = ApiV1PermissionsAdminMenuItemsList["response"]>(
  options: ApiV1PermissionsAdminMenuItemsList["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1PermissionsAdminMenuItemsList["response"], ApiV1PermissionsAdminMenuItemsList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1PermissionsAdminMenuItemsListInfiniteQueryKey()
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1PermissionsAdminMenuItemsList["data"], ApiV1PermissionsAdminMenuItemsList["error"]>({
        method: "get",
        url: `/api/v1/permissions/admin/menu-items/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description .
 * @summary Список пунктов меню административной панели сайта
 * @link /api/v1/permissions/admin/menu-items/ */
export function useApiV1PermissionsAdminMenuItemsListInfinite<
  TData = InfiniteData<ApiV1PermissionsAdminMenuItemsList["response"]>,
  TQueryData = ApiV1PermissionsAdminMenuItemsList["response"],
  TQueryKey extends QueryKey = ApiV1PermissionsAdminMenuItemsListInfiniteQueryKey,
>(
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1PermissionsAdminMenuItemsList["response"], ApiV1PermissionsAdminMenuItemsList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1PermissionsAdminMenuItemsList["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1PermissionsAdminMenuItemsList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1PermissionsAdminMenuItemsListInfiniteQueryKey()
  const query = useInfiniteQuery<ApiV1PermissionsAdminMenuItemsList["data"], ApiV1PermissionsAdminMenuItemsList["error"], TData, any>({
    ...apiV1PermissionsAdminMenuItemsListInfiniteQueryOptions<TData, TQueryData>(clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1PermissionsAdminMenuItemsList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
