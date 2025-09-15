import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-white shadow-md border-b-white'>
            <div className='max-w mx-auto py-4 px-8 flex justify-between items-center'>
                <div>
                    <Link href="/">
                        <div className='flex items-center gap-1'>
                            <div>
                                <Image src="/logo.png" alt="Logo" width={90} height={90} />
                            </div>
                            <span className='text-2xl font-bold uppercase tracking-tight text-primary-700 pb-1.5 pl-1'>Book Library</span>
                        </div>
                    </Link>
                </div >
                <div className='flex items-center gap-4'>
                    <button className='border-primary-500
                border text-primary-500 px-4 py-2 rounded hover:bg-primary-100 transition'>Sign in</button>
                    <button className='ml-4 bg-primary-500 text-white px-4 py-2 rounded hover:bg-primary-600 transition'>Sign up</button>
                </div>
            </div>
        </nav >
    )
}

export default Navbar