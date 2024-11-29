import React from "react"
import { Credenza, CredenzaContent, CredenzaClose } from "@/src/shared/ui/credenza"
import { Button } from "@/src/shared/ui/button"
import { Label } from "@/src/shared/ui/label"
import { Input } from "@/src/shared/ui/input"
import { AutosizeTextarea } from "@/src/shared/ui/autosize-textarea"
import { InputMessage } from "@/src/shared/ui/input-message"

type Props = {
  isOpen: boolean
  onChange: React.Dispatch<React.SetStateAction<boolean>>
  onSubmit: () => void
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleInputAreaChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  handleRemoveInputs: () => void
  inputTextArea: string
  inputChanged: string
  alertVisible: boolean
}

export const SheetChangeDeviceInfo = ({ isOpen,
  onChange,
  onSubmit,
  handleInputChange,
  handleInputAreaChange,
  inputTextArea,
  inputChanged,
  handleRemoveInputs,
  alertVisible }: Props) => {

  return (
    <Credenza
      open={isOpen}
      onOpenChange={onChange}
    >
      <CredenzaContent className="block p-0">
        <div className="border-b p-6 md:space-x-0 md:border-0">
          <p className="text-xl font-bold">Изменить имя и описание устройства</p>
          <p className="mt-2 text-grey-extra-hard">Пожалуйста придумайте уникальное название устройства</p>
          <div className="mt-6 space-y-4">
            <div className="space-y-0.5">
              <Label>
                Наименование устройства <span className="text-destructive">*</span>
              </Label>
              <Input
                className="border-destructive"
                onChange={handleInputChange}
                value={inputChanged} />
              {alertVisible && <InputMessage>Устройство с таким же названием уже существует</InputMessage>}
            </div>
            <div className="space-y-0.5">
              <Label>Описание</Label>
              <AutosizeTextarea
                placeholder="Описание которое очень длинное и не помещается в одну строку"
                onChange={handleInputAreaChange}
                value={inputTextArea}
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end space-x-2 px-6 py-4 md:grid md:grid-cols-2">
          <CredenzaClose asChild>
            <Button
              variant={"outline"}
              className="mt-0 uppercase"
              onClick={handleRemoveInputs}
            >
              Отмена
            </Button>
          </CredenzaClose>
          <Button
            onClick={onSubmit}
            className="uppercase"
          >
            Сохранить
          </Button>
        </div>
      </CredenzaContent>
    </Credenza>
  )
}
