import React from 'react'

const BookLoader = () => {
    return (
        <div className="flex justify-center items-center py-10">
            <div className="flex space-x-2 animate-bounce">
                {/* Represent three books bouncing */}
                <div className="w-6 h-10 bg-primary-600 rounded-sm shadow-md"></div>
                <div className="w-6 h-12 bg-primary-500 rounded-sm shadow-md"></div>
                <div className="w-6 h-14 bg-primary-400 rounded-sm shadow-md"></div>
            </div>
        </div>
    )
}

export default BookLoader;
