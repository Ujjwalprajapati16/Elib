import { Book } from '@/types/index.ts'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BookCard = ({ book }: { book: Book }) => {
    return (
        <div className="group flex items-start gap-5 rounded-xl border shadow-md bg-white hover:shadow-lg transition-all overflow-hidden p-4 w-full">
            {/* Book Cover */}
            <div className="relative h-40 w-28 flex-shrink-0 overflow-hidden rounded-md">
                <Image
                    src={book.coverImage}
                    alt={book.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
            </div>

            {/* Book Info */}
            <div className="flex flex-col justify-between flex-1">
                <div>
                    <h2 className="line-clamp-2 text-lg font-semibold text-primary-600">
                        {book.title}
                    </h2>
                    <p className="text-sm text-gray-700 mt-1">by {book.author.name}</p>
                </div>

                {/* CTA */}
                <Link
                    href={`/books/${book._id}`}
                    className="mt-3 inline-block text-center rounded-lg border border-primary-600 text-primary-600 px-4 py-2 text-sm font-medium hover:bg-primary-50 transition self-start"
                >
                    Read More
                </Link>
            </div>
        </div>
    )
}

export default BookCard
