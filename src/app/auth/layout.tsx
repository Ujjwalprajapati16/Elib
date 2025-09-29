"use client";

import type { ReactNode } from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/shadcn-io/background-beams-with-collision";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-zinc-950 text-foreground overflow-hidden">
      <BackgroundBeamsWithCollision className="absolute inset-0 pointer-events-none" />
      <div className="relative z-20 w-full max-w-md p-8 bg-background/60 backdrop-blur rounded-2xl border">
        {children}
      </div>
    </div>
  );
}
