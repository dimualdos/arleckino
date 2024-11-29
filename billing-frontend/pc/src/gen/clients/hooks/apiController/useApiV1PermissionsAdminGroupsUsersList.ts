import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type {
  ApiV1PermissionsAdminGroupsUsersListQueryResponse,
  ApiV1PermissionsAdminGroupsUsersListPathParams,
  ApiV1PermissionsAdminGroupsUsersListQueryParams,
} from "../../../models/ts/apiController/ApiV1PermissionsAdminGroupsUsersList"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1PermissionsAdminGroupsUsersListClient = typeof client<ApiV1PermissionsAdminGroupsUsersListQueryResponse, never, never>
type ApiV1PermissionsAdminGroupsUsersList = {
  data: ApiV1PermissionsAdminGroupsUsersListQueryResponse
  error: never
  request: never
  pathParams: ApiV1PermissionsAdminGroupsUsersListPathParams
  queryParams: ApiV1PermissionsAdminGroupsUsersListQueryParams
  headerParams: never
  response: Awaited<ReturnType<ApiV1PermissionsAdminGroupsUsersListClient>>
  client: {
    parameters: Partial<Parameters<ApiV1PermissionsAdminGroupsUsersListClient>[0]>
    return: Awaited<ReturnType<ApiV1PermissionsAdminGroupsUsersListClient>>
  }
}
export const apiV1PermissionsAdminGroupsUsersListQueryKey = (groupId: ApiV1PermissionsAdminGroupsUsersListPathParams["group_id"], params?: ApiV1PermissionsAdminGroupsUsersList["queryParams"]) =>
  [{ url: "/api/v1/permissions/admin/groups/:group_id/users/", params: { groupId: groupId } }, ...(params ? [params] : [])] as const
export type ApiV1PermissionsAdminGroupsUsersListQueryKey = ReturnType<typeof apiV1PermissionsAdminGroupsUsersListQueryKey>
export function apiV1PermissionsAdminGroupsUsersListQueryOptions<TData = ApiV1PermissionsAdminGroupsUsersList["response"], TQueryData = ApiV1PermissionsAdminGroupsUsersList["response"]>(
  groupId: ApiV1PermissionsAdminGroupsUsersListPathParams["group_id"],
  params?: ApiV1PermissionsAdminGroupsUsersList["queryParams"],
  options: ApiV1PermissionsAdminGroupsUsersList["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1PermissionsAdminGroupsUsersList["response"], ApiV1PermissionsAdminGroupsUsersList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1PermissionsAdminGroupsUsersListQueryKey(groupId, params)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1PermissionsAdminGroupsUsersList["data"], ApiV1PermissionsAdminGroupsUsersList["error"]>({
        method: "get",
        url: `/api/v1/permissions/admin/groups/${groupId}/users/`,
        params,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description .
 * @summary Список пользователей группы, добавление пользователя в группу
 * @link /api/v1/permissions/admin/groups/:group_id/users/ */
export function useApiV1PermissionsAdminGroupsUsersList<
  TData = ApiV1PermissionsAdminGroupsUsersList["response"],
  TQueryData = ApiV1PermissionsAdminGroupsUsersList["response"],
  TQueryKey extends QueryKey = ApiV1PermissionsAdminGroupsUsersListQueryKey,
>(
  groupId: ApiV1PermissionsAdminGroupsUsersListPathParams["group_id"],
  params?: ApiV1PermissionsAdminGroupsUsersList["queryParams"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1PermissionsAdminGroupsUsersList["response"], ApiV1PermissionsAdminGroupsUsersList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1PermissionsAdminGroupsUsersList["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1PermissionsAdminGroupsUsersList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1PermissionsAdminGroupsUsersListQueryKey(groupId, params)
  const query = useQuery<ApiV1PermissionsAdminGroupsUsersList["data"], ApiV1PermissionsAdminGroupsUsersList["error"], TData, any>({
    ...apiV1PermissionsAdminGroupsUsersListQueryOptions<TData, TQueryData>(groupId, params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1PermissionsAdminGroupsUsersList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1PermissionsAdminGroupsUsersListInfiniteQueryKey = (
  groupId: ApiV1PermissionsAdminGroupsUsersListPathParams["group_id"],
  params?: ApiV1PermissionsAdminGroupsUsersList["queryParams"],
) => [{ url: "/api/v1/permissions/admin/groups/:group_id/users/", params: { groupId: groupId } }, ...(params ? [params] : [])] as const
export type ApiV1PermissionsAdminGroupsUsersListInfiniteQueryKey = ReturnType<typeof apiV1PermissionsAdminGroupsUsersListInfiniteQueryKey>
export function apiV1PermissionsAdminGroupsUsersListInfiniteQueryOptions<TData = ApiV1PermissionsAdminGroupsUsersList["response"], TQueryData = ApiV1PermissionsAdminGroupsUsersList["response"]>(
  groupId: ApiV1PermissionsAdminGroupsUsersListPathParams["group_id"],
  params?: ApiV1PermissionsAdminGroupsUsersList["queryParams"],
  options: ApiV1PermissionsAdminGroupsUsersList["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1PermissionsAdminGroupsUsersList["response"], ApiV1PermissionsAdminGroupsUsersList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1PermissionsAdminGroupsUsersListInfiniteQueryKey(groupId, params)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1PermissionsAdminGroupsUsersList["data"], ApiV1PermissionsAdminGroupsUsersList["error"]>({
        method: "get",
        url: `/api/v1/permissions/admin/groups/${groupId}/users/`,
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
 * @summary Список пользователей группы, добавление пользователя в группу
 * @link /api/v1/permissions/admin/groups/:group_id/users/ */
export function useApiV1PermissionsAdminGroupsUsersListInfinite<
  TData = InfiniteData<ApiV1PermissionsAdminGroupsUsersList["response"]>,
  TQueryData = ApiV1PermissionsAdminGroupsUsersList["response"],
  TQueryKey extends QueryKey = ApiV1PermissionsAdminGroupsUsersListInfiniteQueryKey,
>(
  groupId: ApiV1PermissionsAdminGroupsUsersListPathParams["group_id"],
  params?: ApiV1PermissionsAdminGroupsUsersList["queryParams"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1PermissionsAdminGroupsUsersList["response"], ApiV1PermissionsAdminGroupsUsersList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1PermissionsAdminGroupsUsersList["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1PermissionsAdminGroupsUsersList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1PermissionsAdminGroupsUsersListInfiniteQueryKey(groupId, params)
  const query = useInfiniteQuery<ApiV1PermissionsAdminGroupsUsersList["data"], ApiV1PermissionsAdminGroupsUsersList["error"], TData, any>({
    ...apiV1PermissionsAdminGroupsUsersListInfiniteQueryOptions<TData, TQueryData>(groupId, params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1PermissionsAdminGroupsUsersList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
