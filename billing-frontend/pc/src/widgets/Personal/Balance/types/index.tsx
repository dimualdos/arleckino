import { PaymentSystem } from "@/src/gen/models/ts/PaymentSystem"
import { PaymentTransactionReplenishment } from "@/src/gen/models/ts/PaymentTransactionReplenishment"

export type FormProps = {
    isAgree: boolean
    selectedPaymentMethod: PaymentSystem | null
} & PaymentTransactionReplenishment