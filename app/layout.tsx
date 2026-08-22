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

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://www.repdaily.com");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "RepDaily — Push-Ups. Done Daily.",
    template: "%s — RepDaily",
  },
  description:
    "AI-powered, camera-based push-up tracking tuned to your strength. No manual logs, just daily output.",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "RepDaily — Push-Ups. Done Daily.",
    description:
      "AI-powered, camera-based push-up tracking tuned to your strength.",
    url: siteUrl,
    siteName: "RepDaily",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RepDaily — Push-Ups. Done Daily.",
    description:
      "AI-powered, camera-based push-up tracking tuned to your strength.",
  },
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
