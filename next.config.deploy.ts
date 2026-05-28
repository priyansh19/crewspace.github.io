import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  output: "export",
  distDir: "deploy",
  basePath: "/crewspace.github.io",
  images: { unoptimized: true },
};
export default nextConfig;
