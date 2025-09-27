import React from "react";
import ReadNowButton from "./ReadNowButton";
import { Book } from "@/types/index.ts";

const BookDetails = ({ book }: {book: Book}) => {
  return (
    <div className="text-primary-950 mb-4">
      <h2 className="mb-2 text-4xl font-extrabold leading-snug text-primary-900">
        {book.title}
      </h2>
      <span className="text-gray-700 font-semibold">by {book.author.name}</span>
      <p className="mt-4 text-lg leading-relaxed text-gray-800">{book.description}</p>
      <div className="mt-6">
        <ReadNowButton filelink={book.file} />
      </div>
    </div>
  );
};

export default BookDetails;
