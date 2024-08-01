import React from 'react'
import { getRelativeTime } from './DateConvert'
import { ROOT_URL } from '../data/func'

function NewsCard({data}:{data:any}) {
  return (
    <section className="flex flex-col mb-10">
                    <div className="h-48 w-full overflow-hidden rounded-xl  col-span-3 relative">
                      <img
                        src={data.image!=""? `${ROOT_URL}uploads/news/${data.image}`:"prism thumb.jpg"}
                        className="h-full w-full object-cover"
                      />
                       <p className="absolute bottom-4 right-4 p-[6px] px-4 rounded-lg bg-zinc-100 text-sm w-fit">{data.category}</p>
                    </div>
                    <div className="col-span-2 ">
                       <p className="text-sm text-zinc-400 mt-3">{getRelativeTime(data?.date)}</p>
                      <h6 className="text-xl font-bold mt-1 line-clamp-2">
                        {data.title}
                      </h6>
                      <article
                        className="mt-2 line-clamp-[3]"
                        dangerouslySetInnerHTML={{ __html: data.body }}
                      />
                    </div>
                  </section>
  )
}

export default NewsCard
