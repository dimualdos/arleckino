import React from "react"
import bgHeaderImage from "@/public/bg-playlist-header.jpg"
import iconAnyPlayer from "@/public/icon-any-player-white.svg"
import Link from "next/link"

type Props = {}

export const AnyPlayerCard = (props: Props) => {
  return (
    <div className="relative h-[128px] w-[265px] overflow-hidden rounded-lg bg-grey-soft lg:h-auto lg:w-full">
      <img
        alt=""
        width={bgHeaderImage.width}
        height={bgHeaderImage.height}
        src={bgHeaderImage.src}
        className="absolute inset-0 h-full w-full"
      />
      <div className="relative p-4 lg:p-6">
        <img
          alt=""
          src={iconAnyPlayer.src}
          width={iconAnyPlayer.width}
          height={iconAnyPlayer.height}
          className="w-[110px]"
        />
        <div className="mt-3 flex text-xs text-white lg:mt-6 lg:block lg:text-base">
          <p>IPTV плеер для удобного просмотра ваших любимых каналов, фильмов и сериалов </p>
          <Link
            href="/"
            className="ml-3 mt-auto text-xs text-accent lg:ml-0 lg:mt-6 lg:text-base"
          >
            Подробнее
          </Link>
        </div>
      </div>
    </div>
  )
}
