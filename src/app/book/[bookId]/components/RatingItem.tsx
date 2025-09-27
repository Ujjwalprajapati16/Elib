import { Rating } from "@/types/index.ts";
import React from "react";

const RatingItem = ({ rating }: { rating: Rating }) => {
  const userName = rating.user.name || "Anonymous";
  const initials = userName
    .split(" ")
    .map((n: string) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className="flex gap-4 items-start">
      <div className="w-10 h-10 rounded-full bg-gray-400 flex items-center justify-center text-white font-semibold text-sm">
        {initials}
      </div>
      <div>
        <div className="flex items-center gap-2">
          <span className="font-semibold">{userName}</span>
          <span className="text-yellow-500">
            {"★".repeat(rating.rating) + "☆".repeat(5 - rating.rating)}
          </span>
        </div>
        <p className="mt-1">{rating.comment}</p>
      </div>
    </div>
  );
};

export default RatingItem;
