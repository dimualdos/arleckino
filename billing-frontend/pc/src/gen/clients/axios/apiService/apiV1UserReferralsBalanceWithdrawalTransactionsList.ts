import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1UserReferralsBalanceWithdrawalTransactionsListQueryResponse,
  ApiV1UserReferralsBalanceWithdrawalTransactionsListQueryParams,
} from "../../../models/ts/apiController/ApiV1UserReferralsBalanceWithdrawalTransactionsList"

/**
 * @description Список сообщений **message_type**:* **not_enough_money**Недостаточно средств на балансе реферального счета.* **amount_must_be_positive**Сумма должна быть больше нуля.* **withdrawal_system_not_found_by_id**Система для вывода средств с указанным ID не обнаружена.* **withdrawal_wallet_not_found_by_id**Кошелек для вывода средств с указанным ID не обнаружен.* **withdrawal_system_is_disabled**Система для вывода средств с указанным ID отключена.* **withdrawal_wallet_with_different_withdrawal_system**Указан кошелек для вывода средств для другой системы вывода средств.
 * @summary Список транзакций вывода средств, создание новой транзакции вывода средств
 * @link /api/v1/user/referrals/balance/withdrawal-transactions */
export async function apiV1UserReferralsBalanceWithdrawalTransactionsList(
  params?: ApiV1UserReferralsBalanceWithdrawalTransactionsListQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1UserReferralsBalanceWithdrawalTransactionsListQueryResponse>> {
  const res = await client<ApiV1UserReferralsBalanceWithdrawalTransactionsListQueryResponse>({
    method: "get",
    url: `/api/v1/user/referrals/balance/withdrawal-transactions`,
    params,
    ...options,
  })
  return res
}
