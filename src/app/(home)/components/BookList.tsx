import React from 'react'
import { Book } from '@/types/index.ts' 
import BookCard from './BookCard.tsx'

const BookList = ({ books }: { books: Book[] }) => {
  books.map((book) => console.log(book))
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {books.map((book) => (
        <BookCard key={book._id} book={book} />
      ))}
    </div>
  )
}

export default BookList
