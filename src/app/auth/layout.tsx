"use client";

import type { ReactNode } from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/shadcn-io/background-beams-with-collision";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-primary-100 dark:bg-zinc-900 text-foreground dark:text-foreground-dark overflow-hidden px-4 py-8">
      {/* Background animation */}
      <BackgroundBeamsWithCollision className="absolute inset-0 pointer-events-none" />

      {/* Centered card */}
      <div className="relative z-20 w-full max-w-lg p-8 bg-background/60 dark:bg-zinc-800/60 backdrop-blur-lg rounded-2xl border border-zinc-200 dark:border-zinc-700 shadow-lg overflow-auto">
        {children}
      </div>
    </div>
  );
}
