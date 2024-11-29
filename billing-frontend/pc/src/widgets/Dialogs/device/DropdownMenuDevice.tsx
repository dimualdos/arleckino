import { Button } from "@/src/shared/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from "@/src/shared/ui/dropdown-menu"
import { LucideMoreHorizontal } from "lucide-react"
import Link from "next/link"

type Props = {
  onDeleteDevice: () => void
  onChangeDeviceInfo: () => void
  onUpdateServer: () => void
  subsriptionType: string
}

export const DropdownMenuDevice = ({ onDeleteDevice, onChangeDeviceInfo, onUpdateServer, subsriptionType }: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={"transparent"}
          size={"icon"}
        >
          <LucideMoreHorizontal className="size-5 text-black" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="!right-0 rounded-sm p-0 pb-2"
      >
        <DropdownMenuGroup>
          {subsriptionType == "active" && <DropdownMenuItem
            asChild
            className="rounded-none px-4 text-base md:hidden"
            onClick={onUpdateServer}
          >
            <Link href="/personal-page/update-server">Изменить сервер</Link>
          </DropdownMenuItem>}
          <DropdownMenuItem
            asChild
            className="cursor-pointer rounded-none px-4 text-base"
          >
            <Link href="/personal-page/update-channels">Редактор списка каналов</Link>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={onChangeDeviceInfo}
            className="rounded-none px-4 text-base"
          >
            Переименовать{" "}
          </DropdownMenuItem>
          <DropdownMenuItem
            asChild
            className="rounded-none px-4 text-base md:hidden"
          >
            <Link href="/personal-page/connect-any-player">Привязать AnyPlayer</Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        {subsriptionType !== "active" && (
          <>
            <DropdownMenuSeparator className="my-2" />
            <DropdownMenuItem
              onClick={onDeleteDevice}
              textValue="1"
              className="rounded-none px-4 text-base hover:bg-destructive hover:text-destructive-foreground focus:bg-destructive focus:text-destructive-foreground"
            >
              Удалить
              {/* <DropdownMenuShortcut>⌘1</DropdownMenuShortcut> */}
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
