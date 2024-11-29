import type { UserShort } from "./UserShort"
import type { PaymentSystem } from "./PaymentSystem"

export const PaymentTransactionTransactionType = {
  replenishment: "replenishment",
  changing_admin: "changing_admin",
  purchase: "purchase",
  withdrawal: "withdrawal",
  refund: "refund",
  referral: "referral",
} as const
export type PaymentTransactionTransactionType = (typeof PaymentTransactionTransactionType)[keyof typeof PaymentTransactionTransactionType]
export type PaymentTransaction = {
  /**
   * @type integer | undefined
   */
  readonly id?: number
  /**
   * @type string | undefined date-time
   */
  dt_create?: Date
  user: UserShort
  /**
   * @type number | undefined decimal
   */
  amount?: number
  /**
   * @type string
   */
  currency: string
  /**
   * @type string | undefined
   */
  transaction_type?: PaymentTransactionTransactionType
  /**
   * @type string
   */
  transaction_type_name: string
  payment_system: PaymentSystem
  /**
   * @type string | undefined
   */
  description?: string | null
  admin: UserShort
  /**
   * @type string | undefined
   */
  readonly description_wallet?: string
  /**
   * @type number | undefined decimal
   */
  bonus_amount?: number
  /**
   * @type string | undefined
   */
  bonus_type?: string | null
}
