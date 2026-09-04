import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  images: {
    imageSizes: [16, 32, 48, 64, 96, 128, 240, 256, 280, 384, 480],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  experimental: {
    optimizePackageImports: [
      "@animateicons/react",
      "lucide-react",
      "framer-motion",
    ],
  },
};

export default nextConfig;
