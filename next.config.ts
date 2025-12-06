import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const repoName = 'caltech-longevity-club';

const nextConfig: NextConfig = {
  output: 'export',
  reactStrictMode: true,
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ui.aceternity.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
      },
    ],
  },
};


export default nextConfig;
