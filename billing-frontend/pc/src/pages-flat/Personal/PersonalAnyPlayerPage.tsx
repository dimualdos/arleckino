import React from "react"
import dynamic from "next/dynamic"
const PersonalAnyPlayer = dynamic(import("@/src/widgets/Personal/AyPlayer/ui").then((module) => module.PersonalAnyPlayer))

export const PersonalAnyPlayerPage = () => {
  return <PersonalAnyPlayer />
}
