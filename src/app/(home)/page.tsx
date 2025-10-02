"use client";

import Banner from "./components/Banner";
import BookList from "./components/BookList";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-zinc-900 dark:to-zinc-800 transition-colors duration-500">
      <Banner />
      <main className="py-10 px-5 max-w-7xl mx-auto">
        <BookList />
      </main>
    </div>
  );
}
