import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1HelpdeskCasesUnreadMessageReadQueryResponse } from "../../../models/ts/apiController/ApiV1HelpdeskCasesUnreadMessageRead"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1HelpdeskCasesUnreadMessageReadClient = typeof client<ApiV1HelpdeskCasesUnreadMessageReadQueryResponse, never, never>
type ApiV1HelpdeskCasesUnreadMessageRead = {
  data: ApiV1HelpdeskCasesUnreadMessageReadQueryResponse
  error: never
  request: never
  pathParams: never
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1HelpdeskCasesUnreadMessageReadClient>>
  client: {
    parameters: Partial<Parameters<ApiV1HelpdeskCasesUnreadMessageReadClient>[0]>
    return: Awaited<ReturnType<ApiV1HelpdeskCasesUnreadMessageReadClient>>
  }
}
export const apiV1HelpdeskCasesUnreadMessageReadQueryKey = () => [{ url: "/api/v1/helpdesk/cases/unread-message/" }] as const
export type ApiV1HelpdeskCasesUnreadMessageReadQueryKey = ReturnType<typeof apiV1HelpdeskCasesUnreadMessageReadQueryKey>
export function apiV1HelpdeskCasesUnreadMessageReadQueryOptions<TData = ApiV1HelpdeskCasesUnreadMessageRead["response"], TQueryData = ApiV1HelpdeskCasesUnreadMessageRead["response"]>(
  options: ApiV1HelpdeskCasesUnreadMessageRead["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1HelpdeskCasesUnreadMessageRead["response"], ApiV1HelpdeskCasesUnreadMessageRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1HelpdeskCasesUnreadMessageReadQueryKey()
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1HelpdeskCasesUnreadMessageRead["data"], ApiV1HelpdeskCasesUnreadMessageRead["error"]>({
        method: "get",
        url: `/api/v1/helpdesk/cases/unread-message/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description .
 * @summary Количество обращений с непрочитанными сообщениями.
 * @link /api/v1/helpdesk/cases/unread-message/ */
export function useApiV1HelpdeskCasesUnreadMessageRead<
  TData = ApiV1HelpdeskCasesUnreadMessageRead["response"],
  TQueryData = ApiV1HelpdeskCasesUnreadMessageRead["response"],
  TQueryKey extends QueryKey = ApiV1HelpdeskCasesUnreadMessageReadQueryKey,
>(
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1HelpdeskCasesUnreadMessageRead["response"], ApiV1HelpdeskCasesUnreadMessageRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1HelpdeskCasesUnreadMessageRead["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1HelpdeskCasesUnreadMessageRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1HelpdeskCasesUnreadMessageReadQueryKey()
  const query = useQuery<ApiV1HelpdeskCasesUnreadMessageRead["data"], ApiV1HelpdeskCasesUnreadMessageRead["error"], TData, any>({
    ...apiV1HelpdeskCasesUnreadMessageReadQueryOptions<TData, TQueryData>(clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1HelpdeskCasesUnreadMessageRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1HelpdeskCasesUnreadMessageReadInfiniteQueryKey = () => [{ url: "/api/v1/helpdesk/cases/unread-message/" }] as const
export type ApiV1HelpdeskCasesUnreadMessageReadInfiniteQueryKey = ReturnType<typeof apiV1HelpdeskCasesUnreadMessageReadInfiniteQueryKey>
export function apiV1HelpdeskCasesUnreadMessageReadInfiniteQueryOptions<TData = ApiV1HelpdeskCasesUnreadMessageRead["response"], TQueryData = ApiV1HelpdeskCasesUnreadMessageRead["response"]>(
  options: ApiV1HelpdeskCasesUnreadMessageRead["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1HelpdeskCasesUnreadMessageRead["response"], ApiV1HelpdeskCasesUnreadMessageRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1HelpdeskCasesUnreadMessageReadInfiniteQueryKey()
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1HelpdeskCasesUnreadMessageRead["data"], ApiV1HelpdeskCasesUnreadMessageRead["error"]>({
        method: "get",
        url: `/api/v1/helpdesk/cases/unread-message/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description .
 * @summary Количество обращений с непрочитанными сообщениями.
 * @link /api/v1/helpdesk/cases/unread-message/ */
export function useApiV1HelpdeskCasesUnreadMessageReadInfinite<
  TData = InfiniteData<ApiV1HelpdeskCasesUnreadMessageRead["response"]>,
  TQueryData = ApiV1HelpdeskCasesUnreadMessageRead["response"],
  TQueryKey extends QueryKey = ApiV1HelpdeskCasesUnreadMessageReadInfiniteQueryKey,
>(
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1HelpdeskCasesUnreadMessageRead["response"], ApiV1HelpdeskCasesUnreadMessageRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1HelpdeskCasesUnreadMessageRead["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1HelpdeskCasesUnreadMessageRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1HelpdeskCasesUnreadMessageReadInfiniteQueryKey()
  const query = useInfiniteQuery<ApiV1HelpdeskCasesUnreadMessageRead["data"], ApiV1HelpdeskCasesUnreadMessageRead["error"], TData, any>({
    ...apiV1HelpdeskCasesUnreadMessageReadInfiniteQueryOptions<TData, TQueryData>(clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1HelpdeskCasesUnreadMessageRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
