import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Quick Links",
  description: "Opens everytime the browser starts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={
          `${geistSans.variable}
          ${geistMono.variable}
          antialiased
          min-h-screen
          bg-neutral-950
          text-white
          flex
          items-center
          justify-center
          `}
      >
        <div className="w-full max-w-2xl mx-4 bg-neutral-900 border border-neutral-800 rounded-2xl shadow-x1 p-8">
          {children}
        </div>
      </body>
    </html>
  );
}
