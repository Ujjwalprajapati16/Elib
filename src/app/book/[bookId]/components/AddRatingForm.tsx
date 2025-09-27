"use client";
import React, { useState } from "react";

const AddRatingForm = ({ bookId }: { bookId: string }) => {
    const [rating, setRating] = useState(5);
    const [comment, setComment] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await fetch(`${process.env.NEXT_PUBLIC_API_URL}rate/${bookId}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ rating, comment }),
            });
            setComment("");
            alert("Rating submitted!");
        } catch (error) {
            console.error(error);
            alert("Failed to submit rating.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 p-4 bg-gray-50 rounded-lg shadow-md">
            <label className="font-semibold text-gray-700">Leave your review</label>
            <select
                title="Rating"
                value={rating}
                onChange={(e) => setRating(Number(e.target.value))}
                className="border rounded px-2 py-1 w-24 focus:ring-2 focus:ring-purple-300"
            >
                {[5, 4, 3, 2, 1].map((n) => (
                    <option key={n} value={n}>
                        {n} Star{n > 1 ? "s" : ""}
                    </option>
                ))}
            </select>
            <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Write your thoughts..."
                className="border rounded px-3 py-2 w-full resize-none focus:ring-2 focus:ring-purple-300"
                rows={3}
            />
            <button type="submit" className="bg-primary-700 text-white px-4 py-2 rounded hover:bg-primary-800 transition">
                Submit
            </button>
        </form>
    );
};

export default AddRatingForm;
