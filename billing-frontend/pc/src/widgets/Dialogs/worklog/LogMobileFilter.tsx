import React, { ReactNode } from "react"
import { Credenza, CredenzaContent, CredenzaClose } from "@/src/shared/ui/credenza"
import { Label } from "@/src/shared/ui/label"
import { Input } from "@/src/shared/ui/input"
import { Search } from "lucide-react"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/shared/ui/select"
import { Button } from "@/src/shared/ui/button"

type Props = {
  isOpen: boolean
  openChange: React.Dispatch<React.SetStateAction<boolean>>
  children: ReactNode
}

const devices = [
  {
    label: "Устройства",
    value: `Устройства`,
  },
  {
    label: "Элемент 1",
    value: `Элемент 1`,
  },
  {
    label: "Элемент 2",
    value: `Элемент 2`,
  },
]

export const LogMobileFilter = ({ isOpen, openChange, children }: Props) => {
  return (
    <Credenza
      open={isOpen}
      onOpenChange={openChange}
    >
      <CredenzaContent className="block p-6">
        <div className="flex items-center justify-between">
          <p className="text-bold text-xl">Фильтр</p>
          <CredenzaClose asChild>
            <button className="text-accent">Сбросить</button>
          </CredenzaClose>
        </div>

        <div className="mt-4 space-y-4">
          {children}
        </div>

        <div className="mt-8 grid grid-cols-2 space-x-2">
          <CredenzaClose asChild>
            <Button
              variant={"outline"}
              className="mt-0 uppercase"
            >
              Отмена
            </Button>
          </CredenzaClose>
          <CredenzaClose asChild>
            <Button className="uppercase">Применить</Button>
          </CredenzaClose>
        </div>
      </CredenzaContent>
    </Credenza>
  )
}
