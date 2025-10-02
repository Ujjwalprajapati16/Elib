"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });

export default function ClientNavbar() {
  const pathname = usePathname();

  if (pathname.startsWith("/dashboard")) {
    return null;
  }

  return <Navbar />;
}
