import React from "react"
import iconAnyPlayer from "@/public/icon-any-player-white.svg"
import iconFeature1 from "@/public/icon-any-player-feature-1.svg"
import iconFeature2 from "@/public/icon-any-player-feature-2.svg"
import iconFeature3 from "@/public/icon-any-player-feature-3.svg"
import bgAnyPlayer1 from "@/public/bg-any-player-1.jpg"
import bgAnyPlayer2 from "@/public/bg-any-player-2.png"
import bgAnyPlayer3 from "@/public/bg-any-player-3.png"
import bgAnyPlayer4 from "@/public/bg-any-player-4.png"
import bgAnyPlayer5 from "@/public/bg-any-player-5.png"
import bgAnyPlayer6 from "@/public/bg-any-player-6.png"

import iconLogoTv1 from "@/public/logo-android.svg"
import iconLogoTv2 from "@/public/logo-apple.svg"
import iconLogoTv3 from "@/public/logo-lg.svg"
import iconLogoTv4 from "@/public/logo-mi.svg"
import iconLogoTv5 from "@/public/logo-hisense.svg"
import iconLogoTv6 from "@/public/logo-philips.svg"
import iconLogoTv7 from "@/public/logo-vizio.svg"
import iconLogoTv8 from "@/public/logo-firetv.svg"
import iconLogoTv9 from "@/public/logo-vidaa.svg"
import iconLogoTv10 from "@/public/logo-samsung.svg"

import Image, { StaticImageData } from "next/image"
import { Button } from "@/src/shared/ui/button"
import { Download } from "lucide-react"
import { Player } from "./Player"
import { useTranslations } from "next-intl"
type Props = {}

const DownloadButton = ({ text }: { text: string }) => (
  <a
    href="https://anyplayer.app/dl/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button className="w-full">
      <Download className="size-5 text-white" />
      <span className="ml-1 uppercase">{text}</span>
    </Button>
  </a>
)

export const PersonalAnyPlayer = (props: Props) => {
  const t = useTranslations("anyPlayer")
  const features = [
    {
      icon: {
        width: iconFeature1.width,
        height: iconFeature1.height,
        src: iconFeature1.src,
      },
      title: t("features.title1"),
      descr: t("features.descr1"),
    },

    {
      icon: {
        width: iconFeature2.width,
        height: iconFeature2.height,
        src: iconFeature2.src,
      },
      title: t("features.title2"),
      descr: t("features.descr2"),
    },

    {
      icon: {
        width: iconFeature3.width,
        height: iconFeature3.height,
        src: iconFeature3.src,
      },
      title: t("features.title3"),
      descr: t("features.descr3"),
    },
  ]
  const brandIcons: StaticImageData[] = [iconLogoTv1, iconLogoTv2, iconLogoTv3, iconLogoTv4, iconLogoTv5, iconLogoTv6, iconLogoTv7, iconLogoTv8, iconLogoTv9, iconLogoTv10]
  const bgScreens: StaticImageData[] = [bgAnyPlayer2, bgAnyPlayer3, bgAnyPlayer4, bgAnyPlayer5, bgAnyPlayer6]

  return (
    <div>
      {/* 1 */}
      <div className="relative min-h-[832px] bg-grey-soft pb-10 pt-24 lg:min-h-[480px] lg:py-14">
        <Image
          className="absolute inset-0 h-full w-full object-cover"
          alt=""
          unoptimized
          src={bgAnyPlayer1.src}
          width={bgAnyPlayer1.width}
          height={bgAnyPlayer1.height}
        />
        <div className="relative flex flex-col items-center">
          <Image
            className="h-auto w-44 lg:w-32"
            src={iconAnyPlayer.src}
            alt=""
            unoptimized
            width={iconAnyPlayer.width}
            height={iconAnyPlayer.height}
          />
          <p className="mt-6 max-w-[760px] text-center text-3xl font-light text-white lg:text-lg lg:font-normal">
            {t("title1")}
            <br /> {t("title2")}
          </p>
          <div className="mt-11 lg:mt-10">
            <DownloadButton text={t("buttonDownload")} />
          </div>
        </div>
        <Player />
      </div>

      {/* 2 */}
      <div className="container pb-28 pt-40 lg:pb-14 lg:pt-22">
        <div className="grid grid-cols-3 justify-center gap-6 text-left lg:grid-cols-1 lg:gap-8">
          {features.map((item, indx) => (
            <div key={indx}>
              <img
                className=""
                alt=""
                src={item.icon.src}
                width={item.icon.width}
                height={item.icon.height}
              />
              <p className="mt-2 max-w-[70%] text-2xl font-bold lg:max-w-none lg:text-xl">{item.title}</p>
              <p className="mt-3 text-2xl lg:mt-2 lg:text-base">{item.descr}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 3 */}
      <div className="bg-[#2B303B] py-18 lg:bg-purple-hard lg:py-12">
        <div className="container flex max-w-[985px] flex-wrap justify-center gap-x-16 gap-y-12 lg:grid lg:grid-cols-2">
          {brandIcons.map((item, indx) => (
            <Image
              key={indx}
              unoptimized
              className="lg:mx-auto"
              alt=""
              src={item.src}
              width={item.width}
              height={item.height}
            />
          ))}
        </div>
      </div>

      {/* 4 */}
      <div className="relative pb-52 pt-20 lg:py-14">
        <div className="gradient-for-any-player absolute inset-0 h-full w-full"></div>
        <div className="container relative flex flex-col items-center">
          <p className="hidden text-center text-lg text-white lg:block">Скриншоты плеера</p>
          <div className="grid grid-cols-2 gap-9 lg:mt-6 lg:w-full lg:grid-cols-1 lg:gap-4">
            {bgScreens.slice(0, 2).map((item, indx) => (
              <Image
                key={indx}
                unoptimized
                className="overflow-hidden rounded-lg lg:w-full"
                alt=""
                src={item.src}
                width={item.width}
                height={item.height}
              />
            ))}
          </div>
          <div className="mt-8 grid grid-cols-3 justify-center gap-6 lg:mt-4 lg:w-full lg:grid-cols-1 lg:gap-4">
            {bgScreens.slice(2, bgScreens.length).map((item, indx) => (
              <Image
                key={indx}
                unoptimized
                className="mx-auto overflow-hidden rounded-lg lg:w-full"
                alt=""
                src={item.src}
                width={item.width}
                height={item.height}
              />
            ))}
          </div>

          <div className="mt-20 lg:mt-10 lg:w-full">
            <DownloadButton text={t("buttonDownload")} />
          </div>
        </div>
      </div>
    </div>
  )
}
