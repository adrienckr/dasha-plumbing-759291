import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@plumber-ai/modern-template"],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;