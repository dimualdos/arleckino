import dynamic from "next/dynamic"
import React, { FC } from "react"
const PersonalUpdateChannels = dynamic(import("@/src/widgets/Personal/UpdateChannels/ui").then((module) => module.PersonalUpdateChannels))

interface ComponentProps {}

export const PersonalUpdateChannelsPage: FC<ComponentProps> = () => {
  return <PersonalUpdateChannels />
}
