import React from "react";
import ReadNowButton from "./ReadNowButton";
import { Book } from "@/types/index.ts";

const BookDetails = ({ book }: { book: Book }) => {
  return (
    <div className="mb-4 text-gray-900 dark:text-gray-100">
      {/* Title */}
      <h2 className="mb-2 text-4xl font-extrabold leading-snug text-primary-900 dark:text-primary-400">
        {book.title}
      </h2>

      {/* Author and Views */}
      <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300 font-semibold">
        <span>by {book.author.name}</span>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {book.views ?? 0} views
        </span>
      </div>

      {/* Description */}
      <p className="mt-4 text-lg leading-relaxed text-gray-800 dark:text-gray-300">
        {book.description}
      </p>

      {/* Read Now Button */}
      <div className="mt-6">
        <ReadNowButton filelink={book.file} />
      </div>
    </div>
  );
};

export default BookDetails;
