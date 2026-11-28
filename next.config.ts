import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    agentUpgrade: "security",
  },
  images: {
    qualities: [75, 95],
  },
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
