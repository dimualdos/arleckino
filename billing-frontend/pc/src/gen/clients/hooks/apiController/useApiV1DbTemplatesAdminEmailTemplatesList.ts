import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1DbTemplatesAdminEmailTemplatesListQueryResponse, ApiV1DbTemplatesAdminEmailTemplatesListQueryParams } from "../../../models/ts/apiController/ApiV1DbTemplatesAdminEmailTemplatesList"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1DbTemplatesAdminEmailTemplatesListClient = typeof client<ApiV1DbTemplatesAdminEmailTemplatesListQueryResponse, never, never>
type ApiV1DbTemplatesAdminEmailTemplatesList = {
  data: ApiV1DbTemplatesAdminEmailTemplatesListQueryResponse
  error: never
  request: never
  pathParams: never
  queryParams: ApiV1DbTemplatesAdminEmailTemplatesListQueryParams
  headerParams: never
  response: Awaited<ReturnType<ApiV1DbTemplatesAdminEmailTemplatesListClient>>
  client: {
    parameters: Partial<Parameters<ApiV1DbTemplatesAdminEmailTemplatesListClient>[0]>
    return: Awaited<ReturnType<ApiV1DbTemplatesAdminEmailTemplatesListClient>>
  }
}
export const apiV1DbTemplatesAdminEmailTemplatesListQueryKey = (params?: ApiV1DbTemplatesAdminEmailTemplatesList["queryParams"]) =>
  [{ url: "/api/v1/db_templates/admin/email-templates/" }, ...(params ? [params] : [])] as const
export type ApiV1DbTemplatesAdminEmailTemplatesListQueryKey = ReturnType<typeof apiV1DbTemplatesAdminEmailTemplatesListQueryKey>
export function apiV1DbTemplatesAdminEmailTemplatesListQueryOptions<TData = ApiV1DbTemplatesAdminEmailTemplatesList["response"], TQueryData = ApiV1DbTemplatesAdminEmailTemplatesList["response"]>(
  params?: ApiV1DbTemplatesAdminEmailTemplatesList["queryParams"],
  options: ApiV1DbTemplatesAdminEmailTemplatesList["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1DbTemplatesAdminEmailTemplatesList["response"], ApiV1DbTemplatesAdminEmailTemplatesList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1DbTemplatesAdminEmailTemplatesListQueryKey(params)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1DbTemplatesAdminEmailTemplatesList["data"], ApiV1DbTemplatesAdminEmailTemplatesList["error"]>({
        method: "get",
        url: `/api/v1/db_templates/admin/email-templates/`,
        params,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description .
 * @summary Список шаблонов email, создание нового шаблона
 * @link /api/v1/db_templates/admin/email-templates/ */
export function useApiV1DbTemplatesAdminEmailTemplatesList<
  TData = ApiV1DbTemplatesAdminEmailTemplatesList["response"],
  TQueryData = ApiV1DbTemplatesAdminEmailTemplatesList["response"],
  TQueryKey extends QueryKey = ApiV1DbTemplatesAdminEmailTemplatesListQueryKey,
>(
  params?: ApiV1DbTemplatesAdminEmailTemplatesList["queryParams"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1DbTemplatesAdminEmailTemplatesList["response"], ApiV1DbTemplatesAdminEmailTemplatesList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1DbTemplatesAdminEmailTemplatesList["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1DbTemplatesAdminEmailTemplatesList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1DbTemplatesAdminEmailTemplatesListQueryKey(params)
  const query = useQuery<ApiV1DbTemplatesAdminEmailTemplatesList["data"], ApiV1DbTemplatesAdminEmailTemplatesList["error"], TData, any>({
    ...apiV1DbTemplatesAdminEmailTemplatesListQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1DbTemplatesAdminEmailTemplatesList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1DbTemplatesAdminEmailTemplatesListInfiniteQueryKey = (params?: ApiV1DbTemplatesAdminEmailTemplatesList["queryParams"]) =>
  [{ url: "/api/v1/db_templates/admin/email-templates/" }, ...(params ? [params] : [])] as const
export type ApiV1DbTemplatesAdminEmailTemplatesListInfiniteQueryKey = ReturnType<typeof apiV1DbTemplatesAdminEmailTemplatesListInfiniteQueryKey>
export function apiV1DbTemplatesAdminEmailTemplatesListInfiniteQueryOptions<
  TData = ApiV1DbTemplatesAdminEmailTemplatesList["response"],
  TQueryData = ApiV1DbTemplatesAdminEmailTemplatesList["response"],
>(
  params?: ApiV1DbTemplatesAdminEmailTemplatesList["queryParams"],
  options: ApiV1DbTemplatesAdminEmailTemplatesList["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1DbTemplatesAdminEmailTemplatesList["response"], ApiV1DbTemplatesAdminEmailTemplatesList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1DbTemplatesAdminEmailTemplatesListInfiniteQueryKey(params)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1DbTemplatesAdminEmailTemplatesList["data"], ApiV1DbTemplatesAdminEmailTemplatesList["error"]>({
        method: "get",
        url: `/api/v1/db_templates/admin/email-templates/`,
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
 * @summary Список шаблонов email, создание нового шаблона
 * @link /api/v1/db_templates/admin/email-templates/ */
export function useApiV1DbTemplatesAdminEmailTemplatesListInfinite<
  TData = InfiniteData<ApiV1DbTemplatesAdminEmailTemplatesList["response"]>,
  TQueryData = ApiV1DbTemplatesAdminEmailTemplatesList["response"],
  TQueryKey extends QueryKey = ApiV1DbTemplatesAdminEmailTemplatesListInfiniteQueryKey,
>(
  params?: ApiV1DbTemplatesAdminEmailTemplatesList["queryParams"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1DbTemplatesAdminEmailTemplatesList["response"], ApiV1DbTemplatesAdminEmailTemplatesList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1DbTemplatesAdminEmailTemplatesList["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1DbTemplatesAdminEmailTemplatesList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1DbTemplatesAdminEmailTemplatesListInfiniteQueryKey(params)
  const query = useInfiniteQuery<ApiV1DbTemplatesAdminEmailTemplatesList["data"], ApiV1DbTemplatesAdminEmailTemplatesList["error"], TData, any>({
    ...apiV1DbTemplatesAdminEmailTemplatesListInfiniteQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1DbTemplatesAdminEmailTemplatesList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
