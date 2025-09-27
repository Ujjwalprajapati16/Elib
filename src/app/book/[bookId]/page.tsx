import React from "react";
import BookDetails from "./components/BookDetails.tsx";
import AddRatingForm from "./components/AddRatingForm.tsx";
import RatingsList from "./components/RatingsList.tsx";
import BookImage from "./components/BookImage.tsx";


const BookPage = async ({ params }: { params: { bookId: string } }) => {
  let data;
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}books/${params.bookId}`,
      { cache: "no-store" }
    );
    if (!response.ok) throw new Error("Failed to fetch book details");
    data = await response.json();
  } catch (error) {
    return <div className="text-center text-red-500">Error fetching book details</div>;
  }

  if (!data?.book) {
    return <div className="text-center text-red-500">Book not found</div>;
  }

  return (
    <div className="mx-auto flex max-w-6xl gap-10 px-5 py-10">
      <BookImage coverImage={data.book.coverImage} title={data.book.title} />
      <div className="flex-1 flex flex-col gap-8 overflow-y-auto max-h-[90vh] pr-4 scroll-smooth scrollbar-hide">
        <BookDetails book={data.book} />
        <AddRatingForm bookId={data.book._id} />
        <RatingsList ratings={data.ratings} />
      </div>
    </div>
  );
};

export default BookPage;
