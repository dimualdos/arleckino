import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1UserProfileWithdrawalWalletsListQueryResponse, ApiV1UserProfileWithdrawalWalletsListQueryParams } from "../../../models/ts/apiController/ApiV1UserProfileWithdrawalWalletsList"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1UserProfileWithdrawalWalletsListClient = typeof client<ApiV1UserProfileWithdrawalWalletsListQueryResponse, never, never>
type ApiV1UserProfileWithdrawalWalletsList = {
  data: ApiV1UserProfileWithdrawalWalletsListQueryResponse
  error: never
  request: never
  pathParams: never
  queryParams: ApiV1UserProfileWithdrawalWalletsListQueryParams
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserProfileWithdrawalWalletsListClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserProfileWithdrawalWalletsListClient>[0]>
    return: Awaited<ReturnType<ApiV1UserProfileWithdrawalWalletsListClient>>
  }
}
export const apiV1UserProfileWithdrawalWalletsListQueryKey = (params?: ApiV1UserProfileWithdrawalWalletsList["queryParams"]) =>
  [{ url: "/api/v1/user/profile/withdrawal-wallets" }, ...(params ? [params] : [])] as const
export type ApiV1UserProfileWithdrawalWalletsListQueryKey = ReturnType<typeof apiV1UserProfileWithdrawalWalletsListQueryKey>
export function apiV1UserProfileWithdrawalWalletsListQueryOptions<TData = ApiV1UserProfileWithdrawalWalletsList["response"], TQueryData = ApiV1UserProfileWithdrawalWalletsList["response"]>(
  params?: ApiV1UserProfileWithdrawalWalletsList["queryParams"],
  options: ApiV1UserProfileWithdrawalWalletsList["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1UserProfileWithdrawalWalletsList["response"], ApiV1UserProfileWithdrawalWalletsList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserProfileWithdrawalWalletsListQueryKey(params)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1UserProfileWithdrawalWalletsList["data"], ApiV1UserProfileWithdrawalWalletsList["error"]>({
        method: "get",
        url: `/api/v1/user/profile/withdrawal-wallets`,
        params,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description Список сообщений **message_type**:* **withdrawal_system_not_found_by_id**Система для вывода средств с указанным ID не обнаружена.* **withdrawal_wallet_user_identifier_does_not_match_template**Указанный идентификатор пользователя не соответствует шаблону.* **withdrawal_wallet_user_identifier_already_exists**Указанный идентификатор пользователя уже используется для другого кошелька.* **user_email_not_send_message**Ошибка отправки сообщения на email пользователя.* **db_template_not_found_by_name**Шаблон с указанным именем {name} не обнаружен.
 * @summary Список кошельков пользователя в системах для вывода средств, создание нового кошелька
 * @link /api/v1/user/profile/withdrawal-wallets */
export function useApiV1UserProfileWithdrawalWalletsList<
  TData = ApiV1UserProfileWithdrawalWalletsList["response"],
  TQueryData = ApiV1UserProfileWithdrawalWalletsList["response"],
  TQueryKey extends QueryKey = ApiV1UserProfileWithdrawalWalletsListQueryKey,
>(
  params?: ApiV1UserProfileWithdrawalWalletsList["queryParams"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1UserProfileWithdrawalWalletsList["response"], ApiV1UserProfileWithdrawalWalletsList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserProfileWithdrawalWalletsList["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1UserProfileWithdrawalWalletsList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserProfileWithdrawalWalletsListQueryKey(params)
  const query = useQuery<ApiV1UserProfileWithdrawalWalletsList["data"], ApiV1UserProfileWithdrawalWalletsList["error"], TData, any>({
    ...apiV1UserProfileWithdrawalWalletsListQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1UserProfileWithdrawalWalletsList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1UserProfileWithdrawalWalletsListInfiniteQueryKey = (params?: ApiV1UserProfileWithdrawalWalletsList["queryParams"]) =>
  [{ url: "/api/v1/user/profile/withdrawal-wallets" }, ...(params ? [params] : [])] as const
export type ApiV1UserProfileWithdrawalWalletsListInfiniteQueryKey = ReturnType<typeof apiV1UserProfileWithdrawalWalletsListInfiniteQueryKey>
export function apiV1UserProfileWithdrawalWalletsListInfiniteQueryOptions<TData = ApiV1UserProfileWithdrawalWalletsList["response"], TQueryData = ApiV1UserProfileWithdrawalWalletsList["response"]>(
  params?: ApiV1UserProfileWithdrawalWalletsList["queryParams"],
  options: ApiV1UserProfileWithdrawalWalletsList["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1UserProfileWithdrawalWalletsList["response"], ApiV1UserProfileWithdrawalWalletsList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserProfileWithdrawalWalletsListInfiniteQueryKey(params)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1UserProfileWithdrawalWalletsList["data"], ApiV1UserProfileWithdrawalWalletsList["error"]>({
        method: "get",
        url: `/api/v1/user/profile/withdrawal-wallets`,
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
 * @description Список сообщений **message_type**:* **withdrawal_system_not_found_by_id**Система для вывода средств с указанным ID не обнаружена.* **withdrawal_wallet_user_identifier_does_not_match_template**Указанный идентификатор пользователя не соответствует шаблону.* **withdrawal_wallet_user_identifier_already_exists**Указанный идентификатор пользователя уже используется для другого кошелька.* **user_email_not_send_message**Ошибка отправки сообщения на email пользователя.* **db_template_not_found_by_name**Шаблон с указанным именем {name} не обнаружен.
 * @summary Список кошельков пользователя в системах для вывода средств, создание нового кошелька
 * @link /api/v1/user/profile/withdrawal-wallets */
export function useApiV1UserProfileWithdrawalWalletsListInfinite<
  TData = InfiniteData<ApiV1UserProfileWithdrawalWalletsList["response"]>,
  TQueryData = ApiV1UserProfileWithdrawalWalletsList["response"],
  TQueryKey extends QueryKey = ApiV1UserProfileWithdrawalWalletsListInfiniteQueryKey,
>(
  params?: ApiV1UserProfileWithdrawalWalletsList["queryParams"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1UserProfileWithdrawalWalletsList["response"], ApiV1UserProfileWithdrawalWalletsList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserProfileWithdrawalWalletsList["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1UserProfileWithdrawalWalletsList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserProfileWithdrawalWalletsListInfiniteQueryKey(params)
  const query = useInfiniteQuery<ApiV1UserProfileWithdrawalWalletsList["data"], ApiV1UserProfileWithdrawalWalletsList["error"], TData, any>({
    ...apiV1UserProfileWithdrawalWalletsListInfiniteQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1UserProfileWithdrawalWalletsList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
