import { useApiV1UserInfoRead } from "@/src/gen/clients/hooks/apiController/useApiV1UserInfoRead"
import { useTranslations } from "next-intl"

import iconLogin from "@/public/icon-login.svg"
import iconDevices from "@/public/icon-devices.svg"
import iconLog from "@/public/icon-log.svg"
import iconRefs from "@/public/icon-refs.svg"
import iconSupport from "@/public/icon-support.svg"
import iconPlayer from "@/public/icon-player.svg"
import iconSettings from "@/public/icon-settings.svg"
import iconLogout from "@/public/icon-logout.svg"
import iconLogoutDevice from "@/public/icon-logout-device.svg"
import iconAnyPlayer from "@/public/icon-any-player.svg"
import iconFaq from "@/public/icon-faq.svg"
import iconNews from "@/public/icon-news.svg"
import iconAuthors from "@/public/icon-authors.svg"
import { useAuth } from "@/src/shared/hooks/useAuth"

export const usePublicheader = () => {
  const queryUseApiV1UserInfoRead = useApiV1UserInfoRead()
  const translationHeader = useTranslations("header")
  const { signOut } = useAuth()

  const dataMenu = {
    signIn: {
      label: translationHeader("menu.signin"),
      href: "/sign-in",
      icon: iconLogin,
    },
    copyright: {
      label: translationHeader("mainMenu.copyright"),
      href: "/copyright",
      icon: iconAuthors,
    },
    balance: {
      label: "Баланс",
      href: "/personal-page/balance",
    },
    myDevices: {
      label: translationHeader("mainMenu.myDevices"),
      href: "/personal-page/devices",
      icon: iconDevices,
    },
    workLog: {
      label: translationHeader("mainMenu.workLog"),
      href: "/personal-page/worklog",
      icon: iconLog,
    },
    referrals: {
      label: translationHeader("mainMenu.referrals"),
      href: "/personal-page/referrals",
      icon: iconRefs,
    },
    support: {
      label: translationHeader("mainMenu.support"),
      href: "/personal-page/support",
      icon: iconSupport,
    },
    onlinePlayer: {
      label: translationHeader("mainMenu.onlinePlayer"),
      href: "/personal-page/player",
      icon: iconPlayer,
    },
    anyplayer: {
      label: translationHeader("menu.anyplayer"),
      href: "/personal-page/any-player",
      icon: iconAnyPlayer,
    },
    settings: {
      label: translationHeader("mainMenu.viewSettings"),
      href: "/personal-page/profile",
      icon: iconSettings,
    },
    quit: {
      label: translationHeader("mainMenu.quit"),
      icon: iconLogout,
      handler: signOut,
    },
    quitAll: {
      label: translationHeader("mainMenu.quitAll"),
      icon: iconLogoutDevice,
      handler: signOut,
    },
    faq: {
      label: translationHeader("menu.FAQ"),
      icon: iconFaq,
      href: "/faq",
    },
    news: {
      label: translationHeader("menu.news"),
      icon: iconNews,
      href: "/news",
    },
  }

  return { queryUseApiV1UserInfoRead, translationHeader, dataMenu }
}
