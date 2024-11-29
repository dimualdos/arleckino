import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1DbTemplatesLanguagesListQueryResponse } from "../../../models/ts/apiController/ApiV1DbTemplatesLanguagesList"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1DbTemplatesLanguagesListClient = typeof client<ApiV1DbTemplatesLanguagesListQueryResponse, never, never>
type ApiV1DbTemplatesLanguagesList = {
  data: ApiV1DbTemplatesLanguagesListQueryResponse
  error: never
  request: never
  pathParams: never
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1DbTemplatesLanguagesListClient>>
  client: {
    parameters: Partial<Parameters<ApiV1DbTemplatesLanguagesListClient>[0]>
    return: Awaited<ReturnType<ApiV1DbTemplatesLanguagesListClient>>
  }
}
export const apiV1DbTemplatesLanguagesListQueryKey = () => [{ url: "/api/v1/db_templates/languages/" }] as const
export type ApiV1DbTemplatesLanguagesListQueryKey = ReturnType<typeof apiV1DbTemplatesLanguagesListQueryKey>
export function apiV1DbTemplatesLanguagesListQueryOptions<TData = ApiV1DbTemplatesLanguagesList["response"], TQueryData = ApiV1DbTemplatesLanguagesList["response"]>(
  options: ApiV1DbTemplatesLanguagesList["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1DbTemplatesLanguagesList["response"], ApiV1DbTemplatesLanguagesList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1DbTemplatesLanguagesListQueryKey()
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1DbTemplatesLanguagesList["data"], ApiV1DbTemplatesLanguagesList["error"]>({
        method: "get",
        url: `/api/v1/db_templates/languages/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description .
 * @summary Список языков для шаблонов
 * @link /api/v1/db_templates/languages/ */
export function useApiV1DbTemplatesLanguagesList<
  TData = ApiV1DbTemplatesLanguagesList["response"],
  TQueryData = ApiV1DbTemplatesLanguagesList["response"],
  TQueryKey extends QueryKey = ApiV1DbTemplatesLanguagesListQueryKey,
>(
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1DbTemplatesLanguagesList["response"], ApiV1DbTemplatesLanguagesList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1DbTemplatesLanguagesList["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1DbTemplatesLanguagesList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1DbTemplatesLanguagesListQueryKey()
  const query = useQuery<ApiV1DbTemplatesLanguagesList["data"], ApiV1DbTemplatesLanguagesList["error"], TData, any>({
    ...apiV1DbTemplatesLanguagesListQueryOptions<TData, TQueryData>(clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1DbTemplatesLanguagesList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1DbTemplatesLanguagesListInfiniteQueryKey = () => [{ url: "/api/v1/db_templates/languages/" }] as const
export type ApiV1DbTemplatesLanguagesListInfiniteQueryKey = ReturnType<typeof apiV1DbTemplatesLanguagesListInfiniteQueryKey>
export function apiV1DbTemplatesLanguagesListInfiniteQueryOptions<TData = ApiV1DbTemplatesLanguagesList["response"], TQueryData = ApiV1DbTemplatesLanguagesList["response"]>(
  options: ApiV1DbTemplatesLanguagesList["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1DbTemplatesLanguagesList["response"], ApiV1DbTemplatesLanguagesList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1DbTemplatesLanguagesListInfiniteQueryKey()
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1DbTemplatesLanguagesList["data"], ApiV1DbTemplatesLanguagesList["error"]>({
        method: "get",
        url: `/api/v1/db_templates/languages/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description .
 * @summary Список языков для шаблонов
 * @link /api/v1/db_templates/languages/ */
export function useApiV1DbTemplatesLanguagesListInfinite<
  TData = InfiniteData<ApiV1DbTemplatesLanguagesList["response"]>,
  TQueryData = ApiV1DbTemplatesLanguagesList["response"],
  TQueryKey extends QueryKey = ApiV1DbTemplatesLanguagesListInfiniteQueryKey,
>(
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1DbTemplatesLanguagesList["response"], ApiV1DbTemplatesLanguagesList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1DbTemplatesLanguagesList["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1DbTemplatesLanguagesList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1DbTemplatesLanguagesListInfiniteQueryKey()
  const query = useInfiniteQuery<ApiV1DbTemplatesLanguagesList["data"], ApiV1DbTemplatesLanguagesList["error"], TData, any>({
    ...apiV1DbTemplatesLanguagesListInfiniteQueryOptions<TData, TQueryData>(clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1DbTemplatesLanguagesList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
