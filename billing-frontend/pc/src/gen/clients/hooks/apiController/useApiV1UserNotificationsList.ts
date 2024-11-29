import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1UserNotificationsListQueryResponse } from "../../../models/ts/apiController/ApiV1UserNotificationsList"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1UserNotificationsListClient = typeof client<ApiV1UserNotificationsListQueryResponse, never, never>
type ApiV1UserNotificationsList = {
  data: ApiV1UserNotificationsListQueryResponse
  error: never
  request: never
  pathParams: never
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserNotificationsListClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserNotificationsListClient>[0]>
    return: Awaited<ReturnType<ApiV1UserNotificationsListClient>>
  }
}
export const apiV1UserNotificationsListQueryKey = () => [{ url: "/api/v1/user/notifications/" }] as const
export type ApiV1UserNotificationsListQueryKey = ReturnType<typeof apiV1UserNotificationsListQueryKey>
export function apiV1UserNotificationsListQueryOptions<TData = ApiV1UserNotificationsList["response"], TQueryData = ApiV1UserNotificationsList["response"]>(
  options: ApiV1UserNotificationsList["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1UserNotificationsList["response"], ApiV1UserNotificationsList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserNotificationsListQueryKey()
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1UserNotificationsList["data"], ApiV1UserNotificationsList["error"]>({
        method: "get",
        url: `/api/v1/user/notifications/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description .
 * @summary Список активных общих уведомлений для пользователя
 * @link /api/v1/user/notifications/ */
export function useApiV1UserNotificationsList<
  TData = ApiV1UserNotificationsList["response"],
  TQueryData = ApiV1UserNotificationsList["response"],
  TQueryKey extends QueryKey = ApiV1UserNotificationsListQueryKey,
>(
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1UserNotificationsList["response"], ApiV1UserNotificationsList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserNotificationsList["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1UserNotificationsList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserNotificationsListQueryKey()
  const query = useQuery<ApiV1UserNotificationsList["data"], ApiV1UserNotificationsList["error"], TData, any>({
    ...apiV1UserNotificationsListQueryOptions<TData, TQueryData>(clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1UserNotificationsList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1UserNotificationsListInfiniteQueryKey = () => [{ url: "/api/v1/user/notifications/" }] as const
export type ApiV1UserNotificationsListInfiniteQueryKey = ReturnType<typeof apiV1UserNotificationsListInfiniteQueryKey>
export function apiV1UserNotificationsListInfiniteQueryOptions<TData = ApiV1UserNotificationsList["response"], TQueryData = ApiV1UserNotificationsList["response"]>(
  options: ApiV1UserNotificationsList["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1UserNotificationsList["response"], ApiV1UserNotificationsList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserNotificationsListInfiniteQueryKey()
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1UserNotificationsList["data"], ApiV1UserNotificationsList["error"]>({
        method: "get",
        url: `/api/v1/user/notifications/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description .
 * @summary Список активных общих уведомлений для пользователя
 * @link /api/v1/user/notifications/ */
export function useApiV1UserNotificationsListInfinite<
  TData = InfiniteData<ApiV1UserNotificationsList["response"]>,
  TQueryData = ApiV1UserNotificationsList["response"],
  TQueryKey extends QueryKey = ApiV1UserNotificationsListInfiniteQueryKey,
>(
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1UserNotificationsList["response"], ApiV1UserNotificationsList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserNotificationsList["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1UserNotificationsList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserNotificationsListInfiniteQueryKey()
  const query = useInfiniteQuery<ApiV1UserNotificationsList["data"], ApiV1UserNotificationsList["error"], TData, any>({
    ...apiV1UserNotificationsListInfiniteQueryOptions<TData, TQueryData>(clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1UserNotificationsList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
