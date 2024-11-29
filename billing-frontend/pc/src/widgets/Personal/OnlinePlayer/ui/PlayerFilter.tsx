import React, { Dispatch, SetStateAction, useState } from "react"
import { Drawer, DrawerContent, DrawerClose } from "@/src/shared/ui/drawer"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/shared/ui/select"
import { Label } from "@/src/shared/ui/label"
import { Input } from "@/src/shared/ui/input"
import { ListFilter, Search, Calendar as CalendarIcon } from "lucide-react"
import { Popover } from "@/src/shared/ui/popover"
import { Button } from "@/src/shared/ui/button"
import { mockGroups } from "@/src/shared/mock/channels"
import { UserPlaylist } from "@/src/gen/models/ts/Playlist"
import { Group, PlaylistGroup } from "@/src/gen/models/ts/apiController/ApiV1IptvPlaylistChannelsList"
import { useTranslations } from "next-intl"

type Props = {
  open: boolean
  openSet: React.Dispatch<React.SetStateAction<boolean>>
  toggle: () => void
  playlistGroup: PlaylistGroup | undefined
  playlists: UserPlaylist[] | undefined
  setSelectedUserGroup: Dispatch<SetStateAction<UserPlaylist | null>>
  setChannelSearch: Dispatch<SetStateAction<string>>
  onSelectPlaylist: (value: string | undefined) => void
}

export const PlayerFilter = ({ open, openSet, toggle, playlists, playlistGroup, setSelectedUserGroup, onSelectPlaylist, setChannelSearch }: Props) => {
  const t = useTranslations("onlinePlayer")
  const [localPlaylist, setLocalPlaylist] = useState<Group | undefined>(undefined)
  const [localPlaylisGroup, setLocalPlaylistGroup] = useState<UserPlaylist | undefined>(undefined)
  const [localChannelSearch, setLocalChannelSearch] = useState<string>("")
  const onSelectPlaylistGroup = (value: string) => {
    const playlist = playlists?.find((item) => item.title === value)
    if (playlist) {
      setLocalPlaylistGroup(playlist)
      setSelectedUserGroup(playlist)
    }
  }
  const onSelectLocalPlaylist = (value: string | undefined) => {
    console.log("localvalue", value)
    if (value === undefined) {
      setLocalPlaylist(undefined)
    } else {
      const localPlaylist = playlistGroup?.groups.find((g) => g.id === +value)
      setLocalPlaylist(localPlaylist)
    }
  }

  const handleSubmit = () => {
    setChannelSearch(localChannelSearch)
    onSelectPlaylist(localPlaylist?.id?.toString())
  }

  const resetSearch = () => {
    setLocalChannelSearch("")
    setLocalPlaylistGroup(undefined)
    setLocalPlaylist(undefined)
    onSelectPlaylist(undefined)
  }
  return (
    <Drawer
      open={open}
      onOpenChange={openSet}
    >
      <DrawerContent className="block p-6">
        <div className="flex items-center justify-between">
          <p className="text-bold text-xl">{t("filter")}</p>
          <DrawerClose asChild>
            <button
              onClick={resetSearch}
              className="text-accent"
            >
              {t("buttonClear")}
            </button>
          </DrawerClose>
        </div>

        <div className="mt-4 space-y-4">
          <div className="mt-auto space-y-0.5">
            <Label>{t("search")}</Label>
            <div className="relative">
              <Input
                onChange={({ target }) => setLocalChannelSearch(target.value)}
                placeholder={t("search")}
              />
              <Search className="absolute right-4 top-1/2 size-5 -translate-y-1/2 text-grey" />
            </div>
          </div>

          <div className="space-y-0.5">
            <Label>{t("group")}</Label>
            <Select
              defaultValue={localPlaylist?.id.toString()}
              onValueChange={onSelectLocalPlaylist}
            >
              <SelectTrigger className="text-base">
                <SelectValue placeholder={t("allChannels")} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem
                    className="px-4"
                    key={null}
                    value={"undefined"}
                  >
                    <span className="text-base">{t("allChannels")}</span>
                  </SelectItem>
                  {playlistGroup?.groups.map((item) => (
                    <SelectItem
                      className="px-4"
                      key={item.id}
                      value={item.id.toString()}
                    >
                      <span className="text-base">{item.name}</span>
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-0.5">
            <Label>{t("yourChannelLists")}</Label>
            <Select
              defaultValue={localPlaylisGroup?.title}
              onValueChange={onSelectPlaylistGroup}
            >
              <SelectTrigger className="text-base">
                <SelectValue placeholder={t("channelLists")} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {playlists?.map((item) => (
                    <SelectItem
                      className="px-4"
                      key={item.id}
                      value={item.title}
                    >
                      <span className="text-base">{item.title}</span>
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 space-x-2">
          <DrawerClose asChild>
            <Button
              variant={"outline"}
              className="mt-0 uppercase"
            >
              {t("cancel")}
            </Button>
          </DrawerClose>
          <DrawerClose asChild>
            <Button
              onClick={handleSubmit}
              className="uppercase"
            >
              {t("submit")}
            </Button>
          </DrawerClose>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
