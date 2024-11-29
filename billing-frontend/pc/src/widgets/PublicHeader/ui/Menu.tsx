import { ResponseConfig } from "@/src/axios-client"
import { User } from "@/src/gen/models/ts/User"
import { Button } from "@/src/shared/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/src/shared/ui/dropdown-menu"
import { UseQueryResult } from "@tanstack/react-query"
import Link from "next/link"
import { usePublicheader } from "../hooks/usePublicheader"
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/src/shared/ui/sheet"
import iconLogin from "@/public/icon-login.svg"
import iconBar from "@/public/icon-bar.svg"
import Image from "next/image"
import { X } from "lucide-react"
import { useTranslations } from "next-intl"

interface ComponentProps {
  queryUseApiV1UserInfoRead: UseQueryResult<ResponseConfig<User>, never>
}

const DesktopMenu = ({ queryUseApiV1UserInfoRead }: ComponentProps) => {
  const { dataMenu } = usePublicheader()
  const translationHeader = useTranslations("header")

  if (!queryUseApiV1UserInfoRead.data?.data) {
    return (
      <div className="inline-flex items-center space-x-3 text-left xl:hidden">
        <Link
          href="/sign-in"
          className="text-background"
        >
          {translationHeader("menu.signinOrSignup")}
        </Link>
        <span className="inline-flex size-8 min-w-[32px] items-center justify-center rounded-full bg-grey-soft">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM5.07 16.28C5.5 15.38 8.12 14.5 10 14.5C11.88 14.5 14.51 15.38 14.93 16.28C13.57 17.36 11.86 18 10 18C8.14 18 6.43 17.36 5.07 16.28ZM16.36 14.83C14.93 13.09 11.46 12.5 10 12.5C8.54 12.5 5.07 13.09 3.64 14.83C2.62 13.49 2 11.82 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 11.82 17.38 13.49 16.36 14.83ZM10 4C8.06 4 6.5 5.56 6.5 7.5C6.5 9.44 8.06 11 10 11C11.94 11 13.5 9.44 13.5 7.5C13.5 5.56 11.94 4 10 4ZM10 9C9.17 9 8.5 8.33 8.5 7.5C8.5 6.67 9.17 6 10 6C10.83 6 11.5 6.67 11.5 7.5C11.5 8.33 10.83 9 10 9Z"
              fill="#939393"
            />
          </svg>
        </span>
      </div>
    )
  }

  const firstLetter = queryUseApiV1UserInfoRead?.data?.data?.email ? queryUseApiV1UserInfoRead.data.data?.email[0] : "A"
  const userData = queryUseApiV1UserInfoRead?.data?.data

  return (
    <DropdownMenu>
      <div className="inline-flex items-center space-x-3 text-left">
        <Link
          href="/personal-page/profile"
          className="flex flex-col text-background"
        >
          <span className="font-bold">{queryUseApiV1UserInfoRead.data.data.email}</span>
          <span> {queryUseApiV1UserInfoRead.data.data.balance?.toLocaleString("en-US", { currency: "USD", style: "currency" })}</span>
        </Link>
        <DropdownMenuTrigger asChild>
          <Button
            size={"none"}
            className="relative inline-flex size-[32px] h-8 min-h-8 items-center justify-center rounded-full bg-accent text-center font-semibold uppercase text-background"
          >
            <span className="absolute right-0 top-0 h-2 w-2 rounded-full border-2 border-purple bg-valid"></span>
            <span>{firstLetter}</span>
          </Button>
        </DropdownMenuTrigger>
      </div>
      <DropdownMenuContent
        align="end"
        className="!right-0 w-80 rounded-sm p-0 pb-2"
      >
        <DropdownMenuItem
          className="rounded-none px-4 py-2 text-base"
          asChild
        >
          <Link href={dataMenu.balance.href}>
            <span className="mr-1">{dataMenu.balance.label}:</span> <span className="mr-2 font-bold">{userData.balance}</span> <span className="text-accent">Пополнить</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="my-2" />
        <DropdownMenuGroup>
          <DropdownMenuItem
            asChild
            className="rounded-none px-4 text-base"
          >
            <Link href={dataMenu.myDevices.href}>{dataMenu.myDevices.label}</Link>
          </DropdownMenuItem>
          <DropdownMenuItem
            asChild
            className="rounded-none px-4 text-base"
          >
            <Link href={dataMenu.workLog.href}>{dataMenu.workLog.label}</Link>
          </DropdownMenuItem>
          <DropdownMenuItem
            asChild
            className="rounded-none px-4 text-base"
          >
            <Link href={dataMenu.referrals.href}>{dataMenu.referrals.label}</Link>
          </DropdownMenuItem>
          <DropdownMenuItem
            asChild
            className="rounded-none px-4 text-base"
          >
            <Link href={dataMenu.support.href}>{dataMenu.support.label}</Link>
          </DropdownMenuItem>
          <DropdownMenuItem
            asChild
            className="rounded-none px-4 text-base"
          >
            <Link href={dataMenu.onlinePlayer.href}>{dataMenu.onlinePlayer.label}</Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator className="my-2" />
        <DropdownMenuItem
          asChild
          className="rounded-none px-4 text-base"
        >
          <Link href={dataMenu.settings.href}>{dataMenu.settings.label}</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export const Menu = ({ queryUseApiV1UserInfoRead }: ComponentProps) => {
  const { dataMenu } = usePublicheader()
  const publicList = [dataMenu.myDevices, dataMenu.workLog, dataMenu.referrals, dataMenu.support, dataMenu.onlinePlayer]
  const publicList2 = [dataMenu.anyplayer, dataMenu.faq, dataMenu.news, dataMenu.copyright]
  const existUser = queryUseApiV1UserInfoRead.data?.data
  const translationHeader = useTranslations("header")

  return (
    <>
      <div className="xl:hidden">
        <DesktopMenu queryUseApiV1UserInfoRead={queryUseApiV1UserInfoRead} />
      </div>

      <div className="hidden items-center xl:inline-flex">
        <Sheet>
          <SheetTrigger asChild>
            <button>
              <img
                src={iconBar.src}
                alt="Open menu"
              />
            </button>
          </SheetTrigger>
          <SheetContent
            close={false}
            side={"left"}
            className="rounded-0 flex w-full max-w-[368px] gap-0 border-0 bg-transparent p-0 text-left text-xl shadow-none"
          >
            <div className="w-full max-w-80 overflow-auto rounded-r-lg bg-background">
              <div className=" flex flex-col p-0 py-3">
                {/* PROFILE */}
                {!queryUseApiV1UserInfoRead.data?.data ? (
                  <SheetTrigger asChild>
                    <Link
                      href={dataMenu.signIn.href}
                      className="flex items-center space-x-4 px-6 py-3"
                    >
                      <span className="flex items-center space-x-2">
                        <Image
                          src={iconLogin.src}
                          alt=""
                          unoptimized
                          width={iconLogin.width}
                          height={iconLogin.height}
                        />
                        <span className="text-xl">{translationHeader("menu.signin")}</span>
                      </span>
                    </Link>
                  </SheetTrigger>
                ) : (
                  <SheetTrigger asChild>
                    <Link
                      href={"/personal-page/profile"}
                      className="space-y-3 px-6 py-3"
                    >
                      <div className="text-base text-grey-extra-hard">{queryUseApiV1UserInfoRead.data.data.email}</div>
                      <div className="flex items-end text-xl">
                        <div className="mr-2">
                          <span className="mr-1 text-xl">{translationHeader("menu.balance")}: </span>
                          <span className="font-bold">{queryUseApiV1UserInfoRead.data.data.balance?.toLocaleString("en-US", { currency: "USD", style: "currency" })}</span>
                        </div>
                        <span className="mb-[2px] text-sm font-medium text-accent">{translationHeader("menu.addMoney")}</span>
                      </div>
                    </Link>
                  </SheetTrigger>
                )}

                <hr className="my-3" />
                {/* PUBLIC START */}
                <div>
                  {publicList.map((item, indx) => {
                    return (
                      <SheetTrigger
                        key={indx}
                        asChild
                      >
                        <Link
                          href={item.href}
                          className="flex items-center space-x-4 px-6 py-3 text-xl"
                        >
                          <span className="flex items-center space-x-2">
                            <Image
                              src={item.icon.src}
                              alt=""
                              unoptimized
                              width={item.icon.width}
                              height={item.icon.height}
                            />
                            <span>{item.label}</span>
                          </span>
                        </Link>
                      </SheetTrigger>
                    )
                  })}
                </div>
                {/* PUBLIC END */}

                <hr className="my-3" />

                {/* PROFILE START */}
                {existUser && (
                  <div>
                    <div>
                      <SheetTrigger asChild>
                        <Link
                          href={dataMenu.settings.href}
                          className="flex items-center space-x-4 px-6 py-3 text-xl"
                        >
                          <span className="flex items-center space-x-2">
                            <Image
                              src={dataMenu.settings.icon.src}
                              alt=""
                              unoptimized
                              width={dataMenu.settings.icon.width}
                              height={dataMenu.settings.icon.height}
                            />
                            <span>{dataMenu.settings.label}</span>
                          </span>
                        </Link>
                      </SheetTrigger>
                      <SheetTrigger asChild>
                        <button
                          onClick={dataMenu.quit.handler}
                          className="flex w-full items-center space-x-4 px-6 py-3 text-xl"
                        >
                          <span className="flex items-center space-x-2">
                            <Image
                              src={dataMenu.quit.icon.src}
                              alt=""
                              unoptimized
                              width={dataMenu.quit.icon.width}
                              height={dataMenu.quit.icon.height}
                            />
                            <span>{dataMenu.quit.label}</span>
                          </span>
                        </button>
                      </SheetTrigger>

                      <SheetTrigger asChild>
                        <button
                          onClick={dataMenu.quitAll.handler}
                          className="flex w-full items-center space-x-4 px-6 py-3 text-left text-xl"
                        >
                          <span className="flex items-center space-x-2">
                            <Image
                              src={dataMenu.quitAll.icon.src}
                              alt=""
                              unoptimized
                              width={dataMenu.quitAll.icon.width}
                              height={dataMenu.quitAll.icon.height}
                            />
                            <span>{dataMenu.quitAll.label}</span>
                          </span>
                        </button>
                      </SheetTrigger>
                    </div>
                    <hr className="my-3" />
                  </div>
                )}
                {/* PROFILE END */}

                {/* PUBLIC START */}
                <div>
                  {publicList2.map((item, indx) => {
                    return (
                      <SheetTrigger
                        key={indx}
                        asChild
                      >
                        <Link
                          href={item.href}
                          className="flex items-center space-x-4 px-6 py-3 text-xl"
                        >
                          <span className="flex items-center space-x-2">
                            <Image
                              src={item.icon.src}
                              alt=""
                              unoptimized
                              width={item.icon.width}
                              height={item.icon.height}
                            />
                            <span>{item.label}</span>
                          </span>
                        </Link>
                      </SheetTrigger>
                    )
                  })}
                </div>
                {/* PUBLIC END */}
              </div>
            </div>
            <SheetClose
              asChild
              className="ml-3"
            >
              <button className="mb-auto mt-4 inline-flex min-h-9 min-w-9 items-center justify-center !self-start rounded-full bg-black">
                <X className="text-sm text-white" />
              </button>
            </SheetClose>
          </SheetContent>
        </Sheet>
      </div>
    </>
  )
}
