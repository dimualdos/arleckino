import React from "react"
import { Drawer, DrawerClose, DrawerContent } from "@/shared/ui/drawer"
import { Button } from "@/src/shared/ui/button"
import { UserPlaylist } from "@/src/gen/models/ts/Playlist"

type Props = {
  isOpen: boolean
  onChange: React.Dispatch<React.SetStateAction<boolean>>
  selectedPlaylist: UserPlaylist | null
  onRenamePlaylist: () => void
  onChangePlaylist: () => void
  onDeletePlaylist: () => void
}

export const SheetPlaylistActions = ({ isOpen, onChange, selectedPlaylist, onRenamePlaylist, onChangePlaylist, onDeletePlaylist }: Props) => {
  return (
    <Drawer
      open={isOpen}
      onOpenChange={onChange}
    >
      <DrawerContent>
        <div className="w-full space-y-8 pb-10 pt-8">
          <p className="border-b border-grey-soft px-6 pb-4 text-center text-grey-extra-hard">Плейлист: {selectedPlaylist?.title}</p>
          <div className="flex flex-col space-y-8 px-6 *:text-wrap">
            <Button
              className="text-xl text-foreground"
              variant={"link"}
              onClick={onRenamePlaylist}
            >
              Переименовать
            </Button>
            <Button
              className="text-xl text-foreground"
              variant={"link"}
              onClick={onChangePlaylist}
            >
              Выбрать другой плейлист
            </Button>
            <Button
              onClick={onDeletePlaylist}
              className="text-xl text-destructive"
              variant={"link"}
            >
              Удалить плейлист
            </Button>
            <DrawerClose asChild>
              <Button
                className="text-sm uppercase"
                variant={"outline"}
              >
                Закрыть
              </Button>
            </DrawerClose>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
