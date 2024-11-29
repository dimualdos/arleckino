import React from "react"
import { Drawer, DrawerClose, DrawerContent } from "@/src/shared/ui/drawer"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/ui/select"
import { Button } from "@/src/shared/ui/button"
import { Label } from "@/src/shared/ui/label"
import { useApiV1UserWithdrawalSystemsList } from "@/src/gen/clients/hooks/apiController/useApiV1UserWithdrawalSystemsList"
import { Input } from "@/src/shared/ui/input"
import { InputMessage } from "@/src/shared/ui/input-message"
import { WithdrawalSystem } from "@/src/gen/models/ts/WithdrawalSystem"
import { UseFormReturn } from "react-hook-form"
import { PersonalMainProps } from "../../Personal/Main/types"

type Props = {
  isActive: boolean
  onChange: React.Dispatch<React.SetStateAction<boolean>>
  onSelectWallet: (walletId: string) => void
  selectedPayment: WithdrawalSystem | null
  onConfirmAddPayment: () => Promise<void>
  usePageState: UseFormReturn<PersonalMainProps, any, PersonalMainProps>
}

export const CredenzaAddPayment = ({ isActive, onChange, onSelectWallet, selectedPayment, onConfirmAddPayment, usePageState }: Props) => {
  const useApiBillingPayment = useApiV1UserWithdrawalSystemsList()
  return (
    <Drawer
      open={isActive}
      onOpenChange={onChange}
    >
      <DrawerContent className="block p-6">
        <div className="space-y-4">
          <p className="text-xl font-bold">Добавление платежной системы</p>
          <div className="space-y-4">
            {/* Платежная система */}
            <div className="space-y-0.5">
              <Label>Платежная система</Label>
              {useApiBillingPayment.data?.data && (
                <Select onValueChange={onSelectWallet}>
                  <SelectTrigger>
                    <SelectValue placeholder="Платежная система" />
                  </SelectTrigger>
                  <SelectContent>
                    {useApiBillingPayment.data.data.results.map((item) => {
                      if (item.is_disabled) return null
                      return (
                        <SelectItem
                          key={item.id}
                          value={`${item.id}`}
                        >
                          <div className="first-letter:uppercase">{item.name}</div>
                        </SelectItem>
                      )
                    })}
                  </SelectContent>
                </Select>
              )}
            </div>

            {/* User info */}
            <div className="space-y-0.5">
              <Label className="inline-block min-h-[19px] first-letter:uppercase">{!selectedPayment ? "" : selectedPayment.user_identifier_name}</Label>
              <Input
                disabled={!selectedPayment}
                {...usePageState.register("userWalletRequisites", {
                  required: true,
                  ...(!selectedPayment
                    ? {}
                    : {
                        pattern: {
                          value: new RegExp(`${selectedPayment.user_identifier_regexp}`),
                          message: selectedPayment.user_identifier_example!,
                        },
                      }),
                })}
                autoComplete="off"
                placeholder={!selectedPayment ? "" : selectedPayment.user_identifier_example!}
              />
              <InputMessage
                variant={
                  !usePageState.formState.errors.userWalletRequisites && usePageState.getFieldState("userWalletRequisites").isDirty
                    ? "valid"
                    : usePageState.formState.errors.userWalletRequisites || !usePageState.getFieldState("userWalletRequisites").isDirty
                      ? "invalid"
                      : "text-grey-hard"
                }
              >
                <span>
                  {usePageState.formState.errors?.userWalletRequisites?.message
                    ? usePageState.formState.errors?.userWalletRequisites?.message
                    : !selectedPayment
                      ? ""
                      : selectedPayment.user_identifier_example}
                </span>
              </InputMessage>
            </div>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-2 items-center justify-end space-x-2">
          <DrawerClose asChild>
            <Button
              variant={"outline"}
              className="mt-0 uppercase"
            >
              Отмена
            </Button>
          </DrawerClose>
          <Button
            className="uppercase"
            onClick={onConfirmAddPayment}
          >
            Добавить
          </Button>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
