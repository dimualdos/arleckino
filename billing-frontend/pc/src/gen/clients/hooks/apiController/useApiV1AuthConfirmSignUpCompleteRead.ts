import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1AuthConfirmSignUpCompleteReadQueryResponse, ApiV1AuthConfirmSignUpCompleteReadPathParams } from "../../../models/ts/apiController/ApiV1AuthConfirmSignUpCompleteRead"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1AuthConfirmSignUpCompleteReadClient = typeof client<ApiV1AuthConfirmSignUpCompleteReadQueryResponse, never, never>
type ApiV1AuthConfirmSignUpCompleteRead = {
  data: ApiV1AuthConfirmSignUpCompleteReadQueryResponse
  error: never
  request: never
  pathParams: ApiV1AuthConfirmSignUpCompleteReadPathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1AuthConfirmSignUpCompleteReadClient>>
  client: {
    parameters: Partial<Parameters<ApiV1AuthConfirmSignUpCompleteReadClient>[0]>
    return: Awaited<ReturnType<ApiV1AuthConfirmSignUpCompleteReadClient>>
  }
}
export const apiV1AuthConfirmSignUpCompleteReadQueryKey = (key: ApiV1AuthConfirmSignUpCompleteReadPathParams["key"]) =>
  [{ url: "/api/v1/auth/confirm/sign-up-complete/:key/", params: { key: key } }] as const
export type ApiV1AuthConfirmSignUpCompleteReadQueryKey = ReturnType<typeof apiV1AuthConfirmSignUpCompleteReadQueryKey>
export function apiV1AuthConfirmSignUpCompleteReadQueryOptions<TData = ApiV1AuthConfirmSignUpCompleteRead["response"], TQueryData = ApiV1AuthConfirmSignUpCompleteRead["response"]>(
  key: ApiV1AuthConfirmSignUpCompleteReadPathParams["key"],
  options: ApiV1AuthConfirmSignUpCompleteRead["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1AuthConfirmSignUpCompleteRead["response"], ApiV1AuthConfirmSignUpCompleteRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1AuthConfirmSignUpCompleteReadQueryKey(key)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1AuthConfirmSignUpCompleteRead["data"], ApiV1AuthConfirmSignUpCompleteRead["error"]>({
        method: "get",
        url: `/api/v1/auth/confirm/sign-up-complete/${key}/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @link /api/v1/auth/confirm/sign-up-complete/:key/ */
export function useApiV1AuthConfirmSignUpCompleteRead<
  TData = ApiV1AuthConfirmSignUpCompleteRead["response"],
  TQueryData = ApiV1AuthConfirmSignUpCompleteRead["response"],
  TQueryKey extends QueryKey = ApiV1AuthConfirmSignUpCompleteReadQueryKey,
>(
  key: ApiV1AuthConfirmSignUpCompleteReadPathParams["key"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1AuthConfirmSignUpCompleteRead["response"], ApiV1AuthConfirmSignUpCompleteRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1AuthConfirmSignUpCompleteRead["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1AuthConfirmSignUpCompleteRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1AuthConfirmSignUpCompleteReadQueryKey(key)
  const query = useQuery<ApiV1AuthConfirmSignUpCompleteRead["data"], ApiV1AuthConfirmSignUpCompleteRead["error"], TData, any>({
    ...apiV1AuthConfirmSignUpCompleteReadQueryOptions<TData, TQueryData>(key, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1AuthConfirmSignUpCompleteRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1AuthConfirmSignUpCompleteReadInfiniteQueryKey = (key: ApiV1AuthConfirmSignUpCompleteReadPathParams["key"]) =>
  [{ url: "/api/v1/auth/confirm/sign-up-complete/:key/", params: { key: key } }] as const
export type ApiV1AuthConfirmSignUpCompleteReadInfiniteQueryKey = ReturnType<typeof apiV1AuthConfirmSignUpCompleteReadInfiniteQueryKey>
export function apiV1AuthConfirmSignUpCompleteReadInfiniteQueryOptions<TData = ApiV1AuthConfirmSignUpCompleteRead["response"], TQueryData = ApiV1AuthConfirmSignUpCompleteRead["response"]>(
  key: ApiV1AuthConfirmSignUpCompleteReadPathParams["key"],
  options: ApiV1AuthConfirmSignUpCompleteRead["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1AuthConfirmSignUpCompleteRead["response"], ApiV1AuthConfirmSignUpCompleteRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1AuthConfirmSignUpCompleteReadInfiniteQueryKey(key)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1AuthConfirmSignUpCompleteRead["data"], ApiV1AuthConfirmSignUpCompleteRead["error"]>({
        method: "get",
        url: `/api/v1/auth/confirm/sign-up-complete/${key}/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @link /api/v1/auth/confirm/sign-up-complete/:key/ */
export function useApiV1AuthConfirmSignUpCompleteReadInfinite<
  TData = InfiniteData<ApiV1AuthConfirmSignUpCompleteRead["response"]>,
  TQueryData = ApiV1AuthConfirmSignUpCompleteRead["response"],
  TQueryKey extends QueryKey = ApiV1AuthConfirmSignUpCompleteReadInfiniteQueryKey,
>(
  key: ApiV1AuthConfirmSignUpCompleteReadPathParams["key"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1AuthConfirmSignUpCompleteRead["response"], ApiV1AuthConfirmSignUpCompleteRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1AuthConfirmSignUpCompleteRead["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1AuthConfirmSignUpCompleteRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1AuthConfirmSignUpCompleteReadInfiniteQueryKey(key)
  const query = useInfiniteQuery<ApiV1AuthConfirmSignUpCompleteRead["data"], ApiV1AuthConfirmSignUpCompleteRead["error"], TData, any>({
    ...apiV1AuthConfirmSignUpCompleteReadInfiniteQueryOptions<TData, TQueryData>(key, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1AuthConfirmSignUpCompleteRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
