function ArticleSkeleton() {
  return (
    <main className="flex flex-col animate-pulse">
      {/* Title */}
      <div className="h-12 w-3/4 bg-gray-300 rounded mb-4" />

      {/* Meta info (date + reading time) */}
      <div className="flex gap-3 mt-3">
        <div className="h-7 w-32 bg-gray-200 rounded-2xl" />
        <div className="h-7 w-28 bg-gray-200 rounded-2xl" />
      </div>

      {/* Image */}
      <div className="w-full h-[450px] bg-gray-300 rounded-2xl my-7" />

      {/* Body content */}
      <div className="space-y-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-4 bg-gray-200 rounded w-full" />
        ))}
        <div className="h-4 bg-gray-200 rounded w-5/6" />
      </div>

      {/* Tags */}
      <div className="flex gap-2 my-10 flex-wrap">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="h-7 w-16 bg-gray-200 rounded-3xl"
          />
        ))}
      </div>
    </main>
  )
}

export default ArticleSkeleton
