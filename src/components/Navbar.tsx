import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto py-4 px-6 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Logo" width={90} height={90} />
          {/* Hide title on small screens */}
          <span className="hidden md:inline-block text-2xl font-bold tracking-tight text-primary-700">
            Digital Library
          </span>
        </Link>

        {/* Buttons */}
        <div className="flex items-center gap-2">
          <button className="border border-primary-500 text-primary-500 px-3 py-1.5 rounded hover:bg-primary-100 transition text-sm">
            Sign in
          </button>
          <button className="bg-primary-500 text-white px-3 py-1.5 rounded hover:bg-primary-600 transition text-sm">
            Sign up
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
