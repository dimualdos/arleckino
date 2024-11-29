import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1ActionsUserGroupsListQueryResponse, ApiV1ActionsUserGroupsListQueryParams } from "../../../models/ts/apiController/ApiV1ActionsUserGroupsList"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1ActionsUserGroupsListClient = typeof client<ApiV1ActionsUserGroupsListQueryResponse, never, never>
type ApiV1ActionsUserGroupsList = {
  data: ApiV1ActionsUserGroupsListQueryResponse
  error: never
  request: never
  pathParams: never
  queryParams: ApiV1ActionsUserGroupsListQueryParams
  headerParams: never
  response: Awaited<ReturnType<ApiV1ActionsUserGroupsListClient>>
  client: {
    parameters: Partial<Parameters<ApiV1ActionsUserGroupsListClient>[0]>
    return: Awaited<ReturnType<ApiV1ActionsUserGroupsListClient>>
  }
}
export const apiV1ActionsUserGroupsListQueryKey = (params?: ApiV1ActionsUserGroupsList["queryParams"]) => [{ url: "/api/v1/actions/user/groups/" }, ...(params ? [params] : [])] as const
export type ApiV1ActionsUserGroupsListQueryKey = ReturnType<typeof apiV1ActionsUserGroupsListQueryKey>
export function apiV1ActionsUserGroupsListQueryOptions<TData = ApiV1ActionsUserGroupsList["response"], TQueryData = ApiV1ActionsUserGroupsList["response"]>(
  params?: ApiV1ActionsUserGroupsList["queryParams"],
  options: ApiV1ActionsUserGroupsList["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1ActionsUserGroupsList["response"], ApiV1ActionsUserGroupsList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1ActionsUserGroupsListQueryKey(params)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1ActionsUserGroupsList["data"], ApiV1ActionsUserGroupsList["error"]>({
        method: "get",
        url: `/api/v1/actions/user/groups/`,
        params,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description Список сообщений **message_type**:* **user_is_blocked**Учетная запись пользователя заблокирована.
 * @summary Получение списка групп логов
 * @link /api/v1/actions/user/groups/ */
export function useApiV1ActionsUserGroupsList<
  TData = ApiV1ActionsUserGroupsList["response"],
  TQueryData = ApiV1ActionsUserGroupsList["response"],
  TQueryKey extends QueryKey = ApiV1ActionsUserGroupsListQueryKey,
>(
  params?: ApiV1ActionsUserGroupsList["queryParams"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1ActionsUserGroupsList["response"], ApiV1ActionsUserGroupsList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1ActionsUserGroupsList["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1ActionsUserGroupsList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1ActionsUserGroupsListQueryKey(params)
  const query = useQuery<ApiV1ActionsUserGroupsList["data"], ApiV1ActionsUserGroupsList["error"], TData, any>({
    ...apiV1ActionsUserGroupsListQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1ActionsUserGroupsList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1ActionsUserGroupsListInfiniteQueryKey = (params?: ApiV1ActionsUserGroupsList["queryParams"]) => [{ url: "/api/v1/actions/user/groups/" }, ...(params ? [params] : [])] as const
export type ApiV1ActionsUserGroupsListInfiniteQueryKey = ReturnType<typeof apiV1ActionsUserGroupsListInfiniteQueryKey>
export function apiV1ActionsUserGroupsListInfiniteQueryOptions<TData = ApiV1ActionsUserGroupsList["response"], TQueryData = ApiV1ActionsUserGroupsList["response"]>(
  params?: ApiV1ActionsUserGroupsList["queryParams"],
  options: ApiV1ActionsUserGroupsList["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1ActionsUserGroupsList["response"], ApiV1ActionsUserGroupsList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1ActionsUserGroupsListInfiniteQueryKey(params)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1ActionsUserGroupsList["data"], ApiV1ActionsUserGroupsList["error"]>({
        method: "get",
        url: `/api/v1/actions/user/groups/`,
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
 * @description Список сообщений **message_type**:* **user_is_blocked**Учетная запись пользователя заблокирована.
 * @summary Получение списка групп логов
 * @link /api/v1/actions/user/groups/ */
export function useApiV1ActionsUserGroupsListInfinite<
  TData = InfiniteData<ApiV1ActionsUserGroupsList["response"]>,
  TQueryData = ApiV1ActionsUserGroupsList["response"],
  TQueryKey extends QueryKey = ApiV1ActionsUserGroupsListInfiniteQueryKey,
>(
  params?: ApiV1ActionsUserGroupsList["queryParams"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1ActionsUserGroupsList["response"], ApiV1ActionsUserGroupsList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1ActionsUserGroupsList["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1ActionsUserGroupsList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1ActionsUserGroupsListInfiniteQueryKey(params)
  const query = useInfiniteQuery<ApiV1ActionsUserGroupsList["data"], ApiV1ActionsUserGroupsList["error"], TData, any>({
    ...apiV1ActionsUserGroupsListInfiniteQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1ActionsUserGroupsList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
