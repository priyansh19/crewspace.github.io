import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  output: "export",
  distDir: "deploy",
  images: { unoptimized: true },
};
export default nextConfig;
