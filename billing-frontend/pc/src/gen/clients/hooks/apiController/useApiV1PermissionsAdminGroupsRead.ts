import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1PermissionsAdminGroupsReadQueryResponse, ApiV1PermissionsAdminGroupsReadPathParams } from "../../../models/ts/apiController/ApiV1PermissionsAdminGroupsRead"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1PermissionsAdminGroupsReadClient = typeof client<ApiV1PermissionsAdminGroupsReadQueryResponse, never, never>
type ApiV1PermissionsAdminGroupsRead = {
  data: ApiV1PermissionsAdminGroupsReadQueryResponse
  error: never
  request: never
  pathParams: ApiV1PermissionsAdminGroupsReadPathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1PermissionsAdminGroupsReadClient>>
  client: {
    parameters: Partial<Parameters<ApiV1PermissionsAdminGroupsReadClient>[0]>
    return: Awaited<ReturnType<ApiV1PermissionsAdminGroupsReadClient>>
  }
}
export const apiV1PermissionsAdminGroupsReadQueryKey = (id: ApiV1PermissionsAdminGroupsReadPathParams["id"]) => [{ url: "/api/v1/permissions/admin/groups/:id/", params: { id: id } }] as const
export type ApiV1PermissionsAdminGroupsReadQueryKey = ReturnType<typeof apiV1PermissionsAdminGroupsReadQueryKey>
export function apiV1PermissionsAdminGroupsReadQueryOptions<TData = ApiV1PermissionsAdminGroupsRead["response"], TQueryData = ApiV1PermissionsAdminGroupsRead["response"]>(
  id: ApiV1PermissionsAdminGroupsReadPathParams["id"],
  options: ApiV1PermissionsAdminGroupsRead["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1PermissionsAdminGroupsRead["response"], ApiV1PermissionsAdminGroupsRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1PermissionsAdminGroupsReadQueryKey(id)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1PermissionsAdminGroupsRead["data"], ApiV1PermissionsAdminGroupsRead["error"]>({
        method: "get",
        url: `/api/v1/permissions/admin/groups/${id}/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description .
 * @summary Просмотр, изменение и удаление группы пользователей
 * @link /api/v1/permissions/admin/groups/:id/ */
export function useApiV1PermissionsAdminGroupsRead<
  TData = ApiV1PermissionsAdminGroupsRead["response"],
  TQueryData = ApiV1PermissionsAdminGroupsRead["response"],
  TQueryKey extends QueryKey = ApiV1PermissionsAdminGroupsReadQueryKey,
>(
  id: ApiV1PermissionsAdminGroupsReadPathParams["id"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1PermissionsAdminGroupsRead["response"], ApiV1PermissionsAdminGroupsRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1PermissionsAdminGroupsRead["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1PermissionsAdminGroupsRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1PermissionsAdminGroupsReadQueryKey(id)
  const query = useQuery<ApiV1PermissionsAdminGroupsRead["data"], ApiV1PermissionsAdminGroupsRead["error"], TData, any>({
    ...apiV1PermissionsAdminGroupsReadQueryOptions<TData, TQueryData>(id, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1PermissionsAdminGroupsRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1PermissionsAdminGroupsReadInfiniteQueryKey = (id: ApiV1PermissionsAdminGroupsReadPathParams["id"]) => [{ url: "/api/v1/permissions/admin/groups/:id/", params: { id: id } }] as const
export type ApiV1PermissionsAdminGroupsReadInfiniteQueryKey = ReturnType<typeof apiV1PermissionsAdminGroupsReadInfiniteQueryKey>
export function apiV1PermissionsAdminGroupsReadInfiniteQueryOptions<TData = ApiV1PermissionsAdminGroupsRead["response"], TQueryData = ApiV1PermissionsAdminGroupsRead["response"]>(
  id: ApiV1PermissionsAdminGroupsReadPathParams["id"],
  options: ApiV1PermissionsAdminGroupsRead["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1PermissionsAdminGroupsRead["response"], ApiV1PermissionsAdminGroupsRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1PermissionsAdminGroupsReadInfiniteQueryKey(id)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1PermissionsAdminGroupsRead["data"], ApiV1PermissionsAdminGroupsRead["error"]>({
        method: "get",
        url: `/api/v1/permissions/admin/groups/${id}/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description .
 * @summary Просмотр, изменение и удаление группы пользователей
 * @link /api/v1/permissions/admin/groups/:id/ */
export function useApiV1PermissionsAdminGroupsReadInfinite<
  TData = InfiniteData<ApiV1PermissionsAdminGroupsRead["response"]>,
  TQueryData = ApiV1PermissionsAdminGroupsRead["response"],
  TQueryKey extends QueryKey = ApiV1PermissionsAdminGroupsReadInfiniteQueryKey,
>(
  id: ApiV1PermissionsAdminGroupsReadPathParams["id"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1PermissionsAdminGroupsRead["response"], ApiV1PermissionsAdminGroupsRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1PermissionsAdminGroupsRead["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1PermissionsAdminGroupsRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1PermissionsAdminGroupsReadInfiniteQueryKey(id)
  const query = useInfiniteQuery<ApiV1PermissionsAdminGroupsRead["data"], ApiV1PermissionsAdminGroupsRead["error"], TData, any>({
    ...apiV1PermissionsAdminGroupsReadInfiniteQueryOptions<TData, TQueryData>(id, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1PermissionsAdminGroupsRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
