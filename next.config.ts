import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["@animateicons/react", "lucide-react"],
  },
};

export default nextConfig;
