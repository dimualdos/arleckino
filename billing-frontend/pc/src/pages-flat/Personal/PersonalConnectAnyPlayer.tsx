import dynamic from "next/dynamic"
import React, { FC } from "react"
const PersonalConnectAnyPlayer = dynamic(import("@/src/widgets/Personal/ConnectAnyPlayer/ui").then((module) => module.PersonalConnectAnyPlayer))

interface ComponentProps {}

export const PersonalConnectAnyPlayerPage: FC<ComponentProps> = () => {
  return <PersonalConnectAnyPlayer />
}
