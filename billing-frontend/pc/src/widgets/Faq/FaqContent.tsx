import { ApiV1FaqListListQueryResponse } from "@/src/gen/models/ts/apiController/ApiV1FaqListList"
import { ApiV1FaqReadQueryResponse } from "@/src/gen/models/ts/apiController/ApiV1FaqRead"
import { UseQueryResult } from "@tanstack/react-query"
import React from "react"

interface ComponentProps {
  faqList: ApiV1FaqListListQueryResponse
  faqListByTag: ApiV1FaqListListQueryResponse
  dataArticle: ApiV1FaqReadQueryResponse
}

export const FaqContent = ({ faqList, faqListByTag, dataArticle }: ComponentProps) => {
  /**
   * if has article => article
   * if selected tag => items by tag
   * if no article OR no selected tag => faqList
   */
  return (
    <div className="mt-6 space-y-6 md:mt-0 md:space-y-2">
      {dataArticle && (
        <div
          className="typography md:hidden"
          dangerouslySetInnerHTML={{ __html: `${dataArticle.answers![0]}` }}
        />
      )}
    </div>
  )
  if (dataArticle) return "dataArticle"
  if (faqListByTag) return "faqListByTag"
  return "faqList"

  // return (
  //     <div className="mt-6 space-y-6 md:mt-0 md:space-y-2">
  //         {!dataAdticle.data?.data ? (
  //             faqList.map((item, indx) => (
  //                 <button
  //                     onClick={() => onSelectQuestionHandler(item.id!)}
  //                     className="block text-left md:w-full md:rounded-lg md:bg-background md:p-4"
  //                     key={indx}>
  //                     <span className="block">{item.question_title}</span>
  //                     {!item.question_text || !item.question_text.length ? null : (
  //                         <span className="hidden space-x-3 text-xs text-grey-extra-hard md:inline-flex">
  //                             <img
  //                                 className="w-3"
  //                                 src={iconTime.src}
  //                                 width={iconTime.width}
  //                                 height={iconTime.height}
  //                                 alt=""
  //                             />
  //                             <span>{item.question_text}</span>
  //                         </span>
  //                     )}
  //                 </button>
  //             ))
  //         ) : (
  //             <div className="typography md:hidden" dangerouslySetInnerHTML={{ __html: `${dataAdticle.data?.data.answers![0]}` }} />
  //         )}
  //     </div>
  // )
}
