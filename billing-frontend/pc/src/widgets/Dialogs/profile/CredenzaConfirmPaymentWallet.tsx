import React from "react"
import { Credenza, CredenzaContent, CredenzaTrigger } from "@/src/shared/ui/credenza"
import { AlertCircleIcon } from "lucide-react"
import { useApiV1UserInfoRead } from "@/src/gen/clients/hooks/apiController/useApiV1UserInfoRead"
import { Button } from "@/src/shared/ui/button"

type Props = {
  isActive: boolean
  onChange: React.Dispatch<React.SetStateAction<boolean>>
}

export const CredenzaConfirmPaymentWallet = ({ isActive, onChange }: Props) => {
  const useApiV1User = useApiV1UserInfoRead()
  return (
    <Credenza
      open={isActive}
      onOpenChange={onChange}
    >
      <CredenzaContent className="block p-0">
        <div className="relative flex items-start space-x-3.5 border-b p-6 md:space-x-0 md:border-0 md:pb-2">
          <div className="inline-flex min-w-6 items-center md:hidden">
            <AlertCircleIcon className="text-5 rotate-180 fill-purple text-white" />
          </div>
          <div className="relative space-y-2 md:space-y-4">
            <p className="text-xl font-bold">Подтверждение кошелька PayPall</p>
            <div className="space-y-4 md:space-y-4 md:text-grey-extra-hard">
              <p>
                Мы выслали Вам ссылку на <b>{useApiV1User.data?.data.email}</b>
              </p>
              <p>Перейдите по ссылке в письме для завершения процесса подтверждения кошелька</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end space-x-2 px-6 py-4">
          <CredenzaTrigger asChild>
            <Button
              variant={"outline"}
              className="mt-0 uppercase md:w-full"
            >
              Закрыть
            </Button>
          </CredenzaTrigger>
        </div>
      </CredenzaContent>
    </Credenza>
  )
}
