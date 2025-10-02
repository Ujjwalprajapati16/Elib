"use client";

import React from "react";
import { Rating } from "@/types/index.ts";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const RatingItem = ({ rating }: { rating: Rating }) => {
  const userName = rating.user?.name || "Anonymous";

  // Generate initials
  const initials = userName
    .split(" ")
    .map((n: string) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className="flex gap-4 items-start py-2 border-b border-gray-200 dark:border-gray-700">
      {/* Avatar */}
      <Avatar className="w-10 h-10">
        <AvatarFallback className="bg-primary-600 dark:bg-primary-400 text-white dark:text-gray-900 font-semibold">
          {initials}
        </AvatarFallback>
      </Avatar>

      {/* User Info */}
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-gray-900 dark:text-gray-100">{userName}</span>
          <span className="text-yellow-500">
            {"★".repeat(rating.rating) + "☆".repeat(5 - rating.rating)}
          </span>
        </div>
        <p className="mt-1 text-gray-700 dark:text-gray-300">{rating.comment}</p>
      </div>
    </div>
  );
};

export default RatingItem;
