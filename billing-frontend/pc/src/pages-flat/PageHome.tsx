import React, { FC, useEffect, useState } from "react"
import bgFirst from "@/public/bg-home-first-screen.jpg"
import imgScreen2 from "@/public/img-popcorn.png"
import imgScreen3 from "@/public/img-any-player.png"
import imgScreen4 from "@/public/img-flags.png"
import imgScreen5 from "@/public/img-tvs.png"
import imgScreen7 from "@/public/img-playlist.png"
import imgScreen8 from "@/public/img-money.png"
import iconAnyPlayer from "@/public/icon-any-player-white.svg"
import iconTelegram from "@/public/icon-telegram.svg"
import Image from "next/image"
import { Button, buttonVariants } from "@/src/shared/ui/button"
import Link from "next/link"
import clsx from "clsx"
import { useTranslations } from "next-intl"
import { useAuth } from "../shared/hooks/useAuth"
import { useApiV1UserInfoRead } from "../gen/clients/hooks/apiController/useApiV1UserInfoRead"

interface ComponentProps {}
interface PriceItemProps {
  variant?: "default" | "white"
  title: string
  price: string
  subtitle?: string
  subtitleColor?: string
  color1: string
  color2: string
  mobileBackground: string
  pediod: string
  description: string[]
  link: string
}

const PriceItem = ({ variant = "default", color1, color2, mobileBackground, title, pediod, subtitle, subtitleColor, description, price, link }: PriceItemProps) => {
  const t = useTranslations("homePage")
  const useApiUserInfo = useApiV1UserInfoRead()
  const isUserActive = useApiUserInfo.data?.data.is_active;
  return (
    <div className="relative h-[490px] overflow-hidden rounded-2xl pb-8 pl-10 pr-8 pt-10 shadow-price-item transition-all duration-300 hover:-translate-y-1 md:h-auto md:p-6">
      {/* MOBILE BACKGROUND */}
      <div
        style={{ background: mobileBackground }}
        className="absolute inset-0 hidden h-full w-full md:block"
      ></div>
      {/* DESKTOP BACKGROUND */}
      <svg
        className="absolute inset-0 h-full w-full xl:scale-[2.2] md:hidden"
        width="291"
        height="490"
        viewBox="0 0 291 490"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_798_11821)">
          <path
            d="M422.342 270.667C331.645 275.866 257.799 252.858 197.62 212.121C-88.1878 234.694 -230.704 -17.3494 -262.285 -81.7207L-659.771 725.964L189.769 709.651L422.342 270.667Z"
            fill={color2}
          />
          <path
            d="M197.62 212.122C-61.4371 36.6406 -66.5664 -468 -66.5664 -468L-262.285 -81.7201C-230.704 -17.3488 -88.1876 234.695 197.62 212.122Z"
            fill={color1}
          />
          <path
            d="M422.34 270.668L517.818 90.459C395.64 169.411 289.265 204.882 197.619 212.123C257.804 252.885 331.656 275.873 422.34 270.668Z"
            fill={color1}
          />
        </g>
        <defs>
          <clipPath id="clip0_798_11821">
            <rect
              width="291"
              height="490"
              fill="white"
            />
          </clipPath>
        </defs>
      </svg>
      {/* MOBILE SUBTITLE */}
      {!subtitle || !subtitle.length ? null : (
        <span
          style={{ color: mobileBackground }}
          className="absolute right-6 top-6 hidden rounded-full bg-background px-3 py-0.5 text-sm font-bold md:inline-block"
        >
          {subtitle}
        </span>
      )}

      <div className="relative flex h-full flex-col text-xl">
        <div className="text-right md:mr-auto md:text-left">
          <p
            className={clsx("md:text-base", {
              "md:text-background": variant === "white",
            })}
          >
            {title}
          </p>
          <p
            className={clsx("text-4xl font-semibold md:text-2xl", {
              "md:text-background": variant === "white",
            })}
          >
            {pediod}
          </p>
          {!subtitle || !subtitle.length || !subtitleColor || !subtitleColor.length ? null : (
            <p
              style={{ color: subtitleColor }}
              className="mt-2 text-xl font-semibold md:hidden"
            >
              {subtitle}
            </p>
          )}
        </div>

        <div
          className={clsx("mr-auto mt-auto text-left font-semibold md:mr-0 md:mt-6", {
            "text-background": variant === "white",
          })}
        >
          <div className="md:mb-6 md:flex md:items-center md:space-x-5">
            <p className="mb-3 whitespace-nowrap text-5xl md:mb-0 md:text-4xl xxs:text-2xl">{price}</p>
            <div className="mb-9 md:mb-0 md:text-base md:font-medium">
              {description.map((item, indx) => (
                <p
                  className="leading-none"
                  key={indx}
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
          <Link
            href={!isUserActive ? "/sign-in" : "/personal-page/subscription"}
            className={buttonVariants({ className: "text-sm uppercase text-background md:w-full" })}
          >
            {t("price.btn")}
          </Link>
        </div>
      </div>
    </div>
  )
}

export const PageHome: FC<ComponentProps> = () => {
  const t = useTranslations("homePage")
  const [count, setCount] = useState(0)
  const useApiUserInfo = useApiV1UserInfoRead()
  const isUserActive = useApiUserInfo.data?.data.is_active;
  
  const dataPrices: PriceItemProps[] = [
    {
      color1: "#F5F5F5",
      color2: "#D9D9D9",
      mobileBackground: "#F5F5F5",
      title: t("price.cardTitle"),
      pediod: t("price.card1.title"),
      subtitle: "",
      price: t("price.card1.price"),
      description: [t("price.noSale")],
      link: "/",
    },
    {
      color1: "#F5F5F5",
      color2: "#D9D9D9",
      mobileBackground: "#F5F5F5",
      title: t("price.cardTitle"),
      pediod: t("price.card1.title"),
      subtitle: "",
      price: t("price.card2.price"),
      description: [t("price.noSale")],
      link: "/",
    },

    {
      variant: "white",
      color1: "#DAE8FD",
      color2: "#5EA7F8",
      mobileBackground: "#5EA7F8",
      title: t("price.cardTitle"),
      pediod: t("price.card3.title"),
      subtitle: "Популярный",
      subtitleColor: "#606FC9",
      price: t("price.card3.price"),
      description: [t("price.card3.sale"), t("price.card3.benedit")],
      link: "/",
    },

    {
      variant: "white",
      color1: "#F3F5FF",
      color2: "#606FC9",
      mobileBackground: "#606FC9",
      title: t("price.cardTitle"),
      pediod: t("price.card4.title"),
      subtitle: "Выгодный",
      subtitleColor: "#FF9800",
      price: t("price.card4.price"),
      description: [t("price.card4.sale"), t("price.card4.benedit")],
      link: "/",
    },
  ]

  return (
    <div className="flex-1">
      {/* 1 SCREEN START */}
      <div className="relative flex justify-center overflow-hidden bg-[#9ba8f0] text-center text-background">
        <Image
          className="absolute inset-0 h-full w-full object-cover"
          fill
          src={bgFirst.src}
          alt=""
        />
        <div className="container relative flex flex-col py-40 font-semibold md:pb-[56px] md:pt-[62px] md:font-medium">
          <p className="mb-4 text-xl md:hidden">{t("header.upTitle")}</p>
          <p className="mb-2 text-5xl md:mb-6 md:text-lg md:leading-[31px]">
            <span className="font-bold text-[#00F0FF] md:block md:text-32">{t("header.numTitle1")}</span> {t("header.title1")}
          </p>
          <p className="mb-2 text-5xl md:mb-6 md:text-lg md:leading-[31px]">
            <span className="font-bold text-[#00F0FF] md:block md:text-32">{t("header.numTitle2")}</span> {t("header.title2")}
          </p>
          <p className="mb-16 text-5xl md:mb-10 md:text-lg md:leading-[31px]">
            {t("header.title3")} <span className="font-bold text-[#00F0FF] md:block md:text-32">{t("header.title3c")}</span>
          </p>
          <p className="mb-10 text-xl md:mb-8 md:text-xs">
            {t("header.descr")} <br /> {t("header.descr02")}
          </p>

          <Link
            href={!isUserActive ? "/sign-in" : "/personal-page/subscription"}
            className={buttonVariants({className: "mx-auto uppercase text-background md:w-full", size: "sm"})}
          >
            {t("header.btn")}
          </Link>
        </div>
      </div>

      {/* 1 SCREEN END */}
      {/* 2 SCREEN START */}
      <div className="container flex items-center py-[105px] md:flex-col-reverse md:py-14">
        <Image
          className="mr-auto max-w-[465px] lg:max-w-[365px] md:mx-auto md:w-full md:px-6"
          src={imgScreen2.src}
          width={imgScreen2.width}
          height={imgScreen2.height}
          alt=""
        />
        <div className="pt-100 ml-30 font-semibold md:mb-8 md:ml-0 md:pt-0">
          <p className="mb-8 text-5xl md:mb-4 md:text-2xl">
            {t("test.title")} <br className="md:hidden" /> {t("test.title2")}
          </p>
          <p className="text-xl text-[#606FC9] md:text-base md:font-medium">
            {t("test.descr")} <br /> {t("test.descr02")} <br /> {t("test.descr03")}
          </p>
        </div>
      </div>
      {/* 2 SCREEN END */}

      {/* 3 SCREEN START */}
      <div style={{ background: "radial-gradient(52.63% 126.31% at 71.35% 50%, #9FB0FF 0%, #3C4D9F 86.68%)" }}>
        <div className="container flex items-center py-[145px] md:flex-col md:py-14">
          <div className="mr-[110px] w-[57%] max-w-[582px] font-semibold text-background md:mx-0 md:mb-8 md:w-full md:max-w-none">
            <Image
              className="mb-14 md:mb-4 md:h-6 md:w-auto"
              src={iconAnyPlayer.src}
              alt=""
              unoptimized
              width={iconAnyPlayer.width}
              height={iconAnyPlayer.height}
            />
            <p className="mb-8 text-5xl md:mb-4 md:text-2xl"> {t("anyplayer.title")}</p>

            <div className="mb-10 max-w-[570px] text-xl md:mb-4 md:text-base md:font-medium">
              {t("anyplayer.descr")}
              <br />
              {t("anyplayer.include.title")}
              <ul className="custom-list ml-5 list-inside">
                <li className="pl-5">{t("anyplayer.include.ul1")}</li>
                <li className="pl-5">{t("anyplayer.include.ul2")}</li>
                <li className="pl-5">{t("anyplayer.include.ul3")} </li>
                <li className="pl-5">{t("anyplayer.include.ul4")}</li>
              </ul>
            </div>

            <Link
              href="/"
              className="text-xl text-accent md:text-base md:font-medium"
            >
              {t("anyplayer.btn")}
            </Link>
          </div>

          <div className="ml-auto lg:w-auto md:mx-auto md:px-6">
            <Image
              className="block"
              src={imgScreen3.src}
              width={imgScreen3.width}
              height={imgScreen3.height}
              alt=""
            />
          </div>
        </div>
      </div>
      {/* 3 SCREEN END */}
      {/* 4 SCREEN START */}
      <div className="container flex items-center pb-28 pt-32 md:flex-col-reverse md:py-14">
        <Image
          className="mr-auto w-[40%] md:mx-auto md:w-full md:px-6"
          src={imgScreen4.src}
          width={imgScreen4.width}
          height={imgScreen4.height}
          alt=""
        />
        <div className="pt-75 ml-30 font-semibold md:mb-8 md:ml-0 md:pt-0">
          <p className="mb-8 text-5xl md:mb-4 md:text-2xl">
            {t("tv.title1")} <br /> {t("tv.title2")}
          </p>
          <p className="text-xl text-[#606FC9] md:text-base md:font-medium">
            {t("tv.descr1-1")} <br />
            {t("tv.descr1-2")}
            <br />
            <br />
            {t("tv.descr2-1")} <br />
            {t("tv.descr2-2")}
            <br />
            {t("tv.descr2-3")} {t("tv.descr2-4")}
          </p>
        </div>
      </div>
      {/* 4 SCREEN END */}
      {/* 5 SCREEN START */}
      <div style={{ background: "radial-gradient(48.31% 115.94% at 50% 88.75%, #9FB0FF 0%, #3C4D9F 100%)" }}>
        <div className="container relative min-h-[800px] max-w-[950px] py-22 text-center font-semibold text-white md:min-h-full md:py-14 md:text-left">
          <p className="mb-8 text-5xl md:mb-4 md:text-2xl">{t("howTo.title")}</p>
          <p className="mb-10 text-xl md:mb-6 md:text-base md:font-medium">
            {t("howTo.descr")} <br />
            {t("howTo.descr2")}
          </p>
          <Link
            href="/"
            className={buttonVariants({ className: "text-sm uppercase text-background xs:w-full" })}
          >
            {t("howTo.btn")}
          </Link>
          <Image
            className="absolute -bottom-40 left-1/2 h-auto w-[986px] -translate-x-1/2 md:static md:mt-8 md:w-full md:translate-x-0"
            src={imgScreen5.src}
            alt=""
            width={imgScreen5.width}
            height={imgScreen5.height}
          />
        </div>
      </div>
      {/* 5 SCREEN END */}
      {/* 6 SCREEN START */}
      <div>
        <div className="container pb-[88px] pt-[225px] text-center md:py-14 md:text-left">
          <p className="mb-3 text-5xl font-semibold md:mb-4 md:text-2xl">Стоимость</p>
          <p className="mb-12 text-xl text-[#606FC9] md:mb-8 md:text-base">У нас есть скидки за покупку подписки на длительный срок и бонусы за пополнение баланса до 10%</p>
          <div className="grid grid-cols-4 gap-3 xl:grid-cols-2 sm:grid-cols-1">
            {dataPrices.map((item, indx) => {
              return (
                <PriceItem
                  key={indx}
                  {...item}
                  variant={item.variant}
                />
              )
            })}
          </div>
        </div>
      </div>
      {/* 6 SCREEN END */}

      {/* 7 SCREEN START */}
      <div style={{ background: "radial-gradient(47.03% 112.88% at 29.77% 55.19%, #9FB0FF 0%, #3C4D9F 100%)" }}>
        <div className="container flex items-center pb-[138px] pt-38 md:flex-col-reverse md:py-14">
          <Image
            className="mr-8 w-[38%] md:mx-auto md:w-full md:px-4"
            src={imgScreen7.src}
            width={imgScreen7.width}
            height={imgScreen7.height}
            alt=""
          />

          <div className="ml-auto w-[55%] min-w-[400px] font-semibold text-white md:w-auto md:min-w-full">
            <p className="mb-8 text-5xl md:mb-4 md:text-2xl"> {t("playlist.title")}</p>

            <p className="mb-8 text-2xl md:mb-4 md:text-base"> {t("playlist.descr")}</p>

            <div className="text-xl *:mb-5 md:text-base md:font-medium">
              <p>
                <span className="text-[#09FFFF]"> {t("playlist.faqs.faq1.question")}</span>
                <br />
                {t("playlist.faqs.faq1.answer")}
              </p>
              <p>
                <span className="text-[#09FFFF]">{t("playlist.faqs.faq2.question")}</span>
                <br />
                {t("playlist.faqs.faq2.answer")}
              </p>

              <p>
                <span className="text-[#09FFFF]">{t("playlist.faqs.faq3.question")}</span>
                <br />
                {t("playlist.faqs.faq3.answer")}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* 7 SCREEN END */}

      {/* 8 SCREEN START */}
      <div className="container flex items-center py-22 md:flex-col md:pb-[135px] md:pt-14">
        <div className="mr-auto w-[54%] min-w-[300px] font-semibold md:mb-4 md:mr-0 md:w-auto">
          <p className="mb-8 text-5xl md:mb-4 md:text-2xl"> {t("earn.title")}</p>
          <p className="text-xl text-[#606FC9] md:text-base md:font-medium">
            {t("earn.descr01")}
            <br /> {t("earn.descr02")}
            <br />
            <br /> {t("earn.descr03")}{" "}
            <Link
              href={!isUserActive ? "/sign-in" : "/personal-page/referrals"}
              className="text-accent"
            >
              {t("earn.btn")}
            </Link>
          </p>
        </div>

        <Image
          className="w-[39%] md:w-full md:px-6"
          src={imgScreen8.src}
          width={imgScreen8.width}
          height={imgScreen8.height}
          alt=""
        />
      </div>
      {/* 8 SCREEN END */}

      {/* 9 SCREEN START */}
      <div className="bg-[#606FC9]">
        <div className="container flex items-center py-[39px] text-xl text-background lg:flex-col lg:py-14">
          <div className="inline-flex w-[46%]  items-center lg:w-full lg:flex-col">
            <p className="mr-[56px] font-semibold lg:mb-8 lg:mr-0 lg:text-center">
              {t.rich("prefooter.title1", {
                br: () => <br className="hidden lg:block" />,
              })}
            </p>
            <Link
              href={!isUserActive ? "/sign-in" : "/personal-page/subscription"}
              className={buttonVariants({className: "ml-auto-14 uppercase text-background lg:ml-0 xs:w-full", size: "sm"})}
            >
              {t("prefooter.btn1")}
            </Link>
          </div>

          <span className="mx-auto h-[122px] w-px bg-[#97A5F9] lg:my-12 lg:h-px lg:w-[122px]"></span>

          <div className="inline-flex max-w-[432px] items-center space-x-14 lg:mt-0 lg:flex-col lg:space-x-0 lg:space-y-8 lg:text-center">
            <p className="font-semibold">
              {t.rich("prefooter.title2", {
                br: () => <br className="hidden lg:block" />,
              })}
              <Link
                className="text-accent"
                href="/"
              >
                {t("prefooter.btn2")}
              </Link>
            </p>
            <a
              target="_blank"
              href="https://telegram.me/sharavoztv_bot"
              className="inline-flex size-18 min-w-18 items-center justify-center rounded-full bg-[#5EA7F8]"
            >
              <Image
                className="w-11 -translate-x-1"
                src={iconTelegram.src}
                alt=""
                unoptimized
                width={iconTelegram.width}
                height={iconTelegram.height}
              />
            </a>
          </div>
        </div>
      </div>
      {/* 9 SCREEN END */}
    </div>
  )
}
