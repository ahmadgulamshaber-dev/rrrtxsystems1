import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.worldvectorlogo.com',
      },
    ],
  },
  // Ensures compatibility with Netlify's image optimization if used
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
