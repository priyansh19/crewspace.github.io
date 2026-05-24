import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "dist",
  basePath: "/crewspace-website",
  assetPrefix: "/crewspace-website",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
