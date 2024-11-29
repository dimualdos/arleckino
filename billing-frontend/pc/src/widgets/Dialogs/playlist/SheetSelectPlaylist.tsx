import React from "react"
import { Drawer, DrawerClose, DrawerContent } from "@/shared/ui/drawer"
import { Button } from "@/src/shared/ui/button"
import { UserPlaylist } from "@/src/gen/models/ts/Playlist"

type Props = {
  isOpen: boolean
  onChange: React.Dispatch<React.SetStateAction<boolean>>
  availablePlayLists: UserPlaylist[]
  onSubmitSelectPlayList: (playList: UserPlaylist) => () => void
}

export const SheetSelectPlaylist = ({ isOpen, onChange, availablePlayLists, onSubmitSelectPlayList }: Props) => {
  return (
    <Drawer
      open={isOpen}
      onOpenChange={onChange}
    >
      <DrawerContent>
        <div className="w-full space-y-8 pb-10 pt-8">
          <p className="border-b border-grey-soft px-6 pb-4 text-center text-grey-extra-hard">Список плейлистов:</p>
          <div className="flex flex-col space-y-8 px-6 *:text-wrap">
            {availablePlayLists.map((playList) => {
              return (
                <Button
                  key={playList.id}
                  className="text-xl text-foreground"
                  variant={"link"}
                  onClick={onSubmitSelectPlayList(playList)}
                >
                  {playList.title}
                </Button>
              )
            })}

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
