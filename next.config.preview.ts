import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  output: "export",
  distDir: "preview",
  images: { unoptimized: true },
};
export default nextConfig;
