import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // 👈 replaces next export/* config options here */
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
