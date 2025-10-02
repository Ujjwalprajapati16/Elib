"use client";

import React from "react";

const BookSkeletonLoader = () => {
  return (
    <div className="flex justify-center items-center py-10 space-x-4">
      {/* Skeleton stack of 3 books */}
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className={`w-6 ${
            8 + i * 2
          } h-${8 + i * 2} relative rounded-sm overflow-hidden shadow-md`}
        >
          {/* Skeleton shimmer */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-300/70 via-gray-200/60 to-gray-300/70 dark:from-zinc-700/70 dark:via-zinc-600/60 dark:to-zinc-700/70 animate-skeleton"></div>
        </div>
      ))}
    </div>
  );
};

export default BookSkeletonLoader;
