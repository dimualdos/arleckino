import { AppHeader } from "@/src/widgets/AppHeader"
import Link from "next/link"
import { useApiV1NewsRead } from "../gen/clients/hooks/apiController/useApiV1NewsRead"
import { ApiV1NewsReadQueryResponse } from "../gen/models/ts/apiController/ApiV1NewsRead"
import parse from "html-react-parser"
import { useRouter } from "next/router"

interface ComponentProps {}

const PageCurrentArticle = ({}: ComponentProps) => {
  const router = useRouter()
  const { id } = router.query

  const { data, isLoading, isError, error } = useApiV1NewsRead(id as string)

  const { text, title, created_date, images } = data?.data ?? ({} as ApiV1NewsReadQueryResponse)

  if (isLoading) {
    // TODO ВЕРСТКА - loader страницы
    return <>Loading</>
  }
  return (
    <div className="flex flex-1 flex-col">
      <AppHeader className="space-y-2 lg:space-y-1">
        <h1>{title}</h1>
        {created_date && <p className="text-base font-medium text-grey-extra-hard">{created_date.toString()}</p>}
      </AppHeader>

      <div className="flex-1 bg-blue-soft">
        <div className="md:rounded-t-8 mb-12 mt-10 md:mb-10 md:mt-4 md:bg-background md:pb-6 md:pt-4">
          {/* ARTICLE START */}
          <div className="container flex md:flex-col-reverse">
            <div className="mr-auto w-[54%] min-w-[400px] md:w-full md:min-w-0">
              <div className="typography">{parse(text!)}</div>
            </div>
            <img
              className="ml-8 max-w-[495px] self-start overflow-hidden rounded-lg object-contain md:mb-8 md:ml-0 md:w-full md:max-w-none"
              src={"https://placehold.co/600x400"}
              alt=""
            />
          </div>
          {/* ARTICLE END */}
        </div>
      </div>
    </div>
  )
}

export default PageCurrentArticle
