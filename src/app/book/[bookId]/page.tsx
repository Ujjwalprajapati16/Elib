import Image from 'next/image'
import React from 'react'
import ReadNowButton from './components/ReadNowButton.tsx';

const page = async ({ params }: { params: { bookId: string } }) => {
    let book;
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}books/${params.bookId}`);
        if (!response.ok) {
            throw new Error('Failed to fetch book details');
        }
        book = await response.json();
    } catch (error) {
        throw new Error('Error fetching book details');
    }

    if (!book) {
        throw new Error('Book not found');
    }

    return (
        <div className='mx-auto grid max-w-6xl grid-cols-3 gap-10 px-5 py-10'>
            <div className="col-span-2 pr-16 text-primary-950">
                <h2 className='mb-5 text-5xl font-bold leading-[1.1]'>{book.title}</h2>
                <span className='font-semibold'>by {book.author.name}</span>
                <p className='mt-5 text-lg leading-5'>{book.description}</p>
                <ReadNowButton filelink={book.file} />
            </div>
            <div className="flex justify-end">
                <Image
                    src={book.coverImage}
                    alt={book.title}
                    width={0}
                    height={0}
                    sizes='100vw'
                    style={{ width: 'auto', height: 'auto' }}
                />
            </div>
        </div>
    )
}

export default page