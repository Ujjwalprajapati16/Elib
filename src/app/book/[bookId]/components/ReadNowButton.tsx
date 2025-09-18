'use client'
import React from 'react'

const ReadNowButton = ({ filelink }: { filelink: string }) => {

    const handleRead = () => {
        window.open(filelink, '_blank');
    };
    return (
        <button
            onClick={handleRead}
            className='mt-5 rounded-lg border border-primary-600 px-4 py-2 text-sm font-medium text-primary-600 hover:bg-primary-50 transition'>Read Now</button>
    )
}

export default ReadNowButton