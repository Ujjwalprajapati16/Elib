"use client";

import type { ReactNode } from "react";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { ThemeProvider } from "@/components/theme-provider"; 
import { Toaster } from "sonner";

export default function DashboardLayout({ children }: { children: ReactNode }) {       
  return (
    <html lang="en" suppressHydrationWarning> 
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider
            style={
              {
                "--sidebar-width": "calc(var(--spacing) * 72)",
                "--header-height": "calc(var(--spacing) * 12)",
              } as React.CSSProperties
            }
          >
            <AppSidebar variant="inset" />
            <SidebarInset>
              <SiteHeader />
              <div className="flex flex-1 flex-col">{children}</div>
            </SidebarInset>
          </SidebarProvider>

          <Toaster
            position="top-right"
            richColors
            closeButton
            duration={4000}
            toastOptions={{
              className:
                "backdrop-blur-lg bg-white/80 dark:bg-zinc-900/80 text-zinc-800 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-800 shadow-xl rounded-2xl",
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
