import { NextPageWithLayout } from "@/src/pages/_app"
import { NextSeo } from "next-seo"
import { GetStaticPropsContext } from "next"
import { getNextIntlPhrases } from "@/src/server/getNextIntlPhrases"
import { PageForgotPassword } from "../pages-flat/Auth/PageForgotPassword"

interface PageProps {}

const Page: NextPageWithLayout<PageProps> = () => {
  return (
    <>
      <NextSeo
        title="Sharavoz"
        description="Sharavoz"
      />
      <PageForgotPassword />
    </>
  )
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: await getNextIntlPhrases(locale, ["header", "footer", "authorization"]),
    },
  }
}

export default Page
