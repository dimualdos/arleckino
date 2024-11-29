import React from "react"
import { Credenza, CredenzaContent } from "@/src/shared/ui/credenza"
import { AlertCircleIcon } from "lucide-react"
import { Button } from "@/src/shared/ui/button"
import { WithdrawalWallet } from "@/src/gen/models/ts/WithdrawalWallet"

type Props = {
  isActive: boolean
  onChange: React.Dispatch<React.SetStateAction<boolean>>
  selectedPaymentToDelete: WithdrawalWallet | null
  closeDeletePayment: () => void
  onConfirmRemoveWallet: (wallet: WithdrawalWallet) => () => Promise<void>
}

export const CredenzaDeletePayment = ({ isActive, onChange, selectedPaymentToDelete, closeDeletePayment, onConfirmRemoveWallet }: Props) => {
  return (
    <Credenza
      open={isActive && !!selectedPaymentToDelete}
      onOpenChange={onChange}
    >
      <CredenzaContent className="block p-0">
        <div className="relative flex items-start space-x-3.5 border-b p-6 md:space-x-0 md:border-0 md:pb-2">
          <div className="inline-flex min-w-6 items-center md:hidden">
            <AlertCircleIcon className="text-5 rotate-180 fill-accent text-white" />
          </div>
          <div className="relative space-y-2 md:space-y-4">
            <p className="text-xl font-bold">Удаление платежной системы</p>
            <div className="space-y-4 md:text-grey-extra-hard">
              <p className="font-bold">
                {selectedPaymentToDelete?.withdrawal_system?.name} {selectedPaymentToDelete?.user?.email}
              </p>
              <p>Кошелек и его данные будут безвозвратно удалены из списка платежных систем. Продолжить?</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end space-x-2 px-6 py-4 md:grid md:grid-cols-2">
          <Button
            onClick={closeDeletePayment}
            variant={"outline"}
            className="mt-0 uppercase"
          >
            Отмена
          </Button>
          {!!selectedPaymentToDelete && (
            <Button
              className="uppercase"
              onClick={onConfirmRemoveWallet(selectedPaymentToDelete)}
            >
              Удалить
            </Button>
          )}
        </div>
      </CredenzaContent>
    </Credenza>
  )
}
