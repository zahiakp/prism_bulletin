"use client";

export default function NewsSkeleton() {
  return (
    <main className="flex justify-center">
      <section className="w-[90%] max-w-[1200px] flex flex-col md:flex-row">
          {/* {[...Array(3)].map((_, index) => ( */}
              <section className="grid w-full grid-cols-1 md:grid-cols-5 gap-5 md:gap-10 md:h-[450px]">
                {/* Image skeleton */}
                <div className="h-[200px] md:h-full w-full overflow-hidden rounded-xl relative col-span-3 bg-zinc-200 animate-pulse" />

                {/* Text skeleton */}
                <div className="col-span-2 flex flex-col">
                  <div className="h-6 w-24 bg-zinc-200 rounded-3xl animate-pulse" />

                  <div className="mt-3 space-y-2">
                    <div className="h-6 w-3/4 bg-zinc-200 rounded animate-pulse" />
                    <div className="h-6 w-2/3 bg-zinc-200 rounded animate-pulse" />
                  </div>

                  <div className="mt-4 space-y-2">
                    {[...Array(10)].map((_, i) => (
                      <div
                        key={i}
                        className="h-4 w-full bg-zinc-200 rounded animate-pulse"
                      />
                    ))}
                  </div>

                  <div className="h-4 w-20 bg-zinc-200 rounded mt-4 animate-pulse" />
                </div>
              </section>
          {/* ))} */}
      </section>
    </main>
  );
}
