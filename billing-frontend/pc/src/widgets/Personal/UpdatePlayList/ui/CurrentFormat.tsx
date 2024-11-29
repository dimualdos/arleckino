import { Button, buttonVariants } from "@/src/shared/ui/button"
import React, { useMemo, useState } from "react"
import { FaqItem } from "./FaqItem"
import { AnyPlayerCard } from "./AnyPlayerCard"
import clsx from "clsx"
import { PlaylistType } from "@/src/gen/models/ts/PlaylistType"
import { FormatItemProps } from "../types"
import { Device } from "@/src/gen/models/ts/Device"
import Link from "next/link"

type Props = {
  selectedDevice: Device | null
  currentFormatOfSelectedDevice: PlaylistType | null | undefined
  selected_format: string | undefined
  setOpenOTT: () => void
}

export const CurrentFormat = ({ selectedDevice, currentFormatOfSelectedDevice, selected_format, setOpenOTT }: Props) => {
  const parsedDescription = useMemo(() => {
    {
      if (!currentFormatOfSelectedDevice) return null
      try {
        const parsedItem = JSON.parse(currentFormatOfSelectedDevice.description) as FormatItemProps[]
        const description = parsedItem[0].items.join(". ")
        return description
      } catch (error) {
        return null
      }
    }
  }, [currentFormatOfSelectedDevice])

  const parsedSegmentURL = !selectedDevice?.ott_id || !currentFormatOfSelectedDevice?.download_url ? "" : currentFormatOfSelectedDevice.download_url.replace("{ott_id}", selectedDevice.ott_id)
  const downloadFileUrl = `${process.env.NEXT_PUBLIC_API_URL}${parsedSegmentURL}`

  const linkSourses = useMemo(() => {
    const ott_id = !selectedDevice?.ott_id?.length ? "" : selectedDevice.ott_id
    const parsedSegment = currentFormatOfSelectedDevice?.url?.split("/iptv")[1].replace("{ott_id}", ott_id).slice(0, -1)
    const httpURL = `http://${process.env.NEXT_PUBLIC_HOSTNAME}${parsedSegment}`;
    const httpsURL = `https://${process.env.NEXT_PUBLIC_HOSTNAME}${parsedSegment}`

    const httpAndHttps = [httpURL, httpsURL]
    return {
      httpAndHttps: {
        title: "Прямые ссылки (http и https)",
        urls: httpAndHttps,
      },
      sourcesOfEPG: {
        title: "Источники EPG",
        urls: !currentFormatOfSelectedDevice ? [] : currentFormatOfSelectedDevice.epg_urls,
      },
      LITEsourcesOfEPG: {
        title: "LITE источники EPG",
        urls: !currentFormatOfSelectedDevice ? [] : currentFormatOfSelectedDevice.epg_lite_urls,
      },
      Picon: {
        title: "Picon",
        urls: !currentFormatOfSelectedDevice ? [] : currentFormatOfSelectedDevice.picon_urls,
      },
    }
  }, [currentFormatOfSelectedDevice, selectedDevice])

  return (
    <div
      className={clsx("w-full flex-1 py-7 pl-8 lg:bg-white lg:p-6 lg:pb-10", {
        hidden: !selected_format || !selected_format?.length,
      })}
    >
      <div className="flex">
        <div className="mr-auto lg:w-full">
          <p className="text-2xl font-bold">Формат: {currentFormatOfSelectedDevice?.name}</p>
          <p className="mt-1 text-grey-extra-hard">{parsedDescription}</p>
          <Link
            target="_blank"
            className={buttonVariants({ variant: "link", className: "mt-4 lg:hidden" })}
            href={downloadFileUrl}
          >
            Скачать файл «{currentFormatOfSelectedDevice?.name}»
          </Link>

          <Link
            target="_blank"
            className={buttonVariants({ variant: "outline", className: "hidden w-full uppercase lg:mt-6 lg:flex" })}
            href={downloadFileUrl}
          >
            Скачать файл «{currentFormatOfSelectedDevice?.name}»
          </Link>
        </div>
        <Button
          onClick={setOpenOTT}
          variant={"outline"}
          className="mb-auto ml-2 px-3 lg:hidden"
        >
          OTT-ID
        </Button>
      </div>

      <div className="mt-8 space-y-2">
        <FaqItem
          name={"Прямые ссылки (http и https)"}
          links={linkSourses.httpAndHttps.urls}
        />

        <FaqItem
          name="Источники EPG"
          links={linkSourses.sourcesOfEPG.urls}
        />

        <FaqItem
          name="LITE источники EPG"
          links={linkSourses.LITEsourcesOfEPG.urls}
        />

        <FaqItem
          name="Picon"
          links={linkSourses.Picon.urls}
        />
      </div>

      <Button
        onClick={setOpenOTT}
        variant={"outline"}
        className="mt-12 hidden w-full lg:flex"
      >
        OTT-ID
      </Button>

      <div className="mt-8 hidden lg:block">
        <AnyPlayerCard />
      </div>
    </div>
  )
}
