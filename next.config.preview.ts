import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  output: "export",
  distDir: "preview",
  basePath: "/crewspace.github.io",
  images: { unoptimized: true },
};
export default nextConfig;
