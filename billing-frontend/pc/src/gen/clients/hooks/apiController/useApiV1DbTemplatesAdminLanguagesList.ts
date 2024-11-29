import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1DbTemplatesAdminLanguagesListQueryResponse, ApiV1DbTemplatesAdminLanguagesListQueryParams } from "../../../models/ts/apiController/ApiV1DbTemplatesAdminLanguagesList"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1DbTemplatesAdminLanguagesListClient = typeof client<ApiV1DbTemplatesAdminLanguagesListQueryResponse, never, never>
type ApiV1DbTemplatesAdminLanguagesList = {
  data: ApiV1DbTemplatesAdminLanguagesListQueryResponse
  error: never
  request: never
  pathParams: never
  queryParams: ApiV1DbTemplatesAdminLanguagesListQueryParams
  headerParams: never
  response: Awaited<ReturnType<ApiV1DbTemplatesAdminLanguagesListClient>>
  client: {
    parameters: Partial<Parameters<ApiV1DbTemplatesAdminLanguagesListClient>[0]>
    return: Awaited<ReturnType<ApiV1DbTemplatesAdminLanguagesListClient>>
  }
}
export const apiV1DbTemplatesAdminLanguagesListQueryKey = (params?: ApiV1DbTemplatesAdminLanguagesList["queryParams"]) =>
  [{ url: "/api/v1/db_templates/admin/languages/" }, ...(params ? [params] : [])] as const
export type ApiV1DbTemplatesAdminLanguagesListQueryKey = ReturnType<typeof apiV1DbTemplatesAdminLanguagesListQueryKey>
export function apiV1DbTemplatesAdminLanguagesListQueryOptions<TData = ApiV1DbTemplatesAdminLanguagesList["response"], TQueryData = ApiV1DbTemplatesAdminLanguagesList["response"]>(
  params?: ApiV1DbTemplatesAdminLanguagesList["queryParams"],
  options: ApiV1DbTemplatesAdminLanguagesList["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1DbTemplatesAdminLanguagesList["response"], ApiV1DbTemplatesAdminLanguagesList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1DbTemplatesAdminLanguagesListQueryKey(params)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1DbTemplatesAdminLanguagesList["data"], ApiV1DbTemplatesAdminLanguagesList["error"]>({
        method: "get",
        url: `/api/v1/db_templates/admin/languages/`,
        params,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description .
 * @summary Список языков для шаблонов
 * @link /api/v1/db_templates/admin/languages/ */
export function useApiV1DbTemplatesAdminLanguagesList<
  TData = ApiV1DbTemplatesAdminLanguagesList["response"],
  TQueryData = ApiV1DbTemplatesAdminLanguagesList["response"],
  TQueryKey extends QueryKey = ApiV1DbTemplatesAdminLanguagesListQueryKey,
>(
  params?: ApiV1DbTemplatesAdminLanguagesList["queryParams"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1DbTemplatesAdminLanguagesList["response"], ApiV1DbTemplatesAdminLanguagesList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1DbTemplatesAdminLanguagesList["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1DbTemplatesAdminLanguagesList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1DbTemplatesAdminLanguagesListQueryKey(params)
  const query = useQuery<ApiV1DbTemplatesAdminLanguagesList["data"], ApiV1DbTemplatesAdminLanguagesList["error"], TData, any>({
    ...apiV1DbTemplatesAdminLanguagesListQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1DbTemplatesAdminLanguagesList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1DbTemplatesAdminLanguagesListInfiniteQueryKey = (params?: ApiV1DbTemplatesAdminLanguagesList["queryParams"]) =>
  [{ url: "/api/v1/db_templates/admin/languages/" }, ...(params ? [params] : [])] as const
export type ApiV1DbTemplatesAdminLanguagesListInfiniteQueryKey = ReturnType<typeof apiV1DbTemplatesAdminLanguagesListInfiniteQueryKey>
export function apiV1DbTemplatesAdminLanguagesListInfiniteQueryOptions<TData = ApiV1DbTemplatesAdminLanguagesList["response"], TQueryData = ApiV1DbTemplatesAdminLanguagesList["response"]>(
  params?: ApiV1DbTemplatesAdminLanguagesList["queryParams"],
  options: ApiV1DbTemplatesAdminLanguagesList["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1DbTemplatesAdminLanguagesList["response"], ApiV1DbTemplatesAdminLanguagesList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1DbTemplatesAdminLanguagesListInfiniteQueryKey(params)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1DbTemplatesAdminLanguagesList["data"], ApiV1DbTemplatesAdminLanguagesList["error"]>({
        method: "get",
        url: `/api/v1/db_templates/admin/languages/`,
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
 * @summary Список языков для шаблонов
 * @link /api/v1/db_templates/admin/languages/ */
export function useApiV1DbTemplatesAdminLanguagesListInfinite<
  TData = InfiniteData<ApiV1DbTemplatesAdminLanguagesList["response"]>,
  TQueryData = ApiV1DbTemplatesAdminLanguagesList["response"],
  TQueryKey extends QueryKey = ApiV1DbTemplatesAdminLanguagesListInfiniteQueryKey,
>(
  params?: ApiV1DbTemplatesAdminLanguagesList["queryParams"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1DbTemplatesAdminLanguagesList["response"], ApiV1DbTemplatesAdminLanguagesList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1DbTemplatesAdminLanguagesList["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1DbTemplatesAdminLanguagesList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1DbTemplatesAdminLanguagesListInfiniteQueryKey(params)
  const query = useInfiniteQuery<ApiV1DbTemplatesAdminLanguagesList["data"], ApiV1DbTemplatesAdminLanguagesList["error"], TData, any>({
    ...apiV1DbTemplatesAdminLanguagesListInfiniteQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1DbTemplatesAdminLanguagesList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
