import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1UserProfileWithdrawalWalletsReadQueryResponse, ApiV1UserProfileWithdrawalWalletsReadPathParams } from "../../../models/ts/apiController/ApiV1UserProfileWithdrawalWalletsRead"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1UserProfileWithdrawalWalletsReadClient = typeof client<ApiV1UserProfileWithdrawalWalletsReadQueryResponse, never, never>
type ApiV1UserProfileWithdrawalWalletsRead = {
  data: ApiV1UserProfileWithdrawalWalletsReadQueryResponse
  error: never
  request: never
  pathParams: ApiV1UserProfileWithdrawalWalletsReadPathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserProfileWithdrawalWalletsReadClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserProfileWithdrawalWalletsReadClient>[0]>
    return: Awaited<ReturnType<ApiV1UserProfileWithdrawalWalletsReadClient>>
  }
}
export const apiV1UserProfileWithdrawalWalletsReadQueryKey = (id: ApiV1UserProfileWithdrawalWalletsReadPathParams["id"]) =>
  [{ url: "/api/v1/user/profile/withdrawal-wallets/:id", params: { id: id } }] as const
export type ApiV1UserProfileWithdrawalWalletsReadQueryKey = ReturnType<typeof apiV1UserProfileWithdrawalWalletsReadQueryKey>
export function apiV1UserProfileWithdrawalWalletsReadQueryOptions<TData = ApiV1UserProfileWithdrawalWalletsRead["response"], TQueryData = ApiV1UserProfileWithdrawalWalletsRead["response"]>(
  id: ApiV1UserProfileWithdrawalWalletsReadPathParams["id"],
  options: ApiV1UserProfileWithdrawalWalletsRead["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1UserProfileWithdrawalWalletsRead["response"], ApiV1UserProfileWithdrawalWalletsRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserProfileWithdrawalWalletsReadQueryKey(id)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1UserProfileWithdrawalWalletsRead["data"], ApiV1UserProfileWithdrawalWalletsRead["error"]>({
        method: "get",
        url: `/api/v1/user/profile/withdrawal-wallets/${id}`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description Список сообщений **message_type**:* **withdrawal_system_not_found_by_id**Система для вывода средств с указанным ID не обнаружена.* **withdrawal_wallet_user_identifier_does_not_match_template**Указанный идентификатор пользователя не соответствует шаблону.* **withdrawal_wallet_user_identifier_already_exists**Указанный идентификатор пользователя уже используется для другого кошелька.* **user_email_not_send_message**Ошибка отправки сообщения на email пользователя.* **db_template_not_found_by_name**Шаблон с указанным именем {name} не обнаружен.
 * @summary Просмотр, изменение и удаление кошелька в системе для вывода средств
 * @link /api/v1/user/profile/withdrawal-wallets/:id */
export function useApiV1UserProfileWithdrawalWalletsRead<
  TData = ApiV1UserProfileWithdrawalWalletsRead["response"],
  TQueryData = ApiV1UserProfileWithdrawalWalletsRead["response"],
  TQueryKey extends QueryKey = ApiV1UserProfileWithdrawalWalletsReadQueryKey,
>(
  id: ApiV1UserProfileWithdrawalWalletsReadPathParams["id"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1UserProfileWithdrawalWalletsRead["response"], ApiV1UserProfileWithdrawalWalletsRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserProfileWithdrawalWalletsRead["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1UserProfileWithdrawalWalletsRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserProfileWithdrawalWalletsReadQueryKey(id)
  const query = useQuery<ApiV1UserProfileWithdrawalWalletsRead["data"], ApiV1UserProfileWithdrawalWalletsRead["error"], TData, any>({
    ...apiV1UserProfileWithdrawalWalletsReadQueryOptions<TData, TQueryData>(id, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1UserProfileWithdrawalWalletsRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1UserProfileWithdrawalWalletsReadInfiniteQueryKey = (id: ApiV1UserProfileWithdrawalWalletsReadPathParams["id"]) =>
  [{ url: "/api/v1/user/profile/withdrawal-wallets/:id", params: { id: id } }] as const
export type ApiV1UserProfileWithdrawalWalletsReadInfiniteQueryKey = ReturnType<typeof apiV1UserProfileWithdrawalWalletsReadInfiniteQueryKey>
export function apiV1UserProfileWithdrawalWalletsReadInfiniteQueryOptions<TData = ApiV1UserProfileWithdrawalWalletsRead["response"], TQueryData = ApiV1UserProfileWithdrawalWalletsRead["response"]>(
  id: ApiV1UserProfileWithdrawalWalletsReadPathParams["id"],
  options: ApiV1UserProfileWithdrawalWalletsRead["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1UserProfileWithdrawalWalletsRead["response"], ApiV1UserProfileWithdrawalWalletsRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserProfileWithdrawalWalletsReadInfiniteQueryKey(id)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1UserProfileWithdrawalWalletsRead["data"], ApiV1UserProfileWithdrawalWalletsRead["error"]>({
        method: "get",
        url: `/api/v1/user/profile/withdrawal-wallets/${id}`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description Список сообщений **message_type**:* **withdrawal_system_not_found_by_id**Система для вывода средств с указанным ID не обнаружена.* **withdrawal_wallet_user_identifier_does_not_match_template**Указанный идентификатор пользователя не соответствует шаблону.* **withdrawal_wallet_user_identifier_already_exists**Указанный идентификатор пользователя уже используется для другого кошелька.* **user_email_not_send_message**Ошибка отправки сообщения на email пользователя.* **db_template_not_found_by_name**Шаблон с указанным именем {name} не обнаружен.
 * @summary Просмотр, изменение и удаление кошелька в системе для вывода средств
 * @link /api/v1/user/profile/withdrawal-wallets/:id */
export function useApiV1UserProfileWithdrawalWalletsReadInfinite<
  TData = InfiniteData<ApiV1UserProfileWithdrawalWalletsRead["response"]>,
  TQueryData = ApiV1UserProfileWithdrawalWalletsRead["response"],
  TQueryKey extends QueryKey = ApiV1UserProfileWithdrawalWalletsReadInfiniteQueryKey,
>(
  id: ApiV1UserProfileWithdrawalWalletsReadPathParams["id"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1UserProfileWithdrawalWalletsRead["response"], ApiV1UserProfileWithdrawalWalletsRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserProfileWithdrawalWalletsRead["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1UserProfileWithdrawalWalletsRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserProfileWithdrawalWalletsReadInfiniteQueryKey(id)
  const query = useInfiniteQuery<ApiV1UserProfileWithdrawalWalletsRead["data"], ApiV1UserProfileWithdrawalWalletsRead["error"], TData, any>({
    ...apiV1UserProfileWithdrawalWalletsReadInfiniteQueryOptions<TData, TQueryData>(id, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1UserProfileWithdrawalWalletsRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
