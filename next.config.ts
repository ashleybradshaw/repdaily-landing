import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
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
