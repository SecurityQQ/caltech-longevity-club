import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  basePath: "",
  assetPrefix: "",
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "ui.aceternity.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "assets.aceternity.com" },
    ],
  },
};


export default nextConfig;
