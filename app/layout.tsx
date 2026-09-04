import type { Metadata } from "next";
import { Unbounded, Albert_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { preload } from "react-dom";
import { content } from "@/config/content";
import DeferredMeTalk from "@/components/DeferredMeTalk";
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

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://www.repdaily.com");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: content.meta.title.default,
    template: content.meta.title.template,
  },
  description: content.meta.description,
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: content.meta.openGraph.title,
    description: content.meta.openGraph.description,
    url: siteUrl,
    siteName: content.meta.openGraph.siteName,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: content.meta.twitter.title,
    description: content.meta.twitter.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  preload(
    "/_next/image?url=%2Fassets%2Fscreens%2Fscreen-center.webp&w=480&q=75",
    {
      as: "image",
      fetchPriority: "high",
    },
  );

  return (
    <html lang="en" className={`${unbounded.variable} ${albertSans.variable}`}>
      <head>
        <link
          rel="preload"
          as="image"
          href="/_next/image?url=%2Fassets%2Fscreens%2Fscreen-center.webp&w=480&q=75"
          fetchPriority="high"
        />
      </head>
      <body className="font-sans antialiased text-[#151A00] bg-[#C9E800]">
        {children}
        <DeferredMeTalk />
        <Analytics />
      </body>
    </html>
  );
}
