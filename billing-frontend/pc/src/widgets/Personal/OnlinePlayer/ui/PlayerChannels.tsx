import { Channel as ChannelType } from "@/src/gen/models/ts/Channel"
import React, { useEffect } from "react"
import { mockChannels } from "@/src/shared/mock/channels"
import { PlayerChannelCard } from "@/src/shared/ui/player-channel-card"
import { ScrollArea, ScrollAreaHandle } from "@/src/shared/ui/scroll-area"
import clsx from "clsx"
import { Button } from "@/src/shared/ui/button"
import { AppPagination } from "@/src/widgets/AppPagination"
import { useApiV1IptvPlaylistChannelsList } from "@/src/gen/clients/hooks/apiController/useApiV1IptvPlaylistChannelsList"
import { useOnlinePlayerCurrent } from "@/src/gen/clients/hooks/apiController/useOnlinePlayerCurrent"
import { EpgData } from "."

type Props = {
  selectChannel: ChannelType | null | undefined
  onSelectChannel: (val: ChannelType) => () => void
  channelSearch: string
  channels: ChannelType[] | undefined
  fullCurrentEPG: Record<number, EpgData> | undefined
  scrollToTopTrigger: any
}

export interface EnrichedChannel extends ChannelType {
  epgData: EpgData | null
}

export const PlayerChannels = ({ selectChannel, onSelectChannel, channelSearch, channels, scrollToTopTrigger }: Props) => {
  const { data: fullCurrentEPG } = useOnlinePlayerCurrent()

  const enrichChannels = (channels: ChannelType[], fullCurrentEPG: Record<number, EpgData>): EnrichedChannel[] => {
    return channels?.map((channel) => ({
      ...channel,
      epgData: channel?.tvg_logo ? fullCurrentEPG?.[parseInt(channel?.tvg_logo ?? "0", 10)] || null : null,
    }))
  }

  const filterChannels = (channels: EnrichedChannel[], channelSearch?: string): EnrichedChannel[] => {
    if (!channelSearch || channelSearch.trim().length === 0) {
      return channels
    }
    const lowercasedStr = channelSearch.trim().toLowerCase()
    return channels.filter((channel) => channel.name.toLowerCase().includes(lowercasedStr))
  }

  const enrichedChannels = enrichChannels(channels!, fullCurrentEPG!)
  const filteredChannels = filterChannels(enrichedChannels, channelSearch)

  const scrollAreaRef = React.useRef<ScrollAreaHandle>(null)

  useEffect(() => {
    if (scrollToTopTrigger) {
      handleScrollToTop()
    }
  }, [scrollToTopTrigger]) // Скролл будет происходить при изменении scrollToTopTrigger

  const handleScrollToTop = () => {
    scrollAreaRef.current?.scrollToTop()
  }

  // TODO ВЕРСТКА добавить лоадеры на загрузку
  return (
    <div
      className={clsx("my-4 mr-3 lg:m-0 lg:rounded-t-lg lg:bg-white", {
        "lg:hidden": selectChannel,
      })}
    >
      <ScrollArea
        ref={scrollAreaRef}
        className="h-[1300px] w-76 min-w-76 max-w-76 pr-4 lg:h-auto lg:w-full lg:min-w-0 lg:max-w-none lg:p-6 lg:pb-0"
      >
        <div className="space-y-2.5">
          {filteredChannels &&
            filteredChannels.map((item, indx) => {
              return (
                <PlayerChannelCard
                  {...item}
                  key={indx}
                  onClickHandler={onSelectChannel(item)}
                  isActive={selectChannel && selectChannel.id === item.id ? true : false}
                />
              )
            })}
        </div>
      </ScrollArea>

      {/* Pagination */}
      <div className="mt-10 hidden flex-col items-center space-y-4 lg:container lg:pb-10 md:flex">
        <Button
          className="w-full uppercase"
          variant={"outline"}
        >
          Дальше
        </Button>
        <div className="flex justify-center space-x-2">
          <AppPagination
            pathname={"/"}
            hideDots
            maxPageButtonsToShow={4}
            currentPage={1}
            onPageChange={() => console.log(1)}
            count={60}
            itemsPerPage={6}
          />
        </div>
      </div>
    </div>
  )
}
