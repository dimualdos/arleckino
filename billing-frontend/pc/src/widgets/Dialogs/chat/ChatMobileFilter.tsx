import React, { ReactNode } from "react"
import { Button } from "@/src/shared/ui/button"
import { Drawer, DrawerClose, DrawerContent } from "@/src/shared/ui/drawer"

type Props = {
  isActive: boolean
  setActive: React.Dispatch<React.SetStateAction<boolean>>
  handleResetFilters: () => void
  children: ReactNode
}

export const ChatMobileFilter = ({ isActive, setActive, handleResetFilters, children }: Props) => {
  return (
    <Drawer
      open={isActive}
      onOpenChange={setActive}
    >
      <DrawerContent className="block p-6">
        <div className="flex items-center justify-between">
          <p className="text-bold text-xl">Фильтр</p>
          <DrawerClose asChild>
            <button onClick={handleResetFilters} className="text-accent">Сбросить</button>
          </DrawerClose>
        </div>

        <div className="mt-4 space-y-4">{children}</div>

        <div className="mt-8 grid grid-cols-2 space-x-2">
          <DrawerClose asChild>
            <Button
              variant={"outline"}
              className="mt-0 uppercase"
            >
              Отмена
            </Button>
          </DrawerClose>
          <DrawerClose asChild>
            <Button className="uppercase">Применить</Button>
          </DrawerClose>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
