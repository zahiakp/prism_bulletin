"use client";
import React from "react";

function NewsCardSkeleton() {
  return (
    <section className="flex flex-col mb-10 animate-pulse">
      <div className="h-48 w-full overflow-hidden rounded-xl bg-gray-200"></div>
      <div className="mt-3 space-y-2">
        <div className="h-3 w-1/3 bg-gray-200 rounded"></div>
        <div className="h-5 w-3/4 bg-gray-300 rounded"></div>
        <div className="h-3 w-full bg-gray-200 rounded"></div>
        <div className="h-3 w-5/6 bg-gray-200 rounded"></div>
      </div>
    </section>
  );
}

export default NewsCardSkeleton;
