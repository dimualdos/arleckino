import React from "react"
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from "@/src/shared/ui/drawer"
import { Button } from "@/src/shared/ui/button"
import { useApiV1UserInfoRead } from "@/src/gen/clients/hooks/apiController/useApiV1UserInfoRead"
import { useAuth } from "@/src/shared/hooks/useAuth"

type Props = {
  isActive: boolean
  onChange: React.Dispatch<React.SetStateAction<boolean>>
  toggleDeleteAccount: () => void
}

export const DrawerRootActions = ({ isActive, onChange, toggleDeleteAccount }: Props) => {
  const { signOut } = useAuth()
  return (
    <Drawer
      open={isActive}
      onOpenChange={onChange}
    >
      <DrawerContent>
        <div className="flex w-full flex-col space-y-8 px-6 pb-10 pt-8">
          <Button
            onClick={() => {
              onChange(false)
              signOut()
            }}
            className="text-foreground"
            variant={"link"}
          >
            Выйти из аккаунта
          </Button>
          <Button
            onClick={() => {
              onChange(false)
              signOut()
            }}
            className="text-foreground"
            variant={"link"}
          >
            Выйти со всех устройств
          </Button>
          <Button
            onClick={() => {
              onChange(false)
              toggleDeleteAccount()
            }}
            className="text-destructive"
            variant={"link"}
          >
            Удалить аккаунт
          </Button>
          <DrawerClose asChild>
            <Button variant={"outline"}>Закрыть</Button>
          </DrawerClose>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
