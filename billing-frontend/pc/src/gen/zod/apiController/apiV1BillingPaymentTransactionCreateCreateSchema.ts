import { z } from "zod"
import { paymentTransactionReplenishmentSchema } from "../paymentTransactionReplenishmentSchema"

export const apiV1BillingPaymentTransactionCreateCreate201Schema = z.lazy(() => paymentTransactionReplenishmentSchema)
export const apiV1BillingPaymentTransactionCreateCreateMutationRequestSchema = z.lazy(() => paymentTransactionReplenishmentSchema)
export const apiV1BillingPaymentTransactionCreateCreateMutationResponseSchema = z.lazy(() => paymentTransactionReplenishmentSchema)
