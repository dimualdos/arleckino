import type { WithdrawalSystemShort } from "./WithdrawalSystemShort"
import type { UserShort } from "./UserShort"

export const WithdrawalTransactionCurrency = {
  rub: "rub",
  eur: "eur",
  usd: "usd",
} as const
export type WithdrawalTransactionCurrency = (typeof WithdrawalTransactionCurrency)[keyof typeof WithdrawalTransactionCurrency]
export const WithdrawalTransactionStatus = {
  created: "created",
  approved: "approved",
  rejected: "rejected",
} as const
export type WithdrawalTransactionStatus = (typeof WithdrawalTransactionStatus)[keyof typeof WithdrawalTransactionStatus]
export type WithdrawalTransaction = {
  /**
   * @type integer | undefined
   */
  readonly id?: number
  withdrawal_system?: WithdrawalSystemShort
  user?: UserShort
  processed_user?: UserShort
  /**
   * @type string | undefined
   */
  currency?: WithdrawalTransactionCurrency
  /**
   * @type number | undefined decimal
   */
  amount?: number
  /**
   * @type string
   */
  withdrawal_system_name: string
  /**
   * @type string
   */
  withdrawal_system_user_identifier: string
  /**
   * @type string | undefined date-time
   */
  dt_create?: Date
  /**
   * @type string | undefined date-time
   */
  dt_update?: Date
  /**
   * @type boolean | undefined
   */
  is_transfered?: boolean | null
  /**
   * @type boolean | undefined
   */
  is_error?: boolean | null
  /**
   * @type string | undefined
   */
  error_message?: string | null
  /**
   * @type string | undefined
   */
  status?: WithdrawalTransactionStatus
  /**
   * @type integer | undefined
   */
  withdrawal_wallet?: number | null
}
