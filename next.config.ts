import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: { bodySizeLimit: "5MB", allowedOrigins: ["*"] },
  },
};

export default nextConfig;
