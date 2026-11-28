import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1", "10.40.6.65"],
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
