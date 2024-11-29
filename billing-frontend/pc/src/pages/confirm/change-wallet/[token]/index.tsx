import { NextPageWithLayout } from "@/src/pages/_app"
import { NextSeo } from "next-seo"
import { GetServerSideProps } from "next"
import { getNextIntlPhrases } from "@/src/server/getNextIntlPhrases"
import { PageChangeWallet } from "@/src/pages-flat/Auth/PageChangeWallet"

interface PageProps {
  token: string
}

const Page: NextPageWithLayout<PageProps> = ({ token }) => {
  return (
    <>
      <NextSeo
        title="Sharavoz"
        description="Sharavoz"
      />
      <PageChangeWallet token={token} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ locale, params }) => {
  const token = params!.token as string
  return {
    props: {
      messages: await getNextIntlPhrases(locale, ["header", "footer", "authorization"]),
      token,
    },
  }
}

export default Page
