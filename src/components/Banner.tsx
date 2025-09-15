import Image from 'next/image'
import React from 'react'
import PapperBg from '../../public/banner.png'
import BookImage from '../../public/bookimg.webp'

const Banner = () => {
    return (
        <div className='mx-auto max-w-7xl px-5 py-10'>
            <div className='relative'>
                <Image
                    src={PapperBg}
                    alt='billboard'
                    className='h-72 w-full rounded-lg'
                    height={0}
                    width={0}
                    sizes='100vw'
                />
            </div>
            <div className='absolute insert-0 h-full rounded-lg bg-gray-950 opacity-30'>
                <Image
                    src={BookImage}
                    alt='billboard'
                    className='absolute bottom-0 right-5'
                    height={0}
                    width={0}
                    sizes='100vw'
                    style={{ width: 'auto', height: '18rem' }}
                />
                <h3 className='absolute left-10 top-1/2 w-fill max-w-3xl -translate-y-1/2 text-5xl font-semibold tracking-tight text-white'>
                    E-Lib - Your Gateway to Knowledge
                </h3>
            </div>
        </div>
    )
}

export default Banner