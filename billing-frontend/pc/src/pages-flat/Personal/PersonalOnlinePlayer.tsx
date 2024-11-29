import React from "react"
import dynamic from "next/dynamic"
const PersonalOnlinePlayer = dynamic(import("@/src/widgets/Personal/OnlinePlayer/ui").then((module) => module.PersonalOnlinePlayer))

export const PersonalOnlinePlayerPage = () => {
  return <PersonalOnlinePlayer />
}
