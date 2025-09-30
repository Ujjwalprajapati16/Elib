"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-background text-foreground shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Logo" width={80} height={80} />
          <span className="hidden md:inline-block text-2xl font-bold text-primary">
            Digital Library
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 justify-start">
          {/* Navigation Links */}
          <div className="flex gap-4">
            <Link href="/" className="hover:text-primary transition">Home</Link>
            <Link href="/" className="hover:text-primary transition">Books</Link>
            <Link href="/authors" className="hover:text-primary transition">Authors</Link>
            {/* <Link href="/about" className="hover:text-primary transition">About</Link>
            <Link href="/contact" className="hover:text-primary transition">Contact</Link> */}
          </div>

          {/* Search Bar */}
          <div>
            <input
              type="text"
              placeholder="Search books..."
              className="px-3 py-1 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring focus:ring-primary"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-2">
            <Link href="/auth/login">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Sign in
              </Button>
            </Link>
            <Link href="/auth/signup">
              <Button className="bg-primary text-primary-foreground hover:bg-primary-600">
                Sign up
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md focus:outline-none focus:ring focus:ring-primary"
          >
            {isOpen ? <span className="text-2xl font-bold">×</span> : <span className="text-2xl font-bold">☰</span>}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-3">
          <Link href="/" className="hover:text-primary transition">Home</Link>
          <Link href="/books" className="hover:text-primary transition">Books</Link>
          <Link href="/authors" className="hover:text-primary transition">Authors</Link>
          {/* <Link href="/about" className="hover:text-primary transition">About</Link>
          <Link href="/contact" className="hover:text-primary transition">Contact</Link> */}

          <input
            type="text"
            placeholder="Search books..."
            className="px-3 py-1 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring focus:ring-primary"
          />

          <Link href="/auth/login">
            <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
              Sign in
            </Button>
          </Link>
          <Link href="/auth/signup">
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary-600">
              Sign up
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
}
