import { useApiV1UserDeviceListList } from "@/src/gen/clients/hooks/apiController/useApiV1UserDeviceListList"
import { useApiV1UserDeviceRefreshOttIdCreate } from "@/src/gen/clients/hooks/apiController/useApiV1UserDeviceRefreshOttIdCreate"
import { Device } from "@/src/gen/models/ts/Device"
import { sleep } from "@/src/shared/helpers/sleep"
import { Button } from "@/src/shared/ui/button"
import { Credenza, CredenzaClose, CredenzaContent } from "@/src/shared/ui/credenza"
import { Input } from "@/src/shared/ui/input"
import { Label } from "@/src/shared/ui/label"
import { UpdateIcon } from "@radix-ui/react-icons"
import { isAxiosError } from "axios"
import clsx from "clsx"
import { CheckCheck, Copy, Link2 } from "lucide-react"
import React, { InputHTMLAttributes, useState } from "react"
import { useCopyToClipboard } from "react-use"
import { toast } from "sonner"

type Props = {
  isOpen: boolean
  onChange: (val: boolean) => void
  selectedDevice: Device | null
}

export const CredenzaOTT = ({ isOpen, onChange, selectedDevice }: Props) => {
  const [isCopied, isCopiedSet] = useState(false)
  const [_state, copyToClipboard] = useCopyToClipboard()

  const useApiV1UserDeviceList = useApiV1UserDeviceListList()
  const onUpdateOTT = useApiV1UserDeviceRefreshOttIdCreate(`${selectedDevice?.id}`)
  const isOnUpdateDisabled = onUpdateOTT.isLoading || !selectedDevice

  const onHandleCopy = async () => {
    if (!selectedDevice || !selectedDevice.ott_id || !selectedDevice.id) return
    try {
      toast.info("OTT скопирован")
      copyToClipboard(selectedDevice.ott_id)
      isCopiedSet(true)
      await sleep(2000)
      isCopiedSet(false)
    } catch (error) {}
  }

  const onHandleUpdateOTT = async () => {
    if (!selectedDevice) return
    try {
      await onUpdateOTT.mutateAsync()
      useApiV1UserDeviceList.refetch()
    } catch (error) {
      if (isAxiosError(error)) {
        toast.error(error.response?.data.message)
      }
    }
  }

  return (
    <Credenza
      open={isOpen}
      onOpenChange={onChange}
    >
      <CredenzaContent className="block w-full max-w-[665px] p-0 lg:max-w-none">
        <div className="relative block space-x-3.5 border-b p-6 md:space-x-0 md:border-b-0">
          <div className="relative">
            <p className="text-xl font-bold">OTT-ID (Over-the-Top ID)</p>
            <p className="text-sx mt-2 hidden text-grey-extra-hard lg:block">
              Это уникальный идентификатор, используемый для идентификации пользователей и устройств. При изменении OTT-ID необходимо заново прописать новые ссылки на плейлист.
            </p>

            <div className="mt-6 flex space-x-2 lg:mt-4">
              <div className="flex flex-1 flex-col">
                <Label className="hidden lg:block">OTT-ID</Label>
                <Input
                  disabled
                  className="lg:mt-0.5"
                  value={!selectedDevice?.ott_id ? "" : selectedDevice?.ott_id}
                />
              </div>
              <Button
                onClick={onHandleCopy}
                className="relative inline-flex items-center space-x-2 lg:hidden"
              >
                <Copy
                  className={clsx("absolute left-3 top-1/2 size-5 -translate-y-1/2 text-white transition-all duration-300", {
                    "opacity-100": !isCopied,
                    "scale-50 opacity-0": isCopied,
                  })}
                />
                <CheckCheck
                  className={clsx("absolute left-1 top-1/2 size-5 -translate-y-1/2 text-white transition-all duration-300", {
                    "opacity-100": isCopied,
                    "scale-50 opacity-0": !isCopied,
                  })}
                />
                <span className="pl-4 uppercase">Скопировать</span>
              </Button>

              <Button
                disabled={isOnUpdateDisabled}
                onClick={onHandleUpdateOTT}
                className="inline-flex items-center space-x-2 lg:hidden"
                variant={"outline"}
              >
                <UpdateIcon
                  className={clsx("size-5 transition-all duration-1000", {
                    "animate-spin": onUpdateOTT.isLoading,
                  })}
                />
                <span className="uppercase">Обновить</span>
              </Button>
              <Button
                disabled={isOnUpdateDisabled}
                onClick={onHandleUpdateOTT}
                size={"icon"}
                className="mt-auto hidden items-center space-x-2 lg:inline-flex"
                variant={"outline"}
              >
                <UpdateIcon
                  className={clsx("size-5 transition-all duration-1000", {
                    "animate-spin": onUpdateOTT.isLoading,
                  })}
                />
              </Button>
            </div>

            <div className="mt-8 hidden items-center space-x-2 lg:flex">
              <Button
                variant={"outline"}
                className="text-sm uppercase"
              >
                Отмена
              </Button>
              <CredenzaClose asChild>
                <Button onClick={onHandleCopy} className="flex-1 text-sm uppercase">скопировать и закрыть</Button>
              </CredenzaClose>
            </div>

            <div className="mt-6 space-y-1.5 text-sm text-grey-extra-hard lg:hidden">
              <p className="font-bold">OTT-ID (Over-the-Top ID)</p>
              <p>
                Это уникальный идентификатор, используемый для идентификации пользователей и устройств. <br />
                При изменении OTT-ID необходимо заново прописать новые ссылки на плейлист.
              </p>
            </div>
          </div>
        </div>
      </CredenzaContent>
    </Credenza>
  )
}
