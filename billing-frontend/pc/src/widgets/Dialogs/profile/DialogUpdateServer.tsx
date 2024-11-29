import React from "react"
import { Dialog, DialogContent, DialogTrigger, DialogClose } from "@/src/shared/ui/dialog"
import { Button } from "@/src/shared/ui/button"
import { RadioGroup } from "@/src/shared/ui/radio-group"
import { ServerCard } from "@/src/shared/ui/server-card"

type Props = {
  open: boolean
  onOpenChange: (open: any) => void
}

export const DialogUpdateServer = ({ open, onOpenChange }: Props) => {
  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="flex h-full w-full max-w-none flex-col gap-0 overflow-hidden overflow-y-auto !rounded-none border-0 p-0">
        {/* CONTENT */}
        <div className="flex-1 space-y-6 p-6">
          <p className="text-xl font-semibold">Выбор сервера</p>
          {/* RADIO START */}
          <RadioGroup
            className="mt-6"
            defaultValue="item1"
          >
            <ServerCard
              radioId="item1"
              radioValue="item1"
              name="CDN"
              variant="CDN"
              description="Сервер по результам тестов других пользователей и вашему местоположению"
            />
            <ServerCard
              radioId="item2"
              radioValue="item2"
              variant="test"
              status="none"
              name="Оптимальный сервер с помощью теста"
              description="С помощью теста и выбирается наилучший сервер на основе вашего интернет соединения"
            />
          </RadioGroup>
          {/* RADIO END */}
        </div>

        {/* FOOTER ACTIONS */}
        <div className="mt-auto grid grid-cols-2 justify-between space-x-2 px-6 py-4">
          <DialogClose asChild>
            <Button
              variant={"outline"}
              className="uppercase text-foreground"
            >
              Отмена
            </Button>
          </DialogClose>
          {/* TODO: Pass a function to update server and to close dialog */}
          <Button
            type="submit"
            className="uppercase"
          >
            Сохранить
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
