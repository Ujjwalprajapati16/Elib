"use client";

import React, { useEffect, useState, useRef } from "react";
import { Book } from "@/types";
import BookCard from "./BookCard";
import Image from "next/image";
import BookLoader from "@/components/BookLoader.tsx";

const BookList = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const loaderRef = useRef<HTMLDivElement>(null);

  const fetchBooks = async (pageNumber = 1) => {
    if (loading) return;
    setLoading(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}books?page=${pageNumber}&limit=6`
      );
      const data = await res.json();

      setBooks((prev) => [...prev, ...data.books]);
      setTotalPages(data.pagination.totalPages);
    } catch (err) {
      console.error("Failed to fetch books:", err);
    } finally {
      setLoading(false);
    }
  };

  // Initial load
  useEffect(() => {
    fetchBooks(1);
  }, []);

  // Infinite scroll observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && page < totalPages) {
          setPage((prev) => prev + 1);
        }
      },
      { rootMargin: "200px" }
    );

    if (loaderRef.current) observer.observe(loaderRef.current);

    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [page, totalPages]);

  // Fetch more books when page changes
  useEffect(() => {
    if (page > 1) fetchBooks(page);
  }, [page]);

  return (
    <>
      {/* Books grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {books.map((book) => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>

      {/* Loader / End-of-list */}
      <div ref={loaderRef} className="text-center py-4">
        {loading && <BookLoader />}

        {page >= totalPages && (
          <div className="relative mx-auto w-full max-w-3xl aspect-[16/9]">
            <Image
              src="/book_reading.svg"
              alt="No more books"
              fill
              className="object-contain"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default BookList;
