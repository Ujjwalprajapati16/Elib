import React from "react";
import RatingItem from "./RatingItem.tsx"

const RatingsList = ({ ratings }: any) => {
  return (
    <div className="mt-8">
      <h3 className="text-2xl font-semibold mb-4">Ratings & Reviews</h3>
      <div className="flex flex-col gap-4">
        {ratings.length > 0 ? (
          ratings.map((r: any) => <RatingItem key={r._id} rating={r} />)
        ) : (
          <p>No ratings yet.</p>
        )}
      </div>
    </div>
  );
};

export default RatingsList;
