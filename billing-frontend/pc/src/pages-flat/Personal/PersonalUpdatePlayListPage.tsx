import dynamic from "next/dynamic"
import React, { FC } from "react"
const PersonalUpdatePlayList = dynamic(import("@/src/widgets/Personal/UpdatePlayList/ui").then((module) => module.PersonalUpdatePlayList))

interface ComponentProps {}

export const PersonalUpdatePlayListPage: FC<ComponentProps> = () => {
  return <PersonalUpdatePlayList />
}
