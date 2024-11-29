import Link from "next/link"
import { FC } from "react"

import clsx from "clsx"
import { SiteLogo } from "@/src/widgets/Logo"
import { Menu } from "./Menu"
import { usePublicheader } from "../hooks/usePublicheader"

interface ComponentProps {}

export const PublicHeader: FC<ComponentProps> = () => {
  const { queryUseApiV1UserInfoRead, dataMenu } = usePublicheader()
  const desktopMenu = [dataMenu.anyplayer, dataMenu.faq, dataMenu.news, dataMenu.copyright]

  return (
    <>
      <header className={clsx("absolute left-0 right-0 top-0 z-[10] flex min-h-[72px] items-center bg-gradient-to-b from-[#5C70CF] to-[#3F509F] py-2 transition-all duration-300")}>
        <div className="container flex items-center justify-between">
          <Link href="/">
            <SiteLogo />
          </Link>

          <nav className="mx-auto flex space-x-8 font-medium transition-all duration-300 xl:hidden">
            {desktopMenu.map((item, indx) => {
              return (
                <Link
                  key={indx}
                  className="text-background"
                  href={item.href}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          <Menu queryUseApiV1UserInfoRead={queryUseApiV1UserInfoRead} />
        </div>
      </header>
      <div className="mb-[72px]" />
    </>
  )
}
