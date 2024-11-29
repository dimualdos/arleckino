import { Button } from "@/src/shared/ui/button"
import { Credenza, CredenzaContent, CredenzaClose } from "@/src/shared/ui/credenza"
import { AlertCircleIcon } from "lucide-react"

type Props = {
  open: boolean
  onChange: React.Dispatch<React.SetStateAction<boolean>>
  toggle: () => void
  onSubmitRemoveDevices: () => void
}

// Модальное окно. Удаление устройства
export const CredenzaDeleteDevices = ({ open,
  onChange,
  toggle,
  onSubmitRemoveDevices }: Props) => {
  return (
    <Credenza
      open={open}
      onOpenChange={onChange}
    >
      <CredenzaContent className="block p-0">
        <div className="relative flex items-start space-x-3.5 border-b p-6 md:space-x-0 md:border-0 md:pb-2">
          <div className="inline-flex min-w-6 items-center md:hidden">
            <AlertCircleIcon className="text-5 rotate-180 fill-accent text-white" />
          </div>
          <div className="relative space-y-2 md:space-y-4">
            <p className="text-xl font-bold">Удаление группы устройств</p>
            <div className="space-y-4 md:text-grey-extra-hard">
              <p>Группа устройств и его данные будут безвозвратно удалены. Продолжить?</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end space-x-2 px-6 py-4 md:grid md:grid-cols-2">
          <CredenzaClose asChild>
            <Button
              variant={"outline"}
              className="mt-0 uppercase"
            >
              Отмена
            </Button>
          </CredenzaClose>
          <CredenzaClose asChild>
            <Button
              onClick={onSubmitRemoveDevices}
              className="uppercase">Удалить</Button>
          </CredenzaClose>
        </div>
      </CredenzaContent>
    </Credenza>
  )
}
