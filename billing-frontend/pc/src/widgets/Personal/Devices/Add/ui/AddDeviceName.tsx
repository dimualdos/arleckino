import { Input } from "@/src/shared/ui/input"
import React from "react"
import { UseFormReturn } from "react-hook-form"
import { AddDeviceProps } from "../types"
import { InputMessage } from "@/src/shared/ui/input-message"
import { Textarea } from "@/src/shared/ui/textarea"

type Props = {
  useFormAPI: UseFormReturn<AddDeviceProps, any, AddDeviceProps>
}

export const AddDeviceName = ({ useFormAPI }: Props) => {
  return (
    <div className="container space-y-6 max-w-[600px] flex-1 lg:max-w-none">
      <div className="space-y-2">
        <p className="text-2xl font-semibold">
          <span className="lg:hidden">Устройство</span>
          <span className="hidden lg:block">Наименование устройства</span>
        </p>
        <p className="font-medium text-grey-extra-hard">Пожалуйста придумайте уникальное название устройства</p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-grey-hard">
            Наименование устройства <span className="text-accent">*</span>
          </label>
          <Input
            className="bg-background"
            {...useFormAPI.register("name", {
              required: "Начните вводить название",
              validate: (value) => {
                return value.length < 2 ? "Не меньше 2 символов" : true
              },
            })}
          />
          {!useFormAPI.formState.errors?.name ? null : <InputMessage className="text-sm">{useFormAPI.formState.errors.name.message}</InputMessage>}
        </div>

        <div className="space-y-2">
          <label className="text-grey-hard">Комментарий</label>
          <Textarea
            className="min-h-36 bg-background"
            {...useFormAPI.register("comment", {
              required: "Введите текст комментария",
              validate: (value) => {
                return value.length < 2 ? "Не меньше 10 символов" : true
              },
            })}
          />
          {!useFormAPI.formState.errors?.comment ? null : <InputMessage className="text-sm">{useFormAPI.formState.errors.comment.message}</InputMessage>}
        </div>
      </div>
    </div>
  )
}
