import { NextPageWithLayout } from "@/src/pages/_app"
import { NextSeo } from "next-seo"
import { GetStaticPropsContext } from "next"
import { getNextIntlPhrases } from "../server/getNextIntlPhrases"
import { PersonalOnlinePlayerPage } from "../pages-flat/Personal/PersonalOnlinePlayer"

interface PageProps {}

const Page: NextPageWithLayout<PageProps> = () => {
  return (
    <>
      <NextSeo
        title="Sharavoz"
        description="Sharavoz"
      />
      <PersonalOnlinePlayerPage />
    </>
  )
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: await getNextIntlPhrases(locale, ["header", "footer", "onlinePlayer"]),
    },
  }
}

export default Page
