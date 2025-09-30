"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ModeToggle } from "./Theme-switch.tsx";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<{ name: string } | null>(null);
  const [mounted, setMounted] = useState(false);

  // Ensure client-only rendering to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    window.location.href = "/";
  };

  const getInitials = (name?: string) => {
    if (!name) return "?";
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };


  // Do not render until mounted on client
  if (!mounted) return null;

  return (
    <nav className="bg-background text-foreground shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Logo" width={100} height={100} />
          <span className="hidden md:inline-block text-2xl font-bold text-primary">
            Digital Library
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 justify-start">
          <div className="flex gap-4">
            <Link href="/" className="hover:text-primary transition">Home</Link>
            <Link href="/books" className="hover:text-primary transition">Books</Link>
            <Link href="/authors" className="hover:text-primary transition">Authors</Link>
          </div>

          <div>
            <input
              type="text"
              placeholder="Search books..."
              className="px-3 py-1 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring focus:ring-primary"
            />
          </div>

          <div className="flex gap-2">
            <ModeToggle />
            {!user ? (
              <>
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
              </>
            ) : (
              <Popover>
                <PopoverTrigger asChild>
                  <Avatar className="cursor-pointer">
                    <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent align="end" className="w-32">
                  <Button
                    variant="ghost"
                    className="w-full text-left"
                    onClick={handleLogout}
                  >
                    Log out
                  </Button>
                </PopoverContent>
              </Popover>
            )}
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

          <input
            type="text"
            placeholder="Search books..."
            className="px-3 py-1 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring focus:ring-primary"
          />

          {!user ? (
            <>
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
            </>
          ) : (
            <Button variant="ghost" className="w-full text-left" onClick={handleLogout}>
              Log out
            </Button>
          )}
        </div>
      )}
    </nav>
  );
}
