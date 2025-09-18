"use client";

import Banner from "./components/Banner";
import BookList from "./components/BookList";

export default function Home() {
  return (
    <>
      <Banner />
      <main className="py-10 px-5 max-w-7xl mx-auto">
        <BookList />
      </main>
    </>
  );
}
