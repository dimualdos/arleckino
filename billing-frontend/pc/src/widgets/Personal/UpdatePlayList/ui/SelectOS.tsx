import React from "react"
import useEmblaCarousel from "embla-carousel-react"
import { playlistOs } from "@/src/shared/mock/playlist"
import Link from "next/link"
import clsx from "clsx"
import { ChevronRight } from "lucide-react"
import { useApiV1IptvPlaylistOsList } from "@/src/gen/clients/hooks/apiController/useApiV1IptvPlaylistOsList"
import { LoadingOS } from "./LoadingOS"

type Props = {
  selected_os: string | undefined
  selected_format: string | undefined
  selected_device_id: string | undefined
}

export const SelectOS = ({ selected_os, selected_format, selected_device_id }: Props) => {
  const useGetPlayListOS = useApiV1IptvPlaylistOsList()
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    duration: 60,
    dragFree: true,
    containScroll: "trimSnaps",
  })
  
  return (
    <>
      {/* FOR DESKTOP */}
      <div className="overflow-hidden border-b border-b-grey-soft lg:hidden">
        <div className="container">
          <div className="embla">
            <div
              className="embla__viewport"
              ref={emblaRef}
            >
              <div className="embla__container items-center space-x-8 whitespace-nowrap lg:flex">
                {useGetPlayListOS.isLoading ? (
                  <LoadingOS />
                ) : (
                  useGetPlayListOS.data?.data.results.map((item) => {
                    return (
                      <Link
                        key={item.name}
                        className={clsx("relative pb-3", {
                          "text-accent": selected_os && selected_os === item.name.toLowerCase(),
                        })}
                        scroll={false}
                        href={{
                          href: "/personal-page/playlist",
                          query: {
                            selected_os: item.name.toLowerCase(),
                            selected_device_id: !selected_device_id?.length ? "" : selected_device_id,
                            selected_format: !selected_format?.length ? "" : selected_format,
                          },
                        }}
                      >
                        <span>{item.name}</span>
                        <span
                          className={clsx("absolute inset-x-0 -bottom-px h-1 bg-accent opacity-0", {
                            "opacity-100": selected_os && selected_os === item.name.toLowerCase(),
                          })}
                        />
                      </Link>
                    )
                  })
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOR MOBILE */}
      <div
        className={clsx("container hidden space-y-2 bg-blue-soft pb-10 pt-4 lg:block", {
          "lg:hidden": selected_os || selected_os?.length,
        })}
      >
        {playlistOs.map((item) => {
          return (
            <Link
              key={item.name}
              scroll={false}
              href={{
                href: "/personal-page/playlist",
                query: {
                  selected_os: item.name.toLowerCase(),
                },
              }}
              className="flex w-full items-center rounded-lg bg-white px-6 py-4"
            >
              <span className="truncate font-bold first-letter:uppercase">{item.name}</span>
              <ChevronRight className={clsx("ml-auto size-5 text-accent", {})}></ChevronRight>
            </Link>
          )
        })}
      </div>
    </>
  )
}
