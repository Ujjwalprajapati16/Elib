"use client";

import React from "react";
import { Rating, RatingButton } from "@/components/ui/shadcn-io/rating";
import { useRating } from "@/hooks/useRating.ts";
import { toast } from "sonner";

interface AddRatingFormProps {
  bookId: string;
  onSuccess?: () => void;
}

const AddRatingForm = ({ bookId, onSuccess }: AddRatingFormProps) => {
  const { rating, setRating, comment, setComment, loading, error, submitRating } = useRating({ bookId });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitRating();
    if (!error) {
      toast.success("Rating submitted successfully!");
      onSuccess?.();
    } else {
      toast.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 p-4 bg-background border border-gray-200 dark:border-gray-700 rounded-lg shadow-md"
    >
      <label className="font-semibold text-gray-900 dark:text-gray-100">
        Leave your review
      </label>

      {/* Star Rating */}
      <Rating
        value={rating}
        onValueChange={(val) => setRating(val)}
        className="gap-1"
      >
        {Array.from({ length: 5 }).map((_, index) => (
          <RatingButton
            key={index}
            className="text-yellow-500 dark:text-yellow-400"
          />
        ))}
      </Rating>

      {/* Comment */}
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write your thoughts..."
        className="border rounded px-3 py-2 w-full resize-none focus:ring-2 focus:ring-primary dark:bg-zinc-800 dark:text-white"
        rows={3}
      />

      <button
        type="submit"
        className="bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary-600 transition"
      >
        Submit
      </button>
    </form>
  );
};

export default AddRatingForm;
