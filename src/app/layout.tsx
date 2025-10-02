import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/theme-provider";
import ClientNavbar from "@/app/ClientNavbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ELib | Digital Library",
  description:
    "ELib is a modern digital library platform for discovering, reading, and managing books with ease.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ClientNavbar />
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
          {children}
          <Footer className="bg-background dark:bg-zinc-900 text-foreground dark:text-zinc-100" />
        </ThemeProvider>
      </body>
    </html>
  );
}
