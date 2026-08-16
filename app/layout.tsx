import type { Metadata } from "next";
import { Unbounded, Albert_Sans } from "next/font/google";
import "./globals.css";

const unbounded = Unbounded({
  subsets: ["latin"],
  variable: "--font-unbounded",
  display: "swap",
});

const albertSans = Albert_Sans({
  subsets: ["latin"],
  variable: "--font-albert-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "RepDaily — Push-Ups. Done Daily.",
  description: "AI-powered, camera-based push-up tracking.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${unbounded.variable} ${albertSans.variable}`}>
      <body className="font-sans antialiased text-[#151A00] bg-[#C9E800]">
        {children}
      </body>
    </html>
  );
}
