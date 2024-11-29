import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1PermissionsAdminGroupsListQueryResponse, ApiV1PermissionsAdminGroupsListQueryParams } from "../../../models/ts/apiController/ApiV1PermissionsAdminGroupsList"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1PermissionsAdminGroupsListClient = typeof client<ApiV1PermissionsAdminGroupsListQueryResponse, never, never>
type ApiV1PermissionsAdminGroupsList = {
  data: ApiV1PermissionsAdminGroupsListQueryResponse
  error: never
  request: never
  pathParams: never
  queryParams: ApiV1PermissionsAdminGroupsListQueryParams
  headerParams: never
  response: Awaited<ReturnType<ApiV1PermissionsAdminGroupsListClient>>
  client: {
    parameters: Partial<Parameters<ApiV1PermissionsAdminGroupsListClient>[0]>
    return: Awaited<ReturnType<ApiV1PermissionsAdminGroupsListClient>>
  }
}
export const apiV1PermissionsAdminGroupsListQueryKey = (params?: ApiV1PermissionsAdminGroupsList["queryParams"]) => [{ url: "/api/v1/permissions/admin/groups/" }, ...(params ? [params] : [])] as const
export type ApiV1PermissionsAdminGroupsListQueryKey = ReturnType<typeof apiV1PermissionsAdminGroupsListQueryKey>
export function apiV1PermissionsAdminGroupsListQueryOptions<TData = ApiV1PermissionsAdminGroupsList["response"], TQueryData = ApiV1PermissionsAdminGroupsList["response"]>(
  params?: ApiV1PermissionsAdminGroupsList["queryParams"],
  options: ApiV1PermissionsAdminGroupsList["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1PermissionsAdminGroupsList["response"], ApiV1PermissionsAdminGroupsList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1PermissionsAdminGroupsListQueryKey(params)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1PermissionsAdminGroupsList["data"], ApiV1PermissionsAdminGroupsList["error"]>({
        method: "get",
        url: `/api/v1/permissions/admin/groups/`,
        params,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description Список сообщений **message_type**:* **admin_group_name_already_exists**Группа пользователей с указанным именем {} уже существует, укажите другое имя.
 * @summary Список групп пользователей, создание новой группы
 * @link /api/v1/permissions/admin/groups/ */
export function useApiV1PermissionsAdminGroupsList<
  TData = ApiV1PermissionsAdminGroupsList["response"],
  TQueryData = ApiV1PermissionsAdminGroupsList["response"],
  TQueryKey extends QueryKey = ApiV1PermissionsAdminGroupsListQueryKey,
>(
  params?: ApiV1PermissionsAdminGroupsList["queryParams"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1PermissionsAdminGroupsList["response"], ApiV1PermissionsAdminGroupsList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1PermissionsAdminGroupsList["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1PermissionsAdminGroupsList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1PermissionsAdminGroupsListQueryKey(params)
  const query = useQuery<ApiV1PermissionsAdminGroupsList["data"], ApiV1PermissionsAdminGroupsList["error"], TData, any>({
    ...apiV1PermissionsAdminGroupsListQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1PermissionsAdminGroupsList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1PermissionsAdminGroupsListInfiniteQueryKey = (params?: ApiV1PermissionsAdminGroupsList["queryParams"]) =>
  [{ url: "/api/v1/permissions/admin/groups/" }, ...(params ? [params] : [])] as const
export type ApiV1PermissionsAdminGroupsListInfiniteQueryKey = ReturnType<typeof apiV1PermissionsAdminGroupsListInfiniteQueryKey>
export function apiV1PermissionsAdminGroupsListInfiniteQueryOptions<TData = ApiV1PermissionsAdminGroupsList["response"], TQueryData = ApiV1PermissionsAdminGroupsList["response"]>(
  params?: ApiV1PermissionsAdminGroupsList["queryParams"],
  options: ApiV1PermissionsAdminGroupsList["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1PermissionsAdminGroupsList["response"], ApiV1PermissionsAdminGroupsList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1PermissionsAdminGroupsListInfiniteQueryKey(params)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1PermissionsAdminGroupsList["data"], ApiV1PermissionsAdminGroupsList["error"]>({
        method: "get",
        url: `/api/v1/permissions/admin/groups/`,
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
 * @description Список сообщений **message_type**:* **admin_group_name_already_exists**Группа пользователей с указанным именем {} уже существует, укажите другое имя.
 * @summary Список групп пользователей, создание новой группы
 * @link /api/v1/permissions/admin/groups/ */
export function useApiV1PermissionsAdminGroupsListInfinite<
  TData = InfiniteData<ApiV1PermissionsAdminGroupsList["response"]>,
  TQueryData = ApiV1PermissionsAdminGroupsList["response"],
  TQueryKey extends QueryKey = ApiV1PermissionsAdminGroupsListInfiniteQueryKey,
>(
  params?: ApiV1PermissionsAdminGroupsList["queryParams"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1PermissionsAdminGroupsList["response"], ApiV1PermissionsAdminGroupsList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1PermissionsAdminGroupsList["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1PermissionsAdminGroupsList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1PermissionsAdminGroupsListInfiniteQueryKey(params)
  const query = useInfiniteQuery<ApiV1PermissionsAdminGroupsList["data"], ApiV1PermissionsAdminGroupsList["error"], TData, any>({
    ...apiV1PermissionsAdminGroupsListInfiniteQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1PermissionsAdminGroupsList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
