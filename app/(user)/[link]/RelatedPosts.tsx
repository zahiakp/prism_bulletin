import { getArticlebyCount } from '@/app/(admin)/admin/articles/Add/func'
import { encodeId } from '@/components/common/Decode'
import Link from 'next/link'
import React, { Suspense } from 'react'

// ✅ Skeleton loader for related posts
function RelatedPostsSkeleton() {
  return (
    <div className="flex flex-col w-full gap-3">
      {Array.from({ length: 7 }).map((_, i) => (
        <div key={i} className="flex gap-3 items-center bg-gray-100 p-5 rounded-2xl animate-pulse">
  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-300"></div>
  <div className="flex-1 space-y-2">
    <div className="h-4 w-3/4 bg-gray-300 rounded"></div>
    <div className="h-3 w-full bg-gray-200 rounded"></div>
    <div className="h-3 w-5/6 bg-gray-200 rounded"></div>
  </div>
</div>
      ))}
    </div>
  )
}

async function RelatedPosts() {
  const cnews = await getArticlebyCount('5')
  const data = cnews?.data ?? []

  return (
    <div className="flex flex-col w-full gap-5">
      {data.slice(0,5).map((item: any, index: number) => (
        <Link href={`/${item.url+"_"+encodeId(item.id)}`} key={item.id || index} className="flex gap-3 items-center hover:scale-[1.02] hover:shadow-md duration-200 bg-gray-100 p-5 rounded-2xl">
          <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-800 text-white">
            {index + 1}
          </div>
          <div className="flex-1">
            <h6 className="line-clamp-1 font-medium">{item.title}</h6>
            <article
              className="text-justify text-xs text-gray-600 line-clamp-2"
              dangerouslySetInnerHTML={{ __html: item.body }}
            />
          </div>
        </Link>
      ))}
    </div>
  )
}

// ✅ Wrap with Suspense for streaming + skeleton fallback
export default function RelatedPostsWrapper() {
  return (
    <Suspense fallback={<RelatedPostsSkeleton />}>
      <RelatedPosts />
    </Suspense>
  )
}
