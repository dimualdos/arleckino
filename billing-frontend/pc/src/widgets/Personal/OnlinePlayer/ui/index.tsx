"use client"

import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/shared/ui/select"
import { useApiV1IptvPlaylistChannelsList } from "@/src/gen/clients/hooks/apiController/useApiV1IptvPlaylistChannelsList"
import { useApiV1IptvPlaylistListList } from "@/src/gen/clients/hooks/apiController/useApiV1IptvPlaylistListList"
import { useApiV1UserDeviceListList } from "@/src/gen/clients/hooks/apiController/useApiV1UserDeviceListList"
import { useOnlinePlayerCurrent } from "@/src/gen/clients/hooks/apiController/useOnlinePlayerCurrent"
import { Group, PlaylistGroup } from "@/src/gen/models/ts/apiController/ApiV1IptvPlaylistChannelsList"
import { Channel, Channel as ChannelType } from "@/src/gen/models/ts/Channel"
import { UserPlaylist } from "@/src/gen/models/ts/Playlist"
import { useWindow } from "@/src/shared/hooks/useWindow"
import { Button } from "@/src/shared/ui/button"
import { Input } from "@/src/shared/ui/input"
import { Label } from "@/src/shared/ui/label"
import { AppHeader } from "@/src/widgets/AppHeader"
import clsx from "clsx"
import { ChevronLeft, ListFilter, Search } from "lucide-react"
import { FC, useEffect, useState } from "react"
import { PlayerChannel } from "./PlayerChannel"
import { PlayerChannels } from "./PlayerChannels"
import { PlayerFilter } from "./PlayerFilter"
import { useTranslations } from "next-intl"
interface ComponentProps {}

export type EpgData = { descr: string; duration: number; name: string; time: number; time_to: number }

export const PersonalOnlinePlayer: FC<ComponentProps> = () => {
  const t = useTranslations("onlinePlayer")
  const { data: channelsData, isLoading, isError, error } = useApiV1IptvPlaylistChannelsList()
  const { data: fullCurrentEPG } = useOnlinePlayerCurrent()
  const { data: playlistsData } = useApiV1IptvPlaylistListList()
  const { data: devicesData } = useApiV1UserDeviceListList()

  const groups = channelsData?.data.playlists
  const playlists = playlistsData?.data.results
  const devices = devicesData?.data.results
  const channels = channelsData?.data.channels

  // const [selectedChannelTime, selectedChannelTimeSet] = useState<number | null>(null)
  // const selectedChannelTimeHandler = (val: number | null) => () => {
  //   selectedChannelTime === val ? selectedChannelTimeSet(null) : selectedChannelTimeSet(val)
  // }

  const [channelsToShow, setChannelsToShow] = useState<ChannelType[] | undefined>(channels)
  const [selectedChannel, selectChannelSet] = useState<ChannelType | null>()
  const [selectedUserGroup, setSelectedUserGroup] = useState<UserPlaylist | null>(null) // списки каналов юзера
  const [selectedPlaylistGroup, setSelectedPlaylistGroup] = useState<PlaylistGroup | undefined>() // список плейлистов
  const [selectedPlaylist, setSelectedPlaylist] = useState<Group | null>() // конкретный плейлист
  const [channelSearch, setChannelSearch] = useState<string>("")
  const [scrollToTopTrigger, setScrollToTopTrigger] = useState(0)

  const onSelectChannel = (val: ChannelType | null) => () => {
    selectChannelSet(val)
    // Add if need
    // if (isWindow) {
    //   window.scrollTo({behavior: "smooth", top: 0})
    // }
  }

  useEffect(() => {
    selectChannelSet(channelsData?.data.channels[0])
  }, [channelsData])
  useEffect(() => {
    setChannelsToShow(channels)
  }, [channels])

  useEffect(() => {
    if (playlists) {
      setSelectedUserGroup(playlists[0])
      if (groups) {
        const group = groups.find((g) => g.id === playlists[0].id!) ?? groups[0]
        setSelectedPlaylistGroup(group)
        setSelectedPlaylist(null)
      }
    }
  }, [playlists, groups])

  useEffect(() => {
    if (groups) {
      const group = groups.find((g) => g.id === selectedUserGroup?.id) ?? groups[0]
      setSelectedPlaylistGroup(group)
      setSelectedPlaylist(null)
    }
  }, [groups, selectedUserGroup])

  useEffect(() => {
    if (selectedPlaylist) {
      const channelsToShow = channels?.filter((channel) => selectedPlaylist.channels.some((item) => item.ordering_id === channel.ordering_id))
      setChannelsToShow(channelsToShow!)
    } else {
      setChannelsToShow(channels)
    }
  }, [selectedPlaylist, channelsData, channels])

  const onSelectPlaylistGroup = (value: string) => {
    triggerScrollToTop()
    const playlist = playlists?.find((item) => item.title === value)
    if (playlist) {
      setSelectedUserGroup(playlist)
    }
  }
  const onSelectPlaylist = (value: string | undefined) => {
    triggerScrollToTop()
    let playlist: Group | undefined = undefined
    if (value) {
      playlist = selectedPlaylistGroup?.groups.find((item) => item.id === +value)
    }
    if (playlist) {
      setSelectedPlaylist(playlist)
    } else {
      setSelectedPlaylist(null)
    }
  }

  const ChannelEPG = fullCurrentEPG?.[selectedChannel?.tvg_logo || 0] || undefined
  const [openMobileFilter, openMobileFilterSet] = useState(false)
  const openMobileFilterToggle = () => openMobileFilterSet((prev) => !prev)

  const triggerScrollToTop = () => {
    setScrollToTopTrigger((prev) => prev + 1)
  }

  return (
    <>
      <div className="flex flex-1 flex-col">
        <AppHeader className="flex-row items-center justify-between space-y-2 lg:space-y-1">
          <h1 className="flex items-center space-x-2">
            <Button
              className={clsx("hidden", {
                "lg:block": selectedChannel,
              })}
              onClick={onSelectChannel(null)}
              variant={"outline"}
              size={"icon-sm"}
            >
              <ChevronLeft className="size-5" />
            </Button>
            <span className="lg:hidden">{t("h1")}</span>
            <span className={clsx("hidden lg:block")}>{!selectedChannel ? "Онлайн плеер" : selectedChannel.name}</span>
          </h1>
        </AppHeader>

        <div className="flex flex-1 flex-col bg-blue-soft pt-4 lg:pb-10 lg:pt-0">
          {/* TOP DESKTOP ACTIONS START */}
          <div className="container flex items-center justify-between pb-4 lg:hidden">
            <div className="inline-flex space-x-2">
              <div className="w-74 space-y-0.5">
                <Label className="block">{t("search")}</Label>
                <div className="relative">
                  <Input
                    onChange={({ target }) => setChannelSearch(target.value)}
                    placeholder={t("search")}
                  />
                  <Search className="absolute right-4 top-1/2 size-5 -translate-y-1/2 text-grey" />
                </div>
              </div>

              <div className="w-52 space-y-0.5">
                <Label>{t("group")}</Label>
                <Select
                  value={selectedPlaylist?.id.toString() ?? t("allChannels")}
                  onValueChange={onSelectPlaylist}
                >
                  <SelectTrigger className="text-base">
                    <SelectValue placeholder={t("group")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem
                        className="px-4"
                        key={null}
                        value={t("allChannels")}
                        // onClick={set}
                      >
                        <span className="text-base">{t("allChannels")}</span>
                      </SelectItem>
                      {selectedPlaylistGroup &&
                        selectedPlaylistGroup.groups.map((item) => (
                          <SelectItem
                            className="px-4"
                            key={item.id}
                            value={item.id.toString()}
                            // onClick={set}
                          >
                            <span className="text-base">{item.name}</span>
                          </SelectItem>
                        ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div className="w-52 space-y-0.5">
                <Label>{t("yourChannelLists")}</Label>
                <Select onValueChange={onSelectPlaylistGroup}>
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
          </div>
          {/* TOP DESKTOP ACTIONS END */}

          {/* MOBILE ACTIONS START */}
          <div
            className={clsx("container hidden items-center justify-between lg:py-4", {
              "lg:flex": !selectedChannel,
              hidden: selectedChannel,
            })}
          >
            <span>{t("h1")}</span>
            <div className="relative">
              <Button
                onClick={openMobileFilterToggle}
                className="inline-flex"
                variant={"outline"}
                size={"icon"}
              >
                <ListFilter />
              </Button>
              {/* TODO: Показывать если есль условия по фильтрам */}
              <span className="absolute -right-1 -top-1 size-3 rounded-full border-px border-white bg-accent" />
            </div>
          </div>
          {/* MOBILE ACTIONS END */}

          {/* ASIDE + CONTENT START */}
          <div className="max-h-[1330px] flex-1 border-t border-t-grey-soft lg:max-h-none lg:border-0">
            <div className="container flex lg:block lg:px-0">
              {/* ASIDE START */}
              <PlayerChannels
                onSelectChannel={onSelectChannel}
                selectChannel={selectedChannel}
                channelSearch={channelSearch}
                channels={channelsToShow}
                fullCurrentEPG={fullCurrentEPG}
                scrollToTopTrigger={scrollToTopTrigger}
              />
              {/* ASIDE END */}

              {/* CONTENT START */}
              <PlayerChannel selectedChannel={selectedChannel} />
              {/* CONTENT END */}
            </div>
          </div>
          {/* ASIDE + CONTENT END */}
        </div>
      </div>

      <PlayerFilter
        playlists={playlists}
        playlistGroup={selectedPlaylistGroup}
        open={openMobileFilter}
        openSet={openMobileFilterSet}
        toggle={openMobileFilterToggle}
        setSelectedUserGroup={setSelectedUserGroup}
        setChannelSearch={setChannelSearch}
        onSelectPlaylist={onSelectPlaylist}
      />
    </>
  )
}
