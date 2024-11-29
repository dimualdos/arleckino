import React from "react"
import { Credenza, CredenzaContent } from "@/src/shared/ui/credenza"
import { Button } from "@/src/shared/ui/button"
import { AlertCircleIcon } from "lucide-react"
import { Label } from "@/src/shared/ui/label"
import { Input } from "@/src/shared/ui/input"
import { InputMessage } from "@/src/shared/ui/input-message"

type Props = {
  isOpen: boolean
  onChange: React.Dispatch<React.SetStateAction<boolean>>
  onSubmit: () => void
}

export const CredenzaRenamePlaylist = ({ isOpen, onChange, onSubmit }: Props) => {
  return (
    <Credenza
      open={isOpen}
      onOpenChange={onChange}
    >
      <CredenzaContent className="block p-0">
        <div className="relative flex items-start space-x-3.5 border-b p-6 md:space-x-0 md:border-b-0 md:pb-4">
          <div className="inline-flex min-w-6 items-center md:hidden">
            <AlertCircleIcon className="text-5 rotate-180 fill-purple text-white" />
          </div>
          <div className="relative flex-1 space-y-6 md:space-y-2">
            <p className="text-xl font-bold">Переименовать плейлист</p>
            <div className="space-y-0.5">
              <Label>Наименование плейлиста</Label>
              <Input className="border-destructive" />
              {/* TODO: Remove if no need */}
              <InputMessage>Плейлист с таким именем уже существует</InputMessage>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end space-x-2 px-6 py-4 md:grid md:grid-cols-2">
          <Button
            variant={"outline"}
            className="uppercase"
          >
            Отмена
          </Button>
          <Button className="uppercase">Сохранить</Button>
        </div>
      </CredenzaContent>
    </Credenza>
  )
}
