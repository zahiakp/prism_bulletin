export default function SubSliderSkeleton() {
  return (
    <main className="flex justify-center mt-10">
      <section className="w-[90%] max-w-[1200px] flex flex-col md:flex-row border-t border-zinc-200 pt-7">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="flex flex-col rounded-xl overflow-hidden border border-zinc-200 shadow-sm p-3 animate-pulse"
            >
              {/* Image */}
              <div className="w-full h-40 bg-zinc-200 rounded-md" />

              {/* Category pill */}
              <div className="h-6 w-20 bg-zinc-200 rounded-3xl mt-3" />

              {/* Title */}
              <div className="mt-3 space-y-2">
                <div className="h-5 w-3/4 bg-zinc-200 rounded" />
                <div className="h-5 w-2/3 bg-zinc-200 rounded" />
              </div>

              {/* Body preview */}
              <div className="mt-3 space-y-2">
                <div className="h-4 w-full bg-zinc-200 rounded" />
                <div className="h-4 w-5/6 bg-zinc-200 rounded" />
                <div className="h-4 w-4/6 bg-zinc-200 rounded" />
              </div>

              {/* Date */}
              <div className="h-4 w-16 bg-zinc-200 rounded mt-4" />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
