import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/aura-calculator",
  assetPrefix: "/aura-calculator/",
  images: { unoptimized: true },
};

export default nextConfig;
