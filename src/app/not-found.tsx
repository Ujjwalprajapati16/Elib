"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-background text-foreground px-4">
      <div className="w-80 h-80 relative mb-6">
        <Image
          src="/not_found.svg" 
          alt="404 illustration"
          fill
          style={{ objectFit: "contain" }}
          priority
        />
      </div>

      <h1 className="text-5xl font-bold mb-2">404</h1>
      <p className="text-lg text-muted-foreground mb-6 max-w-md">
        Oops! The page you’re looking for doesn’t exist. It might have been removed or moved to another location.
      </p>

      <Link href="/">
        <Button size="lg" className="mt-2">
          Go back home
        </Button>
      </Link>
    </div>
  );
}
