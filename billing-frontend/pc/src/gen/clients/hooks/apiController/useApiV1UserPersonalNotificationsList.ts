import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1UserPersonalNotificationsListQueryResponse } from "../../../models/ts/apiController/ApiV1UserPersonalNotificationsList"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1UserPersonalNotificationsListClient = typeof client<ApiV1UserPersonalNotificationsListQueryResponse, never, never>
type ApiV1UserPersonalNotificationsList = {
  data: ApiV1UserPersonalNotificationsListQueryResponse
  error: never
  request: never
  pathParams: never
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserPersonalNotificationsListClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserPersonalNotificationsListClient>[0]>
    return: Awaited<ReturnType<ApiV1UserPersonalNotificationsListClient>>
  }
}
export const apiV1UserPersonalNotificationsListQueryKey = () => [{ url: "/api/v1/user/personal-notifications/" }] as const
export type ApiV1UserPersonalNotificationsListQueryKey = ReturnType<typeof apiV1UserPersonalNotificationsListQueryKey>
export function apiV1UserPersonalNotificationsListQueryOptions<TData = ApiV1UserPersonalNotificationsList["response"], TQueryData = ApiV1UserPersonalNotificationsList["response"]>(
  options: ApiV1UserPersonalNotificationsList["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1UserPersonalNotificationsList["response"], ApiV1UserPersonalNotificationsList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserPersonalNotificationsListQueryKey()
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1UserPersonalNotificationsList["data"], ApiV1UserPersonalNotificationsList["error"]>({
        method: "get",
        url: `/api/v1/user/personal-notifications/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description .
 * @summary Список активных персональных уведомлений для пользователя
 * @link /api/v1/user/personal-notifications/ */
export function useApiV1UserPersonalNotificationsList<
  TData = ApiV1UserPersonalNotificationsList["response"],
  TQueryData = ApiV1UserPersonalNotificationsList["response"],
  TQueryKey extends QueryKey = ApiV1UserPersonalNotificationsListQueryKey,
>(
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1UserPersonalNotificationsList["response"], ApiV1UserPersonalNotificationsList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserPersonalNotificationsList["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1UserPersonalNotificationsList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserPersonalNotificationsListQueryKey()
  const query = useQuery<ApiV1UserPersonalNotificationsList["data"], ApiV1UserPersonalNotificationsList["error"], TData, any>({
    ...apiV1UserPersonalNotificationsListQueryOptions<TData, TQueryData>(clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1UserPersonalNotificationsList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1UserPersonalNotificationsListInfiniteQueryKey = () => [{ url: "/api/v1/user/personal-notifications/" }] as const
export type ApiV1UserPersonalNotificationsListInfiniteQueryKey = ReturnType<typeof apiV1UserPersonalNotificationsListInfiniteQueryKey>
export function apiV1UserPersonalNotificationsListInfiniteQueryOptions<TData = ApiV1UserPersonalNotificationsList["response"], TQueryData = ApiV1UserPersonalNotificationsList["response"]>(
  options: ApiV1UserPersonalNotificationsList["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1UserPersonalNotificationsList["response"], ApiV1UserPersonalNotificationsList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserPersonalNotificationsListInfiniteQueryKey()
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1UserPersonalNotificationsList["data"], ApiV1UserPersonalNotificationsList["error"]>({
        method: "get",
        url: `/api/v1/user/personal-notifications/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description .
 * @summary Список активных персональных уведомлений для пользователя
 * @link /api/v1/user/personal-notifications/ */
export function useApiV1UserPersonalNotificationsListInfinite<
  TData = InfiniteData<ApiV1UserPersonalNotificationsList["response"]>,
  TQueryData = ApiV1UserPersonalNotificationsList["response"],
  TQueryKey extends QueryKey = ApiV1UserPersonalNotificationsListInfiniteQueryKey,
>(
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1UserPersonalNotificationsList["response"], ApiV1UserPersonalNotificationsList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserPersonalNotificationsList["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1UserPersonalNotificationsList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserPersonalNotificationsListInfiniteQueryKey()
  const query = useInfiniteQuery<ApiV1UserPersonalNotificationsList["data"], ApiV1UserPersonalNotificationsList["error"], TData, any>({
    ...apiV1UserPersonalNotificationsListInfiniteQueryOptions<TData, TQueryData>(clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1UserPersonalNotificationsList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
