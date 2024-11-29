import iconLogo from "@/public/icon-logo.svg"
import Image from "next/image"

export const SiteLogo = () => {
  return (
    <Image
      src={iconLogo.src}
      alt="Sharavoz иконка"
      unoptimized
      width={iconLogo.width}
      height={iconLogo.height}
    />
  )
}
