import dynamic from "next/dynamic"
import React, { FC } from "react"
const PersonalSupport = dynamic(import("@/src/widgets/Personal/Support/ui").then((module) => module.PersonalSupport))

interface ComponentProps {}

export const PersonalSupportPage: FC<ComponentProps> = () => {
  return <PersonalSupport />
}
