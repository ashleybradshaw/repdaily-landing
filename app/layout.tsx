import type { Metadata } from "next";
import { Unbounded, Albert_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon.png", type: "image/png", sizes: "64x64" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "@id": "https://repdaily.app/#application",
      name: "RepDaily",
      applicationCategory: "HealthApplication",
      operatingSystem: "iOS, Android",
      description:
        "RepDaily is an AI-powered, camera-based push-up tracking app that automatically counts reps, tracks form, and builds daily consistency.",
      url: "https://repdaily.app",
      downloadUrl: "https://apps.apple.com/gb/app/repdaily/id6760964655",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      author: {
        "@id": "https://repdaily.app/#organization",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://repdaily.app/#organization",
      name: "RepDaily",
      url: "https://repdaily.app",
      logo: "https://repdaily.app/icon.png",
      sameAs: [
        "https://apps.apple.com/gb/app/repdaily/id6760964655",
        "https://play.google.com/store/apps/details?id=engineering.todo.repcam",
        "https://instagram.com/repdaily.app",
        "https://www.ashleybradshaw.co.uk/works/repdaily",
      ],
    },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <DeferredMeTalk />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
