import { z } from "zod"
import { paymentTransactionAdminReplenishmentSchema } from "../paymentTransactionAdminReplenishmentSchema"

export const apiV1BillingAdminPaymentTransactionCreateCreate201Schema = z.lazy(() => paymentTransactionAdminReplenishmentSchema)
export const apiV1BillingAdminPaymentTransactionCreateCreateMutationRequestSchema = z.lazy(() => paymentTransactionAdminReplenishmentSchema)
export const apiV1BillingAdminPaymentTransactionCreateCreateMutationResponseSchema = z.lazy(() => paymentTransactionAdminReplenishmentSchema)
