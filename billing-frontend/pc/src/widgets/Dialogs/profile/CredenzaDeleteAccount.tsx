import React from "react"
import { Credenza, CredenzaContent, CredenzaTrigger } from "@/src/shared/ui/credenza"
import { AlertCircleIcon } from "lucide-react"
import { Button } from "@/src/shared/ui/button"
import { useApiV1UserInfoRead } from "@/src/gen/clients/hooks/apiController/useApiV1UserInfoRead"

type Props = {
  isActive: boolean
  onChange: React.Dispatch<React.SetStateAction<boolean>>
}

export const CredenzaDeleteAccount = ({ isActive, onChange }: Props) => {
  const useApiV1User = useApiV1UserInfoRead()
  return (
    <Credenza
      open={isActive}
      onOpenChange={onChange}
    >
      <CredenzaContent className="block p-0">
        <div className="md:spce-x-0 relative flex items-start space-x-3.5 border-b p-6 md:space-x-0 md:border-0 md:pb-2">
          <div className="inline-flex min-w-6 items-center md:hidden">
            <AlertCircleIcon className="text-5 rotate-180 fill-purple text-white" />
          </div>
          <div className="relative space-y-4">
            <p className="text-xl font-bold">Удаление аккаунта</p>
            <div className="md:space-y-2 md:text-grey-extra-hard">
              <p>
                Мы выслали Вам ссылку на <b>{useApiV1User.data?.data.email}</b>
              </p>
              <p>Перейдите по ссылке в письме для завершения процесса удаления профиля</p>
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
