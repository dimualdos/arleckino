/* eslint-disable react/no-unescaped-entities */
import { Dialog, DialogContent, DialogClose } from "@/src/shared/ui/dialog"
import { Button } from "@/src/shared/ui/button"
import { X } from "lucide-react"
import { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useApiV1UserDeviceListListInfinite } from "@/src/gen/clients/hooks/apiController/useApiV1UserDeviceListList";
import { useEqualizeSubscription } from "@/src/shared/hooks/useEqualizeSubscription";
import { DevicesSubscrStore } from "@/src/shared/store/devicesSubscrStore";
import { useStoreState } from "pullstate";
import clsx from "clsx";

type Props = {
  open: boolean
  onChange?: React.Dispatch<React.SetStateAction<boolean>>
  toggle?: () => void
  removeUpdateDates: () => void
}

//* Модальное окно. Выровнять даты окончания подписок
export const CredenzaUpdateDeviceSubscriptions = ({ open, onChange, toggle, removeUpdateDates }: Props) => {
  const {
    buySubscriptionEqualize,
    succesEqualize,
    clearDevicesArr,
  } = useEqualizeSubscription()
  const dataDevicesArr = useStoreState(DevicesSubscrStore, s => s.data);
  const dataTotalPrice = useStoreState(DevicesSubscrStore, s => s.totalPrice);
  const subscrErrorText = useStoreState(DevicesSubscrStore, s => s.subscrErrorText)
  const clientDevices = useQueryClient()
  const { queryKey: queryKeyInfinite } = useApiV1UserDeviceListListInfinite({ limit: 100000 })
  const [flagErrSubscr, flagErrSubscrSet] = useState(false)
  const [flagSuccessSubscrption, flagSuccessSubscrptionSet] = useState(false)

  //* ошибка продления
  useEffect(() => {
    if (subscrErrorText) {
      flagErrSubscrSet(true)
    }
  }, [subscrErrorText])

  //* успех продления
  useEffect(() => {
    if (succesEqualize) {
      flagSuccessSubscrptionSet(true)
      clientDevices.invalidateQueries(queryKeyInfinite)
    }
  }, [succesEqualize])

  const removeModalTable = () => {
    flagErrSubscrSet(false)
    flagSuccessSubscrptionSet(false)
    clearDevicesArr()
    removeUpdateDates()
  }

  return (
    <Dialog
      open={open}
      onOpenChange={onChange}
    >
      <DialogContent className="flex w-full max-w-[900px] flex-col gap-0 overflow-hidden rounded-sm border-0 p-0 md:h-full max-h-full md:max-w-full overflow-y-auto md:!rounded-none">
        {/* HEADER + CONTENT + CAPTCHA */}
        <div className="py-6 md:pb-10" >
          <div className="px-6" >
            <p className="text-xl font-semibold">Выровнять даты окончания подписок</p>
            <p className="mt-2 text-grey-extra-hard md:mb-4">Покупка подписки</p>
            <p>{flagSuccessSubscrption && <span className="text-extra-hard text-purple"> даты успешно выровнены, сумма $ {dataTotalPrice}</span>}
              {subscrErrorText && flagErrSubscr && <span className="text-extra-hard text-purple">{subscrErrorText}</span>}</p>

          </div>
          <div className="mx-6 mt-6 lg:mx-0">
            <div className="overflow-x-auto rounded-sm border border-b-0 bg-white lg:mx-6">
              <table className="w-full min-w-[700px] text-left">
                {!flagSuccessSubscrption ? <thead className="bg-grey-extra-soft text-grey-extra-hard">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3.5 font-medium"
                    >
                      Устройство
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3.5 font-medium"
                    >
                      Дата окончания
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3.5 font-medium"
                    >
                      Количество дней
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3.5 font-medium"
                    >
                      Сумма, $
                    </th>
                  </tr>
                </thead> : null}
                <tbody>
                  {!flagSuccessSubscrption ? dataDevicesArr?.map((item, indx: number) => (
                    <tr
                      key={indx}
                      className="border-b bg-white"
                    >
                      <th
                        scope="row"
                        className="whitespace-nowrap px-6 py-4 font-medium"
                      >
                        {item.device_name}
                      </th>
                      <td className="px-6 py-4">
                        <div className="line-clamp-1 font-medium">{item.validEndData}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="line-clamp-1 font-medium">{item.days_amount}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="line-clamp-1 font-medium">{item.amount}</div>
                      </td>
                    </tr>
                  )) : null}
                </tbody>
              </table>
            </div>
          </div>

          {!flagSuccessSubscrption ? <div className="mt-8 hidden px-6 text-xl lg:block">
            <span className="text-grey-hard">Итого к оплате:</span> <b>$ {dataTotalPrice}</b>
          </div> : ''}
        </div>

        {/* FOOTER ACTIONS */}
        <div className={clsx("flex  items-center justify-between border-t border-t-grey-soft px-6 py-4 lg:mt-auto lg:border-0",
          { 'border-none': flagSuccessSubscrption }
        )}>
          {!flagSuccessSubscrption && <div className="lg:hidden">
            <>Итого к оплате: <b>$ {dataTotalPrice}</b></>
          </div>}
          <div className={clsx({ "flex space-x-2 lg:grid lg:w-full lg:grid-cols-2": !flagSuccessSubscrption },
            { 'grid grid-cols-1 w-full': flagSuccessSubscrption }
          )}>
            <DialogClose onClick={removeModalTable} asChild>
              <Button
                variant={"outline"}
                className="uppercase text-foreground"
              >
                {flagSuccessSubscrption ? 'Закрыть' : 'Отмена'}
              </Button>
            </DialogClose>
            {!flagSuccessSubscrption ? <Button
              type="submit"
              className="uppercase"
              disabled={flagSuccessSubscrption || flagErrSubscr}
              onClick={() => buySubscriptionEqualize(true)}
            >
              Подтвердить
            </Button> : null}
          </div>
        </div>

        <DialogClose
          className="z-20 absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
          onClick={removeModalTable}>
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogClose>

      </DialogContent>
    </Dialog>
  )
}
