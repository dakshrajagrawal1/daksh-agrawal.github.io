import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/daksh-agrawal.github.io",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
