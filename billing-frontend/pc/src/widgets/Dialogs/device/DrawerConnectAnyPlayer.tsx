import { Button } from "@/src/shared/ui/button"
import { Drawer, DrawerClose, DrawerContent } from "@/src/shared/ui/drawer"
import { Label } from "@/src/shared/ui/label"
import { Input } from "@/src/shared/ui/input"

type Props = {
  open: boolean
  onChange: React.Dispatch<React.SetStateAction<boolean>>
  toggle: () => void
}

// Привязака AnyPlayer одного устройства (mobile)
export const SheetConnectAnyPlayer = ({ open, onChange, toggle }: Props) => {
  return (
    <Drawer
      open={open}
      onOpenChange={onChange}
    >
      <DrawerContent className="block p-6">
        <>
          <div className="space-y-2">
            <p className="text-bold text-xl">Привязать плеер AnyPlayer к аккаунту</p>
            <p className="text-grey-extra-hard">Введите 6й код из плеера AnyPlayer </p>
          </div>
          <div className="mt-6 flex flex-col space-x-2 space-y-2">
            <div className="space-y-0.5">
              <Label>Код</Label>
              <Input />
            </div>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-2">
            <DrawerClose asChild>
              <Button
                variant={"outline"}
                className="mt-0 uppercase"
              >
                Отмена
              </Button>
            </DrawerClose>
            <Button className="uppercase">Привязать</Button>
          </div>
        </>
      </DrawerContent>
    </Drawer>
  )
}
